import Link from "next/link";
import { services } from "./content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import styles from "./homepage.module.css";

export function ServicesSection() {
  return (
    <Reveal>
      <section id="services" className={styles.services} aria-labelledby="services-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>OUR SERVICES</p><h2 id="services-title" className={styles.heading}>Tailored Solutions for Leadership Success.</h2></div>
            <Link className={styles.textLink} href="/services" prefetch={false}>View All Services <Icon name="arrow" /></Link>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link key={service.title} href={service.href} prefetch={false} className={styles.serviceCard}>
                <Icon name={service.icon} className={styles.serviceIcon} />
                <h3>{service.title}</h3><p>{service.description}</p>
                <span className={styles.outlineArrow}><Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
