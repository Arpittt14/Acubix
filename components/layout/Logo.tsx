import Link from "next/link";

interface LogoProps {
  /** Show just the cube mark without the wordmark */
  markOnly?: boolean;
  /** Override link href — default is "/" */
  href?: string;
  className?: string;
}

/**
 * Geometric cube mark + "A CUBE TECH SOLUTIONS" wordmark.
 * The cube is drawn purely in SVG — no external images required.
 */
export default function Logo({
  markOnly = false,
  href = "/",
  className = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] rounded-sm ${className}`}
      aria-label="A Cube Tech Solutions — home"
    >
      {/* ── Cube mark ── */}
      <CubeMark />

      {/* ── Wordmark ── */}
      {!markOnly && (
        <span
          className="text-[#0a0a0a] font-bold tracking-tight leading-none"
          aria-hidden="true"
        >
          <span className="block text-[11px] tracking-[0.2em] uppercase text-[#0066ff] font-semibold">
            A CUBE
          </span>
          <span className="block text-[15px] tracking-[0.08em] uppercase">
            TECH SOLUTIONS
          </span>
        </span>
      )}
    </Link>
  );
}

/** Standalone reusable cube SVG mark */
export function CubeMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bottom-left face (dark) */}
      <polygon points="1,13 18,22 18,35 1,26" fill="#0a0a0a" />
      {/* Bottom-right face (blue) */}
      <polygon points="35,13 18,22 18,35 35,26" fill="#0066ff" />
      {/* Top face (off-white) */}
      <polygon
        points="18,1 1,10 18,19 35,10"
        fill="#f4f3ef"
        stroke="#0a0a0a"
        strokeWidth="1.5"
      />
      {/* Top-face inner lines for depth */}
      <line
        x1="18"
        y1="1"
        x2="18"
        y2="19"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
    </svg>
  );
}
