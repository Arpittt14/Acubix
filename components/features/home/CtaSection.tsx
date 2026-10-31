import { LinkButton } from "@/components/ui/Button";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="section-padding bg-[#0066ff] border-b-2 border-[#0a0a0a]"
      aria-labelledby="cta-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            {/* Icon */}
            <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center mb-6">
              <CalendarCheck size={24} className="text-white" />
            </div>

            <h2
              id="cta-heading"
              className="text-[clamp(2rem,5vw,3.25rem)] font-black leading-[1.1] tracking-tight text-white mb-4"
            >
              Ready to Take the
              <br />
              Next Step?
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              Book a free consultation and find out exactly how we can support
              your job search. No commitment required — just an honest
              conversation about your goals.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <LinkButton
              href="/consultation"
              variant="secondary"
              size="lg"
              className="w-full lg:w-auto border-white shadow-[3px_3px_0_white] hover:shadow-none"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </LinkButton>
            <LinkButton
              href="/plans"
              variant="ghost"
              size="md"
              className="w-full lg:w-auto text-white border-white/40 hover:border-white hover:bg-white/10"
            >
              View All Plans
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
