import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactClient } from "./ContactClient";
import { getContactPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us & Free Bill Check | West Coast Services",
  description:
    "Send us a utility bill or request a marketing review. We reply within one working day. Plain UK advice with transparent commission disclosure.",
};

export default function ContactPage() {
  const contactSchema = getContactPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<div className="p-12 font-mono text-xs text-muted">Loading contact form...</div>}>
        <ContactClient />
      </Suspense>
    </>
  );
}
