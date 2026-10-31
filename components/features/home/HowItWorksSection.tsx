
const STEPS = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Start with a free consultation. Tell us about your goals, target market, career field, and experience level. We'll explain exactly what's included in each plan.",
  },
  {
    number: "02",
    title: "Choose Your Plan",
    description:
      "Select the plan that fits your needs and timeline. Review the deliverables, limitations, and terms carefully before purchasing.",
  },
  {
    number: "03",
    title: "Complete Onboarding",
    description:
      "Share your career history, target roles, and supporting documents through your secure client dashboard. You control what we receive.",
  },
  {
    number: "04",
    title: "Profile Optimisation",
    description:
      "We prepare your resume, LinkedIn profile, and cover letter templates based on your approved information. You review and confirm before anything is finalised.",
  },
  {
    number: "05",
    title: "Job Research & Approval",
    description:
      "Our team identifies relevant vacancies that match your agreed criteria. You review each opportunity and explicitly authorise any application before we proceed.",
  },
  {
    number: "06",
    title: "Applications Submitted",
    description:
      "We submit applications only through permitted channels, only with your authorisation, and only using accurate information. Each submission is recorded and tracked.",
  },
  {
    number: "07",
    title: "Progress & Support",
    description:
      "Receive regular updates, track every application in real time, prepare for interviews, and stay informed throughout your engagement.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-[#171717] text-[#F5F0E8] border-b-2 border-[#171717]"
      aria-labelledby="process-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
              The Process
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1]"
          >
            How We Work
            <br />
            Together.
          </h2>
          <p className="mt-4 text-[#C7C2B8] text-base leading-relaxed">
            A transparent, step-by-step process with your approval required at
            every significant stage. No surprises, no hidden steps.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-6 top-3 bottom-3 w-px bg-[#3A3A3A] hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {STEPS.map(({ number, title, description }, idx) => (
              <li
                key={number}
                className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-8 group"
              >
                {/* Step number */}
                <div className="flex items-start gap-4 md:block md:w-12 mb-4 md:mb-0">
                  <div className="relative z-10 w-12 h-12 border-2 border-[#3A3A3A] bg-[#171717] flex items-center justify-center group-hover:border-[#D71920] group-hover:bg-[#D71920] transition-colors duration-200 shrink-0">
                    <span className="text-xs font-black text-[#C7C2B8] group-hover:text-[#F5F0E8] transition-colors duration-200 font-mono">
                      {number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`pb-10 md:pb-12 ${idx === STEPS.length - 1 ? "pb-0 md:pb-0" : "border-b border-[#303030]"} md:border-0`}
                >
                  <h3 className="text-base font-bold text-[#F5F0E8] mb-2 group-hover:text-[#D71920] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-[#C7C2B8] leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
