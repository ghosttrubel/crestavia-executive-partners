import Link from "next/link";
import { processSteps } from "./content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import styles from "./homepage.module.css";

export function ProcessSection() {
  return (
    <Reveal>
      <section id="process" className={styles.process} aria-labelledby="process-title">
        <div className={styles.container + " " + styles.processGrid}>
          <div><p className={styles.eyebrow}>OUR PROCESS</p><h2 id="process-title" className={styles.heading}>A Structured Approach<br />for Better Outcomes.</h2></div>
          <Link className={styles.textLink + " " + styles.processLink} href="/about#our-process" prefetch={false}>Learn More <Icon name="arrow" /></Link>
          <ol className={styles.steps}>
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Reveal>
  );
}
