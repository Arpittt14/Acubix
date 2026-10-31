"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Mail, Clock } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.enum(
    ["General Enquiry", "Support", "Partnership", "Other"],
    { error: "Please select a subject." }
  ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
  website: z.string().max(0).optional(), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General Enquiry",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setFormState("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setFormState("success");
        reset();
      } else {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="border-2 border-[#0a0a0a] bg-white p-8 md:p-12 shadow-[4px_4px_0_#0a0a0a] text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#0066ff] border-2 border-[#0a0a0a] flex items-center justify-center shadow-[4px_4px_0_#0a0a0a]">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-black tracking-tight mb-3">
          Message Received
        </h3>
        <p className="text-[#6b6b6b] mb-6 max-w-md mx-auto">
          Thank you for reaching out. We aim to respond within{" "}
          <strong className="text-[#0a0a0a]">2 business days</strong>.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="text-[#0066ff] font-bold text-sm uppercase tracking-widest hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot — hidden from real users */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="name"
          label="Full Name"
          placeholder="Jane Smith"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          type="email"
          label="Email Address"
          placeholder="jane@example.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Subject select — hand-rolled to match design system */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a]"
        >
          Subject
          <span className="ml-1 text-[#0066ff]" aria-label="required">
            *
          </span>
        </label>
        <select
          id="subject"
          className={`w-full px-4 py-3 bg-white border-2 text-[#0a0a0a] text-sm font-medium transition-all duration-150 focus:outline-none focus:border-[#0066ff] focus:shadow-[0_0_0_1px_#0066ff] appearance-none ${
            errors.subject
              ? "border-red-500"
              : "border-[#0a0a0a]"
          }`}
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Support">Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-xs text-red-600 font-semibold">
            {errors.subject.message}
          </p>
        )}
      </div>

      <Textarea
        id="message"
        label="Message"
        placeholder="Tell us how we can help..."
        required
        rows={6}
        error={errors.message?.message}
        hint="Minimum 10 characters. Maximum 2000 characters."
        {...register("message")}
      />

      {formState === "error" && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 border-2 border-red-500 bg-red-50"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-medium">{serverError}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={formState === "submitting"}
          loadingText="Sending…"
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4" />
          Send Message
        </Button>
        <p className="flex items-center gap-2 text-xs text-[#6b6b6b]">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          We aim to respond within 2 business days.
        </p>
      </div>

      <p className="text-xs text-[#6b6b6b]">
        <Mail className="inline w-3.5 h-3.5 mr-1" />
        Your details are used solely to respond to your enquiry. We do not share
        your information with third parties.
      </p>
    </form>
  );
}
