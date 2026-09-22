import type { Metadata } from "next";
import { ServicesLandingPage } from "@/components/landing-pages";

export const metadata: Metadata = {
  title: "Leadership Services | Crestavia Executive Partners",
  description: "Explore Crestavia Executive Partners' executive search, board advisory, leadership advisory and talent intelligence services.",
  alternates: { canonical: "https://crestaviaexecutivepartners.org/services" },
  openGraph: { title: "Leadership Services | Crestavia Executive Partners", description: "Executive search and leadership advisory for pivotal decisions.", url: "https://crestaviaexecutivepartners.org/services", siteName: "Crestavia Executive Partners", type: "website" },
};
export default function ServicesPage() { return <ServicesLandingPage />; }
