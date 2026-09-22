"use client";

import { useEffect, useRef } from "react";
import { statistics } from "./content";
import { Icon } from "./icons";
import styles from "./homepage.module.css";

export function StatsTrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | null = null;
    let holdTimer: number | null = null;
    let isVisible = false;
    let isCounting = false;

    const paint = (progress: number) => {
      statistics.forEach((stat, index) => {
        const node = valueRefs.current[index];
        if (node) node.textContent = `${Math.round(stat.value * progress)}${stat.suffix}`;
      });
    };

    const stopCycle = () => {
      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
      if (holdTimer !== null) {
        window.clearTimeout(holdTimer);
        holdTimer = null;
      }
      isCounting = false;
    };

    const startCount = () => {
      if (!isVisible || preference.matches || isCounting) return;

      isCounting = true;
      paint(0);
      let started: number | null = null;

      const tick = (time: number) => {
        started ??= time;
        const elapsed = Math.min((time - started) / 3000, 1);
        paint(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) {
          frame = requestAnimationFrame(tick);
          return;
        }

        frame = null;
        isCounting = false;
        if (isVisible && !preference.matches) {
          holdTimer = window.setTimeout(() => {
            holdTimer = null;
            startCount();
          }, 30000);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const handleMotionChange = () => {
      stopCycle();
      if (preference.matches) {
        paint(1);
      } else {
        startCount();
      }
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
          if (preference.matches) {
            stopCycle();
            paint(1);
          } else if (isVisible) {
            startCount();
          } else {
            stopCycle();
          }
        }, { threshold: 0.3 })
      : null;

    if (preference.matches) {
      paint(1);
    }

    if (observer) {
      observer.observe(element);
    } else if (!preference.matches) {
      isVisible = true;
      startCount();
    }

    preference.addEventListener("change", handleMotionChange);
    return () => {
      observer?.disconnect();
      stopCycle();
      preference.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <section ref={ref} className={styles.statsStrip} aria-label="Crestavia in numbers">
      <div className={styles.container + " " + styles.statsInner}>
        <dl className={styles.stats}>
          {statistics.map((stat, index) => (
            <div className={styles.stat} key={stat.label}>
              <Icon name={stat.icon} />
              <div>
                <dt>{stat.label}</dt>
                <dd><span className={styles.srOnly}>{stat.value}{stat.suffix}</span><span aria-hidden="true" ref={(node) => { valueRefs.current[index] = node; }}>0{stat.suffix}</span></dd>
              </div>
            </div>
          ))}
        </dl>
        <div className={styles.trust}>
          <p>TRUSTED BY LEADING<br />ORGANISATIONS WORLDWIDE</p>
          <div className={styles.trustMarks} aria-label="Organisations Crestavia is trusted by">
            <span>Airbus</span>
            <span>HSBC</span>
            <span>Siemens</span>
            <span>Pfizer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
