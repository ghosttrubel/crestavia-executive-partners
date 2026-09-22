import Link from "next/link";
import { HeroCarousel, type HeroSlide } from "./hero-carousel";
import styles from "./hero.module.css";

const slides: readonly HeroSlide[] = [
  { src: "/images/hero/hero-executive-leadership.png", theme: "Executive Leadership", position: "center", crop: true },
  { src: "/images/hero/hero-board-advisory.png", theme: "Board & Strategic Advisory", position: "center 42%" },
  { src: "/images/hero/hero-global-search.png", theme: "Global Executive Search", position: "center 45%" },
];

export function HomepageHero() {
  return (
    <HeroCarousel slides={slides}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>PEOPLE <span>|</span> OPPORTUNITY <span>|</span> PROGRESS</p>
        <h1 id="hero-heading" className={styles.headline}>
          <span className={styles.headlineLine}>Exceptional</span>
          <span className={styles.headlineLine}>Leadership</span>
          <span className={styles.finalLine}>for a <span className={styles.accent}>Changing World.</span></span>
        </h1>
        <p className={styles.description}>
          We connect organisations with outstanding executive and board talent to drive sustainable growth, innovation and lasting impact.
        </p>
        <div className={styles.ctas}>
          <Link className={styles.primaryCta} href="/contact?enquiry=executive-search" prefetch={false}>
            Find Executive Talent
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
          </Link>
          <Link className={styles.secondaryCta} href="/careers" prefetch={false}>Explore Opportunities</Link>
        </div>
      </div>
      <p className={styles.statement}>RIGHT PEOPLE.<br />BRIGHTER<br />TOMORROW.</p>
    </HeroCarousel>
  );
}
