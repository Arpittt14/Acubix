import type { Metadata } from "next";
import { Target, Eye, Users, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Acubix Technologies — our mission, service philosophy, and transparent approach to graduate career support.",
};

const PRINCIPLES = [
  {
    icon: Target,
    title: "Results Through Effort, Not Promises",
    description:
      "We work hard to give every client the best possible chance of success. We do not make guarantees about outcomes — employment decisions belong to employers.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Every action we take on your behalf is visible in your dashboard. You see every application, every status update, and every note in real time.",
  },
  {
    icon: Users,
    title: "Client Approval First",
    description:
      "We never submit an application, send a message, or take a significant step without your explicit authorisation. You are always in control.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate Representation",
    description:
      "We present your skills, experience, and qualifications accurately — never exaggerated, never misrepresented. We comply with applicable recruitment and consumer-protection laws.",
  },
  {
    icon: MessageCircle,
    title: "Ongoing Communication",
    description:
      "We keep you informed with regular progress reports and respond to your questions throughout your engagement. Support doesn't stop after onboarding.",
  },
];

const PROCESS_OVERVIEW = [
  { step: "01", label: "Consultation", detail: "Understand your goals and explain our services." },
  { step: "02", label: "Plan Purchase", detail: "You choose a plan and review all terms." },
  { step: "03", label: "Onboarding", detail: "You provide approved information and documents." },
  { step: "04", label: "Profile Work", detail: "Resume, LinkedIn, and cover letters prepared." },
  { step: "05", label: "Job Research", detail: "We identify relevant opportunities." },
  { step: "06", label: "Applications", detail: "Submitted only with your confirmed approval." },
  { step: "07", label: "Progress", detail: "Regular updates, interview prep, and support." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#0a0a0a] text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">About Us</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight mb-6">
              Career Support Built on
              <br />
              <span className="text-[#0066ff]">Honesty and Effort.</span>
            </h1>
            <p className="text-[#a0a09a] text-lg leading-relaxed max-w-2xl">
              Acubix Technologies is a career consulting service for international students and
              graduates. We help clients improve their professional profiles, identify relevant
              opportunities, and manage their job search with structure and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Our Mission</span>
              </div>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a] mb-6">
                Practical Support for Graduates Navigating a Competitive Market.
              </h2>
              <div className="space-y-4 text-[#2a2a2a] text-base leading-relaxed">
                <p>
                  International graduates face unique challenges: unfamiliar job markets, visa
                  complexities, cultural differences in professional communication, and the difficulty of
                  knowing where to start. We exist to reduce those barriers.
                </p>
                <p>
                  Our work is practical, not promotional. We focus on the concrete steps that improve
                  your chances — a well-structured resume, an accurate LinkedIn profile, a clear
                  job-search strategy, and a disciplined application process.
                </p>
                <p>
                  We are transparent about what we can and cannot do. We support your search — we do not
                  control its outcome.
                </p>
              </div>
            </div>
            <div className="space-y-px border-2 border-[#0a0a0a] bg-[#0a0a0a]">
              {PROCESS_OVERVIEW.map(({ step, label, detail }) => (
                <div key={step} className="flex items-start gap-5 bg-white p-5 hover:bg-[#f4f3ef] transition-colors duration-150 group">
                  <span className="text-[#0066ff] font-black font-mono text-sm w-8 shrink-0">{step}</span>
                  <div>
                    <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#0066ff] transition-colors duration-150">{label}</p>
                    <p className="text-xs text-[#6b6b6b] mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-white">
        <div className="container-site">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Our Principles</span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a]">
              How We Work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0a0a0a] border-2 border-[#0a0a0a]">
            {PRINCIPLES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white hover:bg-[#f4f3ef] transition-colors duration-200 p-8 group">
                <div className="w-10 h-10 border-2 border-[#0a0a0a] flex items-center justify-center bg-[#f4f3ef] group-hover:bg-[#0066ff] group-hover:border-[#0066ff] transition-colors duration-200 mb-5">
                  <Icon size={18} className="text-[#0a0a0a] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-2 leading-snug">{title}</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Expectations */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">What to Expect</span>
              </div>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a] mb-6">
                Honest Expectations.
              </h2>
              <div className="space-y-4 text-[#2a2a2a] text-base leading-relaxed">
                <p>
                  We will work professionally, diligently, and in good faith throughout your engagement.
                  We will communicate clearly and keep you informed.
                </p>
                <p>
                  What we cannot promise: interviews, job offers, visa outcomes, or a specific salary.
                  These depend on employer decisions, market conditions, your eligibility, and many
                  factors outside our control.
                </p>
                <p>
                  Our service operates within the application limits of your chosen plan, and only where
                  suitable vacancies exist in your agreed target market. We will not inflate application
                  counts or submit to unsuitable roles.
                </p>
              </div>
            </div>
            <div className="border-2 border-[#0a0a0a] bg-white p-8">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0a0a0a] mb-6">
                We Will Always:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Seek your approval before submitting any application",
                  "Use only accurate information you have approved",
                  "Report progress regularly and honestly",
                  "Inform you if we cannot complete agreed deliverables",
                  "Respond to your support enquiries in a timely manner",
                  "Follow applicable employment and privacy laws",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0a0a0a] mb-6 mt-8 pt-6 border-t-2 border-[#e8e7e3]">
                We Will Never:
              </h3>
              <ul className="space-y-3">
                {[
                  "Guarantee employment, interviews, or visa approvals",
                  "Submit an application without your confirmed authorisation",
                  "Misrepresent your qualifications, experience, or eligibility",
                  "Invent job opportunities or fabricate responses",
                  "Bypass platform terms of service or access controls",
                  "Store sensitive personal information unnecessarily",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
                    <span className="w-1.5 h-1.5 bg-red-500 shrink-0 mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0066ff]">
        <div className="container-site text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-white mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Book a free consultation and find out if our service is right for your situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LinkButton href="/consultation" variant="secondary" size="lg">
              Book a Consultation <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href="/plans" variant="ghost" size="lg" className="text-white border-white/40 hover:border-white hover:bg-white/10">
              View Our Plans
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

