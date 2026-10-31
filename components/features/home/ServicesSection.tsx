
import {
  FileText,
  Briefcase,
  Search,
  Send,
  MessageSquare,
  Mic,
  Map,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const SERVICES = [
  {
    icon: FileText,
    title: "Resume & CV Optimisation",
    description:
      "ATS-friendly formatting and content strategy so your resume gets past automated filters and into human hands.",
    deliverables: ["ATS-formatted layout", "Keyword strategy", "Up to 5 versions"],
  },
  {
    icon: Briefcase,
    title: "LinkedIn Profile",
    description:
      "A professional profile that accurately represents your skills, attracts recruiters, and builds your personal brand.",
    deliverables: ["Headline & summary", "Skills optimisation", "Banner & photo guidance"],
  },
  {
    icon: Search,
    title: "Job Market Research",
    description:
      "We identify relevant vacancies matched to your profile, target market, and agreed search criteria.",
    deliverables: ["Role identification", "Employer research", "Market insights"],
  },
  {
    icon: Send,
    title: "Application Assistance",
    description:
      "We submit applications on your behalf — only with your explicit, confirmed authorisation for each role.",
    deliverables: ["Client approval required", "Tracked submissions", "Status updates"],
  },
  {
    icon: MessageSquare,
    title: "Cover Letters",
    description:
      "Professional cover letter templates and tailored letters for priority applications you approve.",
    deliverables: ["Templates included", "Tailored versions", "Tone matching"],
  },
  {
    icon: Mic,
    title: "Interview Preparation",
    description:
      "Structured mock interview sessions with real feedback to help you answer confidently and authentically.",
    deliverables: ["Mock sessions", "Feedback report", "Common Q&A bank"],
  },
  {
    icon: Map,
    title: "Career Strategy",
    description:
      "A personalised job-search plan that makes the most of your time, effort, and eligibility in your target market.",
    deliverables: ["Personalised plan", "Priority targets", "Weekly reviews"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-[#F5F0E8] border-b-2 border-[#171717]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
                What We Do
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#171717]"
            >
              Every Service You
              <br />
              Need to Land the Role.
            </h2>
          </div>
          <div>
            <p className="text-[#171717] text-base leading-relaxed mb-6">
              From your first resume overhaul to your final interview — we
              provide structured support at every stage of the job-search
              process. All services are delivered transparently, with your
              input and authorisation at every step.
            </p>
            <LinkButton href="/services" variant="outline" size="md">
              View Full Details
            </LinkButton>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#171717] border-2 border-[#171717]">
          {SERVICES.map(({ icon: Icon, title, description, deliverables }) => (
            <div
              key={title}
              className="bg-[#F5F0E8] p-6 group hover:bg-white transition-colors duration-200 flex flex-col"
            >
              <div className="w-10 h-10 border-2 border-[#171717] flex items-center justify-center bg-[#F5F0E8] group-hover:bg-[#D71920] group-hover:border-[#D71920] transition-colors duration-200 mb-5">
                <Icon
                  size={18}
                  className="text-[#171717] group-hover:text-[#F5F0E8] transition-colors duration-200"
                />
              </div>
              <h3 className="text-sm font-bold text-[#171717] mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-[#6B665E] leading-relaxed mb-4 flex-1">
                {description}
              </p>
              <ul className="space-y-1">
                {deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-[10px] font-semibold uppercase tracking-wide text-[#171717] flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 bg-[#D71920] shrink-0"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
