"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./hero.module.css";

export type HeroSlide = { src: string; theme: string; position: string; crop?: boolean };
type HeroCarouselProps = { slides: readonly HeroSlide[]; children: ReactNode };
const SLIDE_DURATION = 7000;

export function HeroCarousel({ slides, children }: HeroCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interaction, setInteraction] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const section = useRef<HTMLElement>(null);

  // Respect live motion/visibility preferences. Interaction restarts the timer.
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = true;
    function schedule() {
      clearTimeout(timer);
      if (paused || preference.matches || document.hidden || !visible || slides.length < 2) return;
      timer = setTimeout(() => {
        setActiveSlide((current) => (current + 1) % slides.length);
      }, SLIDE_DURATION);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: 0.15 });
    if (section.current) observer.observe(section.current);
    preference.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    schedule();
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      preference.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [activeSlide, interaction, paused, slides.length]);

  function selectSlide(index: number) {
    const next = (index + slides.length) % slides.length;
    setInteraction((value) => value + 1);
    setActiveSlide(next);
    setAnnouncement(`Slide ${next + 1} of ${slides.length}: ${slides[next].theme}`);
  }

  return (
    <section ref={section} className={styles.hero} aria-labelledby="hero-heading" aria-roledescription="carousel" data-active-slide={activeSlide}>
      <div className={styles.photography} aria-hidden="true">
        {slides.map((slide, index) => (
          <div key={slide.src} className={styles.slide} data-active={index === activeSlide} data-crop={slide.crop || undefined}>
            <Image src={slide.src} alt="" fill sizes={slide.crop ? "200vw" : "100vw"}
              preload={index === 0} loading={index === 0 ? undefined : "eager"}
              fetchPriority={index === 0 ? undefined : "low"}
              className={styles.photo} style={{ objectPosition: slide.position }} />
          </div>
        ))}
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.inner}>
        {children}
        <div className={styles.controls} role="group" aria-label="Hero slideshow controls"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              selectSlide(activeSlide + (event.key === "ArrowLeft" ? -1 : 1));
            }
          }}>
          <button type="button" className={styles.roundButton + " " + styles.rotationButton}
            aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"}
            onClick={() => { setPaused(!paused); setInteraction((value) => value + 1); }}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {paused ? <path d="m9 5 10 7-10 7Z" /> : <path d="M8 5v14M16 5v14" />}
            </svg>
          </button>
          <div className={styles.indicators}>
            {slides.map((slide, index) => (
              <button key={slide.src} type="button" className={styles.indicator}
                aria-label={`Show slide ${index + 1}: ${slide.theme}`} aria-pressed={activeSlide === index}
                onClick={() => selectSlide(index)}>{String(index + 1).padStart(2, "0")}</button>
            ))}
          </div>
          <button type="button" className={styles.roundButton} aria-label="Previous slide" onClick={() => selectSlide(activeSlide - 1)}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12H5m6-6-6 6 6 6" /></svg>
          </button>
          <button type="button" className={styles.roundButton} aria-label="Next slide" onClick={() => selectSlide(activeSlide + 1)}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>
      <p className={styles.screenReaderOnly} role="status" aria-atomic="true">{announcement}</p>
    </section>
  );
}
