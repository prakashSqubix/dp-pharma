## D P PHARMA — Premium Static Site

Building the **Clinical Minimalist** direction with glassmorphism accents: light theme, healthcare green (#00A67E) + deep teal (#0E7490) + white + light grey, Manrope typography, large rounded cards, soft shadows, glass nav + floating badges, generous whitespace.

### Scope
Single-page site at `/` (replaces the placeholder index). Fully static — no backend, no auth, no working forms. React + TypeScript + Tailwind v4 + Framer Motion + Lucide + shadcn.

### Sections
1. **Sticky glass nav** — DP logo, links, Book Consultation CTA
2. **Hero** — headline "Pharmacy & Multispeciality Clinic", tagline, 2 primary CTAs + secondary Call/Directions row, floating "100% Genuine" glass badge, pharmacy interior image, blob gradient, floating capsules + heartbeat SVG line
3. **Counters strip** — Years / Genuine Meds / Expert Doctors / Support (count-up on scroll)
4. **About** — mission copy + Certified Pharmacy visual
5. **Why Choose Us** — 8 animated cards with Lucide icons and hover lift
6. **Pharmacy Services** — 9-item icon grid (Prescription, OTC, Supplements, Baby Care, Personal, Diabetic, Surgical, Equipment, Essentials)
7. **Clinic Services** — 14 specialty cards with animated gradient borders
8. **Core Facilities trio** — Retail Pharmacy / Specialist Clinic / Diagnostics large rounded cards
9. **Specialist Doctors** — grid of ~22 named doctor cards (name + department badge + generated professional avatar + department icon, hover lift + glow). Doctor board raw image not displayed.
10. **Testimonials** — animated carousel, 4.58 Google rating badge, 4 review quotes
11. **Location** — address block + embedded Google Maps iframe (SUM Campus-II Phulnakhara) + Maps/Call buttons on teal band
12. **Opening Hours** — 7-row timetable, today's row highlighted via `new Date().getDay()`
13. **Contact** — 3 phone numbers, address, Call / WhatsApp / Directions buttons (tel:/wa.me/maps deep links)
14. **Footer** — quick links, services, rating, copyright "Designed with ❤️"

### Design system (src/styles.css)
- Semantic tokens: `--brand-primary` (#00A67E), `--brand-secondary` (#0E7490), `--brand-soft`, gradient + shadow tokens
- `--font-display: Manrope`, `--font-sans: Inter`
- Load Manrope + Inter via `<link>` in `__root.tsx`
- Utilities: `.glass-card`, blob/float/heartbeat/shimmer keyframes

### Motion
Framer Motion for scroll fade/slide, hover lift, count-up (custom `useCountUp` + `useInView`), testimonial carousel auto-advance. CSS keyframes for blobs, floating capsules, heartbeat, gradient shimmer.

### Images
Generate with `imagegen` + externalize via `lovable-assets`:
- Hero pharmacy interior (portrait)
- About pharmacy shelves visual
- 3–4 generic professional doctor avatars reused across doctor cards (not per-doctor real portraits)

### File layout
- `src/routes/index.tsx` — rewrite placeholder, compose sections, set head() with title/description/og/twitter + JSON-LD
- `src/routes/__root.tsx` — add font `<link>` tags
- `src/styles.css` — extend tokens + keyframes
- `src/components/site/` — Nav, Hero, Counters, About, WhyChoose, PharmacyServices, ClinicServices, CoreFacilities, Doctors, Testimonials, Location, Hours, Contact, Footer
- `src/data/site.ts` — doctors[], specialties[], hours[], reviews[], phones[]
- `src/hooks/use-count-up.ts`

### SEO
- Route `head()`: title "D P PHARMA — Pharmacy & Multispeciality Clinic in Bhubaneswar", meta description, og:*, twitter:card, canonical `/`, og:image + twitter:image from hero asset URL
- JSON-LD scripts: MedicalBusiness + Pharmacy + LocalBusiness with address (Phulnakhara, Bhubaneswar), telephones, openingHours, aggregateRating 4.58

### Out of scope
Backend, cart, working booking form, admin, database, real doctor photos, dark mode.
