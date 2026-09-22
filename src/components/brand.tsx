import Link from "next/link";
import styles from "./site-header.module.css";

export function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Crestavia Executive Partners — Home">
      <svg className={styles.brandMark} viewBox="0 0 64 50" fill="none" aria-hidden="true">
        <path d="M1 48 32 2l31 46H52L32 17 12 48Z" fill="currentColor" />
        <path d="m24 34 5-5 4 5 4-5 5 5-9 13Z" fill="var(--brand-red)" />
        <path d="m30 25 4-6 10 15-4 5Z" fill="#dce2e7" />
      </svg>
      <span className={styles.wordmark}>
        <span className={styles.brandName}>CRESTAVIA</span>
        <span className={styles.brandDescriptor}>EXECUTIVE PARTNERS</span>
      </span>
    </Link>
  );
}
