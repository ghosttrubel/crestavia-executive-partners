import Image from "next/image";
import Link from "next/link";
import { testimonialPlaceholder } from "./content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import styles from "./homepage.module.css";

export function TestimonialCta() {
  return (
    <Reveal>
      <section className={styles.testimonialSplit} aria-label="Leadership perspectives and contact">
        <div className={styles.testimonial}>
          <div className={styles.portrait}>
            <Image src="/images/homepage/executive-portrait.jpg" alt="Illustrative executive portrait; not a client testimonial contributor" fill sizes="(max-width: 480px) 100vw, (max-width: 1000px) 40vw, 20vw" />
          </div>
          <div className={styles.quotePanel}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <p className={styles.placeholderLabel}>{testimonialPlaceholder.label}</p>
            <blockquote><p>{testimonialPlaceholder.quote}</p><footer>{testimonialPlaceholder.attribution}<span>{testimonialPlaceholder.organisation}</span></footer></blockquote>
            <div className={styles.quoteDots} aria-hidden="true"><i /><i /><i /></div>
          </div>
        </div>
        <div className={styles.contactCta}>
          <Image className={styles.mountains} src="/images/homepage/mountains.jpg" alt="" fill sizes="50vw" />
          <div className={styles.ctaContent}>
            <p className={styles.eyebrow}>LET&apos;S BUILD TOMORROW</p>
            <h2 className={styles.heading}>Ready to find exceptional<br />leadership for your organisation?</h2>
            <Link className={styles.redButton} href="/contact" prefetch={false}>Get in Touch <Icon name="arrow" /></Link>
          </div>
          <p className={styles.ctaStatement}>A STRONGER<br />TOMORROW<br />STARTS HERE.</p>
        </div>
      </section>
    </Reveal>
  );
}
