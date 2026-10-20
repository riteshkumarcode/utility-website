export type Group = "utilities" | "digital";

export interface Service {
  slug: string;
  num: string;
  group: Group;
  name: string;
  shortName: string;
  cardLine: string;
  h1: string;
  intro: string;
  cta: string;
  ctaLine: string;
  photo: { src?: string; alt: string; brief: string };
  facts: { label: string; value: string }[];
  includedIntro: string;
  included: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  table: {
    title: string;
    headers: [string, string, string];
    rows: [string, string, string][];
    note?: string;
  };
  sectors: string[];
  needs: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string };
}

export const services: Service[] = [
  // 01. Business Electricity
  {
    slug: "business-electricity",
    num: "01",
    group: "utilities",
    name: "Business electricity",
    shortName: "business electricity",
    cardLine: "Fixed, flexible and renewable contracts for single sites and multi-site estates.",
    h1: "Business electricity contracts without the rollover traps.",
    intro:
      "We compare business electricity rates across UK suppliers, show you the commission on every quote, and handle the whole switch so your supply never interrupts.",
    cta: "Get an electricity quote",
    ctaLine: "Got an electricity bill to hand? Send it over for a free check.",
    photo: {
      src: "/images/services/business-electricity.jpg",
      alt: "Commercial electricity meter in meter cupboard",
      brief: "commercial electricity meter in meter cupboard on client site",
    },
    facts: [
      { label: "Contract lengths", value: "1 to 5 years" },
      { label: "Notice period", value: "Tracked for you" },
      { label: "Meter types", value: "Profile 03–08 & Half-hourly" },
      { label: "Green options", value: "100% REGO-backed" },
    ],
    includedIntro: "What's covered in every electricity review:",
    included: [
      {
        title: "Whole-of-market quotes",
        body: "Pricing requested from independent and Big Six UK energy suppliers for your specific consumption profile.",
      },
      {
        title: "Full bill audit",
        body: "We check your standing charges, capacity charges (kVA) and climate change levy (CCL) exemptions.",
      },
      {
        title: "Transparent commission",
        body: "Suppliers pay us a fee built into your unit rate. You see the exact amount in writing before signing.",
      },
      {
        title: "Switch management",
        body: "We deal with both outgoing and incoming suppliers, manage objections and register meter reads.",
      },
      {
        title: "Multi-site alignment",
        body: "Bring multiple meters and properties onto single co-terminus end dates to eliminate paperwork.",
      },
      {
        title: "Renewal reminder service",
        body: "We contact you 120 days before your contract expires so you never drop onto punitive out-of-contract rates.",
      },
    ],
    stepsTitle: "How an electricity switch works",
    steps: [
      {
        title: "Send us a recent bill",
        body: "We grab your MPAN number, current tariff, meter profile and annual kWh consumption from the bill.",
      },
      {
        title: "Sign a Letter of Authority",
        body: "This gives us permission to obtain usage data and request live prices from suppliers on your behalf.",
      },
      {
        title: "Review your options",
        body: "Compare unit rates, standing charges, green credentials and our commission side by side on one page.",
      },
      {
        title: "We lock the rate & switch",
        body: "We handle supplier notices and meter transfers. Your electricity never turns off.",
      },
    ],
    table: {
      title: "Typical Business Electricity Contract Types",
      headers: ["Contract Type", "Best For", "Key Advantage"],
      rows: [
        ["Fixed Rate", "Budget certainty (1–3 years)", "Protects against wholesale market spikes"],
        ["Flexible / Pass-Through", "Large users (>100k kWh/yr)", "Pay wholesale costs; benefit when market falls"],
        ["100% Renewable (REGO)", "ESG reporting & green credentials", "Guaranteed UK solar and wind generation"],
      ],
      note: "Rates depend on regional distribution network operator (DNO) zones and credit checks.",
    },
    sectors: [
      "Retail & shops",
      "Restaurants & cafés",
      "Offices",
      "Warehouses",
      "Care homes",
      "Workshops & light industrial",
      "Multi-site groups",
      "Hotels",
    ],
    needs: [
      "A copy of your latest electricity bill showing your MPAN",
      "Estimated annual kWh usage (or permission to check)",
      "Current supplier and contract end date",
      "Signed Letter of Authority (takes 30 seconds online)",
    ],
    faqs: [
      {
        q: "Will my electricity supply be cut off during the switch?",
        a: "No. The switch is purely administrative across the national grid infrastructure. The wires and meter stay exactly the same.",
      },
      {
        q: "How does West Coast Services get paid?",
        a: "Suppliers pay us an introducer commission built into the unit rate. Under Ofgem regulations, we disclose the exact commission figure in pounds and pence before you sign.",
      },
      {
        q: "What is an MPAN and where do I find it?",
        a: "Your Meter Point Administration Number (MPAN) is a 21-digit number printed in a grid on your electricity bill, usually starting with an 'S'.",
      },
      {
        q: "What happens if my current contract has already expired?",
        a: "You will be on 'out-of-contract' or 'deemed' rates, which are often 50–100% higher. We can negotiate an immediate new contract with no exit penalty.",
      },
    ],
    seo: {
      title: "Business Electricity Contracts for UK Firms | West Coast Services",
      description:
        "Compare UK business electricity rates across trusted suppliers. Clear commission disclosure, bill auditing and complete switch management.",
    },
  },

  // 02. Business Gas
  {
    slug: "business-gas",
    num: "02",
    group: "utilities",
    name: "Business gas",
    shortName: "business gas",
    cardLine: "Fixed-price business gas and dual-fuel deals for kitchens, heating and production.",
    h1: "Business gas contracts with transparent supplier pricing.",
    intro:
      "Whether you run a commercial kitchen, heat a school or power production kilns, we negotiate lower commercial gas rates and handle the switch without downtime.",
    cta: "Get a gas quote",
    ctaLine: "Cut what you spend on gas. Send your latest bill for an immediate market check.",
    photo: {
      src: "/images/services/business-gas.jpg",
      alt: "Commercial gas meter and pipework",
      brief: "commercial gas installation and meter in plant room or kitchen",
    },
    facts: [
      { label: "Contract lengths", value: "1, 2, 3 or 4 years" },
      { label: "Identifier", value: "MPRN (Meter Point Ref)" },
      { label: "Disclose fees", value: "Always before signing" },
      { label: "Dual fuel", value: "Save by aligning with power" },
    ],
    includedIntro: "What our business gas service includes:",
    included: [
      {
        title: "Wholesale gas benchmarking",
        body: "Quotes compared across the UK commercial gas market for your exact annual consumption volume.",
      },
      {
        title: "Standing charge analysis",
        body: "We negotiate lower daily standing charges, crucial for seasonal businesses and hospitality.",
      },
      {
        title: "Climate Change Levy review",
        body: "Verification that you are paying the correct commercial CCL rate and receiving any eligible reliefs.",
      },
      {
        title: "End-to-end switch handling",
        body: "We manage termination letters, registrations, and meter verification with Xoserve.",
      },
      {
        title: "AMR & Smart meter upgrades",
        body: "Arranging automated meter readings so you only pay for actual gas consumed, not estimates.",
      },
      {
        title: "Proactive renewal alerts",
        body: "Timely alerts well before renewal windows close so you avoid rollover rate spikes.",
      },
    ],
    stepsTitle: "How switching business gas works",
    steps: [
      {
        title: "Share your gas bill",
        body: "We pull your MPRN, meter serial number and historical cubic meter / kWh usage.",
      },
      {
        title: "Letter of Authority",
        body: "Authorise us to retrieve contract end dates and query supplier databases.",
      },
      {
        title: "Side-by-side comparison",
        body: "Review fixed-price quotes from vetted UK gas suppliers showing standing charge and unit rate.",
      },
      {
        title: "Contract agreed & switched",
        body: "Your new rate is locked in. We handle all paperwork with your previous supplier.",
      },
    ],
    table: {
      title: "Commercial Gas Contract Comparison",
      headers: ["Term Length", "Pros", "Typical Profile"],
      rows: [
        ["12-Month Fixed", "Flexibility to re-test the market sooner", "Offices and small retail units"],
        ["24–36 Month Fixed", "Longer protection from wholesale volatility", "Bakeries, restaurants, laundries"],
        ["Dual-Fuel Combined", "Single supplier management for gas + electricity", "Hotels and care facilities"],
      ],
      note: "Daily standing charge and unit rate in pence per kWh.",
    },
    sectors: [
      "Commercial kitchens & bakeries",
      "Hotels & B&Bs",
      "Care homes & healthcare",
      "Laundries & dry cleaners",
      "Schools & nurseries",
      "Manufacturing & kilns",
      "Offices with central heating",
      "Gyms & leisure centres",
    ],
    needs: [
      "Recent commercial gas bill showing MPRN",
      "Current gas meter read",
      "Approximate annual gas volume in kWh",
      "Signed Letter of Authority",
    ],
    faqs: [
      {
        q: "What is an MPRN number?",
        a: "Your Meter Point Reference Number (MPRN) is a 6 to 10 digit number that identifies your gas supply point on the national gas network.",
      },
      {
        q: "Can I switch gas if I am currently in a contract?",
        a: "You can agree a new forward contract up to 12 months before your current contract ends to lock in a low rate from your start date.",
      },
      {
        q: "Do you supply carbon-neutral gas?",
        a: "Yes, many panel suppliers offer biomethane or carbon-offsetting options for businesses tracking greenhouse gas reductions.",
      },
      {
        q: "What happens if my meter has been estimated?",
        a: "We help you submit an accurate read and request an adjusted reconciliation statement before initiating the switch.",
      },
    ],
    seo: {
      title: "Business Gas Contracts & Comparison | West Coast Services UK",
      description:
        "Commercial gas comparison for UK businesses. Transparent quotes, fixed tariffs, and switch handling with zero supply disruption.",
    },
  },

  // 03. Business Water
  {
    slug: "business-water",
    num: "03",
    group: "utilities",
    name: "Business water",
    shortName: "business water",
    cardLine: "Change retailer in England and Scotland, with a full audit of your water charges.",
    h1: "Business water switching and billing audits across the UK.",
    intro:
      "Since deregulation in England and Scotland, businesses can choose their water retailer. We audit your wastewater and clean water bills for overcharges and negotiate cheaper retail tariffs.",
    cta: "Audit my water bill",
    ctaLine: "Most firms have never checked their water charges. Send a bill for a free audit.",
    photo: {
      src: "/images/services/business-water.jpg",
      alt: "Commercial water meter and pipe installation",
      brief: "commercial water meter, valves, or hospitality laundry setup",
    },
    facts: [
      { label: "Market status", value: "Deregulated (Eng & Scot)" },
      { label: "Audit scope", value: "Clean, waste & drainage" },
      { label: "Typical savings", value: "Tariff + leak detection" },
      { label: "Switch disruption", value: "None — same pipes" },
    ],
    includedIntro: "What our business water service delivers:",
    included: [
      {
        title: "Retailer comparison",
        body: "Compare tariffs across licensed UK water retailers to secure competitive retail margins.",
      },
      {
        title: "Surface water drainage audit",
        body: "Check whether you are paying for surface water or highway drainage that drains to private soakaways.",
      },
      {
        title: "Return-to-sewer allowance",
        body: "Apply for discounts if a large percentage of clean water is used in products or evaporated (e.g. brewing, catering).",
      },
      {
        title: "Consolidated billing",
        body: "Combine multi-site meters across regions into one simple monthly water invoice.",
      },
      {
        title: "Historic billing refunds",
        body: "Claim back overcharges from incorrect rateable values or wrong meter sizes going back up to six years.",
      },
      {
        title: "Smart water monitoring",
        body: "Data logging to pinpoint concealed leaks and continuous flow before you receive a surprise bill.",
      },
    ],
    stepsTitle: "Our 4-step business water review",
    steps: [
      {
        title: "Send a water invoice",
        body: "We examine wholesale charges, retail margins, drainage allowances and meter reference numbers.",
      },
      {
        title: "Billing analysis & leak check",
        body: "We calculate expected usage against your floor area and sector benchmarks.",
      },
      {
        title: "Retailer tender",
        body: "We tender your supply to competitive retailers who offer better service and discounts.",
      },
      {
        title: "Switch & claim refunds",
        body: "We handle the retailer transfer and pursue any historic refund credits directly.",
      },
    ],
    table: {
      title: "Commercial Water Charges Explained",
      headers: ["Charge Component", "What It Covers", "How We Optimise It"],
      rows: [
        ["Wholesale Water", "Volume of clean water used (per m³)", "Smart metering & leak management"],
        ["Wastewater / Sewerage", "Used water returned to sewer network", "Return-to-sewer allowance claims"],
        ["Surface Water Drainage", "Rainwater runoff based on site surface area", "Verify site drainage maps with wholesaler"],
      ],
      note: "Wholesale water pipes remain maintained by your regional wholesaler (e.g. Thames Water, Severn Trent).",
    },
    sectors: [
      "Car washes & valeting",
      "Laundrettes & dry cleaners",
      "Breweries & beverage makers",
      "Commercial kitchens & food prep",
      "Hotels & gyms",
      "Care homes",
      "Large industrial sites",
      "Schools & universities",
    ],
    needs: [
      "Latest water bill showing SPID (Supply Point ID)",
      "Property floor area / drainage details (if disputing surface drainage)",
      "Signed Letter of Authority",
      "Recent meter read",
    ],
    faqs: [
      {
        q: "Can businesses in Wales switch water retailers?",
        a: "In Wales, only businesses consuming over 50 megalitres per year can switch. Businesses in England and Scotland can switch regardless of size.",
      },
      {
        q: "Who fixes leaks or pipe problems if I switch retailer?",
        a: "Your regional wholesaler (who owns the physical pipe network) still handles emergency repairs and water pressure. Your chosen retailer manages billing and customer service.",
      },
      {
        q: "What is a SPID?",
        a: "A Supply Point Identification (SPID) is a unique 10 or 12 digit code for your clean water and wastewater services.",
      },
      {
        q: "Can we claim historic overcharges?",
        a: "Yes. If your surface drainage band was calculated incorrectly, wholesalers can issue rebates backdated up to six years.",
      },
    ],
    seo: {
      title: "Business Water Retailer Comparison & Bill Audits | West Coast Services",
      description:
        "Switch commercial water retailers in England and Scotland. Free water bill audits, drainage charge checks and leak mitigation.",
    },
  },

  // 04. Waste Management
  {
    slug: "waste-management",
    num: "04",
    group: "utilities",
    name: "Waste management",
    shortName: "waste management",
    cardLine: "General, recycling, food and glass collections — set up for the new recycling rules.",
    h1: "Commercial waste and recycling contracts without hidden bin rental fees.",
    intro:
      "We arrange reliable general waste, dry mixed recycling, food and glass collections tailored to your schedule and compliant with UK Simpler Recycling legislation.",
    cta: "Compare waste prices",
    ctaLine: "Paying too much for bin lifts or excess weight charges? Send your waste invoice.",
    photo: {
      src: "/images/services/waste-management.svg",
      alt: "Commercial wheelie bins on collection day",
      brief: "commercial wheelie bins and recycling containers on clean business premises",
    },
    facts: [
      { label: "Waste streams", value: "General, DMR, Food, Glass" },
      { label: "Compliance", value: "Duty of Care certificate" },
      { label: "New law", value: "Simpler Recycling ready" },
      { label: "Collections", value: "Daily, weekly or scheduled" },
    ],
    includedIntro: "What's included with West Coast Services waste management:",
    included: [
      {
        title: "Independent carrier comparison",
        body: "We tender your routes to licensed local and national waste collectors to avoid monopoly pricing.",
      },
      {
        title: "All waste streams handled",
        body: "General waste, dry mixed recycling (DMR), separated food waste, glass bottles and confidential paper.",
      },
      {
        title: "Duty of Care documentation",
        body: "Annual Waste Transfer Notes provided automatically so your business stays 100% compliant with environmental law.",
      },
      {
        title: "Simpler Recycling preparation",
        body: "Setting up separate food and dry recycling streams ahead of mandatory UK business collection rules.",
      },
      {
        title: "Transparent lift rates",
        body: "No hidden environmental surcharges, unexpected bin rental price hikes or deceptive excess weight fees.",
      },
      {
        title: "Right-sizing bin audit",
        body: "We evaluate bin capacities (240L, 660L, 1100L) and collection frequencies so you never pay for empty air.",
      },
    ],
    stepsTitle: "How to set up commercial waste",
    steps: [
      {
        title: "Tell us what waste you produce",
        body: "Number of bins, current collection days and types of waste (food, cardboard, general).",
      },
      {
        title: "We quote licensed local routes",
        body: "We obtain lift rates from carriers already running routes on your street.",
      },
      {
        title: "Deliver bins & issue transfer notes",
        body: "New bins delivered to site; Duty of Care certificates issued for legal compliance.",
      },
      {
        title: "Collections start smoothly",
        body: "Scheduled pickups start, with one point of contact at West Coast Services if a collection is ever delayed.",
      },
    ],
    table: {
      title: "Commercial Wheelie Bin Size Guide",
      headers: ["Bin Capacity", "Footprint / Volume", "Ideal Business Type"],
      rows: [
        ["240 Litre", "Holds ~3–4 standard bags", "Small shops, offices, cafés (glass / food)"],
        ["660 Litre", "Holds ~10–12 bags with 4 wheels", "Pubs, mid-sized restaurants, workshops"],
        ["1100 Litre", "Holds ~18–20 bags (largest standard)", "Warehouses, supermarkets, hotels, large venues"],
      ],
      note: "Specialist balers, compactors, and skip services available upon request.",
    },
    sectors: [
      "Cafés & coffee shops",
      "Pubs & restaurants",
      "Offices & agencies",
      "Retail & shopping parades",
      "Garages & light workshops",
      "Care homes",
      "Hotels & events venues",
      "Multi-site retail chains",
    ],
    needs: [
      "Current waste invoice or description of current bins",
      "Site access details (e.g. rear service lane, gates)",
      "Types of waste generated (food, cardboard, general)",
      "Current contract cancellation date",
    ],
    faqs: [
      {
        q: "What is a Duty of Care Waste Transfer Note?",
        a: "Under the UK Environmental Protection Act, businesses must prove that their waste is collected by a licensed carrier. We provide your legal transfer note annually.",
      },
      {
        q: "What are the new UK Simpler Recycling rules?",
        a: "From 2025/2026, UK businesses with 10+ employees must separate food waste and dry recyclables from general waste before collection.",
      },
      {
        q: "Can I be charged for overweight bins?",
        a: "Yes, carriers can charge excess weight fees if bins exceed safe lift limits. We ensure your bins are right-sized for your material density.",
      },
      {
        q: "How quickly can new bins be delivered?",
        a: "Bins can typically be delivered to site within 3 to 5 working days from contract agreement.",
      },
    ],
    seo: {
      title: "Commercial Waste & Recycling Collections UK | West Coast Services",
      description:
        "Affordable business waste collection and recycling across the UK. Duty of Care compliance, transparent lift fees, and Simpler Recycling readiness.",
    },
  },

  // 05. Website Development
  {
    slug: "website-development",
    num: "05",
    group: "digital",
    name: "Website development",
    shortName: "website development",
    cardLine: "Brochure sites and online shops built to turn visitors into enquiries.",
    h1: "Fast, custom websites designed to convert visitors into phone calls and enquiries.",
    intro:
      "We design and build bespoke business websites for UK companies. No bloated themes or slow page builders — just clean, fast pages that look brilliant on phones and get you real customers.",
    cta: "Discuss a website project",
    ctaLine: "Ready for a website that actually brings in enquiries? Let's talk.",
    photo: {
      src: "/images/services/website-development.svg",
      alt: "Web designer building a modern website on a laptop",
      brief: "designer reviewing custom site layout on laptop with mobile preview",
    },
    facts: [
      { label: "Turnaround", value: "3 to 6 weeks" },
      { label: "Mobile speed", value: "95+ Lighthouse target" },
      { label: "Ownership", value: "100% owned by you" },
      { label: "Hosting", value: "Ultra-fast UK edge servers" },
    ],
    includedIntro: "What every West Coast Services website project includes:",
    included: [
      {
        title: "Bespoke design, no templates",
        body: "Tailored to your business personality, colours and photography — no generic templates.",
      },
      {
        title: "Mobile-first & ultra fast",
        body: "Over 70% of local UK searches happen on mobile. We design for thumbs and fast 4G loading.",
      },
      {
        title: "Copywriting that sells",
        body: "We write plain-spoken, persuasive UK copy that highlights your strengths and removes customer friction.",
      },
      {
        title: "Conversion-focused forms",
        body: "Smart quote forms, click-to-call buttons, file uploaders and CRM integrations that deliver leads immediately.",
      },
      {
        title: "Foundational local SEO",
        body: "Schema markup, meta descriptions, page speed tuning and Google Business Profile alignment.",
      },
      {
        title: "Full code & asset ownership",
        body: "You own your domain, code and content. No vendor lock-in or proprietary platform traps.",
      },
    ],
    stepsTitle: "Our website build process",
    steps: [
      {
        title: "Discovery & wireframe",
        body: "We map out your pages, user journeys, key services and enquiry forms.",
      },
      {
        title: "Design & copy approval",
        body: "Review visual design concepts and draft copy before a single line of code is written.",
      },
      {
        title: "Modern development",
        body: "Built with high-performance Next.js or clean HTML/CSS with accessibility and SEO baked in.",
      },
      {
        title: "Launch & analytics tracking",
        body: "Domain switched, GDPR analytics setup, and Google Search Console indexing triggered.",
      },
    ],
    table: {
      title: "Website Packages",
      headers: ["Tier", "Best For", "Deliverables"],
      rows: [
        ["Brochure Website", "Local service businesses, trades, consultancies", "5–8 bespoke pages, enquiry forms, local SEO"],
        ["Growth Website", "Multi-service firms, high-traffic SMEs", "10–20 pages, calculator / bill uploader, rich schema"],
        ["E-Commerce / Custom", "Online ordering, booking systems, trade accounts", "Payment processing, customer portals, custom database"],
      ],
      note: "All sites include SSL security, automated backups, and 30 days post-launch support.",
    },
    sectors: [
      "Commercial contractors & trades",
      "Accountants & professional services",
      "Local service businesses",
      "Hospitality & restaurants",
      "Care providers & medical clinics",
      "Specialist manufacturers",
      "Transport & logistics",
      "E-commerce stores",
    ],
    needs: [
      "Brand logo (or vector graphics)",
      "High-res photos of your team, work, or premises",
      "List of core services and target service locations",
      "Domain registrar login details (or we can register one for you)",
    ],
    faqs: [
      {
        q: "Do I own my website when it is finished?",
        a: "Yes. Unlike agencies that hold clients hostage on proprietary systems, you own 100% of the code, domain and content.",
      },
      {
        q: "Can I update the content myself?",
        a: "Yes. We configure user-friendly CMS editors or simple structured content files so you can change phone numbers, team members or services easily.",
      },
      {
        q: "How long does a website take to build?",
        a: "A typical brochure website takes between 3 and 5 weeks from initial kickoff to live launch.",
      },
      {
        q: "Can you help write the text for the site?",
        a: "Yes. Professional copywriting in plain UK English is included in all our website projects.",
      },
    ],
    seo: {
      title: "Business Website Development | Conversion-Focused Web Design | West Coast Services",
      description:
        "Custom websites for UK businesses built to convert visitors into enquiries. Fast loading, mobile-first design, clean code and full ownership.",
    },
  },

  // 06. Social Media Marketing
  {
    slug: "social-media-marketing",
    num: "06",
    group: "digital",
    name: "Social media marketing",
    shortName: "social media",
    cardLine: "Monthly content, shoots, posting and replies across the platforms that matter.",
    h1: "Consistent, organic social media management that builds local trust.",
    intro:
      "We handle your company's social channels from planning and on-site photography to caption writing, scheduling, and community replies. Professional social media without the time drain.",
    cta: "Explore social packages",
    ctaLine: "Tired of neglected social channels? Let our in-house team take it off your hands.",
    photo: {
      src: "/images/services/social-media-marketing.svg",
      alt: "Content creator shooting behind the scenes photography",
      brief: "photographer capturing behind-the-scenes content at a client workshop or kitchen",
    },
    facts: [
      { label: "Platforms", value: "LinkedIn, Instagram, Facebook, Meta" },
      { label: "Content type", value: "Original photo, video & graphics" },
      { label: "Management", value: "Posting, stories & engagement" },
      { label: "Reporting", value: "Monthly transparent metrics" },
    ],
    includedIntro: "What our social media management covers:",
    included: [
      {
        title: "On-site content shoots",
        body: "We visit your premises to capture real photography and video clips of your team, products and jobs.",
      },
      {
        title: "Content calendar & approval",
        body: "A monthly visual grid planned in advance so you can review and approve every post before it goes live.",
      },
      {
        title: "Bespoke graphics & carousels",
        body: "Branded visuals that communicate customer case studies, service tips and testimonials.",
      },
      {
        title: "Active comment & DM replies",
        body: "We monitor messages and customer questions, routing warm leads directly to your sales team.",
      },
      {
        title: "Platform-specific strategies",
        body: "Professional B2B thought leadership on LinkedIn; visual engagement and reels on Instagram and Facebook.",
      },
      {
        title: "Monthly performance review",
        body: "No vanity metrics. We measure enquiry clicks, reach, follower quality and real engagement.",
      },
    ],
    stepsTitle: "How our social media service runs",
    steps: [
      {
        title: "Brand onboarding & tone session",
        body: "We learn your business language, audience, key services and competitor landscape.",
      },
      {
        title: "Content capture session",
        body: "Our creator visits your premises to shoot video reels, photos and behind-the-scenes assets.",
      },
      {
        title: "Monthly calendar delivery",
        body: "You receive a preview of captions, graphics and hashtags to approve or request tweaks.",
      },
      {
        title: "Publishing, engagement & reporting",
        body: "Posts are scheduled at peak times. We monitor comments and send you monthly lead reports.",
      },
    ],
    table: {
      title: "Social Media Packages",
      headers: ["Tier", "Post Frequency", "Included Features"],
      rows: [
        ["Foundation", "2 posts / week", "Graphics, captions, scheduled posting on 2 platforms"],
        ["Growth", "4 posts / week + Stories", "Quarterly on-site shoot, reels/video, active DM monitoring"],
        ["Full Partner", "Daily posting + paid boost", "Bi-monthly shoots, LinkedIn executive profiles, paid ad integration"],
      ],
      note: "No long lock-in contracts; month-to-month service following initial 3-month setup.",
    },
    sectors: [
      "Hospitality & restaurants",
      "Specialist trades & builders",
      "Professional service firms",
      "Fitness & wellness centres",
      "Retail boutiques & showrooms",
      "B2B service providers",
      "Automotive & dealerships",
      "Venues & events spaces",
    ],
    needs: [
      "Access to your social accounts (via Meta Business Suite / LinkedIn admin)",
      "Access to brand assets and past project photos",
      "One designated contact for post approvals",
    ],
    faqs: [
      {
        q: "Do I have to approve every post before it goes out?",
        a: "Yes. You receive a monthly content calendar in advance. Nothing goes live without your sign-off.",
      },
      {
        q: "Do you use stock photos for social posts?",
        a: "No. Stock photography looks fake and damages credibility. We use real photography shot at your business or supplied by your team.",
      },
      {
        q: "How do you handle negative comments?",
        a: "We agree on brand response guidelines during onboarding. Serious complaints are flagged to you immediately with suggested polite responses.",
      },
      {
        q: "Which platforms should my business be on?",
        a: "It depends on your customers. For B2B suppliers, LinkedIn and Google are best; for local consumers, Instagram, Facebook and TikTok lead.",
      },
    ],
    seo: {
      title: "Social Media Management for UK Businesses | West Coast Services Digital",
      description:
        "Professional social media management for UK companies. Monthly content calendars, on-site photography shoots, posting and community engagement.",
    },
  },

  // 07. SEO (Search Engine Optimisation)
  {
    slug: "seo",
    num: "07",
    group: "digital",
    name: "SEO",
    shortName: "SEO",
    cardLine: "Technical fixes, Google Business Profile and content that gets you found.",
    h1: "Search engine optimisation that gets your business found by local customers.",
    intro:
      "We help UK companies rank higher on Google for the commercial services they sell. We fix technical roadblocks, optimise your Google Business Profile and create content that outranks local competitors.",
    cta: "Request an SEO audit",
    ctaLine: "Not showing up when customers search nearby? Get a free search audit.",
    photo: {
      src: "/images/services/seo.svg",
      alt: "Search rankings audit and keyword analysis",
      brief: "specialist reviewing search rankings, maps pack and Google Business Profile",
    },
    facts: [
      { label: "Focus", value: "Local SEO & Commercial search" },
      { label: "Audits", value: "Technical, content & citations" },
      { label: "Timeframe", value: "Measurable gains in 3–6 months" },
      { label: "Reporting", value: "Real ranking positions & leads" },
    ],
    includedIntro: "What's included in our SEO management:",
    included: [
      {
        title: "Technical SEO audit & repair",
        body: "Fixing crawl errors, broken redirects, mobile responsiveness, XML sitemaps and Core Web Vitals speed.",
      },
      {
        title: "Google Business Profile optimisation",
        body: "Supercharging your local map listing with proper categories, service menus, photos, and review strategies.",
      },
      {
        title: "Commercial keyword research",
        body: "Targeting high-intent terms UK business owners actually type when ready to buy, not useless high-volume fluff.",
      },
      {
        title: "On-page content optimisation",
        body: "Rewriting title tags, heading hierarchies, meta descriptions, internal links and schema markup.",
      },
      {
        title: "Local citation building",
        body: "Ensuring consistent Name, Address, and Phone (NAP) details across reputable UK directories like Yell and Thomson.",
      },
      {
        title: "Monthly ranking & traffic reports",
        body: "Clear reports tracking phone call clicks, form completions and keyword movements on Google Maps and search.",
      },
    ],
    stepsTitle: "Our search optimisation roadmap",
    steps: [
      {
        title: "Comprehensive baseline audit",
        body: "We analyze current rankings, website technical health and competitor search footprints.",
      },
      {
        title: "Technical fixes & Google Profile overhaul",
        body: "Eliminate code errors, accelerate page load times and optimise your local maps listing.",
      },
      {
        title: "Targeted content & landing pages",
        body: "Build specific service and location landing pages that answer customer search queries.",
      },
      {
        title: "Citations, reviews & monthly monitoring",
        body: "Strengthen domain authority with local citations and monitor rankings every single week.",
      },
    ],
    table: {
      title: "SEO Focus Areas",
      headers: ["Area", "Why It Matters", "Our Deliverable"],
      rows: [
        ["Google Maps (Local Pack)", "Top 3 map results capture 40%+ of mobile search clicks", "Google Business Profile management, photos, reviews"],
        ["Technical Foundations", "Google demotes slow, broken or poorly structured sites", "Core Web Vitals tuning, schema markup, mobile fixes"],
        ["Service Keyword Pages", "Ranks for specific queries like 'commercial electrician town'", "Dedicated conversion landing pages with rich copy"],
      ],
      note: "We only use strictly white-hat SEO techniques in full compliance with Google Search Essentials.",
    },
    sectors: [
      "Commercial trades (plumbing, HVAC, electrical)",
      "Professional service providers",
      "Garages & MOT centres",
      "Care homes & private clinics",
      "Local manufacturing & fabrication",
      "Commercial solicitors & accountants",
      "Cleaning & facilities services",
      "Specialist repair companies",
    ],
    needs: [
      "Access to Google Search Console and Google Analytics",
      "Manager access to Google Business Profile",
      "List of primary geographic towns and priority services",
      "Website CMS or code access to apply on-page fixes",
    ],
    faqs: [
      {
        q: "How long does SEO take to produce results?",
        a: "Google Business Profile and technical fixes often show local ranking improvements within 4 to 8 weeks. Competitive organic rankings typically mature within 3 to 6 months.",
      },
      {
        q: "Can you guarantee the #1 spot on Google?",
        a: "No honest agency guarantees #1 because Google's algorithm is proprietary and constantly evolves. We do guarantee transparent work, proven white-hat methods and steady rank growth.",
      },
      {
        q: "What is the difference between SEO and Google Ads?",
        a: "Google Ads gives you immediate clicks that stop the moment you stop paying. SEO builds permanent organic and map rankings that generate free clicks year after year.",
      },
      {
        q: "Why is Google Business Profile so important for local firms?",
        a: "For searches with local intent, Google displays the 'Map Pack' above organic results. If you aren't in those top three spots, you miss out on the majority of phone calls.",
      },
    ],
    seo: {
      title: "Local SEO Services for UK Businesses | West Coast Services Digital",
      description:
        "Rank higher on Google Maps and search. Transparent SEO services for UK SMEs: technical audits, local citations, and conversion-focused content.",
    },
  },

  // 08. Paid Advertising
  {
    slug: "paid-advertising",
    num: "08",
    group: "digital",
    name: "Paid advertising",
    shortName: "paid ads",
    cardLine: "Meta and Google campaigns with proper tracking and weekly optimisation.",
    h1: "High-return Google and Meta advertising managed by UK specialists.",
    intro:
      "We create and optimise paid search, display, and social advertising campaigns that deliver qualified commercial leads. Every pound of ad spend is tracked directly to phone calls and enquiry forms.",
    cta: "Review my ad campaigns",
    ctaLine: "Spending money on Google or Meta ads without knowing what converts? Let's fix it.",
    photo: {
      src: "/images/services/paid-advertising.svg",
      alt: "Paid advertising manager checking campaign metrics and conversions",
      brief: "ad strategist reviewing live campaign conversion metrics on multiple monitors",
    },
    facts: [
      { label: "Platforms", value: "Google Ads & Meta (FB/Insta)" },
      { label: "Tracking", value: "Server-side conversions & call tracking" },
      { label: "Ad budget", value: "Directly paid to platforms" },
      { label: "Optimisation", value: "Weekly bid and negative keyword pruning" },
    ],
    includedIntro: "What's included in our paid advertising service:",
    included: [
      {
        title: "High-intent Google Search campaigns",
        body: "Targeting customers searching with immediate intent to hire or buy your service.",
      },
      {
        title: "Meta retargeting & lead ads",
        body: "Re-engaging previous website visitors and using native lead forms on Facebook and Instagram.",
      },
      {
        title: "Negative keyword filtration",
        body: "Aggressive daily pruning of negative terms so your ad budget is never wasted on job seekers or DIY tutorials.",
      },
      {
        title: "Custom landing page design",
        body: "High-converting standalone landing pages engineered specifically to maximise ad conversion rates.",
      },
      {
        title: "End-to-end conversion tracking",
        body: "Dynamic phone call tracking, form submission events and CRM attribution setup.",
      },
      {
        title: "Transparent weekly management",
        body: "Weekly bid adjustments, ad copy A/B tests, and plain-English reports showing cost per qualified lead.",
      },
    ],
    stepsTitle: "How we launch and scale your ads",
    steps: [
      {
        title: "Ad audit & competitor analysis",
        body: "We review past campaigns or research your competitors' ad copy, keywords and landing pages.",
      },
      {
        title: "Conversion tracking implementation",
        body: "We configure Google Tag Manager, Meta Pixel and call tracking before running any ads.",
      },
      {
        title: "Campaign build & creative",
        body: "We write persuasive ad copy, generate imagery, and configure tight geo-targeting around your service area.",
      },
      {
        title: "Live testing & weekly optimisation",
        body: "We monitor search query reports, trim wasteful clicks and shift budget to top-performing keywords.",
      },
    ],
    table: {
      title: "Ad Platform Comparison",
      headers: ["Platform", "Best For", "Customer Mindset"],
      rows: [
        ["Google Search", "Urgent commercial services, B2B repairs, quote inquiries", "'I need a commercial supplier right now'"],
        ["Meta (Facebook / Instagram)", "Visual services, brand awareness, retargeting", "'I didn't know I needed this until I saw it'"],
        ["Google Maps Local Service Ads", "Emergency trades, local service areas with badge", "'Who is the highest-rated nearby contractor?'"],
      ],
      note: "You pay your ad spend directly to Google/Meta via your own credit card. We charge a flat management fee.",
    },
    sectors: [
      "Commercial HVAC, refrigeration & electrical",
      "Industrial equipment hire",
      "Emergency commercial services",
      "Security & facilities management",
      "Specialist logistics & freight",
      "Business solicitors & accountants",
      "Hospitality & private dining",
      "Training & certification providers",
    ],
    needs: [
      "Access to Google Ads or Meta Business Manager (or we set them up for you)",
      "Credit card to pay Google/Meta ad spend directly",
      "Target service areas (postcodes or town radius)",
      "Target cost-per-lead expectations",
    ],
    faqs: [
      {
        q: "What ad budget do I need to start?",
        a: "For most UK local business campaigns, we recommend starting with a minimum ad spend of £500 to £1,500 per month paid directly to Google or Meta, depending on sector competition.",
      },
      {
        q: "Do I pay the ad spend to West Coast Services or the platforms?",
        a: "You pay the ad spend directly to Google and Meta using your company credit card. Our management fee is invoiced separately with zero markups on your media spend.",
      },
      {
        q: "How do we know if the ads are actually working?",
        a: "We implement dynamic call tracking and form tracking. You see the exact search phrase the customer typed and which ad triggered each phone call and email lead.",
      },
      {
        q: "Can we pause or stop the ads at any time?",
        a: "Yes. You have full control. If your team is booked to capacity, we can pause or scale down campaigns with 24 hours notice.",
      },
    ],
    seo: {
      title: "Paid Advertising & Google Ads Management | West Coast Services Digital",
      description:
        "Results-driven Google Ads and Meta advertising for UK businesses. Transparent lead tracking, weekly negative keyword pruning, and zero ad spend markups.",
    },
  },
];

export const getService = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getSameCategoryServices = (slug: string): Service[] => {
  const current = getService(slug);
  if (!current) return [];
  return services.filter((s) => s.group === current.group && s.slug !== slug);
};

export const getCrossCategoryServices = (slug: string): Service[] => {
  const current = getService(slug);
  if (!current) return [];
  return services.filter((s) => s.group !== current.group);
};

export const getRelatedServices = (slug: string): Service[] => {
  const current = getService(slug);
  if (!current) return services.slice(0, 3);

  // Return the other services from the same category
  return services.filter(
    (s) => s.group === current.group && s.slug !== slug
  );
};
