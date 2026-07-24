import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Counters } from "@/components/site/Counters";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { PharmacyServices } from "@/components/site/PharmacyServices";
import { ClinicServices } from "@/components/site/ClinicServices";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { LocationHours } from "@/components/site/LocationHours";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "D P PHARMA — Pharmacy & Multispeciality Clinic in Bhubaneswar";
const DESCRIPTION =
  "D P Pharma is an integrated pharmacy and multispeciality clinic at SUM Hospital Campus-II, Phulnakhara, Bhubaneswar. Genuine medicines, specialist doctors and trusted healthcare — all under one roof.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Pharmacy", "LocalBusiness"],
  name: "D P PHARMA",
  description: DESCRIPTION,
  telephone: ["+917894558338", "+917978243634", "+917008661729"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ground Floor, Big Cup Cafe Campus, Phulnakhara, Near IMS & SUM Hospital-II, Pahal, Bhubaneswar, Odisha 751032",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  openingHours: [
    "Su 08:00-22:30",
    "Mo-Fr 08:00-23:00",
    "Sa 08:00-22:00",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.58",
    reviewCount: "200",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Counters />
        <About />
        <WhyChoose />
        <PharmacyServices />
        <ClinicServices />
        <Doctors />
        <Testimonials />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
