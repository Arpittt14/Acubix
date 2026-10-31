import type { Metadata } from "next";
import { FileText, Briefcase, Search, Send, MessageSquare, Mic, Map, Check, ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Detailed breakdown of every career service offered by A Cube Tech Solutions — resume optimisation, LinkedIn, job applications, interview prep, and more.",
};

const SERVICES = [
  {
    id: "resume",
    icon: FileText,
    title: "Resume & CV Optimisation",
    tagline: "ATS-friendly, professionally formatted, targeted to your field.",
    description:
      "Most job applications are screened by automated systems before a human reads them. We restructure and rewrite your resume to pass ATS filters, communicate your value clearly, and be appropriate for the roles you are targeting.",
    deliverables: [
      "ATS-compatible formatting and layout",
      "Content review and rewrite based on your approved information",
      "Keyword strategy matched to target roles",
      "Up to 5 resume versions (Elite plan) or as specified in your plan",
      "Final review and sign-off by you before use",
    ],
    limitations: [
      "Content is based solely on your approved, accurate information",
      "We do not fabricate experience, skills, or qualifications",
      "Resume versions are limited to what is included in your plan",
    ],
  },
  {
    id: "linkedin",
    icon: Briefcase,
    title: "LinkedIn Profile Optimisation",
    tagline: "Attract recruiters and build a credible professional presence.",
    description:
      "LinkedIn is frequently used by recruiters and employers to evaluate candidates. We improve your headline, summary, experience section, skills, and overall profile presentation — using only accurate information you provide and approve.",
    deliverables: [
      "Headline and summary rewrite",
      "Experience section review and improvement",
      "Skills section optimisation",
      "Recommendations for profile completeness",
      "Guidance on profile photo and banner (we do not create images)",
    ],
    limitations: [
      "All changes are made to your own account with your access",
      "We do not access your account credentials directly",
      "Advanced branding is included in Professional and Elite plans only",
    ],
  },
  {
    id: "research",
    icon: Search,
    title: "Job Market Research",
    tagline: "Relevant vacancies identified and reviewed before any action.",
    description:
      "We research your target market and identify roles that match your profile, qualifications, and agreed criteria. Every opportunity is presented to you for review — we do not act on a vacancy without your confirmation.",
    deliverables: [
      "Identification of relevant job vacancies",
      "Role and employer research summaries",
      "Market overview and insights for your target region",
      "Presentation of opportunities for your review and approval",
    ],
    limitations: [
      "Research is limited to publicly available information",
      "Number of applications is subject to suitable vacancies existing",
      "We cannot create vacancies where none exist",
    ],
  },
  {
    id: "applications",
    icon: Send,
    title: "Job Application Assistance",
    tagline: "Applications submitted on your behalf — only with your approval.",
    description:
      "For each vacancy we identify, we prepare and submit the application on your behalf — but only after you have reviewed the role, confirmed the information to be used, and explicitly authorised submission. Every submission is logged.",
    deliverables: [
      "Application preparation for approved roles",
      "Submission through permitted channels and platforms",
      "Confirmation of each submission",
      "Application tracking in your dashboard",
      "Status updates as responses are received",
    ],
    limitations: [
      "Authorisation is required before every submission",
      "Application limits apply per plan (40 / 80 / 120)",
      "Limits are subject to suitable vacancies and your eligibility",
      "We do not bypass employer platform terms of service",
      "We do not submit to roles you are clearly ineligible for",
    ],
  },
  {
    id: "cover-letters",
    icon: MessageSquare,
    title: "Cover Letters",
    tagline: "Professional templates and tailored letters for priority roles.",
    description:
      "A cover letter tailored to the role and employer can significantly improve your application. We prepare templates for general use and, depending on your plan, individual letters for agreed priority applications.",
    deliverables: [
      "1–3 cover letter templates (depending on plan)",
      "Individual tailored letters for priority applications (Elite plan)",
      "Review and approval by you before use",
    ],
    limitations: [
      "Content is based on your approved information only",
      "Individual letters are limited to agreed priority roles",
      "Templates are starting points — review before every use",
    ],
  },
  {
    id: "interviews",
    icon: Mic,
    title: "Interview Preparation",
    tagline: "Structured mock sessions with honest, actionable feedback.",
    description:
      "We run structured mock interview sessions — covering common interview formats, role-specific questions, and behavioural questions — and provide clear feedback to help you improve. Sessions are live, not pre-recorded.",
    deliverables: [
      "2–4 mock interview sessions (depending on plan)",
      "Role-specific and behavioural question practice",
      "Written feedback after each session",
      "Common Q&A bank and preparation notes",
      "STAR method and structured response coaching",
    ],
    limitations: [
      "Sessions are practice — outcomes in real interviews are not guaranteed",
      "Session count is limited per plan",
      "Scheduling is subject to availability",
    ],
  },
  {
    id: "strategy",
    icon: Map,
    title: "Career Strategy",
    tagline: "A clear, personalised plan for your job search.",
    description:
      "We work with you to build a structured job-search strategy: target roles, target employers, priority markets, and a realistic timeline. This plan is reviewed regularly and updated as your search progresses.",
    deliverables: [
      "Personalised job-search strategy document",
      "Target role and employer identification",
      "Priority market guidance",
      "Weekly or twice-weekly reviews (depending on plan)",
      "Networking strategy guidance where appropriate",
    ],
    limitations: [
      "Strategy is advice — success depends on market conditions and your eligibility",
      "Career strategy sessions are included in Elite plan",
      "Basic plan receives a job-search strategy document only",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#0a0a0a] text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Services</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight mb-6">
              Everything You Need
              <br />
              <span className="text-[#0066ff]">To Land the Role.</span>
            </h1>
            <p className="text-[#a0a09a] text-lg leading-relaxed max-w-2xl">
              Seven core services, delivered transparently. Every deliverable is
              described clearly — including what is and is not included.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <div>
        {SERVICES.map(({ id, icon: Icon, title, tagline, description, deliverables, limitations }, idx) => (
          <section
            key={id}
            id={id}
            className={`section-padding border-b-2 border-[#0a0a0a] ${idx % 2 === 0 ? "bg-[#f4f3ef]" : "bg-white"}`}
          >
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left */}
                <div className="lg:col-span-5">
                  <div className="w-12 h-12 border-2 border-[#0a0a0a] flex items-center justify-center bg-white mb-6">
                    <Icon size={20} className="text-[#0066ff]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-2">
                    Service {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a] mb-3">
                    {title}
                  </h2>
                  <p className="text-base font-semibold text-[#2a2a2a] mb-4">{tagline}</p>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
                </div>

                {/* Right */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-2 border-[#0a0a0a] p-6 bg-white">
                    <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#0a0a0a] mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
                          <Check size={14} className="text-[#0066ff] shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-[#d1d0cb] p-6 bg-[#fafaf8]">
                    <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#6b6b6b] mb-4">
                      Limitations & Notes
                    </h3>
                    <ul className="space-y-2.5">
                      {limitations.map((l) => (
                        <li key={l} className="flex items-start gap-3 text-sm text-[#6b6b6b]">
                          <span className="w-1 h-1 bg-[#6b6b6b] shrink-0 mt-2 rounded-full" aria-hidden="true" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-padding bg-[#0066ff]">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight mb-1">
              Ready to review our plans?
            </h2>
            <p className="text-white/80 text-sm">
              See which plan includes the services you need.
            </p>
          </div>
          <LinkButton href="/plans" variant="secondary" size="lg">
            See Plans & Pricing <ArrowRight size={18} />
          </LinkButton>
        </div>
      </section>
    </>
  );
}

