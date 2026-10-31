"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-sm">
      {/* Card */}
      <div className="border-2 border-[#0a0a0a] bg-white shadow-[6px_6px_0_#0a0a0a]">
        {/* Card header */}
        <div className="border-b-2 border-[#0a0a0a] px-8 py-6 flex flex-col items-center gap-4">
          <Logo />
          <h1 className="text-xl font-black tracking-tight text-[#0a0a0a]">Reset Password</h1>
        </div>

        {/* Form */}
        <form className="px-8 py-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <p className="text-xs text-[#6b6b6b] leading-relaxed">
            We&apos;ll send a reset link to your email address if an account exists.
          </p>

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <Button type="submit" variant="primary" size="md" className="w-full justify-center">
            Send Reset Link
          </Button>
        </form>

        {/* Footer */}
        <div className="border-t-2 border-[#0a0a0a] px-8 py-5 text-center">
          <p className="text-xs text-[#6b6b6b]">
            Remember your password?{" "}
            <Link
              href="/sign-in"
              className="text-[#0066ff] underline hover:no-underline font-semibold"
            >
              Back to sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
