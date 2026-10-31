
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do you guarantee that I will get a job or an interview?",
    a: "No. We do not guarantee employment, interviews, visa approval, or any specific outcome. We provide professional support to improve your profile and manage your search — but decisions about interviews and hiring are made entirely by employers.",
  },
  {
    q: "Who is this service designed for?",
    a: "Our services are designed for international students and recent graduates seeking employment in markets such as Australia, Canada, the United Kingdom, the United States, and New Zealand. Eligibility for roles in each market depends on your visa status, qualifications, and individual circumstances.",
  },
  {
    q: "Will you submit applications without my approval?",
    a: "Never. Every application requires your explicit authorisation before we proceed. You review each opportunity in your dashboard and confirm your approval. We do not act without your permission.",
  },
  {
    q: "What happens if suitable vacancies don't exist within my plan period?",
    a: "Application counts are subject to suitable vacancies existing in your agreed target market and role category. If we cannot identify enough relevant opportunities, we will inform you and discuss next steps. We do not fabricate vacancies or submit applications to unsuitable roles.",
  },
  {
    q: "What documents do I need to share?",
    a: "Typically your resume or CV, and optionally a LinkedIn URL and brief career summary. We do not ask for passport numbers, bank details, passwords for external job boards, or other unnecessary sensitive information.",
  },
  {
    q: "What is your refund policy?",
    a: "Our refund terms are set out in the Refund Policy page. These are draft terms that require legal review before publication. Please read them carefully before purchasing.",
  },
  {
    q: "How do I get started?",
    a: "Book a free consultation, discuss your goals, choose a plan that fits your situation, and complete onboarding. We walk you through each step.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding bg-[#F5F0E8] border-b-2 border-[#171717]"
      aria-labelledby="faq-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-0.5 bg-[#D71920]"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
                FAQ
              </span>
            </div>

            <h2
              id="faq-heading"
              className="text-[clamp(2rem,4vw,2.75rem)] font-black leading-[1.1] tracking-tight text-[#171717] mb-6"
            >
              Common
              <br />
              Questions.
            </h2>

            <p className="text-[#55514B] text-sm leading-relaxed">
              Honest answers to the questions we hear most. If yours isn&apos;t
              here,{" "}
              <a
                href="/faq"
                className="text-[#D71920] underline hover:no-underline"
              >
                visit our full FAQ
              </a>{" "}
              or{" "}
              <a
                href="/contact"
                className="text-[#D71920] underline hover:no-underline"
              >
                get in touch
              </a>
              .
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <dl className="divide-y-2 divide-[#C7C2B8] border-y-2 border-[#171717]">
              {FAQS.map(({ q, a }, idx) => {
                const isOpen = openIdx === idx;

                return (
                  <div key={idx}>
                    <dt>
                      <button
                        id={`faq-q-${idx}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${idx}`}
                        onClick={() =>
                          setOpenIdx(isOpen ? null : idx)
                        }
                        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] group"
                      >
                        <span className="text-sm font-bold text-[#171717] group-hover:text-[#D71920] transition-colors duration-150">
                          {q}
                        </span>

                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-[#77716A] group-hover:text-[#D71920] transition-transform duration-200 mt-0.5 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </dt>

                    <dd
                      id={`faq-a-${idx}`}
                      role="region"
                      aria-labelledby={`faq-q-${idx}`}
                      hidden={!isOpen}
                      className="pb-5"
                    >
                      <p className="text-sm text-[#55514B] leading-relaxed max-w-2xl">
                        {a}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
