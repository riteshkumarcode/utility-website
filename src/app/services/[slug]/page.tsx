import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  getService,
  getSameCategoryServices,
  getCrossCategoryServices,
} from "@/content/services";
import { ServiceDetailClient } from "./ServiceDetailClient";
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | West Coast Services",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const sameCategory = getSameCategoryServices(slug);
  const crossCategory = getCrossCategoryServices(slug);

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` },
  ]);
  const faqSchema = getFaqSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceDetailClient
        service={service}
        sameCategory={sameCategory}
        crossCategory={crossCategory}
      />
    </>
  );
}
