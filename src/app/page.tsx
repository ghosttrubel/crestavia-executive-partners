import { SiteHeader } from "@/components/site-header";
import { HomepageHero } from "@/components/homepage-hero";
import { StatsTrustStrip } from "@/components/homepage/stats-trust-strip";
import { AboutPreview } from "@/components/homepage/about-preview";
import { ServicesSection } from "@/components/homepage/services-section";
import { SectorsSection } from "@/components/homepage/sectors-section";
import { ProcessSection } from "@/components/homepage/process-section";
import { TestimonialCta } from "@/components/homepage/testimonial-cta";
import { SiteFooter } from "@/components/homepage/site-footer";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HomepageHero />
        <StatsTrustStrip />
        <AboutPreview />
        <ServicesSection />
        <SectorsSection />
        <ProcessSection />
        <TestimonialCta />
      </main>
      <SiteFooter />
    </div>
  );
}
