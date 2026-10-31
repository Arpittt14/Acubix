"use client";

import { LinkButton } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f4f3ef] flex items-center justify-center p-6">
        <div className="max-w-md w-full border-2 border-[#0a0a0a] bg-white p-8 shadow-[6px_6px_0_#0a0a0a]">
          <div className="w-12 h-12 border-2 border-[#0a0a0a] bg-red-50 flex items-center justify-center mb-6">
            <AlertTriangle size={22} className="text-red-600" />
          </div>
          <h1 className="text-xl font-black text-[#0a0a0a] mb-2 tracking-tight">
            Something went wrong.
          </h1>
          <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
            An unexpected error occurred. Please try again. If the problem
            persists, contact us.
            {error.digest && (
              <span className="block mt-2 font-mono text-xs text-[#a0a09a]">
                Error ID: {error.digest}
              </span>
            )}
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-[#0066ff] text-white text-sm font-bold uppercase border-2 border-[#0a0a0a] px-5 py-2.5 shadow-[3px_3px_0_#0a0a0a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 tracking-wider"
            >
              <RefreshCw size={14} /> Try Again
            </button>
            <LinkButton href="/" variant="outline" size="sm">
              Go Home
            </LinkButton>
          </div>
        </div>
      </body>
    </html>
  );
}

