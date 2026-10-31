import type { Metadata } from "next";
import { Check, ArrowRight, Minus } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Compare our three career support plans — Basic ($650), Professional ($999), and Elite ($1,499). Transparent pricing with clear deliverables and honest disclaimers.",
};

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "$650",
    currency: "AUD",
    duration: "6 weeks",
    description: "The essentials to present yourself professionally and launch a structured job search.",
    highlight: false,
    features: [
      "ATS-friendly resume optimisation",
      "LinkedIn profile optimisation",
      "1 cover letter template",
      "Personalised job-search strategy",
      "Up to 40 job applications*",
      "Application tracking dashboard",
      "Weekly progress report",
      "Email support",
      null,
      null,
      null,
      null,
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$999",
    currency: "AUD",
    duration: "8 weeks",
    description: "Expanded scope with multiple resume versions, more applications, and interview coaching.",
    highlight: true,
    features: [
      "ATS-friendly resume optimisation",
      "LinkedIn profile optimisation",
      "Up to 3 cover letter templates",
      "Personalised job-search strategy",
      "Up to 80 job applications*",
      "Application tracking dashboard",
      "Weekly review",
      "Priority support",
      "Up to 3 resume versions",
      "2 mock interview sessions",
      "Networking message templates",
      "Employer & recruiter research",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$1,499",
    currency: "AUD",
    duration: "12 weeks",
    description: "Maximum reach and strategic depth — for graduates who want comprehensive coverage.",
    highlight: false,
    features: [
      "ATS-friendly resume optimisation",
      "Advanced LinkedIn branding",
      "Individual cover letters for priority roles",
      "Dedicated career strategy sessions",
      "Up to 120 job applications*",
      "Application tracking dashboard",
      "Twice-weekly progress updates",
      "Priority reviews",
      "Up to 5 resume versions",
      "4 mock interview sessions",
      "Employer outreach support†",
      "Employer & recruiter research",
    ],
  },
];

// Comparison table rows
const COMPARISON = [
  { feature: "Resume optimisation", basic: true, professional: true, elite: true },
  { feature: "LinkedIn profile", basic: "Standard", professional: "Standard", elite: "Advanced" },
  { feature: "Cover letters", basic: "1 template", professional: "3 templates", elite: "Individual" },
  { feature: "Job applications*", basic: "Up to 40", professional: "Up to 80", elite: "Up to 120" },
  { feature: "Resume versions", basic: "1", professional: "Up to 3", elite: "Up to 5" },
  { feature: "Mock interview sessions", basic: false, professional: "2 sessions", elite: "4 sessions" },
  { feature: "Progress updates", basic: "Weekly report", professional: "Weekly review", elite: "Twice-weekly" },
  { feature: "Job-search strategy", basic: true, professional: true, elite: "Dedicated sessions" },
  { feature: "Networking templates", basic: false, professional: true, elite: true },
  { feature: "Employer research", basic: false, professional: true, elite: true },
  { feature: "Employer outreach†", basic: false, professional: false, elite: true },
  { feature: "Support type", basic: "Email", professional: "Priority", elite: "Priority" },
  { feature: "Engagement duration", basic: "6 weeks", professional: "8 weeks", elite: "12 weeks" },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} className="mx-auto text-[#0066ff]" />;
  if (value === false) return <Minus size={16} className="mx-auto text-[#d1d0cb]" />;
  return <span className="text-xs text-[#2a2a2a] font-medium">{value}</span>;
}

export default function PlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#0a0a0a] text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Plans & Pricing</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight mb-6">
              Transparent Pricing.
              <br />
              <span className="text-[#0066ff]">Clear Deliverables.</span>
            </h1>
            <p className="text-[#a0a09a] text-lg leading-relaxed max-w-2xl">
              One-time payment. Fixed engagement duration. No hidden fees. Review the full plan
              details, terms, and limitations before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#0a0a0a]">
            {PLANS.map(({ id, name, price, currency, duration, description, highlight, features }) => (
              <div
                key={id}
                className={`relative flex flex-col p-8 border-r-2 last:border-r-0 border-[#0a0a0a] ${
                  highlight ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"
                }`}
              >
                {highlight && (
                  <div className="absolute top-0 left-8 right-8 h-1 bg-[#0066ff]" />
                )}
                <div className="mb-6">
                  {highlight && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#0066ff] border border-[#0066ff] px-2 py-0.5 mb-3">
                      Most Popular
                    </span>
                  )}
                  <p className={`text-xs font-black uppercase tracking-[0.18em] mb-2 ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}>
                    {name}
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className={`text-5xl font-black leading-none tracking-tight ${highlight ? "text-white" : "text-[#0a0a0a]"}`}>
                      {price}
                    </span>
                    <span className={`text-sm font-semibold pb-1 ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}>
                      {currency}
                    </span>
                  </div>
                  <p className={`text-xs ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}>{duration} engagement</p>
                </div>
                <p className={`text-sm leading-relaxed mb-6 pb-6 border-b ${highlight ? "text-[#a0a09a] border-[#2a2a2a]" : "text-[#6b6b6b] border-[#e8e7e3]"}`}>
                  {description}
                </p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {features.filter(Boolean).map((f) => (
                    <li key={f!} className="flex items-start gap-3">
                      <Check size={14} className="text-[#0066ff] shrink-0 mt-0.5" />
                      <span className={`text-sm font-medium ${highlight ? "text-[#e8e7e3]" : "text-[#2a2a2a]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <LinkButton
                  href="/consultation"
                  variant={highlight ? "primary" : "outline"}
                  size="md"
                  className="w-full justify-center"
                >
                  Choose {name} <ArrowRight size={16} />
                </LinkButton>
              </div>
            ))}
          </div>

          {/* Legal note */}
          <div className="mt-6 p-5 border-2 border-[#d1d0cb] bg-white text-xs text-[#6b6b6b] leading-relaxed">
            <strong className="text-[#0a0a0a]">Important disclaimers:</strong>{" "}
            * Application limits are subject to client eligibility, suitable vacancies existing in your target market, and agreed scope.
            Applications are only submitted with your explicit authorisation.{" "}
            † Employer outreach is conducted through appropriate public channels only, where permitted.
            Prices are in AUD and subject to change without notice.{" "}
            <strong className="text-[#0a0a0a]">No employment outcomes, interviews, or visa approvals are guaranteed.</strong>{" "}
            All plans are subject to our{" "}
            <a href="/terms" className="underline hover:text-[#0066ff]">Terms</a>,{" "}
            <a href="/refund-policy" className="underline hover:text-[#0066ff]">Refund Policy</a>, and{" "}
            <a href="/disclaimer" className="underline hover:text-[#0066ff]">Disclaimer</a>.{" "}
            These plans require legal review before live sales in each target market.
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-white">
        <div className="container-site">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#0066ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Plan Comparison</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#0a0a0a]">Compare All Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-[#0a0a0a] text-sm">
              <thead>
                <tr className="bg-[#0a0a0a] text-white">
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider w-[40%]">Feature</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-center">Basic</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-center bg-[#0066ff]">Professional</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-center">Elite</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ feature, basic, professional, elite }, idx) => (
                  <tr key={feature} className={`border-b border-[#e8e7e3] ${idx % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}>
                    <td className="p-4 text-[#0a0a0a] font-medium">{feature}</td>
                    <td className="p-4 text-center"><ComparisonCell value={basic} /></td>
                    <td className="p-4 text-center bg-[#e6f0ff]"><ComparisonCell value={professional} /></td>
                    <td className="p-4 text-center"><ComparisonCell value={elite} /></td>
                  </tr>
                ))}
                <tr className="bg-[#f4f3ef]">
                  <td className="p-4 font-black text-[#0a0a0a] text-xs uppercase tracking-wider">Price (AUD)</td>
                  <td className="p-4 text-center font-black text-lg">$650</td>
                  <td className="p-4 text-center font-black text-lg bg-[#e6f0ff] text-[#0066ff]">$999</td>
                  <td className="p-4 text-center font-black text-lg">$1,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ teaser + CTA */}
      <section className="section-padding bg-[#f4f3ef]">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#0a0a0a] mb-1">
              Have questions before choosing?
            </h2>
            <p className="text-[#6b6b6b] text-sm">
              Book a free consultation or read our FAQ.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/consultation" variant="primary" size="md">
              Book a Consultation <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="/faq" variant="outline" size="md">
              Read FAQ
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

