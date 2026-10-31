import type { Metadata } from "next";
import { HelpCircle, ArrowRight, MessageSquare, CalendarCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Acubix Technologies — our services, how we support international graduates, pricing, and the application process.",
  openGraph: {
    title: "FAQ | Acubix Technologies",
    description:
      "Find answers to common questions about our career support services for international graduates.",
    url: "/faq",
  },
};

// ── FAQ data ────────────────────────────────────────────────────────────────

const categories: {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}[] = [
    {
      id: "about",
      title: "About Our Service",
      items: [
        {
          q: "What does Acubix Technologies do?",
          a: "Acubix Technologies provides practical career support services to international graduates who are looking to enter or advance in the job market. Our services include resume optimisation, LinkedIn profile improvement, job application assistance, and interview preparation — all tailored to the specific expectations of employers in your target country.",
        },
        {
          q: "Who is this service for?",
          a: "Our services are designed primarily for international students and graduates who are navigating the job market in Australia, Canada, the United Kingdom, the United States, or New Zealand. If you graduated within the last three years, or are finishing your studies soon, we can help you put your best foot forward.",
        },
        {
          q: "Do you guarantee I will get a job?",
          a: "No — and we will never make that promise. We provide professional support to improve your application materials and interview skills, but job outcomes depend on many factors outside our control, including market conditions, your field, and employer decisions. Our goal is to give you the strongest possible foundation.",
        },
        {
          q: "Are your advisors qualified?",
          a: "Our team has direct experience supporting international graduates through job searches and understands the nuances of different hiring markets. We focus on practical, actionable guidance rather than generic advice.",
        },
        {
          q: "Can you help me with visa or immigration questions?",
          a: "No. We are a career support service and are not registered migration agents or solicitors. We cannot provide legal or immigration advice. For visa-related questions, please consult a registered migration agent (in Australia, look for MARA-registered agents) or a qualified immigration solicitor.",
        },
        {
          q: "What countries do you support?",
          a: "We currently focus on job markets in Australia, Canada, the United Kingdom, the United States, and New Zealand. If your target country is not listed, contact us and we will let you know whether we can still assist.",
        },
      ],
    },
    {
      id: "applications",
      title: "Applications & Authorisation",
      items: [
        {
          q: "How does the consultation process work?",
          a: "Start by submitting a consultation request form on our website. We review your details and get in touch within 2 business days to confirm availability and arrange a time to speak. Your consultation is only confirmed once you receive a written confirmation email from us.",
        },
        {
          q: "What happens after I submit the consultation form?",
          a: "We will review your request and contact you via your preferred method (email, phone, or video call) within 2 business days. We may ask a few clarifying questions before confirming your session. Please note that submitting the form does not automatically book a consultation.",
        },
        {
          q: "What information should I prepare before a consultation?",
          a: "It helps to have your current resume or CV ready, a list of roles or industries you are targeting, and any specific concerns or challenges you would like to discuss. The more context you share, the more useful the session will be.",
        },
        {
          q: "Can I request revisions to my resume after the initial draft?",
          a: "Yes. Each service plan includes a defined number of revision rounds. If you need additional revisions beyond what is included in your plan, these can be arranged at an additional cost. We will always be transparent about any extra charges before proceeding.",
        },
        {
          q: "How long does it take to receive a revised resume or LinkedIn profile?",
          a: "Turnaround times depend on your plan and current workload. We aim to provide initial drafts within 3–5 business days of receiving all required information from you. Timelines will be confirmed in writing before work begins.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing & Plans",
      items: [
        {
          q: "What plans do you offer?",
          a: "We offer several tiers of support — from a focused resume review to a comprehensive package covering resume, LinkedIn, application assistance, and interview preparation. You can see a full breakdown of our plans on the Plans page.",
        },
        {
          q: "Are there any hidden fees?",
          a: "No. All pricing is shown upfront. If any additional work is requested beyond your plan, we will provide a clear quote before starting. You are never charged for anything without prior written agreement.",
        },
        {
          q: "Do you offer refunds?",
          a: "Because our work involves significant time and expertise, we do not offer refunds once work has commenced. We strongly recommend reviewing your plan carefully and asking any questions before purchase. If you have concerns before work starts, please contact us.",
        },
        {
          q: "Can I upgrade my plan after I have already purchased?",
          a: "Yes, in most cases you can upgrade to a higher plan and pay only the difference. Contact us and we will work out the best option for your situation.",
        },
        {
          q: "Do you offer any discounts or concessions?",
          a: "We occasionally offer promotional pricing for early access, referrals, or specific cohorts. Sign up to our mailing list or follow us on social media for updates. We do not currently offer means-tested concessions, but we aim to keep our pricing accessible.",
        },
      ],
    },
  ];

// ── Component ────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white section-padding border-b-2 border-[#0a0a0a]">
        <div className="container-site">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-4">
            FAQ
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight max-w-2xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-[#a0a09a] text-lg max-w-xl leading-relaxed">
            Answers to the most common questions about our services, how we work,
            and what you can expect from us.
          </p>
        </div>
      </section>

      {/* ── Jump links ───────────────────────────────────────── */}
      <section className="py-6 border-b-2 border-[#0a0a0a] bg-white sticky top-0 z-10">
        <div className="container-site">
          <nav aria-label="FAQ categories" className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] border-2 border-[#0a0a0a] px-4 py-2 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-colors duration-150"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Categories & Questions ───────────────────────────── */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-padding border-b-2 border-[#0a0a0a] ${catIdx % 2 === 0 ? "bg-[#f4f3ef]" : "bg-white"
            }`}
        >
          <div className="container-site">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff] mb-3">
              {`${String(catIdx + 1).padStart(2, "0")} / 03`}
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight mb-10">
              {cat.title}
            </h2>

            <div className="max-w-3xl flex flex-col gap-0 border-t-2 border-[#0a0a0a]">
              {cat.items.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border-b-2 border-[#0a0a0a]"
                >
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-bold text-[#0a0a0a] hover:text-[#0066ff] transition-colors duration-150 select-none">
                    <span className="flex items-start gap-3">
                      <ArrowRight
                        className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-90 text-[#0066ff]"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-snug">{q}</span>
                    </span>
                  </summary>
                  <div className="pb-6 pl-8 pr-2">
                    <p className="text-[#6b6b6b] leading-relaxed text-sm">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding bg-[#0066ff]">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
                Still Have Questions?
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-tight text-white mb-3">
                We&rsquo;re Happy to Help
              </h2>
              <p className="text-white/80 max-w-lg leading-relaxed">
                If you didn&rsquo;t find the answer you were looking for, reach
                out directly or request a consultation and we&rsquo;ll get back to
                you within 2 business days.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <LinkButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Us
              </LinkButton>
              <LinkButton
                href="/consultation"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0066ff]"
              >
                <CalendarCheck className="w-4 h-4" />
                Book a Consultation
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
