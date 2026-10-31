"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Clock, Info } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  targetCountry: z.enum(
    [
      "Australia",
      "Canada",
      "United Kingdom",
      "United States",
      "New Zealand",
      "Other",
    ],
    { error: "Please select a target country." }
  ),
  graduationStatus: z.enum(
    [
      "Current student - graduating within 6 months",
      "Recent graduate - within 1 year",
      "Graduate - 1-3 years ago",
      "Other",
    ],
    { error: "Please select your graduation status." }
  ),
  careerField: z.string().min(2, "Career field must be at least 2 characters."),
  preferredContact: z.enum(["Email", "Phone", "Video call"], {
    error: "Please select a preferred contact method.",
  }),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(3000, "Message must be under 3000 characters."),
  consent: z.literal(true, {
    error:
      "You must acknowledge that booking is not confirmed until you receive a confirmation email.",
  }),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

type FormState = "idle" | "submitting" | "success" | "error";

function SelectField({
  id,
  label,
  required,
  error,
  children,
  defaultValue,
  ...rest
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  defaultValue?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#0066ff]" aria-label="required">
            *
          </span>
        )}
      </label>
      <select
        id={id}
        defaultValue={defaultValue}
        className={`w-full px-4 py-3 bg-white border-2 text-[#0a0a0a] text-sm font-medium transition-all duration-150 focus:outline-none focus:border-[#0066ff] focus:shadow-[0_0_0_1px_#0066ff] appearance-none ${
          error ? "border-red-500" : "border-[#0a0a0a]"
        }`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-600 font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ConsultationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  async function onSubmit(data: ConsultationFormData) {
    setFormState("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/consultation", {
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
      <div className="border-2 border-[#0a0a0a] bg-white p-8 md:p-12 shadow-[4px_4px_0_#0a0a0a]">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#0066ff] border-2 border-[#0a0a0a] flex items-center justify-center shadow-[4px_4px_0_#0a0a0a]">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-black tracking-tight mb-3 text-center">
          Request Received
        </h3>
        <p className="text-[#6b6b6b] mb-4 max-w-lg mx-auto text-center">
          Your consultation request has been received. We will contact you within{" "}
          <strong className="text-[#0a0a0a]">2 business days</strong> to confirm
          availability and discuss your goals.
        </p>
        <div className="max-w-lg mx-auto flex items-start gap-3 p-4 border-2 border-[#0066ff] bg-[#e6f0ff] mb-6">
          <Info className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#0a0a0a]">
            <strong>Important:</strong> Your consultation is not confirmed until you
            receive a confirmation email from us.
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => setFormState("idle")}
            className="text-[#0066ff] font-bold text-sm uppercase tracking-widest hover:underline"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="firstName"
          label="First Name"
          placeholder="Jane"
          required
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <Input
          id="lastName"
          label="Last Name"
          placeholder="Smith"
          required
          error={errors.lastName?.message}
          {...register("lastName")}
        />
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="email"
          type="email"
          label="Email Address"
          placeholder="jane@example.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="+61 400 000 000"
          hint="Optional — include country code"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      {/* Target country */}
      <SelectField
        id="targetCountry"
        label="Target Country"
        required
        error={errors.targetCountry?.message}
        {...register("targetCountry")}
      >
        <option value="" disabled>
          — Select a country —
        </option>
        <option value="Australia">Australia</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Other">Other</option>
      </SelectField>

      {/* Graduation status */}
      <SelectField
        id="graduationStatus"
        label="Graduation Status"
        required
        error={errors.graduationStatus?.message}
        {...register("graduationStatus")}
      >
        <option value="" disabled>
          — Select your status —
        </option>
        <option value="Current student - graduating within 6 months">
          Current student — graduating within 6 months
        </option>
        <option value="Recent graduate - within 1 year">
          Recent graduate — within 1 year
        </option>
        <option value="Graduate - 1-3 years ago">
          Graduate — 1–3 years ago
        </option>
        <option value="Other">Other</option>
      </SelectField>

      {/* Career field */}
      <Input
        id="careerField"
        label="Career Field"
        placeholder="e.g. Software Engineering, Accounting, Nursing"
        required
        hint="Enter your primary area of study or work."
        error={errors.careerField?.message}
        {...register("careerField")}
      />

      {/* Preferred contact */}
      <SelectField
        id="preferredContact"
        label="Preferred Contact Method"
        required
        error={errors.preferredContact?.message}
        {...register("preferredContact")}
      >
        <option value="" disabled>
          — Select a method —
        </option>
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="Video call">Video call</option>
      </SelectField>

      {/* Message */}
      <Textarea
        id="message"
        label="What are you hoping to achieve?"
        placeholder="Tell us about your current situation, your goals, and any specific challenges you're facing…"
        required
        rows={5}
        error={errors.message?.message}
        hint="Minimum 10 characters. This helps us prepare for your consultation."
        {...register("message")}
      />

      {/* Consent checkbox */}
      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 flex-shrink-0 border-2 border-[#0a0a0a] accent-[#0066ff] cursor-pointer"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-sm text-[#0a0a0a] leading-relaxed">
            I understand this form submits a consultation request. Booking is not
            confirmed until I receive a confirmation email.{" "}
            <span className="text-[#0066ff]" aria-label="required">
              *
            </span>
          </span>
        </label>
        {errors.consent && (
          <p
            id="consent-error"
            role="alert"
            className="text-xs text-red-600 font-semibold ml-8"
          >
            {errors.consent.message}
          </p>
        )}
      </div>

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
          loadingText="Submitting…"
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4" />
          Submit Request
        </Button>
        <p className="flex items-center gap-2 text-xs text-[#6b6b6b]">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          We will contact you within 2 business days.
        </p>
      </div>

      <p className="text-xs text-[#6b6b6b]">
        Your details are used solely to arrange and conduct your consultation.
        We do not share your information with third parties.
      </p>
    </form>
  );
}
