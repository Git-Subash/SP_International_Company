import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata: Metadata = {
  title: " SP International Services - Global Industrial Solutions Provider  ",
  description:
    "SP International Services (SP Co) offers a global presence in Pumps, Valves, Hydraulics, Solar Pumping Systems, and more. Solutions for industries like Oil & Gas, Water Management, Chemical Processing, and more. Trusted worldwide!",
  authors: [{ name: "Subash", url: "https://github.com/Git-Subash" }],
  keywords: [
    "SP International Services",
    "SP Co",
    "Trusted Worldwide",
    "Industrial Solutions Provider",
    "Global Industrial Services",
    "Your Trusted Partner",
    "Pumps",
    "Valves",
    "Actuators",
    "Pneumatics",
    "Hydraulics",
    "Oil & Gas Services",
    "Water Management",
    "Chemical Processing",
    "Welding Solutions",
    "Environment Services",
    "Solar Pumping Systems",
    "Power Generation Solutions",
    "HVAC Systems",
    "Water & Waste Water Sevices",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "sp-international-company.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col bg-cover bg-no-repeat">
          <Navbar />
          <ScrollToTop />
          {children}

          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}
