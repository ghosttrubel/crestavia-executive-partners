import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Crestavia Executive Partners | Global Executive Search & Leadership Advisory",
  description: "Learn about Crestavia Executive Partners, an independent executive search and leadership advisory firm connecting organisations with exceptional executive and board talent across global markets.",
  alternates: {
    canonical: "https://crestaviaexecutivepartners.org/about",
  },
  openGraph: {
    title: "About Crestavia Executive Partners | Global Executive Search & Leadership Advisory",
    description: "Learn about Crestavia Executive Partners, an independent executive search and leadership advisory firm connecting organisations with exceptional executive and board talent across global markets.",
    url: "https://crestaviaexecutivepartners.org/about",
    siteName: "Crestavia Executive Partners",
    type: "website",
    images: [{
      url: "https://crestaviaexecutivepartners.org/images/hero/hero-executive-leadership.png",
      width: 1200,
      height: 800,
      alt: "Executive leadership meeting",
    }],
  },
};

export default function About() {
  return <AboutPage />;
}
