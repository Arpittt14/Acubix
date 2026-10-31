# Acubix Technologies — Project Plan

> **Status:** Phase 2 in progress.
> **Last updated:** 2026-10-29

---

## Business Overview

**Acubix Technologies** is an international graduate job-search consulting business.
Clients purchase service packages to receive professional career support, including resume optimisation, LinkedIn branding, job research, application assistance, interview preparation, and career strategy.

**Target audience:** International students and recent graduates targeting markets such as Australia, Canada, the United Kingdom, the United States, and other eligible countries.

**Business model:** One-time service package purchase. Staff deliver agreed services over a fixed engagement period. Applications are only submitted on behalf of clients with explicit authorisation.

---

## Architecture Overview

```
VERCEL (Deployment)
  └── Next.js 16 App Router (TypeScript + Tailwind CSS v4)
       ├── Public website (SSR / SSG)
       ├── Auth flows (Supabase Auth)
       ├── Client dashboard (protected)
       └── Admin / Staff dashboard (protected, role-gated)

API Route Handlers
  ├── Stripe webhook handler
  ├── Supabase server-side calls
  └── Email sending via Resend

External Services
  ├── Supabase (PostgreSQL + Auth + Storage)
  ├── Stripe (Checkout + Webhooks + Refunds)
  └── Resend (Transactional Email)
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Database | Supabase PostgreSQL |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Payments | Stripe Checkout |
| Email | Resend |
| Deployment | Vercel |
| Version Control | GitHub |
| Testing | ESLint, TypeScript checks, Playwright (E2E) |

---

## Key Next.js 16 + Tailwind v4 Notes

- Tailwind v4: no `tailwind.config.js`; design tokens live in `globals.css` under `@theme`
- Tailwind v4: import is `@import 'tailwindcss';` (not `@tailwind base; @tailwind components; @tailwind utilities;`)
- `params` and `searchParams` in dynamic routes are now `Promise<...>` and must be awaited
- `PageProps<'/route'>` and `LayoutProps<'/route'>` are globally available type helpers (no import needed)
- Turbopack is the default dev bundler

---

## Public Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, services overview, pricing, FAQ, CTA |
| `/about` | Business mission, philosophy, transparent process |
| `/services` | Detailed service cards and deliverables |
| `/plans` | Pricing cards, comparison table, "Choose Plan" CTAs |
| `/consultation` | Consultation request form |
| `/contact` | Contact form |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy (draft — requires legal review) |
| `/terms` | Terms and conditions (draft — requires legal review) |
| `/refund-policy` | Refund policy (draft — requires legal review) |
| `/disclaimer` | Service disclaimer (draft — requires legal review) |

---

## Auth Routes

| Route | Description |
|---|---|
| `/auth/sign-up` | New account registration |
| `/auth/sign-in` | Login |
| `/auth/verify-email` | Email verification landing |
| `/auth/forgot-password` | Password reset request |
| `/auth/reset-password` | Password reset confirmation |

---

## Client Dashboard Routes (Protected)

| Route | Description |
|---|---|
| `/dashboard` | Overview — plan, status, applications summary |
| `/dashboard/onboarding` | Multi-step onboarding wizard |
| `/dashboard/profile` | View and update personal profile |
| `/dashboard/documents` | Upload and manage documents |
| `/dashboard/applications` | Application tracker list |
| `/dashboard/applications/[id]` | Single application detail |
| `/dashboard/tasks` | Assigned tasks |
| `/dashboard/messages` | Messaging with support team |
| `/dashboard/billing` | Payment history and receipts |
| `/dashboard/settings` | Account settings |

---

## Admin / Staff Dashboard Routes (Protected, Role-Gated)

| Route | Description |
|---|---|
| `/admin` | Dashboard overview |
| `/admin/clients` | Client list — search, filter, assign staff |
| `/admin/clients/[id]` | Individual client detail |
| `/admin/applications` | All applications — create, edit, update |
| `/admin/consultations` | Consultation request management |
| `/admin/plans` | Manage service plans |
| `/admin/payments` | Payment records |
| `/admin/refunds` | Refund requests and processing |
| `/admin/messages` | All client messages |
| `/admin/content` | FAQ, website content, blog |
| `/admin/audit-logs` | Audit trail of sensitive actions |
| `/admin/settings` | Admin settings |

---

## Database Tables

| # | Table | Purpose |
|---|---|---|
| 1 | `profiles` | User profile data linked to auth.users |
| 2 | `service_plans` | Configurable pricing plans |
| 3 | `client_services` | Client plan purchases and service status |
| 4 | `client_onboarding` | Multi-step onboarding form data |
| 5 | `client_documents` | Document metadata and storage references |
| 6 | `job_opportunities` | Job vacancies researched by staff |
| 7 | `job_applications` | Applications linked to client + opportunity |
| 8 | `application_status_history` | Immutable audit of status changes |
| 9 | `client_tasks` | Tasks assigned to clients |
| 10 | `consultation_requests` | Consultation form submissions |
| 11 | `conversations` | Message threads |
| 12 | `messages` | Individual messages within conversations |
| 13 | `payments` | Stripe payment records |
| 14 | `refund_records` | Refund requests and decisions |
| 15 | `notifications` | In-app notification queue |
| 16 | `audit_logs` | Sensitive administrative action log |
| 17 | `faqs` | Editable FAQ entries |
| 18 | `blog_posts` | Optional — blog articles |

---

## Service Plans (Draft — Configurable)

> Configurable starting points only. All plans require legal review before live sales.

| Plan | Price | Duration |
|---|---|---|
| Basic | $650 | 6 weeks |
| Professional | $999 | 8 weeks |
| Elite | $1,499 | 12 weeks |

---

## User Roles

| Role | Permissions |
|---|---|
| `client` | Own data, documents, applications, tasks, messages, billing |
| `staff` | All client-facing data (read/write), applications, consultations, tasks, messages |
| `admin` | Full access including plans, payments, refunds, audit logs, settings, user management |

---

## Key Business Rules

- **Never guarantee** employment, interviews, visa approval, or a specific salary.
- **Do not submit** an application without confirmed client authorisation.
- **Do not misrepresent** a client's qualifications, experience, identity, or eligibility.
- **Do not invent** testimonials, statistics, certifications, or employer responses.
- **Do not bypass** platform CAPTCHA, rate limits, or access controls.
- **Flag for legal review** before accepting payments in each target country.
- **Never mark** an application "Submitted" unless the submission is actually confirmed.
- **Do not store** card details, passwords for external job boards, or passport numbers.
- **Privacy first** — collect only what is necessary to deliver the service.

---

## Development Phases

| Phase | Scope | Status |
|---|---|---|
| 1 | Workspace inspection, project plan, documentation, environment template | Complete |
| 2 | Next.js init, TypeScript, Tailwind, design system, layout, homepage | In Progress |
| 3 | Public pages, pricing, forms, FAQ, policies, SEO, responsive | Pending |
| 4 | Supabase migrations, schema, auth, roles, RLS | Pending |
| 5 | Client onboarding, documents, tasks, application tracker | Pending |
| 6 | Admin and staff dashboards, client management, operations | Pending |
| 7 | Stripe test mode, webhooks, email, notifications | Pending |
| 8 | Security review, lint, type checks, tests, production build | Pending |
| 9 | Deployment, environment config, documentation, final verification | Pending |

---

## Outstanding Requirements (Manual / External)

- [ ] Register a Supabase project and obtain credentials.
- [ ] Create a Stripe account and enable test mode.
- [ ] Register a Resend account and verify a sending domain.
- [ ] Configure a custom domain with Vercel.
- [ ] Register on GitHub and push the repository.
- [ ] Legal review of all draft policy pages before publication.
- [ ] Legal review of the fee structure and service agreement in each target market.
- [ ] Qualified security review before handling real client data.
- [ ] Bootstrap the first administrator account using the documented procedure.
- [ ] Configure environment variables on Vercel before deployment.

---

*This plan is a living document. Update it at the end of every phase.*
