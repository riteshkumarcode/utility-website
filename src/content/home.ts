export interface HomeContent {
  hero: {
    label: string;
    h1: string;
    intro: string;
    proofPoints: string[];
    meterPanel: {
      siteName: string;
      readingStatus: string;
      digits: string;
      unit: string;
      bars: { name: string; status: string; percent: number; color: "signal" | "muted" }[];
      photoBrief: string;
      photoSrc?: string;
    };
  };
  ticker: string[];
  serviceIndex: {
    h2: string;
    intro: string;
    utilitiesHeading: string;
    digitalHeading: string;
  };
  calculator: {
    label: string;
    h2: string;
    intro: string;
    savingRate: number; // default 0.20 (20%)
    disclaimer: string;
    types: string[];
  };
  process: {
    label: string;
    h2: string;
    steps: { num: string; title: string; desc: string }[];
  };
  promises: {
    label: string;
    h2: string;
    photoBrief: string;
    items: { num: string; title: string; desc: string }[];
  };
  testimonial?: {
    photoBrief: string;
    quote: string;
    name: string;
    role: string;
    business: string;
    town: string;
  };
  ctaBand: {
    headline: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    label: "UK business utilities / Digital marketing",
    h1: "We sort out the bills you hate opening — and the marketing you never get round to.",
    intro:
      "Veltro compares business electricity, gas, water and waste contracts across UK suppliers and handles the switch for you. If you want it, our in-house team also builds your website and runs your social media and ads.",
    proofPoints: [
      "Free to use",
      "Commission shown before you sign",
      "Reminder before every renewal",
    ],
    meterPanel: {
      siteName: "Meter 01 · Main site",
      readingStatus: "Reading",
      digits: "048",
      unit: "kWh",
      bars: [
        { name: "Electricity", status: "Switched", percent: 100, color: "signal" },
        { name: "Gas", status: "Switched", percent: 100, color: "signal" },
        { name: "Water", status: "Quoting", percent: 62, color: "muted" },
        { name: "Waste", status: "Audit", percent: 30, color: "muted" },
      ],
      photoBrief: "commercial electricity meter in meter cupboard on client site",
      photoSrc: "/images/services/business-electricity.jpg",
    },
  },
  ticker: [
    "Electricity",
    "Gas",
    "Water",
    "Waste",
    "Websites",
    "Social media",
    "SEO",
    "Paid ads",
    "Multi-site estates",
    "Renewals tracked",
  ],
  serviceIndex: {
    h2: "Two jobs. Done properly.",
    intro:
      "Use us for one or both. Most clients start with a bill check, then ask about marketing once they've seen how we work.",
    utilitiesHeading: "A — Energy & utilities",
    digitalHeading: "B — Digital marketing",
  },
  calculator: {
    label: "Rough savings estimate",
    h2: "How much are you overpaying?",
    intro:
      "Pick a utility and slide to roughly what you pay each month. For a real figure we need a bill — this just gives you a feel for it.",
    savingRate: 0.2, // 20% reduction assumption
    disclaimer:
      "Illustration only, assuming a 20% reduction. [Client to confirm the figure they're happy to publish.] Real savings depend on usage, meter type, contract end date and market prices on the day.",
    types: ["Electricity", "Gas", "Water", "Waste"],
  },
  process: {
    label: "What a switch actually involves",
    h2: "Less work for you than reading this page.",
    steps: [
      {
        num: "01",
        title: "Send us a bill",
        desc: "A photo of your latest bill is fine. You'll sign a Letter of Authority so suppliers can talk to us about your account.",
      },
      {
        num: "02",
        title: "We go to market",
        desc: "We ask the suppliers on our panel to quote for your exact meters, usage and start date.",
      },
      {
        num: "03",
        title: "You choose",
        desc: "One page, side by side: unit rate, standing charge, contract length — and what we earn on each.",
      },
      {
        num: "04",
        title: "We do the switch",
        desc: "We deal with both suppliers. Your supply doesn't go off, and your renewal date goes in our diary.",
      },
    ],
  },
  promises: {
    label: "Plain dealing",
    h2: "Things you can hold us to.",
    photoBrief: "the team in the office",
    items: [
      {
        num: "01",
        title: "You'll have one named person.",
        desc: "Not a ticket number. The same account manager picks up when you call, from your first quote to your third renewal.",
      },
      {
        num: "02",
        title: "We tell you what we earn.",
        desc: "Suppliers pay us commission. You'll see the amount on every quote before you sign anything.",
      },
      {
        num: "03",
        title: "We won't let you roll over.",
        desc: "Out-of-contract rates are where businesses lose the most. We get in touch well before your end date.",
      },
      {
        num: "04",
        title: "Marketing is optional.",
        desc: "We'll never make a better energy price depend on buying a website. They're separate services.",
      },
    ],
  },
  testimonial: {
    photoBrief: "client at their business",
    quote:
      "[Real client quote goes here — ideally something specific, like what changed on their bill and how the switch went. Specific beats glowing.]",
    name: "[Client Name]",
    role: "[Owner / Manager]",
    business: "[Business name]",
    town: "[Town]",
  },
  ctaBand: {
    headline: "Got a bill to hand? That's all we need to start.",
    buttonText: "Send it over",
    buttonHref: "/contact",
  },
};
