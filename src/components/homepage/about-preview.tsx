import Link from "next/link";
import { features } from "./content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import { StoryVideo } from "./story-video";
import styles from "./homepage.module.css";

export function AboutPreview() {
  return (
    <Reveal>
      <section id="about" className={styles.about} aria-labelledby="about-title">
        <div className={styles.container + " " + styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>ABOUT CRESTAVIA</p>
            <h2 id="about-title" className={styles.heading}>A Global Partner<br />in Executive Talent.</h2>
            <p className={styles.bodyCopy}>Crestavia Executive Partners is an independent executive search and advisory firm, working with organisations across global markets to identify, attract and support exceptional leadership talent.</p>
            <Link className={styles.redButton} href="/about" prefetch={false}>Our Story <Icon name="arrow" /></Link>
          </div>
          <div className={styles.storyImage}>
            <StoryVideo />
          </div>
          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature.title}>
                <Icon name={feature.icon} />
                <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}
