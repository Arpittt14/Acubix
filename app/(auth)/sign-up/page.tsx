"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-sm">
      {/* Card */}
      <div className="border-2 border-[#0a0a0a] bg-white shadow-[6px_6px_0_#0a0a0a]">
        {/* Card header */}
        <div className="border-b-2 border-[#0a0a0a] px-8 py-6 flex flex-col items-center gap-4">
          <Logo />
          <h1 className="text-xl font-black tracking-tight text-[#0a0a0a]">Create Account</h1>
        </div>

        {/* Form */}
        <form className="px-8 py-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="first-name"
              type="text"
              label="First Name"
              placeholder="Jane"
              autoComplete="given-name"
              required
            />
            <Input
              id="last-name"
              type="text"
              label="Last Name"
              placeholder="Smith"
              autoComplete="family-name"
              required
            />
          </div>

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
            autoComplete="new-password"
            required
            hint="Use at least 8 characters."
          />

          <Input
            id="confirm-password"
            type="password"
            label="Confirm Password"
            placeholder="••••••••"
            autoComplete="new-password"
            required
          />

          {/* Consent checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 border-2 border-[#0a0a0a] accent-[#0066ff] shrink-0"
            />
            <span className="text-xs text-[#6b6b6b] leading-relaxed">
              I agree to the{" "}
              <Link href="/terms" className="text-[#0066ff] underline hover:no-underline font-semibold">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#0066ff] underline hover:no-underline font-semibold">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <Button type="submit" variant="primary" size="md" className="w-full justify-center">
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="border-t-2 border-[#0a0a0a] px-8 py-5 text-center">
          <p className="text-xs text-[#6b6b6b]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[#0066ff] underline hover:no-underline font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
