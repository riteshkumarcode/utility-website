# Veltro Production Deployment & Operations Guide

This guide walks through deploying the Veltro website to production on Vercel, configuring email routing with Resend, bot protection with Cloudflare Turnstile, privacy-compliant Google Analytics 4, and UK compliance checks.

---

## 1. Environment Variables Configuration

Set these variables in your hosting provider's dashboard (e.g. Vercel Project Settings → Environment Variables):

| Variable | Required | Description | Example / Notes |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | **Yes** | Resend API key with sending permission | `re_123456789...` |
| `RESEND_FROM_EMAIL` | **Yes** | Verified sender email address | `Veltro Enquiries <quotes@veltro.co.uk>` |
| `RESEND_TO_EMAIL` | **Yes** | Destination email for new leads & bill uploads | `enquiries@veltro.co.uk` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Recommended | Cloudflare Turnstile public site key | `0x4AAAAAA...` |
| `TURNSTILE_SECRET_KEY` | Recommended | Cloudflare Turnstile secret key for server validation | `0x4AAAAAA...` |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` (Only loaded after cookie consent) |

> **Development Mode Fallback:**
> If `RESEND_API_KEY` is omitted in local development, the contact form automatically logs the parsed submission to the server console and returns a success response for rapid offline testing.
> If Turnstile keys are omitted in development, Turnstile verification is bypassed.

---

## 2. Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Node.js Version**: 20.x or 22.x
4. Add all environment variables listed in Section 1.
5. Click **Deploy**.

---

## 3. Resend & Domain DNS Records

To guarantee high inbox delivery (avoiding spam folders), configure DNS records on your domain registrar:

### 3.1. MX / SPF Record (TXT)
Add or update the TXT record for `veltro.co.uk`:
```text
v=spf1 include:amazonses.com ~all
```
*(Use the exact SPF value provided in your Resend domain settings).*

### 3.2. DKIM Records (CNAME)
In the Resend dashboard under **Domains** → `veltro.co.uk`, copy the 3 DKIM CNAME records and add them to your DNS provider:
- `resend._domainkey.veltro.co.uk` → `dkim.resend.com`
- *(and 2 additional selector records provided by Resend)*

### 3.3. DMARC Policy (TXT)
Add a TXT record for `_dmarc.veltro.co.uk`:
```text
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@veltro.co.uk; pct=100;
```

---

## 4. Cloudflare Turnstile Setup

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Turnstile**.
2. Click **Add Site**:
   - **Site name**: `Veltro Production`
   - **Domain**: `veltro.co.uk`, `www.veltro.co.uk`, and `localhost` (for testing).
   - **Widget type**: *Managed* (or *Non-interactive* for seamless UX).
3. Copy the **Site Key** to `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
4. Copy the **Secret Key** to `TURNSTILE_SECRET_KEY`.

---

## 5. Google Analytics 4 & UK GDPR / PECR Compliance

Veltro includes an in-house privacy-first analytics loader (`GoogleAnalytics.tsx`):
- If `NEXT_PUBLIC_GA_ID` is set, analytics scripts are **never loaded** until the user explicitly clicks **"Accept analytics"** on the cookie banner.
- If the user rejects optional cookies, the analytics script is completely suppressed.
- All analytics hits have `anonymize_ip: true` enabled by default.
- Users can review the full cookie table at `/cookies` and data protection rights at `/privacy`.

---

## 6. Pre-Launch Verification Checklist

Before announcing the site live:

- [ ] **Form Submission**: Submit an enquiry at `/contact` with and without an attached utility bill (`.pdf` or `.jpg`). Confirm the email arrives at `RESEND_TO_EMAIL` with the attachment.
- [ ] **Ofgem Commission Notice**: Verify the footer and service pages display transparent commission disclosures.
- [ ] **Phone & Click-to-call**: Test `tel:01onal...` phone number links on mobile and desktop.
- [ ] **Sitemap & Robots**: Confirm `https://veltro.co.uk/sitemap.xml` and `https://veltro.co.uk/robots.txt` load correctly.
- [ ] **OpenGraph Social Preview**: Share `https://veltro.co.uk` on Twitter/LinkedIn card validators to verify the dynamic preview image renders.
- [ ] **Accessibility**: Tab through the homepage using the `Tab` key to confirm the "Skip to main content" link appears and all interactive buttons show clear focus rings.
- [ ] **Style Guide**: Access `/style-guide` for a full overview of tokens, buttons, odometer meters, dials, and typography.
