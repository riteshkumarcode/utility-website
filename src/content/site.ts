export interface SiteConfig {
  name: string;
  legalName: string;
  companyNumber: string;
  vatNumber?: string;
  icoNumber?: string;
  phone: string;
  email: string;
  salesEmail: string;
  openingHours: string;
  openingHoursSchema: string;
  address: {
    street: string;
    town: string;
    county: string;
    postcode: string;
    country: string;
  };
  commissionStatement: string;
  redressScheme: string;
  navLinks: {
    label: string;
    href: string;
    key: "home" | "services" | "finance" | "digital" | "about" | "contact";
  }[];
}

export const siteConfig: SiteConfig = {
  name: "West Coast Services",
  legalName: "West Coast Services Ltd",
  companyNumber: "14892304",
  vatNumber: "GB 428 9102 44",
  icoNumber: "ZB589412",
  phone: "+44 7854 404164",
  email: "info@westcoastservices.co.uk",
  salesEmail: "sales@westcoastservices.co.uk",
  openingHours: "Mon–Fri, 08:30–17:30",
  openingHoursSchema: "Mo-Fr 08:30-17:30",
  address: {
    street: "71-75 Shelton Street",
    town: "Covent Garden",
    county: "London",
    postcode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  commissionStatement:
    "We are paid commission by energy suppliers and commercial lenders. We disclose it in writing before you sign.",
  redressScheme: "Energy Ombudsman Alternative Dispute Resolution (ADR) Scheme",
  navLinks: [
    { label: "Home", href: "/", key: "home" },
    { label: "Energy & utilities", href: "/services/utilities", key: "services" },
    { label: "Loans & card machines", href: "/services/finance", key: "finance" },
    { label: "Digital marketing", href: "/services/digital", key: "digital" },
    { label: "About", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
  ],
};
