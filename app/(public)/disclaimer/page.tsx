import type { Metadata } from "next";
import { AlertTriangle, AlertCircle, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about A Cube Tech Solutions career consulting services and limitations.",
  robots: { index: false, follow: false },
};

const POINTS = [
  {
    id: "no-employment",
    heading: "No Employment Guarantee",
    content:
      "A Cube Tech Solutions does not guarantee that use of our services will result in employment. We provide professional career support services — the decision to hire rests entirely with the employer. Employment outcomes depend on market conditions, employer requirements, your eligibility, and many factors outside our control.",
  },
  {
    id: "no-interview",
    heading: "No Interview Guarantee",
    content:
      "We do not guarantee that any job application submitted on your behalf will result in an interview invitation. Interview decisions are made solely by employers. While we work to present your profile professionally and apply to appropriate roles, we have no control over employer screening processes.",
  },
  {
    id: "no-visa",
    heading: "No Visa Guidance or Guarantee",
    content:
      "A Cube Tech Solutions is not a registered migration agent and does not provide migration, visa, or immigration advice. We do not assess your visa eligibility, advise on visa conditions, or guarantee any visa outcome. If you require immigration advice, you must consult a registered migration agent or immigration lawyer in your jurisdiction.",
  },
  {
    id: "employer-decisions",
    heading: "Application Outcomes Depend on Employer Decisions",
    content:
      "All hiring decisions, rejections, and offer outcomes are made at the sole discretion of the employer or recruiter. We have no relationship with, and make no representations about, any employer's hiring practices, timelines, or decision-making. We cannot influence or predict employer decisions.",
  },
  {
    id: "not-recruitment-agency",
    heading: "We Are Not a Recruitment Agency",
    content:
      "A Cube Tech Solutions is a career consulting service, not a recruitment or staffing agency in the legal or regulatory sense. We do not place candidates with employers for a placement fee paid by the employer. We are paid by clients for professional services. The regulatory definition of a recruitment agency may vary by jurisdiction — this distinction will be reviewed by legal counsel for each target market before commercial activation.",
  },
  {
    id: "general-information",
    heading: "Information Is General in Nature",
    content:
      "Any career advice, job-search strategies, resume guidance, or other information provided as part of our services is general in nature. It does not constitute legal advice, financial advice, or migration advice. We strongly encourage you to seek independent professional advice on matters of law, finance, taxation, or immigration as appropriate to your circumstances.",
  },
  {
    id: "client-provided-info",
    heading: "We Use Only Client-Provided Information",
    content:
      "All materials we prepare — resumes, cover letters, LinkedIn content, and application responses — are based solely on information you provide. We use that information accurately and do not exaggerate, invent, or misrepresent your qualifications or experience. However, we cannot independently verify third-party claims such as employer references, academic transcripts, or professional memberships. Providing false or misleading information is your responsibility and may have serious consequences.",
  },
  {
    id: "service-quality",
    heading: "Service Quality Does Not Guarantee Outcomes",
    content:
      "We work with professional diligence to deliver the services in your chosen plan. However, professional service quality does not guarantee any particular outcome. The job market is competitive and uncertain. A well-prepared resume does not guarantee an interview; a thorough application does not guarantee an offer. We are transparent about this limitation at every stage of our engagement.",
  },
];

export default function DisclaimerPage() {
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
                <AlertCircle size={20} className="text-[#0066ff]" />
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight">
                Disclaimer
              </h1>
            </div>
            <p className="text-[#a0a09a] text-base leading-relaxed">
              Important limitations and disclosures about our services. Please read carefully.
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

      {/* Key Callout */}
      <section className="border-b-2 border-[#0a0a0a] bg-[#0066ff] py-8">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p className="text-white font-black text-lg leading-snug">
              A Cube Tech Solutions does not guarantee employment, interviews, visa outcomes, or any
              specific career result. We provide professional consulting services — not guaranteed outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-b-2 border-[#0a0a0a] bg-[#f4f3ef]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-px bg-[#0a0a0a] border-2 border-[#0a0a0a]">
              {POINTS.map(({ id, heading, content }, idx) => (
                <div
                  key={id}
                  id={id}
                  className={`p-8 ${idx % 2 === 0 ? "bg-white" : "bg-[#f4f3ef]"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 border-2 border-[#0a0a0a] flex items-center justify-center shrink-0 bg-[#f4f3ef]">
                      <span className="text-xs font-black text-[#0066ff]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-sm font-black text-[#0a0a0a] mb-3 uppercase tracking-wide">
                        {heading}
                      </h2>
                      <p className="text-sm text-[#2a2a2a] leading-relaxed">{content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-10 p-6 border-2 border-[#0a0a0a] bg-white">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#0066ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0a0a0a] mb-1">Questions about this disclaimer?</p>
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
              <LinkButton href="/terms" variant="outline" size="sm">
                Terms &amp; Conditions
              </LinkButton>
              <LinkButton href="/privacy" variant="outline" size="sm">
                Privacy Policy
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
