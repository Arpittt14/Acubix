"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

// Note: metadata cannot be exported from a "use client" component.
// Move metadata to a parent server component or use generateMetadata if needed.

export default function SignInPage() {
  return (
    <div className="w-full max-w-sm">
      {/* Card */}
      <div className="border-2 border-[#0a0a0a] bg-white shadow-[6px_6px_0_#0a0a0a]">
        {/* Card header */}
        <div className="border-b-2 border-[#0a0a0a] px-8 py-6 flex flex-col items-center gap-4">
          <Logo />
          <h1 className="text-xl font-black tracking-tight text-[#0a0a0a]">Sign In</h1>
        </div>

        {/* Form */}
        <form className="px-8 py-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-[#0066ff] underline hover:no-underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full justify-center">
            Sign In
          </Button>
        </form>

        {/* Footer */}
        <div className="border-t-2 border-[#0a0a0a] px-8 py-5 text-center">
          <p className="text-xs text-[#6b6b6b]">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[#0066ff] underline hover:no-underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Legal links */}
      <div className="mt-6 text-center">
        <p className="text-xs text-[#a0a09a]">
          By signing in you agree to our{" "}
          <Link href="/terms" className="text-[#0066ff] underline hover:no-underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#0066ff] underline hover:no-underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
