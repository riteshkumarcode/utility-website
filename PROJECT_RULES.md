PROJECT RULES — Veltro website

You are building a production marketing website for a UK company that compares
business energy, water and waste contracts and also sells digital marketing.
The full spec is in docs/BUILD_GUIDE.md. Visual references are in design-reference/ and extracted_design/.

Stack: Next.js (latest stable, App Router), TypeScript strict, Tailwind CSS v4,
next/font (Archivo, IBM Plex Sans, IBM Plex Mono), Motion for scroll reveals only,
React Hook Form + Zod, Resend, Cloudflare Turnstile. Deploy target: Vercel.

Non-negotiables:
- Match design references. Do not "improve" the design.
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
- After each task: run `npm run lint` and `npm run build`, fix all errors, then verify at 1440px and 390px wide.
- Ask before installing any package not listed above.
