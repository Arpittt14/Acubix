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
      className="section-padding bg-[#f4f3ef] border-b-2 border-[#0a0a0a]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#0066ff]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">
                What We Do
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a]"
            >
              Every Service You
              <br />
              Need to Land the Role.
            </h2>
          </div>
          <div>
            <p className="text-[#2a2a2a] text-base leading-relaxed mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#0a0a0a] border-2 border-[#0a0a0a]">
          {SERVICES.map(({ icon: Icon, title, description, deliverables }) => (
            <div
              key={title}
              className="bg-[#f4f3ef] p-6 group hover:bg-white transition-colors duration-200 flex flex-col"
            >
              <div className="w-10 h-10 border-2 border-[#0a0a0a] flex items-center justify-center bg-white group-hover:bg-[#0066ff] group-hover:border-[#0066ff] transition-colors duration-200 mb-5">
                <Icon
                  size={18}
                  className="text-[#0a0a0a] group-hover:text-white transition-colors duration-200"
                />
              </div>
              <h3 className="text-sm font-bold text-[#0a0a0a] mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed mb-4 flex-1">
                {description}
              </p>
              <ul className="space-y-1">
                {deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-[10px] font-semibold uppercase tracking-wide text-[#0a0a0a] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#0066ff] shrink-0" aria-hidden="true" />
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
