import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/site-experiences";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crestavia Executive Partners",
  description: "Crestavia Executive Partners is an international executive search and leadership advisory firm supporting organisations through executive appointments, board advisory, leadership advisory and talent intelligence.",
  metadataBase: new URL("https://crestaviaexecutivepartners.org"),
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Crestavia Executive Partners",
    url: "https://crestaviaexecutivepartners.org",
    telephone: "+1-825-949-9650",
    email: "info@crestaviaexecutivepartners.org",
    description: "International executive search and leadership advisory supporting organisations through executive appointments, board advisory, leadership advisory and talent intelligence.",
    founder: {
      "@type": "Person",
      name: "Paul Murphy",
      url: "https://www.linkedin.com/in/paulmurphy72",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leadership services",
      itemListElement: [
        "Executive Search",
        "Board Advisory",
        "Leadership Advisory",
        "Talent Intelligence",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Crestavia Executive Partners",
    url: "https://crestaviaexecutivepartners.org/",
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
