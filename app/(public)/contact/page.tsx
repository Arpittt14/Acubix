import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Acubix Technologies. We'd love to hear from you and answer any questions about our career support services for international graduates.",
  openGraph: {
    title: "Contact Us | Acubix Technologies",
    description:
      "Reach out to Acubix Technologies for career support, partnership enquiries, or general questions.",
    url: "/contact",
  },
};

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@yourdomain.com";

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white section-padding border-b-2 border-[#0a0a0a]">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-4">
            Get In Touch
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight max-w-2xl mb-6">
            We&rsquo;re Here to Help
          </h1>
          <p className="text-[#a0a09a] text-lg max-w-xl leading-relaxed">
            Have a question about our services, want to explore a partnership, or
            just need some career guidance? Send us a message and we&rsquo;ll get
            back to you.
          </p>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────────── */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form — spans 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info panel */}
            <aside className="flex flex-col gap-6">
              <h2 className="text-lg font-black uppercase tracking-wide">
                Contact Info
              </h2>

              <div className="border-2 border-[#0a0a0a] bg-white p-6 shadow-[4px_4px_0_#0a0a0a] flex flex-col gap-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#0066ff] border-2 border-[#0a0a0a] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6b6b6b] mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-bold text-[#0066ff] hover:underline break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#0a0a0a] border-2 border-[#0a0a0a] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6b6b6b] mb-1">
                      Response Time
                    </p>
                    <p className="font-bold text-sm">Within 2 business days</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 border-2 border-[#0a0a0a] bg-[#f4f3ef] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6b6b6b] mb-1">
                      Service Area
                    </p>
                    <p className="font-bold text-sm">
                      Australia, Canada, UK, USA, NZ
                    </p>
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="border-t-2 border-[#0a0a0a] pt-6">
                  <div className="flex gap-3 items-start">
                    <MessageCircle className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold mb-1">
                        Looking for a personalised session?
                      </p>
                      <p className="text-xs text-[#6b6b6b] mb-3">
                        Request a consultation and we&rsquo;ll discuss your goals
                        directly.
                      </p>
                      <a
                        href="/consultation"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#0066ff] hover:underline"
                      >
                        Book a Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-[#6b6b6b] leading-relaxed border-l-2 border-[#0066ff] pl-3">
                We are a career support service and do not provide legal or
                immigration advice. Please consult a registered migration agent
                or solicitor for visa-related matters.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
