"use client";

import { useEffect, useRef, useState } from "react";
import { statistics } from "./content";
import { Icon } from "./icons";
import styles from "./homepage.module.css";

export function StatsTrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const finish = () => {
      if (preference.matches) {
        cancelAnimationFrame(frame);
        setProgress(1);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (preference.matches) return;
      let started: number | undefined;
      const tick = (time: number) => {
        started ??= time;
        const elapsed = Math.min((time - started) / 1750, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    observer.observe(element);
    preference.addEventListener("change", finish);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); preference.removeEventListener("change", finish); };
  }, []);

  return (
    <section ref={ref} className={styles.statsStrip} aria-label="Crestavia in numbers">
      <div className={styles.container + " " + styles.statsInner}>
        <dl className={styles.stats}>
          {statistics.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <Icon name={stat.icon} />
              <div>
                <dt>{stat.label}</dt>
                <dd><span className={styles.srOnly}>{stat.value}{stat.suffix}</span><span aria-hidden="true">{Math.round(stat.value * progress)}{stat.suffix}</span></dd>
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
