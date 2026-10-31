import type { Metadata } from "next";
import { AlertTriangle, Shield, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How A Cube Tech Solutions collects, stores, and uses your personal information.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    id: "introduction",
    heading: "1. Introduction",
    content: (
      <>
        <p>
          A Cube Tech Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a career consulting service
          operating primarily for clients in Australia, Canada, the United Kingdom, the United
          States, and New Zealand. This Privacy Policy explains how we collect, use, store, and
          protect your personal information when you use our services or interact with our website.
        </p>
        <p className="mt-3">
          By engaging our services or providing us with personal information, you acknowledge that
          you have read and understood this policy. If you do not agree, please do not use our
          services.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "2. What Personal Data We Collect",
    content: (
      <>
        <p>We collect only the information necessary to deliver our services, including:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Full name",
            "Email address and contact details",
            "Resume content and career history (employment, education, skills)",
            "Documents you upload (e.g. transcripts, certifications, work samples)",
            "Communications and instructions you provide during our engagement",
            "Website usage data (via standard analytics — no personally identifiable browsing data is stored)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We do <strong>not</strong> collect payment card numbers directly (payments are handled by
          third-party processors), sensitive health information, or demographic data beyond what you
          voluntarily provide for your resume.
        </p>
      </>
    ),
  },
  {
    id: "why-we-collect",
    heading: "3. Why We Collect It",
    content: (
      <p>
        We collect personal data solely to deliver the career support services you have purchased —
        including resume preparation, LinkedIn profile optimisation, job application management, and
        progress reporting. We do not collect data for any other purpose. Data is not used for
        marketing to third parties, sold, or shared with advertisers.
      </p>
    ),
  },
  {
    id: "storage",
    heading: "4. How We Store It",
    content: (
      <>
        <p>
          Your data is stored securely using Supabase, a database platform hosted in Australia and/or
          the United States (depending on region). Data is encrypted at rest and in transit using
          industry-standard protocols (TLS and AES-256 encryption).
        </p>
        <p className="mt-3">
          Access to your data within our systems is restricted to authorised staff members involved in
          delivering your service. We apply access controls and audit logs to our database environment.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "5. Who We Share It With",
    content: (
      <>
        <p>We do not sell, rent, or trade your personal information. We share it only:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Internally — with staff directly working on your engagement",
            "With employers or recruiters — only with your explicit approval for each application",
            "With platform providers (e.g. Supabase, payment processors) as necessary infrastructure",
            "Where required by law or legal process",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">We do not share your information with third-party marketers.</p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "6. How Long We Keep It",
    content: (
      <p>
        We retain your personal information for the duration of your active engagement and for a
        reasonable period afterwards (typically up to 12 months) to handle any queries, disputes, or
        legal requirements. After that period, data is securely deleted unless we are required by law
        to retain it longer. You may request earlier deletion — see Section 7.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "7. Your Rights",
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Access the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data (subject to legal retention obligations)",
            "Object to or restrict processing of your data",
            "Receive your data in a portable format",
            "Lodge a complaint with your local data protection authority",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          Specific rights vary by jurisdiction (e.g. Australian Privacy Act, GDPR in the UK, PIPEDA in
          Canada, CCPA in California). This section will be updated once jurisdiction-specific legal
          review is complete.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "8. Privacy Contact",
    content: (
      <p>
        For any privacy-related requests, questions, or concerns, please contact us at{" "}
        <a
          href="mailto:privacy@acubetechsolutions.com"
          className="text-[#0066ff] underline hover:no-underline"
        >
          privacy@acubetechsolutions.com
        </a>
        . We aim to respond within 10 business days.
      </p>
    ),
  },
  {
    id: "markets",
    heading: "9. Jurisdiction-Specific Notes",
    content: (
      <>
        <p>
          This policy applies to clients across all markets we serve. However, privacy law differs
          significantly between jurisdictions:
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Australia — Australian Privacy Act 1988 and Australian Privacy Principles (APPs)",
            "Canada — Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial equivalents",
            "United Kingdom — UK GDPR and Data Protection Act 2018",
            "United States — varies by state (e.g. CCPA in California; no single federal law)",
            "New Zealand — Privacy Act 2020",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          This policy must be reviewed by a qualified legal professional for each target market before
          this service is offered commercially in that market.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
                <Shield size={20} className="text-[#0066ff]" />
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight">
                Privacy Policy
              </h1>
            </div>
            <p className="text-[#a0a09a] text-base leading-relaxed">
              How we collect, use, and protect your personal information.
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
                  <p className="text-sm font-bold text-[#0a0a0a] mb-1">Privacy Questions?</p>
                  <p className="text-sm text-[#6b6b6b]">
                    Contact us at{" "}
                    <a
                      href="mailto:privacy@acubetechsolutions.com"
                      className="text-[#0066ff] underline hover:no-underline"
                    >
                      privacy@acubetechsolutions.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/terms" variant="outline" size="sm">
                Terms &amp; Conditions
              </LinkButton>
              <LinkButton href="/disclaimer" variant="outline" size="sm">
                Disclaimer
              </LinkButton>
              <LinkButton href="/refund-policy" variant="outline" size="sm">
                Refund Policy
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
