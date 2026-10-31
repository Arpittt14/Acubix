import { LinkButton } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "$650",
    duration: "6 weeks",
    description: "The essentials to present yourself professionally and start your search.",
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
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$999",
    duration: "8 weeks",
    description: "Expanded scope with multiple resume versions and interview coaching.",
    highlight: true,
    features: [
      "Everything in Basic",
      "Up to 80 total applications*",
      "Up to 3 resume versions",
      "Up to 3 cover letter templates",
      "2 mock interview sessions",
      "Networking message templates",
      "Employer & recruiter research",
      "Weekly review",
      "Priority support",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$1,499",
    duration: "12 weeks",
    description: "Comprehensive engagement for maximum reach and strategic positioning.",
    highlight: false,
    features: [
      "Everything in Professional",
      "Up to 120 total applications*",
      "Up to 5 resume versions",
      "Individual cover letters for priority roles",
      "4 mock interview sessions",
      "Advanced LinkedIn branding",
      "Employer outreach support†",
      "Twice-weekly progress updates",
      "Dedicated career strategy sessions",
      "Priority reviews",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-padding bg-[#f4f3ef] border-b-2 border-[#0a0a0a]"
      aria-labelledby="pricing-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">
              Plans & Pricing
            </span>
            <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
          </div>
          <h2
            id="pricing-heading"
            className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a] mb-4"
          >
            Transparent Pricing.
            <br />
            No Hidden Commitments.
          </h2>
          <p className="text-[#2a2a2a] max-w-xl mx-auto text-base leading-relaxed">
            One-time payments. Fixed duration. Clear deliverables. Review the
            full plan details before purchasing.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#0a0a0a]">
          {PLANS.map(({ id, name, price, duration, description, highlight, features }) => (
            <div
              key={id}
              className={`relative flex flex-col p-8 border-r-2 last:border-r-0 border-[#0a0a0a] ${
                highlight ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"
              }`}
            >
              {highlight && (
                <div className="absolute -top-px left-8 right-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              )}

              {/* Plan name */}
              <div className="mb-6">
                {highlight ? (
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#0066ff] border border-[#0066ff] px-2 py-0.5 mb-3">
                    Most Popular
                  </span>
                ) : null}
                <h3
                  className={`text-xs font-black uppercase tracking-[0.18em] mb-1 ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}
                >
                  {name}
                </h3>
                <div className="flex items-end gap-2">
                  <span className={`text-5xl font-black leading-none tracking-tight ${highlight ? "text-white" : "text-[#0a0a0a]"}`}>
                    {price}
                  </span>
                  <span className={`text-sm font-semibold pb-1 ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}>
                    AUD
                  </span>
                </div>
                <p className={`text-xs mt-2 ${highlight ? "text-[#a0a09a]" : "text-[#6b6b6b]"}`}>
                  {duration} engagement
                </p>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 border-b pb-6 ${highlight ? "text-[#a0a09a] border-[#2a2a2a]" : "text-[#6b6b6b] border-[#e8e7e3]"}`}>
                {description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${highlight ? "text-[#0066ff]" : "text-[#0066ff]"}`}
                    />
                    <span className={`text-sm font-medium ${highlight ? "text-[#e8e7e3]" : "text-[#2a2a2a]"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <LinkButton
                href="/plans"
                variant={highlight ? "primary" : "outline"}
                size="md"
                className="w-full justify-center"
              >
                Choose {name}
                <ArrowRight size={16} />
              </LinkButton>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="mt-6 p-5 border-2 border-[#d1d0cb] bg-white">
          <p className="text-xs text-[#6b6b6b] leading-relaxed">
            <strong className="text-[#0a0a0a]">Important:</strong>{" "}
            * Application limits are subject to client eligibility, suitable vacancies existing, and agreed scope. Applications are only submitted with your explicit authorisation.{" "}
            † Employer outreach is conducted through appropriate channels only, where permitted.{" "}
            Prices are in AUD and subject to change. No employment or interview outcomes are guaranteed.{" "}
            All plans are subject to our{" "}
            <a href="/terms" className="underline hover:text-[#0066ff]">Terms</a>,{" "}
            <a href="/refund-policy" className="underline hover:text-[#0066ff]">Refund Policy</a>, and{" "}
            <a href="/disclaimer" className="underline hover:text-[#0066ff]">Disclaimer</a>.{" "}
            Require legal review before enabling live sales in each target market.
          </p>
        </div>
      </div>
    </section>
  );
}
