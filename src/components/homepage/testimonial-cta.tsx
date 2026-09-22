"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import styles from "./homepage.module.css";

const testimonials = [
  { quote: "Crestavia brought us an exceptional leader who has made a real difference to our business. Their insight, professionalism and global reach are outstanding.", name: "Chief Executive Officer", organisation: "FTSE 100 Organisation", service: "Executive Search" },
  { quote: "Crestavia understood the leadership profile we needed from the outset. Their executive search process was focused, discreet and well managed, ultimately helping us appoint a COO who aligned strongly with both our business priorities and leadership culture.", name: "Charlotte Barry", organisation: "CEO, Avela Group", service: "Executive Search" },
  { quote: "Crestavia has brought valuable perspective to our board and talent decisions. Their combination of Board Advisory and Talent Intelligence has helped us approach leadership planning with greater clarity, strengthen our decision-making and take a more informed view of the talent required for our future.", name: "Greta Henry", organisation: "CEO, JK Holdings", service: "Board Advisory & Talent Intelligence" },
] as const;

export function TestimonialCta() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const rotate = () => setIndex((current) => (current + 1) % testimonials.length);
  useEffect(() => { if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const timer = window.setInterval(rotate, 8000); return () => window.clearInterval(timer); }, [paused]);
  const goTo = (next: number) => { setPaused(true); setIndex((next + testimonials.length) % testimonials.length); };
  const testimonial = testimonials[index];
  return <Reveal><section className={styles.testimonialSplit} aria-label="Leadership perspectives and contact"><div className={styles.testimonial}><div className={styles.quotePanel} role="region" aria-roledescription="carousel" aria-label="Client testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={(event) => { startX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (startX.current === null) return; const distance = (event.changedTouches[0]?.clientX ?? startX.current) - startX.current; if (Math.abs(distance) > 40) goTo(index + (distance < 0 ? 1 : -1)); startX.current = null; }}><span className={styles.quoteMark} aria-hidden="true">“</span><p className={styles.placeholderLabel}>CLIENT PERSPECTIVE · {testimonial.service}</p><blockquote aria-live="polite"><p>{testimonial.quote}</p><footer>{testimonial.name}<span>{testimonial.organisation}</span></footer></blockquote><div className={styles.testimonialControls}><button type="button" onClick={() => goTo(index - 1)} aria-label="Previous testimonial">←</button><div className={styles.quoteDots}>{testimonials.map((item, dotIndex) => <button type="button" key={item.name} onClick={() => goTo(dotIndex)} aria-label={`Show testimonial ${dotIndex + 1}`} aria-current={dotIndex === index ? "true" : undefined} />)}</div><button type="button" onClick={() => goTo(index + 1)} aria-label="Next testimonial">→</button></div></div></div><div className={styles.contactCta}><div className={styles.ctaContent}><p className={styles.eyebrow}>LET&apos;S BUILD TOMORROW</p><h2 className={styles.heading}>Ready to find exceptional leadership for your organisation?</h2><Link className={styles.redButton} href="/contact" prefetch={false}>Get in Touch <Icon name="arrow" /></Link></div><p className={styles.ctaStatement}>A STRONGER<br />TOMORROW<br />STARTS HERE.</p></div></section></Reveal>;
}
