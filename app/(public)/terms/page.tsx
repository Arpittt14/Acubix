import type { Metadata } from "next";
import { AlertTriangle, FileText, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions governing the use of A Cube Tech Solutions career support services.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    id: "introduction",
    heading: "1. Introduction and Acceptance",
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by
          A Cube Tech Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By purchasing a plan or engaging
          our services, you (&quot;client&quot;, &quot;you&quot;) agree to be bound by these Terms.
        </p>
        <p className="mt-3">
          Please read these Terms carefully before purchasing. If you do not agree, do not proceed.
          We recommend retaining a copy of these Terms for your records.
        </p>
      </>
    ),
  },
  {
    id: "services",
    heading: "2. Services Provided",
    content: (
      <>
        <p>
          A Cube Tech Solutions provides career consulting services for international students and
          graduates, which may include:
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Resume and CV optimisation (ATS-friendly formatting and content review)",
            "LinkedIn profile optimisation and branding",
            "Cover letter preparation (templates or individual)",
            "Personalised job-search strategy",
            "Job application management (submitted only with your explicit authorisation)",
            "Application tracking and progress reporting",
            "Mock interview sessions (Professional and Elite plans)",
            "Networking message templates and employer research",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Specific deliverables depend on the plan purchased. Full plan details are available on our
          Plans &amp; Pricing page.
        </p>
      </>
    ),
  },
  {
    id: "client-obligations",
    heading: "3. Client Obligations",
    content: (
      <>
        <p>You agree to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Provide accurate and complete information about your qualifications, work history, and experience",
            "Not ask us to misrepresent, exaggerate, or fabricate any details in your application materials",
            "Review and explicitly authorise each job application before it is submitted on your behalf",
            "Respond to our communications in a timely manner to avoid delays to your service",
            "Cooperate fully throughout the engagement period",
            "Notify us promptly if your circumstances change (e.g. you accept a job offer, withdraw from the market)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "our-obligations",
    heading: "4. What We Will Do",
    content: (
      <>
        <p>We commit to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Deliver the services described in your chosen plan with professional diligence",
            "Communicate progress regularly and respond to your enquiries in a timely manner",
            "Seek your explicit authorisation before submitting any job application",
            "Use only accurate, client-approved information in all materials",
            "Inform you if we are unable to complete any agreed deliverable and explain the reason",
            "Handle your personal information in accordance with our Privacy Policy",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 bg-[#0066ff] shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    heading: "5. Payment",
    content: (
      <>
        <p>
          All plans are priced as a one-time fee payable at the time of purchase. Prices are listed
          in Australian Dollars (AUD) and are subject to change without notice. The price applicable
          to your engagement is the price confirmed at the time of purchase.
        </p>
        <p className="mt-3">
          Payment does not constitute a guarantee of any employment, interview, visa, or salary
          outcome. You are paying for professional career consulting services — not for a guaranteed
          result.
        </p>
      </>
    ),
  },
  {
    id: "application-limits",
    heading: "6. Application Limits",
    content: (
      <p>
        Application limits stated in each plan (e.g. &quot;up to 40 applications&quot;) are subject to: (a)
        suitable vacancies existing in your agreed target market during your engagement period; (b)
        your eligibility for each role; (c) your timely approval of each application; and (d) the
        agreed scope of your engagement. We will not submit applications to roles for which you are
        clearly ineligible, nor will we inflate application counts with unsuitable roles.
      </p>
    ),
  },
  {
    id: "no-guarantee",
    heading: "7. No Guarantee",
    content: (
      <>
        <p className="font-semibold text-[#0a0a0a]">
          We make no guarantee of any employment outcome, job interview, visa approval, salary
          outcome, or any other specific result.
        </p>
        <p className="mt-3">
          Outcomes depend on employer decisions, market conditions, visa requirements, your
          eligibility, and many factors entirely outside our control. Our service is the delivery of
          professional career support — not the guarantee of a particular result. This is a fixed
          deliverable service, not a contingency arrangement.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "8. Intellectual Property",
    content: (
      <>
        <p>
          All resume content, cover letters, and other materials we prepare are based on information
          you provide. Upon full payment, you own the final materials we deliver for your personal
          professional use. Our underlying templates, tools, processes, and methodologies remain our
          intellectual property.
        </p>
        <p className="mt-3">
          You may not resell, sublicense, or commercially exploit materials we prepare on your behalf.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "9. Limitation of Liability",
    content: (
      <>
        <p className="text-[#6b6b6b] text-xs italic mb-2">
          [DRAFT — This section requires review by a qualified legal professional for each target
          market. Consumer protection laws (e.g. Australian Consumer Law, UK Consumer Rights Act)
          may limit the extent to which liability can be excluded.]
        </p>
        <p>
          To the maximum extent permitted by applicable law, our total liability to you for any claim
          arising out of or relating to these Terms or our services shall not exceed the total amount
          paid by you for the relevant engagement. We are not liable for indirect, consequential,
          incidental, or punitive damages.
        </p>
        <p className="mt-3">
          Nothing in these Terms limits any rights you have under applicable consumer protection
          legislation that cannot be excluded by agreement.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "10. Termination",
    content: (
      <>
        <p>
          Either party may terminate this engagement by written notice. If you terminate before
          service commencement, our refund policy applies (see Refund Policy). If you terminate after
          service commencement, any refund will be assessed at our discretion based on work
          completed.
        </p>
        <p className="mt-3">
          We reserve the right to terminate the engagement if you breach these Terms — in particular
          if you provide inaccurate information, withdraw cooperation, or ask us to act unethically
          or unlawfully.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "11. Governing Law",
    content: (
      <>
        <p className="text-[#6b6b6b] text-xs italic mb-2">
          [DRAFT — Governing law must be reviewed per target market (AU, CA, UK, US, NZ). This
          section is a placeholder only.]
        </p>
        <p>
          These Terms are governed by the laws of [jurisdiction — to be determined per market].
          Disputes shall be resolved in the courts of that jurisdiction. In markets where consumer
          protection legislation provides mandatory rights, those rights are not affected by any
          governing-law clause.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "12. Contact",
    content: (
      <p>
        For any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:legal@acubetechsolutions.com"
          className="text-[#0066ff] underline hover:no-underline"
        >
          legal@acubetechsolutions.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
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
                <FileText size={20} className="text-[#0066ff]" />
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight">
                Terms &amp; Conditions
              </h1>
            </div>
            <p className="text-[#a0a09a] text-base leading-relaxed">
              Please read these terms carefully before purchasing or using our services.
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
                  <p className="text-sm font-bold text-[#0a0a0a] mb-1">Legal Questions?</p>
                  <p className="text-sm text-[#6b6b6b]">
                    Contact us at{" "}
                    <a
                      href="mailto:legal@acubetechsolutions.com"
                      className="text-[#0066ff] underline hover:no-underline"
                    >
                      legal@acubetechsolutions.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/privacy" variant="outline" size="sm">
                Privacy Policy
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
