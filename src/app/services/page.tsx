import type { Metadata } from "next";
import { ServicesDirectoryClient } from "./ServicesDirectoryClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "All Services — Utilities & Digital Marketing | Veltro",
  description:
    "Four services that cut what your UK business spends on electricity, gas, water and waste. Four that grow what it earns with web design, SEO, social media and ads.",
};

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServicesDirectoryClient />
    </>
  );
}
