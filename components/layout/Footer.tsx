import Link from "next/link";
import Logo from "./Logo";
import { Mail, Globe, ExternalLink } from "lucide-react";

// Copyright year — evaluated once at build/cache time
const FOUNDING_YEAR = 2024;
const CURRENT_YEAR = 2026; // Update annually or use build-time env

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
      className="border-t-3 border-[#0a0a0a] bg-[#0a0a0a] text-white"
      style={{ borderTopWidth: "3px", borderTopStyle: "solid", borderTopColor: "#0a0a0a" }}
    >
      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo href="/" className="invert" />
            </div>
            <p className="text-[#a0a09a] text-sm leading-relaxed mb-6">
              Practical career support for international graduates ready to take
              the next step in their professional journey.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#2a2a2a] text-[#a0a09a] hover:border-[#0066ff] hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
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
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#2a2a2a] text-[#a0a09a] hover:border-[#0066ff] hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
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
                  className="w-9 h-9 flex items-center justify-center border-2 border-[#2a2a2a] text-[#a0a09a] hover:border-[#0066ff] hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
                  aria-label="Instagram (opens in new tab)"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#a0a09a] text-sm hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066ff]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#a0a09a] text-sm hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066ff]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + contact column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#a0a09a] text-sm hover:text-[#0066ff] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066ff]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {contactEmail && (
              <div>
                <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-3">
                  Contact
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#a0a09a] text-sm hover:text-[#0066ff] transition-colors duration-150 break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066ff]"
                >
                  {contactEmail}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#666660] text-xs">
          <p>
            © {year} A Cube Tech Solutions. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Service outcomes are not guaranteed.{" "}
            <Link
              href="/disclaimer"
              className="underline hover:text-[#0066ff] transition-colors duration-150"
            >
              Read our disclaimer.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
