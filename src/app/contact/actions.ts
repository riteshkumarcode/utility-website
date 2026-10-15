"use server";

import { Resend } from "resend";
import { enquirySchema } from "@/lib/validation";
import { siteConfig } from "@/content/site";

export interface ServerActionResponse {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

// Check first magic bytes of file buffer
function validateMagicBytes(buffer: Uint8Array): { valid: boolean; ext: string; mime: string } {
  if (buffer.length < 4) {
    return { valid: false, ext: "", mime: "" };
  }

  // PDF: %PDF- (0x25, 0x50, 0x44, 0x46)
  if (buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46) {
    return { valid: true, ext: "pdf", mime: "application/pdf" };
  }

  // JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { valid: true, ext: "jpg", mime: "image/jpeg" };
  }

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return { valid: true, ext: "png", mime: "image/png" };
  }

  // HEIC/HEIF: 4-8 bytes contain 'ftyp'
  const header = new TextDecoder().decode(buffer.slice(4, 12));
  if (header.includes("heic") || header.includes("mif1") || header.includes("ftyp")) {
    return { valid: true, ext: "heic", mime: "image/heic" };
  }

  return { valid: false, ext: "", mime: "" };
}

export async function submitEnquiry(formData: FormData): Promise<ServerActionResponse> {
  try {
    // 1. Extract values
    const services = formData.getAll("services") as string[];
    const rawData = {
      services,
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      postcode: formData.get("postcode") || undefined,
      contractEnds: formData.get("contractEnds") || undefined,
      message: formData.get("message") || undefined,
      consent: formData.get("consent") === "true" || formData.get("consent") === "on",
      companyWebsite: formData.get("companyWebsite")?.toString() || "",
      turnstileToken: formData.get("turnstileToken")?.toString() || undefined,
    };

    // 2. Silent bot honeypot drop
    if (rawData.companyWebsite && rawData.companyWebsite.trim() !== "") {
      console.warn("[Anti-Spam] Bot submission dropped via honeypot field");
      return { ok: true };
    }

    // 3. Validate form with Zod schema
    const validationResult = enquirySchema.safeParse(rawData);
    if (!validationResult.success) {
      return {
        ok: false,
        error: "Please correct the errors in the form.",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    const data = validationResult.data;

    // 4. Verify Turnstile token if secret key is present
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && data.turnstileToken) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(data.turnstileToken)}`,
        }
      );
      const verifyOutcome = await verifyRes.json();
      if (!verifyOutcome.success) {
        return {
          ok: false,
          error: "Spam verification failed. Please refresh the page and try again.",
        };
      }
    }

    // 5. File upload validation (Max 10MB + Magic bytes check)
    const file = formData.get("bill") as File | null;
    let fileAttachment: { filename: string; content: Buffer } | null = null;

    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        return {
          ok: false,
          error: "Bill file is too large. The maximum permitted size is 10 MB.",
        };
      }

      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      const magicCheck = validateMagicBytes(bytes);

      if (!magicCheck.valid) {
        return {
          ok: false,
          error:
            "Invalid file format. Please upload a genuine PDF, JPG, PNG, or HEIC document.",
        };
      }

      fileAttachment = {
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      };
    }

    // 6. Send emails via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const enquiryTo = process.env.ENQUIRY_TO || siteConfig.email;
    const enquiryFrom = process.env.ENQUIRY_FROM || `Veltro Enquiries <enquiries@${siteConfig.name.toLowerCase()}.co.uk>`;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // A. Email to the Client / Broker inbox
      const serviceList = data.services.join(", ");
      await resend.emails.send({
        from: enquiryFrom,
        to: enquiryTo,
        replyTo: data.email,
        subject: `New enquiry — ${serviceList} — ${data.businessName}`,
        html: `
          <h2>New Website Enquiry</h2>
          <table style="width:100%; max-width:600px; border-collapse:collapse; font-family:sans-serif;">
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Services</td><td style="padding:8px;">${serviceList}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Contact Name</td><td style="padding:8px;">${data.name}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Business Name</td><td style="padding:8px;">${data.businessName}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Postcode</td><td style="padding:8px;">${data.postcode || "Not provided"}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Contract Ends</td><td style="padding:8px;">${data.contractEnds || "Not provided"}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Message</td><td style="padding:8px;">${data.message || "None"}</td></tr>
            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px; font-weight:bold;">Bill Attached</td><td style="padding:8px;">${fileAttachment ? fileAttachment.filename : "No bill attached"}</td></tr>
          </table>
        `,
        attachments: fileAttachment ? [fileAttachment] : undefined,
      });

      // B. Confirmation receipt email to Customer
      await resend.emails.send({
        from: enquiryFrom,
        to: data.email,
        subject: `We've received your enquiry — ${siteConfig.name}`,
        html: `
          <div style="font-family:sans-serif; max-width:600px; line-height:1.6; color:#121512;">
            <h2>Thanks for contacting ${siteConfig.name}</h2>
            <p>Hi ${data.name.split(" ")[0]},</p>
            <p>Thanks for getting in touch about <strong>${serviceList}</strong> for <strong>${data.businessName}</strong>.</p>
            <p>A named specialist from our UK team will review your details and contact you within one working day with a clear market comparison.</p>
            <p>If you need immediate assistance or want to update any details, you can reach our office directly on <strong>${siteConfig.phone}</strong>.</p>
            <br />
            <p>Kind regards,<br /><strong>The ${siteConfig.name} Team</strong></p>
          </div>
        `,
      });
    } else {
      console.log("[DEV MODE] Enquiry received (Resend API key not configured):", {
        services: data.services,
        name: data.name,
        business: data.businessName,
        email: data.email,
        phone: data.phone,
        file: fileAttachment?.filename,
      });
    }

    return { ok: true };
  } catch (err: unknown) {
    console.error("Server action error submitting enquiry:", err);
    return {
      ok: false,
      error: `We were unable to process your enquiry. Please give us a call on ${siteConfig.phone} or email us directly at ${siteConfig.email}.`,
    };
  }
}
