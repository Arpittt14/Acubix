import type { Metadata } from "next";
import { AlertTriangle, BookOpen, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "A Cube Tech Solutions refund policy — how to request a refund and when refunds apply.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    id: "overview",
    heading: "1. Overview",
    content: (
      <p>
        A Cube Tech Solutions is committed to delivering the services described in your chosen plan
        in full and with professional diligence. We do not offer refunds as a routine matter —
        payment reflects a commitment to a fixed scope of service. However, we recognise that
        circumstances can change, and this policy sets out the conditions under which a refund may
        be considered.
      </p>
    ),
  },
  {
    id: "before-commencement",
    heading: "2. Cancellation Before Service Commencement",
    content: (
      <>
        <p>
          If you cancel your engagement <strong>before service commencement</strong> (i.e. before
          we have undertaken any substantive work on your behalf, including before your onboarding
          call or the delivery of any document), you may be eligible for a refund less an
          administrative fee.
        </p>
        <p className="mt-3 text-[#6b6b6b] text-xs italic">
          [DRAFT — Administrative fee amount to be determined and reviewed by legal counsel.
          Placeholder: a fee of approximately AUD $50–$100 may apply to cover administrative and
          payment processing costs. This figure has not been legally reviewed.]
        </p>
        <p className="mt-3">
          To cancel before commencement, you must notify us in writing within 48 hours of purchase
          and before any service work begins.
        </p>
      </>
    ),
  },
  {
    id: "after-commencement",
    heading: "3. Cancellation After Service Commencement",
    content: (
      <>
        <p>
          If you cancel <strong>after service has commenced</strong> — meaning after we have
          conducted your onboarding, begun preparing your documents, or submitted any job
          applications on your behalf — any refund will be assessed at our discretion, based on the
          proportion of work not yet completed.
        </p>
        <p className="mt-3 text-[#6b6b6b] text-xs italic">
          [DRAFT — A specific partial-refund formula has not yet been determined. Any refund
          calculation will be based on reasonable estimates of work completed vs. remaining
          deliverables. This section requires legal review before implementation.]
        </p>
        <p className="mt-3">
          We will provide a written assessment of completed work and any proposed refund amount
          within 10 business days of your cancellation request.
        </p>
      </>
    ),
  },
  {
    id: "no-refund",
    heading: "4. Circumstances Where Refunds May Not Apply",
    content: (
      <>
        <p>A refund may not be granted, or may be reduced, if:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "You withdraw your cooperation or fail to provide the information we need to deliver the service",
            "The information you provided was inaccurate, incomplete, or misleading",
            "You request materials or actions that fall outside the agreed scope",
            "Employment or interview outcomes were not achieved — as these are not guaranteed and are not grounds for a refund",
            "You breach these Terms or our Code of Conduct",
            "The engagement period expires due to your unresponsiveness",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-red-500 shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-to-request",
    heading: "5. How to Request a Refund",
    content: (
      <>
        <p>To request a refund, please contact us at:</p>
        <p className="mt-3">
          <a
            href="mailto:support@acubetechsolutions.com"
            className="text-[#0066ff] underline hover:no-underline"
          >
            support@acubetechsolutions.com
          </a>
        </p>
        <p className="mt-3">
          Please include your full name, the date of purchase, a description of your reason for
          requesting a refund, and any relevant supporting information. We will acknowledge your
          request within 3 business days.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    heading: "6. Processing Time",
    content: (
      <p>
        If a refund is approved, we aim to process it within 10–15 business days via the original
        payment method. Processing times may vary depending on your payment provider. We will notify
        you once the refund has been initiated.
      </p>
    ),
  },
  {
    id: "legal-note",
    heading: "7. Consumer Protection Laws",
    content: (
      <>
        <p className="text-[#6b6b6b] text-xs italic mb-3">
          [DRAFT — This section requires review before the service is offered commercially in any
          market.]
        </p>
        <p>
          Consumer protection laws vary significantly across our target markets. Nothing in this
          Refund Policy is intended to exclude, restrict, or modify any right or remedy that you
          have under applicable consumer protection legislation, including (but not limited to):
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Australia — Australian Consumer Law (ACL) consumer guarantees",
            "United Kingdom — Consumer Rights Act 2015",
            "Canada — applicable provincial consumer protection legislation",
            "United States — applicable state consumer protection laws",
            "New Zealand — Consumer Guarantees Act 1993",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          This policy will be updated following jurisdiction-specific legal review before commercial
          activation in each market.
        </p>
      </>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#0a0a0a] text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">Legal</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-[#0066ff] flex items-center justify-center shrink-0">
                <BookOpen size={20} className="text-[#0066ff]" />
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight">
                Refund Policy
              </h1>
            </div>
            <p className="text-[#a0a09a] text-base leading-relaxed">
              How to request a refund and the conditions that apply.
            </p>
          </div>
        </div>
      </section>

      {/* Draft Banner */}
      <div className="bg-amber-50 border-2 border-amber-400 p-4 mb-0">
        <p className="text-amber-800 text-sm font-semibold flex items-start gap-2">
          <AlertTriangle size={16} className="shrink-0 mt-0.5 text-amber-600" />
          <span>
            <strong>DRAFT — Not yet legally reviewed.</strong> This document has been prepared as a
            starting point and must be reviewed by a qualified legal professional before publication
            or reliance. It does not constitute legal advice.
          </span>
        </p>
      </div>

      {/* Content */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {SECTIONS.map(({ id, heading, content }) => (
                <div key={id} id={id} className="scroll-mt-8">
                  <h2 className="text-lg font-black text-[#0a0a0a] mb-4 pb-3 border-b-2 border-[#0a0a0a]">
                    {heading}
                  </h2>
                  <div className="text-[#2a2a2a] text-sm leading-relaxed">{content}</div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-12 p-6 border-2 border-[#0a0a0a] bg-white">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#0066ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0a0a0a] mb-1">Refund Enquiries</p>
                  <p className="text-sm text-[#6b6b6b]">
                    Email us at{" "}
                    <a
                      href="mailto:support@acubetechsolutions.com"
                      className="text-[#0066ff] underline hover:no-underline"
                    >
                      support@acubetechsolutions.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/terms" variant="outline" size="sm">
                Terms &amp; Conditions
              </LinkButton>
              <LinkButton href="/privacy" variant="outline" size="sm">
                Privacy Policy
              </LinkButton>
              <LinkButton href="/disclaimer" variant="outline" size="sm">
                Disclaimer
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
