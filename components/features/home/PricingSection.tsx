
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
      className="section-padding bg-[#F5F0E8] border-b-2 border-[#171717]"
      aria-labelledby="pricing-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
              Plans & Pricing
            </span>
            <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
          </div>
          <h2
            id="pricing-heading"
            className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#171717] mb-4"
          >
            Transparent Pricing.
            <br />
            No Hidden Commitments.
          </h2>
          <p className="text-[#6B665E] max-w-xl mx-auto text-base leading-relaxed">
            One-time payments. Fixed duration. Clear deliverables. Review the
            full plan details before purchasing.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#171717]">
          {PLANS.map(({ id, name, price, duration, description, highlight, features }) => (
            <div
              key={id}
              className={`relative flex flex-col p-8 border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 border-[#171717] ${
                highlight
                  ? "bg-[#171717] text-[#F5F0E8]"
                  : "bg-white text-[#171717]"
              }`}
            >
              {highlight && (
                <div
                  className="absolute -top-px left-8 right-8 h-1 bg-[#D71920]"
                  aria-hidden="true"
                />
              )}

              {/* Plan name */}
              <div className="mb-6">
                {highlight && (
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#D71920] border border-[#D71920] px-2 py-0.5 mb-3">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-xs font-black uppercase tracking-[0.18em] mb-1 ${
                    highlight ? "text-[#C7C2B8]" : "text-[#6B665E]"
                  }`}
                >
                  {name}
                </h3>
                <div className="flex items-end gap-2">
                  <span
                    className={`text-5xl font-black leading-none tracking-tight ${
                      highlight ? "text-[#F5F0E8]" : "text-[#171717]"
                    }`}
                  >
                    {price}
                  </span>
                  <span
                    className={`text-sm font-semibold pb-1 ${
                      highlight ? "text-[#C7C2B8]" : "text-[#6B665E]"
                    }`}
                  >
                    AUD
                  </span>
                </div>
                <p
                  className={`text-xs mt-2 ${
                    highlight ? "text-[#C7C2B8]" : "text-[#6B665E]"
                  }`}
                >
                  {duration} engagement
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 border-b pb-6 ${
                  highlight
                    ? "text-[#C7C2B8] border-[#3A3A3A]"
                    : "text-[#6B665E] border-[#C7C2B8]"
                }`}
              >
                {description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="shrink-0 mt-0.5 text-[#D71920]"
                    />
                    <span
                      className={`text-sm font-medium ${
                        highlight ? "text-[#F5F0E8]" : "text-[#171717]"
                      }`}
                    >
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
        <div className="mt-6 p-5 border-2 border-[#C7C2B8] bg-white">
          <p className="text-xs text-[#6B665E] leading-relaxed">
            <strong className="text-[#171717]">Important:</strong>{" "}
            * Application limits are subject to client eligibility, suitable vacancies existing, and agreed scope. Applications are only submitted with your explicit authorisation.{" "}
            † Employer outreach is conducted through appropriate channels only, where permitted.{" "}
            Prices are in AUD and subject to change. No employment or interview outcomes are guaranteed.{" "}
            All plans are subject to our{" "}
            <a href="/terms" className="underline hover:text-[#D71920]">Terms</a>,{" "}
            <a href="/refund-policy" className="underline hover:text-[#D71920]">Refund Policy</a>, and{" "}
            <a href="/disclaimer" className="underline hover:text-[#D71920]">Disclaimer</a>.{" "}
            Require legal review before enabling live sales in each target market.
          </p>
        </div>
      </div>
    </section>
  );
}
