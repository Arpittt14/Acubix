
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Globe, ExternalLink } from "lucide-react";

// Copyright year
const FOUNDING_YEAR = 2024;
const CURRENT_YEAR = 2026;

const SERVICES_LINKS = [
  { href: "/services#resume", label: "Resume Optimisation" },
  { href: "/services#linkedin", label: "LinkedIn Profile" },
  { href: "/services#applications", label: "Job Applications" },
  { href: "/services#interviews", label: "Interview Prep" },
  { href: "/services#strategy", label: "Career Strategy" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/plans", label: "Our Plans" },
  { href: "/faq", label: "FAQ" },
  { href: "/consultation", label: "Book a Consultation" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const linkedIn = process.env.NEXT_PUBLIC_CONTACT_LINKEDIN;
  const instagram = process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM;
  const year = CURRENT_YEAR;

  return (
    <footer
      className="bg-[#171717] text-[#F5F0E8]"
      style={{
        borderTopWidth: "3px",
        borderTopStyle: "solid",
        borderTopColor: "#D71920",
      }}
    >
      {/* Main Footer Content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo href="/" className="[&_span]:!text-[#F5F0E8]" />
            </div>

            <p className="text-[#C7C2B8] text-sm leading-relaxed mb-6">
              Practical career support for international graduates ready to take
              the next step in their professional journey.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">

              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#C7C2B8]/30 text-[#C7C2B8] hover:border-[#D71920] hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
                  aria-label="Email us"
                >
                  <Mail size={16} />
                </a>
              )}

              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#C7C2B8]/30 text-[#C7C2B8] hover:border-[#D71920] hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  <Globe size={16} />
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#C7C2B8]/30 text-[#C7C2B8] hover:border-[#D71920] hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
                  aria-label="Instagram (opens in new tab)"
                >
                  <ExternalLink size={16} />
                </a>
              )}

            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#C7C2B8] text-sm hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D71920]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#C7C2B8] text-sm hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D71920]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact Column */}
          <div>
            <h3 className="text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Legal
            </h3>

            <ul className="space-y-3 mb-8">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#C7C2B8] text-sm hover:text-[#D71920] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D71920]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {contactEmail && (
              <div>
                <h3 className="text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.15em] mb-3">
                  Contact
                </h3>

                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#C7C2B8] text-sm hover:text-[#D71920] transition-colors duration-150 break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D71920]"
                >
                  {contactEmail}
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C7C2B8]/25">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#C7C2B8] text-xs">

          <p>
            © {year} Acubix Technologies. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Service outcomes are not guaranteed.{" "}
            <Link
              href="/disclaimer"
              className="underline hover:text-[#D71920] transition-colors duration-150"
            >
              Read our disclaimer.
            </Link>
          </p>

        </div>
      </div>
    </footer>
  );
}
