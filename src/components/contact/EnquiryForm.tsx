"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormData } from "@/lib/validation";
import { submitEnquiry } from "@/app/contact/actions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Arrow";

const serviceOptions = [
  { label: "Electricity", slug: "business-electricity" },
  { label: "Gas", slug: "business-gas" },
  { label: "Water", slug: "business-water" },
  { label: "Waste", slug: "waste-management" },
  { label: "Website", slug: "website-development" },
  { label: "Social media", slug: "social-media-marketing" },
  { label: "SEO", slug: "seo" },
  { label: "Paid ads", slug: "paid-advertising" },
];

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Focus success heading when submitted
  useEffect(() => {
    if (submitted && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [submitted]);

  // Initialize form with react-hook-form and Zod
  const defaultServices = serviceParam ? [serviceParam] : ["business-electricity"];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      services: defaultServices,
      name: "",
      businessName: "",
      email: "",
      phone: "",
      postcode: "",
      contractEnds: "",
      message: "",
      consent: true,
      companyWebsite: "",
    },
  });

  const currentServices = useWatch({ control, name: "services" }) || [];

  const handleToggleService = (slug: string) => {
    const exists = currentServices.includes(slug);
    const updated = exists
      ? currentServices.filter((s) => s !== slug)
      : [...currentServices, slug];
    setValue("services", updated, { shouldValidate: true });
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    validateAndSetFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file?: File) => {
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File exceeds 10MB limit. Please upload a smaller PDF or image.");
      setSelectedFile(null);
      return;
    }

    setFileError(null);
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    data.services.forEach((s) => formData.append("services", s));
    formData.append("name", data.name);
    formData.append("businessName", data.businessName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.postcode) formData.append("postcode", data.postcode);
    if (data.contractEnds) formData.append("contractEnds", data.contractEnds);
    if (data.message) formData.append("message", data.message);
    formData.append("consent", "true");
    if (data.companyWebsite) formData.append("companyWebsite", data.companyWebsite);

    if (selectedFile) {
      formData.append("bill", selectedFile);
    }

    try {
      const result = await submitEnquiry(formData);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setServerError(result.error || "An error occurred submitting the form.");
      }
    } catch {
      setServerError(`Unable to connect to the server. Please call us directly on ${siteConfig.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-8 space-y-6">
        <div className="w-16 h-16 rounded-full bg-signal text-ink flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-ink m-0 focus:outline-none"
        >
          Thanks — that&apos;s with us.
        </h2>
        <p className="text-ink-2 text-base md:text-lg max-w-lg leading-relaxed m-0">
          A named specialist will review your details and contact you within one working day. If your enquiry is urgent, please call us directly on{" "}
          <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="font-bold text-ink underline">
            {siteConfig.phone}
          </a>.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            showArrow={false}
            onClick={() => {
              setSubmitted(false);
              setSelectedFile(null);
              reset();
            }}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {serverError && (
        <div
          role="alert"
          className="p-4 bg-[#2A1215] text-[#FF8A80] border border-[#5C2B2E] rounded-[4px] font-mono text-xs leading-relaxed"
        >
          {serverError}
        </div>
      )}

      {/* Service Chips */}
      <fieldset className="border-0 p-0 m-0 space-y-3">
        <legend className="font-mono text-xs uppercase tracking-[0.14em] text-muted p-0">
          What can we help with? <span className="text-ink-2 font-normal lowercase">— pick any</span>
        </legend>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {serviceOptions.map((opt) => {
            const isPicked = currentServices.includes(opt.slug);
            return (
              <button
                key={opt.slug}
                type="button"
                aria-pressed={isPicked}
                onClick={() => handleToggleService(opt.slug)}
                className={`inline-flex items-center justify-center rounded-full border px-4 py-2.5 font-semibold text-sm md:text-base min-h-[44px] transition-all cursor-pointer ${
                  isPicked
                    ? "bg-ink text-on-dark border-ink"
                    : "bg-transparent text-ink border-[#B9B9AE] hover:border-ink"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {errors.services && (
          <p role="alert" className="font-mono text-xs text-rust mt-1.5">
            {errors.services.message}
          </p>
        )}
      </fieldset>

      {/* Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="form-name" className="block text-sm font-semibold text-ink">
            Your name *
          </label>
          <input
            id="form-name"
            type="text"
            {...register("name")}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full bg-white border-[1.5px] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:outline-none focus:ring-2 focus:ring-signal/40 ${
              errors.name ? "border-rust focus:border-rust" : "border-[#B9B9AE] focus:border-ink"
            }`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="font-mono text-xs text-rust">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-business" className="block text-sm font-semibold text-ink">
            Business name *
          </label>
          <input
            id="form-business"
            type="text"
            {...register("businessName")}
            autoComplete="organization"
            aria-invalid={!!errors.businessName}
            aria-describedby={errors.businessName ? "business-error" : undefined}
            className={`w-full bg-white border-[1.5px] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:outline-none focus:ring-2 focus:ring-signal/40 ${
              errors.businessName ? "border-rust focus:border-rust" : "border-[#B9B9AE] focus:border-ink"
            }`}
          />
          {errors.businessName && (
            <p id="business-error" role="alert" className="font-mono text-xs text-rust">
              {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="form-email" className="block text-sm font-semibold text-ink">
            Email address *
          </label>
          <input
            id="form-email"
            type="email"
            {...register("email")}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full bg-white border-[1.5px] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:outline-none focus:ring-2 focus:ring-signal/40 ${
              errors.email ? "border-rust focus:border-rust" : "border-[#B9B9AE] focus:border-ink"
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="font-mono text-xs text-rust">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-phone" className="block text-sm font-semibold text-ink">
            Phone number *
          </label>
          <input
            id="form-phone"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            placeholder="e.g. 07... or 01..."
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full bg-white border-[1.5px] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:outline-none focus:ring-2 focus:ring-signal/40 ${
              errors.phone ? "border-rust focus:border-rust" : "border-[#B9B9AE] focus:border-ink"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="font-mono text-xs text-rust">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Postcode & Contract Ends */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="form-postcode" className="block text-sm font-semibold text-ink">
            Postcode <span className="font-normal text-muted">(Optional)</span>
          </label>
          <input
            id="form-postcode"
            type="text"
            {...register("postcode")}
            autoComplete="postal-code"
            placeholder="e.g. SW1A 1AA"
            aria-invalid={!!errors.postcode}
            aria-describedby={errors.postcode ? "postcode-error" : undefined}
            className="w-full bg-white border-[1.5px] border-[#B9B9AE] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/40 uppercase"
          />
          {errors.postcode && (
            <p id="postcode-error" role="alert" className="font-mono text-xs text-rust">
              {errors.postcode.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-contract-end" className="block text-sm font-semibold text-ink">
            Contract ends <span className="font-normal text-muted">(if known)</span>
          </label>
          <input
            id="form-contract-end"
            type="month"
            {...register("contractEnds")}
            className="w-full bg-white border-[1.5px] border-[#B9B9AE] rounded-[4px] px-4 py-3 min-h-[48px] text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/40"
          />
        </div>
      </div>

      {/* Bill File Uploader with Drag-and-Drop */}
      <div className="space-y-1.5">
        <label htmlFor="form-bill-input" className="block text-sm font-semibold text-ink">
          Attach a recent bill <span className="font-normal text-muted">— PDF or photo, optional (max 10MB)</span>
        </label>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFileDrop}
          className={`relative border-2 border-dashed rounded-[4px] p-6 text-center transition-colors ${
            isDragging
              ? "border-signal bg-signal/5"
              : selectedFile
              ? "border-ink bg-stone/30"
              : "border-[#B9B9AE] bg-white hover:border-ink"
          }`}
        >
          <input
            id="form-bill-input"
            type="file"
            accept=".pdf,image/jpeg,image/png,image/heic"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {selectedFile ? (
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-ink font-bold truncate">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="text-rust hover:underline font-bold z-10 cursor-pointer p-1"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="font-mono text-xs uppercase tracking-wider text-muted space-y-1">
              <div>Click or drag bill file here</div>
              <div className="text-[10px] text-muted/80">PDF, JPG, PNG or HEIC · Max 10MB</div>
            </div>
          )}
        </div>

        {fileError && (
          <p role="alert" className="font-mono text-xs text-rust">
            {fileError}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="form-message" className="block text-sm font-semibold text-ink">
          Anything else we should know? <span className="font-normal text-muted">(Optional)</span>
        </label>
        <textarea
          id="form-message"
          rows={4}
          {...register("message")}
          placeholder="e.g. Two electricity meters, gas renews in March, and we'd also like advice on a new website."
          className="w-full bg-white border-[1.5px] border-[#B9B9AE] rounded-[4px] p-4 text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/40 resize-y"
        />
        {errors.message && (
          <p role="alert" className="font-mono text-xs text-rust">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave empty</label>
        <input
          id="companyWebsite"
          type="text"
          tabIndex={-1}
          {...register("companyWebsite")}
          autoComplete="off"
        />
      </div>

      {/* Privacy Consent */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-start gap-3">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <input
                id="form-consent"
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="w-5 h-5 rounded-[2px] mt-0.5 accent-signal shrink-0 cursor-pointer"
              />
            )}
          />
          <label htmlFor="form-consent" className="text-sm text-ink-2 leading-snug cursor-pointer">
            I&apos;m happy for {siteConfig.name} to contact me regarding this enquiry. See our{" "}
            <Link href="/privacy" className="text-rust underline font-medium">
              privacy notice
            </Link>.
          </label>
        </div>
        {errors.consent && (
          <p role="alert" className="font-mono text-xs text-rust">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full group inline-flex items-center justify-between bg-ink text-on-dark hover:bg-signal hover:text-ink font-bold text-lg p-5 rounded-[4px] min-h-[56px] transition-colors cursor-pointer disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-ink"
        >
          <span>{submitting ? "Sending enquiry..." : "Send enquiry"}</span>
          <Arrow className="group-hover:translate-x-1.5" size={20} />
        </button>
      </div>
    </form>
  );
}
