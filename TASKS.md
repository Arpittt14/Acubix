# A Cube Tech Solutions — Task Checklist

> Maintained incrementally after every phase.
> **Current phase:** Phase 2 — IN PROGRESS
> **Next:** Verify dev server → proceed to Phase 3

---

## Phase 1 — Workspace Inspection & Documentation ✅

- [x] Inspect workspace directory (confirmed empty)
- [x] Create `PROJECT_PLAN.md`
- [x] Create `TASKS.md`
- [x] Create `README.md`
- [x] Create `.env.example`
- [x] Create `SECURITY.md`

---

## Phase 2 — Project Initialisation & Design System

- [x] Initialise Next.js 16 project (TypeScript, Tailwind CSS v4, App Router, ESLint)
- [x] Read Next.js 16 official docs (`node_modules/next/dist/docs/`)
- [x] Note breaking changes: params is Promise, PageProps/LayoutProps are globals, Tailwind v4 uses @theme
- [x] Install extra dependencies: lucide-react, react-hook-form, @hookform/resolvers, zod, @supabase/supabase-js, @supabase/ssr
- [x] Configure `globals.css` with Tailwind v4 `@theme` design tokens
- [x] Replace default font (Geist) with Space Grotesk for brutalist brand
- [x] Update `app/layout.tsx` — metadata, fonts, root structure
- [x] Create reusable component library:
  - [x] `Logo` (geometric SVG cube mark + wordmark)
  - [x] `Navbar` (desktop + mobile, sticky, accessible)
  - [x] `Footer` (dark, four columns, social links)
  - [x] `Button` (5 variants, 3 sizes, loading state, LinkButton export)
  - [x] `Input` (label, error, hint, aria)
  - [x] `Textarea` (label, error, hint, aria)
  - [x] `Card` (4 variants)
  - [x] `Badge` (5 variants)
- [x] Create `app/(public)/layout.tsx` route group with Navbar + Footer
- [x] Homepage sections created:
  - [x] `HeroSection` — headline, CTAs, trust markers, dark feature panel
  - [x] `ServicesSection` — 7-service grid with icons
  - [x] `HowItWorksSection` — 7-step process with connecting line
  - [x] `PricingSection` — 3 plan cards with disclaimers
  - [x] `BenefitsSection` — 6-benefit grid
  - [x] `FaqSection` — accordion (client component)
  - [x] `CtaSection` — blue full-bleed CTA
- [x] Assemble homepage `app/(public)/page.tsx`
- [ ] Verify dev server runs without errors
- [ ] Verify homepage loads and is responsive

---

## Phase 3 — Public Pages, SEO & Forms

- [ ] `/about`
- [ ] `/services`
- [ ] `/plans`
- [ ] `/consultation` with form + server action
- [ ] `/contact` with form + server action
- [ ] `/faq` (full page)
- [ ] `/privacy` (draft)
- [ ] `/terms` (draft)
- [ ] `/refund-policy` (draft)
- [ ] `/disclaimer` (draft)
- [ ] SEO metadata for every page
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Favicon
- [ ] Rate limiting on contact/consultation endpoints
- [ ] Mobile responsive audit

---

## Phase 4 — Supabase, Database & Auth

- [ ] Supabase client utilities (server and browser)
- [ ] SQL migrations — all 18 tables
- [ ] Row Level Security policies
- [ ] Database indexes
- [ ] Auth: sign-up, sign-in, sign-out, verify-email, reset-password
- [ ] Profiles trigger on user creation
- [ ] User role system
- [ ] Admin bootstrap procedure documentation
- [ ] Middleware for session protection
- [ ] Role-based route protection

---

## Phase 5 — Client Onboarding, Documents & Dashboard

- [ ] Multi-step onboarding wizard (8 steps)
- [ ] Save-and-resume
- [ ] Client dashboard overview
- [ ] Profile page
- [ ] Documents page (upload, signed URLs, delete)
- [ ] Application tracker list + detail
- [ ] Tasks, Messages, Billing, Settings pages

---

## Phase 6 — Admin & Staff Dashboards

- [ ] Admin overview
- [ ] Client management (list + detail)
- [ ] Application management
- [ ] Consultation management
- [ ] Plan management
- [ ] Payments, Refunds, Messages, Content, Audit Logs

---

## Phase 7 — Payments, Webhooks & Notifications

- [ ] Stripe Checkout Session (server-side)
- [ ] Webhook handler with signature verification
- [ ] Idempotent payment processing
- [ ] Service activation on confirmed payment
- [ ] Refund workflow
- [ ] Email notifications via Resend (9 triggers)
- [ ] In-app notifications

---

## Phase 8 — Security, Testing & Quality

- [ ] Security audit checklist review
- [ ] ESLint — fix all errors
- [ ] TypeScript checks — fix all errors
- [ ] Unit tests for critical utilities
- [ ] Playwright E2E: homepage, auth, onboarding, application tracker
- [ ] Production build check

---

## Phase 9 — Deployment & Final Verification

- [ ] GitHub repo setup
- [ ] Vercel project + environment variables
- [ ] Supabase production migrations
- [ ] Admin bootstrap in production
- [ ] Final smoke test

---

## Known Issues & Blockers

| Issue | Phase | Resolution |
|---|---|---|
| External credentials not configured | All | Requires manual setup per `.env.example` |
| Draft legal policies | 3 | Require qualified legal review before publication |
| Admin bootstrap | 4 | Documented procedure must be run after first deployment |
| Stripe live mode | 7 | Requires legal review of fee structure per target market |

---

*Update this file at the end of every phase.*
