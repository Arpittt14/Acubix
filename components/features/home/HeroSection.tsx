
import { LinkButton } from "@/components/ui/Button";
import { CubeMark } from "@/components/layout/Logo";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-[#171717] bg-[#F5F0E8]"
      aria-labelledby="hero-heading"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #171717 0px, #171717 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #171717 0px, #171717 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-64px)]">
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24 lg:pr-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
                Career Consulting for Graduates
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#171717] mb-6"
            >
              Your Career.
              <br />
              <span className="text-[#D71920]">Your Next</span>
              <br />
              Move.
            </h1>

            {/* Supporting text */}
            <p className="text-[1.125rem] text-[#171717] leading-relaxed max-w-[520px] mb-10 font-medium">
              Practical career support for graduates ready to take the next
              step. Improve your profile, discover relevant opportunities, and
              manage your job search with a clear plan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <LinkButton href="/plans" variant="primary" size="lg">
                Explore Our Plans
                <ArrowRight size={18} />
              </LinkButton>
              <LinkButton href="/consultation" variant="outline" size="lg">
                Book a Consultation
              </LinkButton>
            </div>

            {/* Trust markers */}
            <div className="mt-12 pt-8 border-t-2 border-[#C7C2B8] flex flex-wrap gap-8">
              {[
                { stat: "3 Plans", label: "to suit every stage" },
                { stat: "6–12 Wks", label: "structured support" },
                { stat: "5 Markets", label: "AU · CA · UK · US · NZ" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="text-2xl font-black text-[#171717] leading-none">
                    {stat}
                  </p>
                  <p className="text-xs text-[#6B665E] font-medium mt-1 uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual panel */}
          <div
            className="hidden lg:flex lg:col-span-5 border-l-2 border-[#171717] bg-[#171717] flex-col items-center justify-center p-12 relative overflow-hidden"
            aria-hidden="true"
          >
            {/* Large cube watermark */}
            <div className="opacity-10 absolute -bottom-16 -right-16">
              <CubeMark size={320} />
            </div>

            {/* Feature cards */}
            <div className="relative z-10 w-full space-y-3">
              {[
                {
                  icon: "01",
                  title: "ATS-Optimised Resume",
                  desc: "Beat automated screening with a professionally formatted CV.",
                },
                {
                  icon: "02",
                  title: "LinkedIn Branding",
                  desc: "A profile that attracts recruiters and showcases your skills.",
                },
                {
                  icon: "03",
                  title: "Job Application Tracker",
                  desc: "Full visibility over every application, with your approval required.",
                },
                {
                  icon: "04",
                  title: "Interview Preparation",
                  desc: "Mock sessions and real feedback to help you perform confidently.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={icon}
                  className="flex items-start gap-4 bg-[#242424] border border-[#3A3A3A] p-4 group hover:border-[#D71920] transition-colors duration-200"
                >
                  <span className="text-[#D71920] font-black text-sm font-mono shrink-0 mt-0.5">
                    {icon}
                  </span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold text-sm">{title}</p>
                    <p className="text-[#C7C2B8] text-xs mt-0.5 leading-snug">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
