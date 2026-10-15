# Veltro Website — Antigravity Build Guide

Oct 14, 2026 · @Aegis

## 1. How to use this guide with Antigravity

Build the site in nine short phases, not one giant prompt: give Antigravity the project rules once, then paste one phase prompt at a time and review its plan before it writes code. Agents do their best work on a clear, bounded task with a written spec to check against.

**Set up once**

1. Create an empty folder (e.g. `veltro-website`) and open it as a workspace in Antigravity.
2. Save **section 13.0 (Project rules)** as a workspace rule in Antigravity's customisations, or as `PROJECT_RULES.md` in the repo root. If you use the file, @-mention it at the start of every new agent conversation.
3. Make a folder `design-reference/` and drop in screenshots of every page from the Claude design canvas: full-page, desktop and mobile. Agents follow pictures far better than descriptions of pictures.
4. Copy this whole guide into the repo as `docs/BUILD_GUIDE.md` so the agent can read the specs in sections 4–12.

**For each phase**

1. Start a new conversation in the Agent Manager, so each phase gets a clean context.
2. Use **Planning** mode, not Fast, for every phase except small fixes.
3. Paste the phase prompt from section 13.
4. Read the implementation plan it produces. Correct it with a comment *before* approving. Fixing a plan takes seconds; fixing code takes an hour.
5. When it finishes, check its screenshots or browser recording against `design-reference/`, then run the site yourself (`npm run dev`).
6. Commit to git after every phase that works: `git add -A && git commit -m "Phase N: …"`. If a later phase breaks things, you can roll back.

**Settings worth changing**

- Set terminal commands to ask before running anything that deletes files or touches git history.
- Keep the browser agent enabled: phase 8 uses it to click through every page and test the forms.
- If an agent goes off track twice on the same task, stop it, start a fresh conversation and paste the prompt again with one extra line explaining what went wrong.

## 2. Project overview

Veltro (placeholder brand) is a UK business that compares electricity, gas, water and waste contracts for businesses, and separately sells websites, social media, SEO and paid ads. The site has one job: get a business owner to send a bill or book a call.

**Audience:** owners and office managers of UK SMEs — cafés, shops, offices, workshops, care homes, multi-site groups. Mostly on mobile, short on time, wary of energy brokers.

**Tone:** plain-spoken, specific, a bit dry. No hype words ("seamless", "unlock", "elevate", "cutting-edge", "revolutionise"). Short sentences. Real UK terms (MPAN, MPRN, Letter of Authority, Simpler Recycling).

**In scope**

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | What we do, savings calculator, service index, trust |
| Services | `/services` | All 8 services with a filter |
| Service detail ×8 | `/services/[slug]` | One template, content from a data file |
| About | `/about` | Story, principles, team, credentials |
| Contact | `/contact` | Enquiry form with bill upload |
| Privacy notice | `/privacy` | Required for the form |
| Cookie policy | `/cookies` | Required for analytics consent |
| 404 | `not-found` | Branded not-found page |

**Out of scope for v1:** blog, client login, live price comparison API, CMS. The structure leaves room to add a blog and a headless CMS later without rebuilding pages.

**Success measures:** form submissions and calls; Lighthouse 95+ on mobile; WCAG 2.2 AA; every page under 1 s to first content on 4G.

## 3. Tech stack

Use Next.js with TypeScript and Tailwind, deployed on Vercel. Agents know this stack best, it produces static, fast pages for SEO, and the form backend runs in the same project.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js, latest stable, App Router | Static pages, server actions for the form, built-in SEO metadata |
| Language | TypeScript (strict) | Catches content and prop mistakes the agent makes |
| Styling | Tailwind CSS v4 with design tokens as CSS variables | Tokens in one place; matches the design exactly |
| Fonts | `next/font/google`: Archivo (variable width), IBM Plex Sans, IBM Plex Mono | Self-hosted, no layout shift |
| Animation | CSS keyframes for loops; Motion (`motion/react`) for scroll reveals and the accordion | Light; respects reduced motion |
| Forms | React Hook Form + Zod, Next.js server action | Same validation on browser and server |
| Email | Resend (or the client's SMTP) | Sends the enquiry and the bill attachment |
| Spam | Cloudflare Turnstile + honeypot field | No annoying picture puzzles |
| Analytics | GA4 or Plausible, loaded only after cookie consent | UK GDPR / PECR |
| Hosting | Vercel (or Netlify) + client's domain | Free tier is enough to start |
| Content | Typed data files in `src/content/` | No CMS needed for v1; easy to swap for Sanity later |

**Don't let the agent add:** UI kits (shadcn themes, MUI, Bootstrap), stock-photo libraries, icon packs with emoji-style icons, GSAP, three.js, or carousel libraries. Each one pulls the site back towards a template look and adds weight.

## 4. Design system

The look is editorial and industrial: off-white paper, ink black, one signal-orange accent, hairline rules, square-ish corners. Orange is a fill or a mark, never body-text colour on the light background. It fails contrast there; use the darker `--rust` for text links instead.

**Colours**

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | #F1F1EC | Page background |
| `--paper-2` | #F8F8F4 | Raised panels, form box, cards |
| `--stone` | #E4E4DC | Soft panel ("What we'll need") |
| `--ink` | #121512 | Text, dark sections, primary buttons |
| `--ink-2` | #3C413B | Body text on paper |
| `--muted` | #5B605A | Labels, captions |
| `--line` | #C9C9BF | Hairline rules |
| `--line-dark` | #2B302B | Rules on dark sections |
| `--on-dark` | #F1F1EC / #C9CBC4 | Text / secondary text on ink |
| `--signal` | #FF5B1F | Accent fills, CTA band, active marks |
| `--rust` | #B23A0B | Link hover, small numbers on paper |

**Type**

| Role | Font | Size (desktop → mobile) | Notes |
| --- | --- | --- | --- |
| Display H1 | Archivo 800, width 88% | 92 → 44 px, `clamp()` | line-height 0.96, tracking −0.035em |
| H2 | Archivo 800, width 88% | 62 → 34 px | line-height 1 |
| H3 / card title | Archivo 700 | 22–28 px | tracking −0.02em |
| Big numbers | Archivo 800, width 70–75% | 64–96 px | Steps, calculator result |
| Body | IBM Plex Sans 400 | 16–19 px | line-height 1.6 |
| Labels | IBM Plex Mono 500, uppercase | 11–12 px | tracking 0.14em |

**Layout:** max content width 1280 px, 24 px side gutter, sections 96–100 px apart vertically (64 px on mobile). Corners: 4 px buttons, 6 px panels, 999 px chips. Borders 1 px rules, 1.5–2 px emphasis. No shadows, no gradients, no glassmorphism.

**Starter CSS for `globals.css`:**

```css
@import "tailwindcss";

@theme {
  --color-paper: #F1F1EC;
  --color-paper-2: #F8F8F4;
  --color-stone: #E4E4DC;
  --color-ink: #121512;
  --color-ink-2: #3C413B;
  --color-muted: #5B605A;
  --color-line: #C9C9BF;
  --color-line-dark: #2B302B;
  --color-signal: #FF5B1F;
  --color-rust: #B23A0B;
  --font-display: var(--font-archivo), sans-serif;
  --font-sans: var(--font-plex-sans), system-ui, sans-serif;
  --font-mono: var(--font-plex-mono), monospace;
  --radius-btn: 4px;
  --radius-panel: 6px;
}

.photo-slot {
  background: repeating-linear-gradient(135deg, #D9D9D0 0 1px, #E7E7E0 1px 11px);
}
```

## 5. Site map, routes and folders

Twelve real pages plus legal pages. All eight service pages come from one template at `/services/[slug]`, fed by one content file.

| Service | Slug | Group |
| --- | --- | --- |
| Business electricity | `business-electricity` | Utilities |
| Business gas | `business-gas` | Utilities |
| Business water | `business-water` | Utilities |
| Waste management | `waste-management` | Utilities |
| Website development | `website-development` | Digital |
| Social media marketing | `social-media-marketing` | Digital |
| SEO | `seo` | Digital |
| Paid advertising | `paid-advertising` | Digital |

**Folder structure the agent should create:**

```text
src/
  app/
    layout.tsx              # fonts, <SiteNav>, <SiteFooter>, cookie banner
    page.tsx                # Home
    services/
      page.tsx              # Services overview
      [slug]/page.tsx       # Service detail template + generateStaticParams
    about/page.tsx
    contact/
      page.tsx
      actions.ts            # server action: validate, email, upload
    privacy/page.tsx
    cookies/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx
  components/
    layout/  SiteNav.tsx  SiteFooter.tsx  TopBar.tsx  CookieBanner.tsx
    ui/      Button.tsx  SectionLabel.tsx  PhotoSlot.tsx  Chip.tsx  Arrow.tsx
    home/    Hero.tsx  MeterPanel.tsx  Ticker.tsx  ServiceIndex.tsx
             SavingsCalculator.tsx  ProcessSteps.tsx  Promises.tsx  Testimonial.tsx
    services/ ServiceCard.tsx  ServiceFilter.tsx
    detail/  DetailHero.tsx  FactsStrip.tsx  Included.tsx  Steps.tsx
             InfoTable.tsx  SectorsNeeds.tsx  Faq.tsx  Related.tsx
    shared/  CtaBand.tsx  Reveal.tsx
    contact/ EnquiryForm.tsx  ContactAside.tsx
  content/
    site.ts                 # brand name, phone, email, address, company no.
    services.ts             # all 8 services (section 8)
    home.ts                 # steps, promises, testimonial
  lib/
    schema.ts               # JSON-LD builders
    validation.ts           # Zod schema for the form
public/
  images/                   # real photos only
```

Put every phone number, email and company detail in `content/site.ts`. When the client sends real details, you change one file.

## 6. Shared components

Build these first. Every page is assembled from them, so getting them right makes the rest fast and consistent.

| Component | What it does | Details that matter |
| --- | --- | --- |
| `TopBar` | Dark strip above nav | Blinking orange dot + opening hours; phone + email right. Hidden under 760 px |
| `SiteNav` | Logo, 5 links, CTA | Logo = meter dial SVG with swaying orange needle + "Veltro". Active link: 2 px orange underline. Mobile: menu button opens a full-screen sheet with large links |
| `SiteFooter` | Ink background | 4 link columns, giant faint "VELTRO" wordmark (Archivo width 70%), legal line with company number + commission statement |
| `Button` | 3 variants | `primary` (ink, turns orange on hover), `signal` (orange, turns ink), `outline` (ink border). Min height 48 px, arrow icon nudges right on hover |
| `SectionLabel` | Small mono label | 10 px orange square + uppercase mono text |
| `PhotoSlot` | Placeholder until real photos arrive | Hatched pattern + mono caption saying exactly what photo goes there. Swaps to `next/image` when `src` is given |
| `Chip` | Pill tag or toggle | Static (sectors) or toggle with `aria-pressed` (contact form) |
| `CtaBand` | Orange closing band | Headline left, ink button right; text varies per page |
| `Reveal` | Scroll-in wrapper | Fade + 24 px rise, once, staggered children; nothing under reduced motion |
| `Faq` | Accordion | Real `<button>` with `aria-expanded`; first item open; height animates; +/− circle turns orange when open |
| `IndexRow` | Linked service row | Number, title, one line, arrow. Whole row fills orange on hover |

**Rules for every component:** real `<a>` and `<button>` elements, visible focus ring (`outline: 2px solid var(--ink); outline-offset: 3px`), 44 px minimum touch targets, no text in images.

## 7. Page-by-page specs

Each page is listed top to bottom, in the order of the design. The copy in the Claude design is the starting copy, so tell the agent to copy it from the screenshots or from `content/` files, not to invent new copy.

**Home (`/`)**

1. **Hero:** section label → H1 "We sort out the bills you hate opening — and the marketing you never get round to." → orange bar that grows in → intro → two buttons (Get a free bill check / See all services) → three proof points. Right column: dark *meter panel* (rolling kWh digits + four utility progress bars) above a photo slot.
2. **Ticker:** ink strip, mono uppercase service names separated by orange slashes, scrolling left continuously.
3. **Service index:** H2 "Two jobs. Done properly." Two columns: A — Energy & utilities (01–04), B — Digital marketing (05–08). Each row links to its detail page.
4. **Savings calculator:** segmented control (Electricity / Gas / Water / Waste), range slider £100–£20,000 a month, result panel showing the yearly figure in big orange numbers, the monthly figure and a disclaimer. The saving percentage is one constant in `content/home.ts` (default 20 — client must confirm).
5. **Process:** four steps with big orange numbers (Send a bill → We go to market → You choose → We do the switch).
6. **Promises:** ink section, photo slot left, four numbered commitments right.
7. **Testimonial:** photo slot + large quote + name/role/business. Hide the whole section if no real quote exists.
8. **CTA band** → footer.

**Services (`/services`)**

1. Hero: "Eight services. One phone number." + intro + filter (Everything / Energy & utilities / Digital marketing). The filter updates the URL hash (`#utilities`, `#digital`) so nav links can deep-link to it.
2. Utilities grid: four cards (photo slot, number, title, one line, "Read more"). The photo zooms slightly on hover.
3. Digital grid: same, four cards.
4. "Using both" ink section with a three-row example table (placeholders until a real client example).
5. CTA band → footer.

**Service detail (`/services/[slug]`)** — every section pulls from `services.ts`:

1. Breadcrumb (Home / group / service) with BreadcrumbList schema.
2. Hero: label (number — group), H1, orange bar, intro, CTA + call button; tall photo slot right.
3. Facts strip: four key/value pairs between a thick top rule and a thin bottom rule.
4. What's included: six numbered items in a 3-column grid.
5. How it works: ink section, four steps.
6. Info table: three columns, title and note vary per service (contract types, bill charges, recycling rules, packages…). Scrolls sideways on mobile.
7. Who we do this for (sector chips) + What we'll need from you (checklist on a stone panel).
8. FAQ accordion: four questions + FAQPage schema.
9. Often paired with: three related services (two from the same group, one from the other).
10. CTA band with a service-specific line → footer.

**About (`/about`)**: hero H1 "A small UK team that still picks up the phone." → photo + story (3 paragraphs) + Founded / Based in / Team facts → three rules (ink section) → team grid (4 people) → memberships list (only real ones) → CTA band.

**Contact (`/contact`)**: hero → two columns. Left: the enquiry form (section 10). Right: ink "Talk to a person" card (phone, email, hours), a "What happens next" list, and a map. Use a static map image or a click-to-load Google Maps embed, so no Google cookies load before consent.

**404:** big "No reading at this meter" style headline, links home and to services.

## 8. Content data model

All service content lives in one typed array. The detail template renders whatever is in it, so adding a ninth service later means adding one object, not a page.

```ts
// src/content/services.ts
export type Group = "utilities" | "digital";

export interface Service {
  slug: string;              // "business-electricity"
  num: string;               // "01"
  group: Group;
  name: string;              // "Business electricity"
  shortName: string;         // used in "Things people ask about …"
  cardLine: string;          // one line for index rows and cards
  h1: string;
  intro: string;
  cta: string;               // "Get an electricity quote"
  ctaLine: string;           // CTA band headline
  photo: { src?: string; alt: string; brief: string }; // brief = what to shoot
  facts: { label: string; value: string }[];           // exactly 4
  includedIntro: string;
  included: { title: string; body: string }[];         // 6
  stepsTitle: string;
  steps: { title: string; body: string }[];            // 4
  table: {
    title: string;
    headers: [string, string, string];
    rows: [string, string, string][];
    note?: string;
  };
  sectors: string[];          // 8
  needs: string[];            // 4
  faqs: { q: string; a: string }[];  // 4
  seo: { title: string; description: string };
}

export const services: Service[] = [ /* 8 objects */ ];
export const getService = (slug: string) => services.find(s => s.slug === slug);
```

**Where the content comes from:** the Claude design already contains full copy for all eight services (H1, intro, facts, six included items, four steps, table, sectors, needs and four FAQs each). Paste the screenshots in and tell the agent to transcribe that copy into `services.ts` word for word. Anything in `[square brackets]` stays a placeholder.

**Related services** are computed, not stored: two from the same group plus the first from the other group.

**SEO fields:** titles under 60 characters ("Business Electricity Contracts for UK Firms | Veltro"), descriptions 140–155 characters, each one unique.

## 9. Animation specs

Motion should feel like instruments working, not a showreel. Every animation has a reason, runs only on `transform` and `opacity`, and switches off under `prefers-reduced-motion`.

| Element | Behaviour | Timing | Built with |
| --- | --- | --- | --- |
| Page load (hero) | Label, H1, intro, buttons fade up 24 px in sequence | 0.9 s, 80–120 ms stagger, `cubic-bezier(.2,.7,.2,1)` | CSS keyframes |
| Orange underline bar | Grows left → right | 1.3 s after 0.4 s delay | CSS `scaleX` |
| Meter digits | Last 3 digits roll like an odometer; each column 10× slower than the one to its right | 2.2 s / 22 s / 220 s, `steps(10)` | CSS `translateY` |
| Utility progress bars | Fill to 100% / 100% / 62% / 30%, staggered 0.4 s | 3.2 s | CSS width via custom property |
| Logo needle | Sways between −28° and 38° | 5 s loop, ease-in-out | CSS rotate |
| Live dot | Opacity blink | 1.4 s loop | CSS |
| Ticker | Duplicate track, translate −50% | 45 s linear loop; pause on hover | CSS |
| Section reveal | Fade + 24 px rise when 20% in view, once | 0.7 s | Motion `whileInView` |
| Index row hover | Background fills orange; arrow moves 6 px | 0.25 s | CSS |
| Card hover | Photo scales to 1.04; border darkens | 1.1 s / 0.25 s | CSS |
| Buttons | Swap ink ↔ orange; arrow nudges | 0.2 s | CSS |
| FAQ | Height animates open/closed, icon flips +/− | 0.3 s | Motion `AnimatePresence` |
| Calculator result | Number tweens to new value as slider moves | 0.4 s | `requestAnimationFrame` count-up |

**Avoid:** parallax, scroll-jacking, cursor followers, particle backgrounds, 3D tilt cards, text scramble effects and auto-playing carousels. These are the effects that make a site look AI-generated.

## 10. Forms, email and file upload

The contact form is the only backend in v1. It validates in the browser and again on the server, emails the enquiry with the bill attached to the client, and sends the customer a short confirmation.

**Fields**

| Field | Type | Rule |
| --- | --- | --- |
| Services | Toggle chips (8) | At least one; pre-select from `?service=` in the URL (detail page CTAs pass their slug) |
| Name | text | Required, 2–80 chars |
| Business name | text | Required |
| Email | email | Required, valid |
| Phone | tel | Required, UK format (07…, 01…, 02…, +44) |
| Postcode | text | Optional, UK postcode pattern |
| Contract ends | month | Optional |
| Bill | file | Optional; PDF, JPG, PNG, HEIC; max 10 MB |
| Message | textarea | Optional, max 2,000 chars |
| Consent | checkbox | Required; links to `/privacy` |
| Company website | hidden honeypot | Must be empty, or the submission is silently dropped |

**Server action (`app/contact/actions.ts`)**

1. Parse `FormData` with the same Zod schema as the browser.
2. Verify the Cloudflare Turnstile token server-side.
3. Check the file type by its first bytes, not just the extension, and check the size.
4. Email the client's inbox (`ENQUIRY_TO`) via Resend: subject `New enquiry — {services} — {business}`, a readable summary table and the bill attached.
5. Email the customer: "Thanks — we'll be in touch within one working day", from a real person's name.
6. Return `{ ok: true }`. The form swaps to the success panel and moves focus to its heading.
7. On error, show a plain message with the phone number; never lose what they typed.

**Environment variables** (`.env.local`, and in Vercel settings):

```bash
RESEND_API_KEY=
ENQUIRY_TO=hello@clientdomain.co.uk
ENQUIRY_FROM="Veltro <enquiries@clientdomain.co.uk>"
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
NEXT_PUBLIC_GA_ID=
```

Verify the client's sending domain in Resend (SPF + DKIM records) before launch, or enquiry emails will land in spam. Bills contain personal data, so don't store them anywhere except the email unless the client has a documented reason to.

## 11. SEO, schema, performance and accessibility

Every page is statically generated, has its own title and description, and carries structured data that describes what it is. That covers Google and the AI search tools that read the same markup.

**SEO**

- `generateMetadata` on every page: title, description, canonical URL, Open Graph and Twitter images, `en_GB` locale.
- One H1 per page; headings in order; descriptive link text (no "click here").
- `sitemap.ts` lists every route with `lastModified`; `robots.ts` allows all and points to the sitemap.
- Branded Open Graph image via `opengraph-image.tsx`: ink background, white Archivo headline, orange bar.
- Internal links: every detail page links to its three related services, to `/contact?service=slug` and back to `/services`.
- Add a Google Business Profile for the client and match its name, address and phone exactly to the footer.

**Structured data (JSON-LD, built in `lib/schema.ts`)**

| Page | Schema types |
| --- | --- |
| Every page | `Organization` (name, logo, phone, email, address, `sameAs` socials) |
| Home | `WebSite` + `LocalBusiness` (or `ProfessionalService`) with opening hours and `areaServed: GB` |
| Service detail | `Service` (provider, areaServed, serviceType) + `BreadcrumbList` + `FAQPage` |
| About | `AboutPage` + `Person` for the founder |
| Contact | `ContactPage` |

**Performance targets (mobile, Lighthouse):** Performance 95+, LCP under 2.5 s, CLS under 0.1, INP under 200 ms.

- Fonts through `next/font` with `display: swap` and only the weights used.
- Real photos via `next/image`, AVIF/WebP, explicit sizes, `priority` only on the hero image.
- Interactive parts (calculator, filter, FAQ, form) are client components; everything else stays server-rendered.
- No third-party scripts before cookie consent.

**Accessibility (WCAG 2.2 AA)**

- Text contrast 4.5:1 minimum. Orange `#FF5B1F` is only for fills, with ink text on top; use `#B23A0B` for coloured text on paper.
- Keyboard: skip-to-content link, visible focus everywhere, the mobile menu traps focus and closes on Esc.
- Calculator slider: a real `<input type="range">` with a `<label>`, plus `aria-valuetext="£2,500 a month"`.
- Ticker and meter animations: `aria-hidden`, and paused under reduced motion.
- Form errors appear next to their fields, are linked with `aria-describedby`, and are announced.

## 12. UK compliance checklist

An energy broker's website is more regulated than a normal agency site. Build these in from the start, and have the client (or their compliance adviser) sign off the wording. This section is a developer's checklist, not legal advice.

| Area | What the site must do | Where |
| --- | --- | --- |
| Cookies (UK GDPR + PECR) | No analytics or marketing cookies until the visitor opts in. Accept and Reject equally prominent. A way to change the choice later | `CookieBanner`, `/cookies`, footer link |
| Privacy | Privacy notice covering the form, bill uploads, retention period, who it's shared with (suppliers, under the Letter of Authority), and the data controller's details | `/privacy`, linked beside the consent box |
| Broker commission | Ofgem rules require business customers to be told what brokers earn. State plainly that suppliers pay commission and that the amount is shown before signing | Footer, FAQs, About, calculator note |
| Dispute resolution | If the client belongs to a redress scheme for energy brokers, name it | Footer + About credentials |
| Savings claims | Advertising savings claims must be backed by evidence (ASA / CAP Code). The calculator must say it's illustrative, and the percentage must come from the client's real data | Calculator, hero proof points |
| Company details | Registered company name, number, registered office and VAT number (if registered) on the site | Footer |
| ICO | Client should hold an ICO data-protection registration; show the number if they wish | Footer / privacy |
| Recycling and water facts | Dates and rules on the waste and water pages must be checked against GOV.UK before launch | Waste + Water pages |

## 13. Phased build plan with Antigravity prompts

Nine phases, each a self-contained prompt. Run them in order, one conversation per phase, Planning mode, and commit after each one works.

**13.0 Project rules** — save as a workspace rule or `PROJECT_RULES.md`:

```text
PROJECT RULES — Veltro website

You are building a production marketing website for a UK company that compares
business energy, water and waste contracts and also sells digital marketing.
The full spec is in docs/BUILD_GUIDE.md. Visual references are in design-reference/.

Stack: Next.js (latest stable, App Router), TypeScript strict, Tailwind CSS v4,
next/font (Archivo, IBM Plex Sans, IBM Plex Mono), Motion for scroll reveals only,
React Hook Form + Zod, Resend, Cloudflare Turnstile. Deploy target: Vercel.

Non-negotiables:
- Match design-reference/ screenshots. Do not "improve" the design.
- Use only the colour tokens in globals.css. No new colours, gradients, shadows or glass effects.
- No UI kits, no emoji, no stock illustrations, no Lorem ipsum, no invented statistics,
  prices, testimonials or company details. Keep [square bracket] placeholders as they are.
- All business details come from src/content/site.ts. All service copy from src/content/services.ts.
- Copy tone: plain UK English, short sentences. Never use: seamless, unlock, elevate,
  empower, cutting-edge, revolutionise, game-changer, in today's fast-paced world.
- UK spelling (optimise, colour), £, dates as 14 October 2026.
- Semantic HTML, real buttons and links, visible focus, 44px touch targets, WCAG 2.2 AA.
- Animate only transform and opacity; respect prefers-reduced-motion.
- Server components by default; "use client" only for interactive parts.
- After each task: run `npm run lint` and `npm run build`, fix all errors, then show
  me screenshots at 1440px and 390px wide.
- Ask before installing any package not listed above.
```

**Phase 1 — Set-up and design tokens**

```text
Read PROJECT_RULES.md and docs/BUILD_GUIDE.md sections 3–5.
Create a new Next.js project in this folder with TypeScript, Tailwind v4, ESLint, src/ directory
and App Router. Set up next/font for Archivo (variable, wdth axis), IBM Plex Sans (400–700) and
IBM Plex Mono (400–600). Put the tokens from section 4 in globals.css under @theme.
Create the folder structure from section 5 with empty component files.
Create src/content/site.ts with placeholder business details: name "Veltro", phone
"[0000 000 0000]", email "[hello@yourdomain.co.uk]", hours Mon–Fri 08:30–17:30, company
number "[00000000]".
Build a /style-guide page (noindex) showing every colour, type style, button variant,
SectionLabel, Chip and PhotoSlot, so I can check the system before pages are built.
```

**Phase 2 — Layout, nav and footer**

```text
Build TopBar, SiteNav, SiteFooter and the root layout per BUILD_GUIDE section 6 and
design-reference/nav.png and footer.png.
- Logo: inline SVG meter dial with an orange needle that sways (CSS, 5s loop).
- Desktop: 5 links + orange "Free bill check" button. Active link has a 2px orange underline.
- Under 900px: a menu button opens a full-screen ink sheet with large Archivo links,
  focus trapped, closes on Esc and on route change.
- Footer: 4 columns, giant faint VELTRO wordmark, legal line with commission statement.
- Add a skip-to-content link.
All links must work, including the 8 service URLs from section 5.
```

**Phase 3 — Home page**

```text
Build the home page exactly as design-reference/home-desktop.png and home-mobile.png,
following BUILD_GUIDE section 7 (Home) and section 9 (animations).
Components: Hero, MeterPanel (odometer digits + 4 progress bars), Ticker, ServiceIndex,
SavingsCalculator, ProcessSteps, Promises, Testimonial, CtaBand.
SavingsCalculator: segmented control for 4 utilities, range input £100–£20,000 step 100,
yearly saving = monthly × SAVING_RATE × 12 where SAVING_RATE comes from content/home.ts
(default 0.20), number count-up animation, disclaimer text exactly as in the design.
All copy goes in content/home.ts. Testimonial renders only if a testimonial exists.
Use the Reveal wrapper for sections below the fold.
```

**Phase 4 — Service content and detail template**

```text
Create src/content/services.ts using the Service interface in BUILD_GUIDE section 8.
Transcribe all 8 services word for word from design-reference/services/*.png.
Build /services/[slug]/page.tsx with generateStaticParams and generateMetadata, using
the detail components from section 5: DetailHero, FactsStrip, Included, Steps, InfoTable,
SectorsNeeds, Faq, Related, CtaBand. Follow section 7 (Service detail) top to bottom.
The CTA buttons link to /contact?service=<slug>. Unknown slugs return notFound().
Show me screenshots of business-electricity, waste-management and paid-advertising.
```

**Phase 5 — Services overview, About, 404, legal pages**

```text
Build /services (with the Everything / Utilities / Digital filter synced to the URL hash),
/about, not-found.tsx, /privacy and /cookies per BUILD_GUIDE section 7 and the matching
design-reference images. Privacy and cookie pages: a clean readable layout with clearly
marked [CLIENT TO COMPLETE] sections for the wording; do not write legal text yourself.
```

**Phase 6 — Contact form and backend**

```text
Build /contact and the enquiry form per BUILD_GUIDE section 10.
- EnquiryForm: React Hook Form + Zod (schema in lib/validation.ts, shared with the server),
  service chips pre-selected from ?service=, file input with drag-and-drop, honeypot,
  Turnstile widget, inline errors, loading state on submit.
- app/contact/actions.ts: server action that re-validates, verifies Turnstile, checks the
  file's magic bytes and size, sends both emails with Resend, returns { ok } or a friendly error.
- Success panel replaces the form and receives focus.
- Read secrets only from the env vars listed in section 10; create .env.example.
Test with Resend's test mode and show me both emails.
```

**Phase 7 — SEO, schema, cookie consent, analytics**

```text
Implement BUILD_GUIDE section 11 (SEO and structured data) and section 12 (cookies).
- generateMetadata for every route, canonical URLs, en_GB.
- lib/schema.ts with builders for Organization, LocalBusiness, Service, BreadcrumbList,
  FAQPage, AboutPage, ContactPage; render as JSON-LD script tags.
- sitemap.ts, robots.ts, opengraph-image.tsx (ink background, Archivo headline, orange bar).
- CookieBanner: Accept / Reject equally prominent, choice stored for 6 months,
  "Cookie settings" link in the footer reopens it. GA4 loads only after Accept.
Validate every page's JSON-LD and list any warnings.
```

**Phase 8 — QA with the browser agent**

```text
Start the production build locally (npm run build && npm start). Using the browser agent:
1. Visit every route at 1440px and 390px; screenshot each and compare with design-reference/.
   List every visual difference.
2. Tab through each page with the keyboard only; report any element you can't reach or
   can't see focus on.
3. Submit the contact form with: empty fields, an invalid email, a 12MB file, a .exe renamed
   to .pdf, and a valid entry. Report what happens each time.
4. Turn on reduced motion and confirm all loops stop.
5. Run Lighthouse (mobile) on Home, one service page and Contact; report scores.
Then fix everything you found and re-run the failing checks.
```

**Phase 9 — Deploy**

```text
Prepare for Vercel: confirm the build passes, .env.example is complete, no secrets are
committed, and images are optimised. Write a DEPLOY.md with exact steps: connect the GitHub
repo to Vercel, add env vars, add the client's domain, set the DNS records for the domain
and for Resend (SPF, DKIM), and submit sitemap.xml in Google Search Console.
```

## 14. QA checklist and launch

Don't send the client a link until every box below is ticked. Most of it is phase 8's browser-agent run; the rest you check by hand on a real phone.

**Design and content**

- [ ] Every page matches `design-reference/` at 1440 px and 390 px
- [ ] No Lorem ipsum, invented numbers or invented testimonials anywhere
- [ ] Every remaining `[placeholder]` is on the list in section 15
- [ ] Banned words search returns nothing (seamless, unlock, elevate, empower, cutting-edge)
- [ ] UK spelling throughout

**Function**

- [ ] All nav, footer, card, row and breadcrumb links work; no 404s
- [ ] Service filter works and deep links (`/services#digital`) land on the right group
- [ ] Calculator correct at £100, £2,500 and £20,000
- [ ] Contact form: validation, file limits, honeypot, Turnstile, both emails arrive, not in spam
- [ ] `?service=` pre-selects the right chip from every detail page
- [ ] Mobile menu opens, closes, traps focus, closes on Esc

**Quality**

- [ ] Lighthouse mobile 95+ on Home, a service page and Contact
- [ ] Keyboard-only run-through of every page
- [ ] Reduced motion stops all loops
- [ ] JSON-LD valid in Google's Rich Results Test
- [ ] No analytics requests before cookie consent (check the browser Network tab)
- [ ] Tested on real iPhone Safari and Android Chrome

**Launch day**

1. Point the domain at Vercel and confirm HTTPS.
2. Verify the Resend domain (SPF, DKIM, and a DMARC record if the client has none).
3. Send a real test enquiry and confirm it reaches the client's inbox.
4. Add the site to Google Search Console and submit `sitemap.xml`.
5. Update the Google Business Profile website link.
6. If replacing an old site, set up 301 redirects from the old URLs in `next.config` before switching DNS.

## 15. Placeholders to replace before launch

The build can start without any of these, but the site can't go live until the client supplies them. Send this list to the client on day one. Real photos and a real testimonial do more to stop the site feeling AI-made than any design choice.

| Item | Where it appears | File to update |
| --- | --- | --- |
| Brand name, logo, colours (if not Veltro) | Everywhere | `content/site.ts`, `globals.css` |
| Phone, email, office address, opening hours | Top bar, footer, contact, schema | `content/site.ts` |
| Registered company name, number, VAT no., ICO no. | Footer, privacy | `content/site.ts` |
| Commission wording + redress scheme name | Footer, FAQs, About | `content/site.ts`, `services.ts` |
| Savings percentage the client can evidence | Calculator | `content/home.ts` |
| Founder story, founding year, town, team size | About | `content/about.ts` |
| Team names, roles, headshots | About | `content/about.ts`, `public/images/team/` |
| Real photos: team, office, client sites, shoots | Hero, cards, detail heroes | `public/images/`, `photo.src` in `services.ts` |
| At least one real client testimonial (with permission) | Home | `content/home.ts` |
| Digital marketing prices and package contents | Web, Social, SEO and Ads pages | `services.ts` |
| Answers marked \[Client to confirm\] in FAQs | Gas, Waste, Social, Ads pages | `services.ts` |
| Memberships and partner badges actually held | About | `content/about.ts` |
| Privacy notice and cookie policy wording | `/privacy`, `/cookies` | Those pages |
| Domain name and DNS access | Launch | Vercel + registrar |
| Inbox for enquiries + Resend account | Contact form | Vercel env vars |
