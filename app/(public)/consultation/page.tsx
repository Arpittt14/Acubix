import type { Metadata } from "next";
import { CalendarCheck, CheckCircle, Info, Clock } from "lucide-react";
import ConsultationForm from "@/components/features/consultation/ConsultationForm";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Request a personalised career consultation with A Cube Tech Solutions. Tell us your goals and we'll contact you to discuss how we can support your job search.",
  openGraph: {
    title: "Request a Consultation | A Cube Tech Solutions",
    description:
      "Tell us your goals and we'll get in touch to arrange a personalised career consultation.",
    url: "/consultation",
  },
};

export default function ConsultationPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white section-padding border-b-2 border-[#0a0a0a]">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-4">
            Consultation Request
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight max-w-2xl mb-6">
            Let&rsquo;s Talk About Your Career
          </h1>
          <p className="text-[#a0a09a] text-lg max-w-xl leading-relaxed">
            Fill in the form below and we&rsquo;ll be in touch to confirm
            availability and discuss how we can support your job search.
          </p>
        </div>
      </section>

      {/* ── What to expect ─────────────────────────────────────── */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-white">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-4">
            How It Works
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight mb-10 max-w-xl">
            What Happens After You Submit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <CalendarCheck className="w-6 h-6 text-white" />,
                step: "01",
                title: "We Review Your Request",
                body: "We read your form carefully and prepare for a productive conversation about your goals.",
              },
              {
                icon: <Clock className="w-6 h-6 text-white" />,
                step: "02",
                title: "We Contact You",
                body: "Within 2 business days we will reach out via your preferred contact method to confirm availability.",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-white" />,
                step: "03",
                title: "Booking Confirmed by Email",
                body: "Your consultation is only confirmed once you receive a confirmation email from us.",
              },
            ].map(({ icon, step, title, body }) => (
              <div
                key={step}
                className="border-2 border-[#0a0a0a] bg-[#f4f3ef] p-6 shadow-[4px_4px_0_#0a0a0a]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0066ff] border-2 border-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6b6b6b]">
                    Step {step}
                  </span>
                </div>
                <h3 className="font-black text-lg mb-2">{title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Important notice */}
          <div className="mt-8 flex items-start gap-3 p-5 border-2 border-[#0066ff] bg-[#e6f0ff] max-w-2xl">
            <Info className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#0a0a0a]">
              <strong>Please note:</strong> Submitting this form does not guarantee
              or book a consultation. Availability is subject to confirmation.
              We will email you once your session is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form ───────────────────────────────────────────────── */}
      <section className="section-padding bg-[#f4f3ef]">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-4">
              Request Form
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight mb-8">
              Tell Us About Yourself
            </h2>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
