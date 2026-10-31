import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A Cube Tech Solutions — Career Support for International Graduates",
    template: "%s | A Cube Tech Solutions",
  },
  description:
    "Practical career support for graduates ready to take the next step. Resume optimisation, LinkedIn branding, job applications, and interview preparation.",
  keywords: [
    "graduate job search",
    "international student career",
    "resume optimisation",
    "LinkedIn profile",
    "job application assistance",
    "career consulting",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "A Cube Tech Solutions",
    title: "A Cube Tech Solutions — Career Support for International Graduates",
    description:
      "Practical career support for graduates ready to take the next step.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Cube Tech Solutions",
    description: "Practical career support for international graduates.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f3ef] text-[#0a0a0a] antialiased">
        {children}
      </body>
    </html>
  );
}
