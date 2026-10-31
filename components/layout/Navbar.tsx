
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "bg-[#F5F0E8]" : "bg-[#F5F0E8]"
      }`}
      style={{
        borderBottomWidth: "3px",
        borderBottomStyle: "solid",
        borderBottomColor: "#171717",
      }}
    >
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] ${
                    isActive
                      ? "text-[#D71920]"
                      : "text-[#171717] hover:text-[#D71920]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}

                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-[#D71920]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/sign-in"
              className="text-sm font-semibold tracking-wide uppercase text-[#171717] hover:text-[#D71920] transition-colors duration-150 px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] rounded-sm"
            >
              Login
            </Link>

            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-[#D71920] text-[#F5F0E8] text-sm font-bold uppercase tracking-wider px-5 py-2.5 border-2 border-[#171717] shadow-[3px_3px_0_#171717] hover:bg-[#A81218] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] focus-visible:ring-offset-2"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-[#171717] bg-[#F5F0E8] text-[#171717] hover:bg-[#D71920] hover:text-[#F5F0E8] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className="md:hidden border-t-2 border-[#171717] bg-[#F5F0E8]"
        >
          <nav className="container-site py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] ${
                    isActive
                      ? "border-[#D71920] bg-[#D71920] text-[#F5F0E8]"
                      : "border-transparent text-[#171717] hover:border-[#C7C2B8] hover:bg-[#C7C2B8]/30"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t-2 border-[#C7C2B8] flex flex-col gap-2">
              <Link
                href="/auth/sign-in"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 border-[#171717] text-[#171717] text-center hover:bg-[#C7C2B8]/30 transition-colors duration-150"
              >
                Login
              </Link>

              <Link
                href="/consultation"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 border-[#171717] bg-[#D71920] text-[#F5F0E8] text-center shadow-[3px_3px_0_#171717] hover:bg-[#A81218] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
