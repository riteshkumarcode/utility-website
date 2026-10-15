export interface SiteConfig {
  name: string;
  legalName: string;
  companyNumber: string;
  vatNumber?: string;
  icoNumber?: string;
  phone: string;
  email: string;
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
    key: "home" | "services" | "digital" | "about" | "contact";
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Veltro",
  legalName: "[Registered company name] Ltd",
  companyNumber: "[00000000]",
  vatNumber: "[GB 000 0000 00]",
  icoNumber: "[ZB000000]",
  phone: "[0000 000 0000]",
  email: "[hello@yourdomain.co.uk]",
  openingHours: "Mon–Fri, 08:30–17:30",
  openingHoursSchema: "Mo-Fr 08:30-17:30",
  address: {
    street: "[Office Street]",
    town: "[Town]",
    county: "[County]",
    postcode: "[Postcode]",
    country: "United Kingdom",
  },
  commissionStatement:
    "We are paid commission by energy suppliers. We disclose it before you sign. [Client to confirm wording]",
  redressScheme: "[Energy Ombudsman / TPI Code of Practice]",
  navLinks: [
    { label: "Home", href: "/", key: "home" },
    { label: "Energy & utilities", href: "/services#utilities", key: "services" },
    { label: "Digital marketing", href: "/services#digital", key: "digital" },
    { label: "About", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
  ],
};
