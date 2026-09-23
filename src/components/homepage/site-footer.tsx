import Link from "next/link";
import { Brand } from "../brand";
import { quickLinks } from "./content";
import { Icon } from "./icons";
import { NewsletterPreview } from "./preview-interactions";
import styles from "./homepage.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container + " " + styles.footerGrid}>
        <div className={styles.footerBrand}>
          <Brand />
          <p>Leadership Today.<br />A Stronger Tomorrow.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Quick Links</h2>
          <ul>{quickLinks.map(([label, href]) => <li key={label}><Link href={href} prefetch={false}>{label}</Link></li>)}</ul>
        </nav>
        <div className={styles.footerContact}>
          <h2>Contact</h2>
          <a className={styles.contactLine} href="https://crestaviaexecutivepartners.org"><Icon name="globe" /><span>crestaviaexecutivepartners.org</span></a>
          <a className={styles.contactLine} href="tel:+18259499650"><Icon name="phone" /><span>+1 (825) 949-9650</span></a>
          <a className={styles.contactLine} href="mailto:info@crestaviaexecutivepartners.org"><Icon name="email" /><span>info@crestaviaexecutivepartners.org</span></a>
          <p className={styles.contactLine}><Icon name="pin" /><span>Global Reach<br />Local Insight</span></p>
          <span className={styles.linkedinPlaceholder} aria-label="LinkedIn — official company profile coming soon" title="Official LinkedIn profile coming soon"><Icon name="linkedin" /><span>LinkedIn · Coming soon</span></span>
        </div>
        <div className={styles.stayConnected}>
          <h2>Stay Connected</h2>
          <p>Get insights on leadership, talent<br />and industry trends.</p>
          <NewsletterPreview />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>© 2026 Crestavia Executive Partners. All rights reserved.</p>
          <nav aria-label="Legal"><Link href="/privacy" prefetch={false}>Privacy Policy</Link><Link href="/terms" prefetch={false}>Terms of Use</Link><Link href="/cookies" prefetch={false}>Cookie Policy</Link></nav>
          <a className={styles.backToTop} href="#top" aria-label="Back to top"><Icon name="arrow" /></a>
        </div>
      </div>
    </footer>
  );
}
