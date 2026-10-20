import { siteConfig } from "@/content/site";
import { Service } from "@/content/services";

const siteUrl = "https://westcoastservices.co.uk"; // Canonical production domain

// 1. Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.town,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
  };
}

// 2. LocalBusiness / ProfessionalService Schema (Home Page)
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHours: siteConfig.openingHoursSchema,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.town,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
  };
}

// 3. Service Detail Schema
export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.group === "utilities" ? "Utility Brokerage" : "Digital Marketing",
    description: service.intro,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };
}

// 4. BreadcrumbList Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

// 5. FAQPage Schema
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// 6. AboutPage Schema
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      description: "UK business energy and utility broker with in-house digital marketing team.",
    },
  };
}

// 7. ContactPage Schema
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };
}
