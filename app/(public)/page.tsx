import type { Metadata } from "next";
import HeroSection from "@/components/features/home/HeroSection";
import ServicesSection from "@/components/features/home/ServicesSection";
import HowItWorksSection from "@/components/features/home/HowItWorksSection";
import PricingSection from "@/components/features/home/PricingSection";
import BenefitsSection from "@/components/features/home/BenefitsSection";
import FaqSection from "@/components/features/home/FaqSection";
import CtaSection from "@/components/features/home/CtaSection";

export const metadata: Metadata = {
  title: "Acubix Technologies — Career Support for International Graduates",
  description:
    "Practical career support for graduates ready to take the next step. Improve your profile, discover relevant opportunities, and manage your job search with a clear plan.",
  openGraph: {
    title: "Acubix Technologies — Career Support for International Graduates",
    description:
      "Resume optimisation, LinkedIn branding, job applications, and interview preparation for international graduates.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <BenefitsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
