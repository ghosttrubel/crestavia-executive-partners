import type { Metadata } from "next";
import { SectorsLandingPage } from "@/components/landing-pages";

export const metadata: Metadata = {
  title: "Sectors | Crestavia Executive Partners",
  description: "Explore Crestavia Executive Partners' sector perspective across complex global markets.",
  alternates: { canonical: "https://crestaviaexecutivepartners.org/sectors" },
  openGraph: { title: "Sectors | Crestavia Executive Partners", description: "Specialist expertise and global perspective for leadership decisions.", url: "https://crestaviaexecutivepartners.org/sectors", siteName: "Crestavia Executive Partners", type: "website" },
};
export default function SectorsPage() { return <SectorsLandingPage />; }
