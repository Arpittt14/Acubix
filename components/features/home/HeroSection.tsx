import { LinkButton } from "@/components/ui/Button";
import { CubeMark } from "@/components/layout/Logo";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-[#0a0a0a]"
      aria-labelledby="hero-heading"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-64px)]">
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24 lg:pr-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">
                Career Consulting for Graduates
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-6"
            >
              Your Career.
              <br />
              <span className="text-[#0066ff]">Your Next</span>
              <br />
              Move.
            </h1>

            {/* Supporting text */}
            <p className="text-[1.125rem] text-[#2a2a2a] leading-relaxed max-w-[520px] mb-10 font-medium">
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
            <div className="mt-12 pt-8 border-t-2 border-[#e8e7e3] flex flex-wrap gap-8">
              {[
                { stat: "3 Plans", label: "to suit every stage" },
                { stat: "6–12 Wks", label: "structured support" },
                { stat: "5 Markets", label: "AU · CA · UK · US · NZ" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="text-2xl font-black text-[#0a0a0a] leading-none">
                    {stat}
                  </p>
                  <p className="text-xs text-[#6b6b6b] font-medium mt-1 uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual panel */}
          <div
            className="hidden lg:flex lg:col-span-5 border-l-2 border-[#0a0a0a] bg-[#0a0a0a] flex-col items-center justify-center p-12 relative overflow-hidden"
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
                  className="flex items-start gap-4 bg-[#1a1a1a] border border-[#2a2a2a] p-4 group hover:border-[#0066ff] transition-colors duration-200"
                >
                  <span className="text-[#0066ff] font-black text-sm font-mono shrink-0 mt-0.5">
                    {icon}
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm">{title}</p>
                    <p className="text-[#a0a09a] text-xs mt-0.5 leading-snug">
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
