import Link from "next/link";
import { CubeMark } from "@/components/layout/Logo";
import { LinkButton } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] flex flex-col items-center justify-center px-6 text-center">
      {/* Cube watermark */}
      <div className="opacity-10 mb-8" aria-hidden="true">
        <CubeMark size={80} />
      </div>

      {/* Error code */}
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] mb-3">
        404 — Page Not Found
      </p>

      <h1 className="text-[clamp(2rem,8vw,4rem)] font-black leading-[1.1] tracking-tight text-[#0a0a0a] mb-4">
        This page doesn&apos;t exist.
      </h1>

      <p className="text-[#6b6b6b] max-w-md mb-10 text-base leading-relaxed">
        The page you&apos;re looking for may have been moved, renamed, or never existed.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <LinkButton href="/" variant="primary" size="md">
          <Home size={16} /> Go to Homepage
        </LinkButton>
        <LinkButton href="/contact" variant="outline" size="md">
          <ArrowLeft size={16} /> Contact Us
        </LinkButton>
      </div>

      {/* Quick nav */}
      <div className="mt-12 pt-8 border-t-2 border-[#e8e7e3] flex flex-wrap gap-6 justify-center text-sm">
        {[
          { href: "/services", label: "Services" },
          { href: "/plans", label: "Plans" },
          { href: "/about", label: "About" },
          { href: "/faq", label: "FAQ" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[#6b6b6b] hover:text-[#0066ff] font-semibold uppercase tracking-wide text-xs transition-colors duration-150"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

