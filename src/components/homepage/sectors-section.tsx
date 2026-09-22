import Image from "next/image";
import Link from "next/link";
import { sectors } from "./content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import styles from "./homepage.module.css";

export function SectorsSection() {
  return (
    <Reveal>
      <section id="sectors" className={styles.sectors} aria-labelledby="sectors-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>SECTORS WE SERVE</p><h2 id="sectors-title" className={styles.heading}>Specialist Expertise. Global Impact.</h2></div>
            <Link className={styles.textLink} href="/sectors" prefetch={false}>Explore All Sectors <Icon name="arrow" /></Link>
          </div>
          <div className={styles.sectorGrid}>
            {sectors.map((sector) => (
              <Link key={sector.title} href={sector.href} prefetch={false} className={styles.sectorCard}>
                <div className={styles.sectorImage}><Image src={"/images/homepage/" + sector.image + ".jpg"} alt={sector.alt} fill sizes="(max-width: 480px) 90vw, (max-width: 700px) 44vw, (max-width: 1000px) 29vw, 15vw" /></div>
                <div className={styles.sectorLabel}><h3>{sector.title}</h3><span className={styles.yellowArrow}><Icon name="arrow" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
