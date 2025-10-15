import type { SVGProps } from "react";

import FeaturedTreatmentsSection from "@/components/landing/featured-treatments";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero";
import HowItWorksSection from "@/components/landing/how-it-works";
import PartnerSection from "@/components/landing/partner";
import TrustSafetySection from "@/components/landing/trust-safety";

const heroStats = [
  { value: "200+ Clinics", label: "Verified and accredited worldwide" },
  { value: "15k+ Patients", label: "Treated with Clyna concierge support" },
  { value: "4.9/5 Rating", label: "Trusted by medical travelers globally" },
];

const howItWorksSteps = [
  {
    title: "Search & Compare Clinics",
    description:
      "Filter by specialty, destination, accreditation, and price to find the perfect clinic match.",
    icon: <SearchIcon className="h-5 w-5" />,
  },
  {
    title: "Book Treatments Securely",
    description:
      "Reserve all-inclusive packages with transparent pricing, secure payments, and dedicated support.",
    icon: <ShieldIcon className="h-5 w-5" />,
  },
  {
    title: "Travel & Get Care",
    description:
      "Coordinate travel, accommodation, and aftercare with multilingual care coordinators available 24/7.",
    icon: <PlaneIcon className="h-5 w-5" />,
  },
];

const featuredTreatments = [
  {
    title: "Hair Transplant in Turkey",
    description: "All-inclusive packages with top-rated surgeons in Istanbul.",
    image:
      "linear-gradient(135deg, rgba(13, 123, 234, 0.12), rgba(13, 123, 234, 0.45)), url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80')",
  },
  {
    title: "Dental Implants in Antalya",
    description: "Premium dental clinics with VIP travel coordination.",
    image:
      "linear-gradient(135deg, rgba(15, 118, 110, 0.15), rgba(13, 123, 234, 0.45)), url('https://images.unsplash.com/photo-1520012218364-4f3f63a048bd?auto=format&fit=crop&w=900&q=80')",
  },
  {
    title: "Plastic Surgery in Istanbul",
    description: "Accredited surgeons delivering world-class aesthetic results.",
    image:
      "linear-gradient(135deg, rgba(107, 70, 193, 0.14), rgba(13, 123, 234, 0.45)), url('https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=80')",
  },
];

const trustBadges = [
  {
    title: "Verified Clinics",
    description: "Strict accreditation and patient reviews for every partner clinic.",
  },
  {
    title: "Transparent Pricing",
    description: "Compare full-package pricing with no hidden fees or surprises.",
  },
  {
    title: "24/7 Support",
    description: "Dedicated care team supporting you before, during, and after treatment.",
  },
];

const testimonials = [
  {
    quote:
      "Clyna helped me compare clinics and secure my dental implants trip to Antalya in under a week.",
    name: "Sofia R.",
    location: "Berlin, Germany",
  },
  {
    quote:
      "Verified clinics and transparent pricing made my hair transplant journey stress-free.",
    name: "Mark A.",
    location: "London, UK",
  },
  {
    quote:
      "From booking to travel support, the Clyna team was with me every step of the way.",
    name: "Lina K.",
    location: "Dubai, UAE",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-16 md:pt-20">
      <HeroSection stats={heroStats} />
      <HowItWorksSection steps={howItWorksSteps} />
      <FeaturedTreatmentsSection treatments={featuredTreatments} />
      <TrustSafetySection badges={trustBadges} testimonials={testimonials} />
      <PartnerSection />
      <Footer />
    </main>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-2-2" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M19 4h-4l-3-2-3 2H5a1 1 0 0 0-1 1v7a11 11 0 0 0 9 11 11 11 0 0 0 9-11V5a1 1 0 0 0-1-1Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M10.5 21h3l2.5-5H22L13.5 3h-3L10 9H2l8.5 9Z" />
      <path d="M13.5 21v-5L7 9" />
    </svg>
  );
}
