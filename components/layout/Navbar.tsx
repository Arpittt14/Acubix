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
      className={`sticky top-0 z-50 w-full border-b-3 border-[#0a0a0a] transition-colors duration-200 ${
        scrolled ? "bg-[#f4f3ef]" : "bg-[#f4f3ef]"
      }`}
      style={{ borderBottomWidth: "3px", borderBottomStyle: "solid", borderBottomColor: "#0a0a0a" }}
    >
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
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
                  className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] ${
                    isActive
                      ? "text-[#0066ff]"
                      : "text-[#0a0a0a] hover:text-[#0066ff]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-[#0066ff]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/sign-in"
              className="text-sm font-semibold tracking-wide uppercase text-[#0a0a0a] hover:text-[#0066ff] transition-colors duration-150 px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] rounded-sm"
            >
              Login
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-[#0066ff] text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 border-2 border-[#0a0a0a] shadow-[3px_3px_0_#0a0a0a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a] focus-visible:ring-offset-2"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-[#0a0a0a] bg-white hover:bg-[#0066ff] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff]"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className="md:hidden border-t-2 border-[#0a0a0a] bg-[#f4f3ef]"
        >
          <nav className="container-site py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] ${
                    isActive
                      ? "border-[#0066ff] bg-[#0066ff] text-white"
                      : "border-transparent text-[#0a0a0a] hover:border-[#0a0a0a] hover:bg-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t-2 border-[#0a0a0a] flex flex-col gap-2">
              <Link
                href="/auth/sign-in"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 border-[#0a0a0a] text-center hover:bg-white transition-colors duration-150"
              >
                Login
              </Link>
              <Link
                href="/consultation"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider border-2 border-[#0a0a0a] bg-[#0066ff] text-white text-center shadow-[3px_3px_0_#0a0a0a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
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
