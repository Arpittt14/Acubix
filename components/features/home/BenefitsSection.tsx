
import { LinkButton } from "@/components/ui/Button";
import {
  Eye,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  BarChart2,
  Clock,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "You can see every application, status update, and note in your dashboard in real time.",
  },
  {
    icon: CheckCircle,
    title: "Your Approval, Always",
    description:
      "No application is submitted without your confirmed authorisation. You remain in control.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Message your support team directly. Ask questions, request updates, and share feedback at any time.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate Representation",
    description:
      "We use only accurate, approved information. We never exaggerate your qualifications or experience.",
  },
  {
    icon: BarChart2,
    title: "Structured Progress Reports",
    description:
      "Regular progress updates keep you informed of activity, outcomes, and next steps.",
  },
  {
    icon: Clock,
    title: "Fixed Engagement Period",
    description:
      "Clear start and end dates with defined deliverables. No ambiguous open-ended commitments.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="section-padding bg-[#F5F0E8] border-b-2 border-[#171717]"
      aria-labelledby="benefits-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D71920]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">
                Why Choose Us
              </span>
            </div>
            <h2
              id="benefits-heading"
              className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#171717] mb-6"
            >
              You Stay
              <br />
              Informed and
              <br />
              In Control.
            </h2>
            <p className="text-[#171717] text-base leading-relaxed mb-8">
              We believe clients should understand and approve every step of
              their job search. Our platform and process are designed to keep
              you involved — not just updated.
            </p>
            <LinkButton href="/about" variant="outline" size="md">
              About Our Approach
            </LinkButton>
          </div>

          {/* Right: benefits grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#171717] border-2 border-[#171717]">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#F5F0E8] hover:bg-white transition-colors duration-200 p-6 group"
              >
                <div className="w-9 h-9 border-2 border-[#171717] flex items-center justify-center bg-white group-hover:bg-[#D71920] group-hover:border-[#D71920] transition-colors duration-200 mb-4">
                  <Icon
                    size={16}
                    className="text-[#171717] group-hover:text-[#F5F0E8] transition-colors duration-200"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#171717] mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
