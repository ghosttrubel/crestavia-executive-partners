"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import styles from "./site-header.module.css";

// These destinations are reserved for pages to be implemented in later stages.
const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<"menu" | "search" | null>(null);
  const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const results = navigation.filter(({ label }) => label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    if (!panel) return;
    panelRef.current?.querySelector<HTMLElement>("input, a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanel(null);
        (panel === "search" ? searchButtonRef : menuButtonRef).current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setPanel(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [panel]);

  function renderLinks(items: readonly (typeof navigation)[number][]) {
    return items.map(({ label, href }) => (
      <li key={href}>
        <Link href={href} prefetch={false} className={styles.navLink}
          aria-current={(href === "/" ? pathname === href : pathname.startsWith(href)) ? "page" : undefined}
          onClick={() => setPanel(null)}>{label}</Link>
      </li>
    ));
  }

  return (
    <header className={styles.header} ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPanel(null);
      }}>
      <div className={styles.inner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul>{renderLinks(navigation)}</ul>
        </nav>
        <div className={styles.actions}>
          <button className={styles.iconButton} type="button" ref={searchButtonRef}
            aria-label={panel === "search" ? "Close search" : "Open search"}
            aria-expanded={panel === "search"} aria-controls="header-panel"
            onClick={() => { setQuery(""); setPanel(panel === "search" ? null : "search"); }}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /></svg>
          </button>
          <Link className={styles.contactButton} href="/contact" prefetch={false} onClick={() => setPanel(null)}>
            <span>Get in Touch</span><ArrowIcon />
          </Link>
          <button className={styles.iconButton + " " + styles.menuButton} type="button" ref={menuButtonRef}
            aria-label={panel === "menu" ? "Close menu" : "Open menu"}
            aria-expanded={panel === "menu"} aria-controls="header-panel"
            onClick={() => setPanel(panel === "menu" ? null : "menu")}>
            <span className={styles.menuLines} data-open={panel === "menu"} aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>
      <div id="header-panel" ref={panelRef} className={styles.panel} hidden={!panel}>
        {panel === "search" ? (
          <div>
            <label className={styles.searchLabel} htmlFor="navigation-search">Search navigation</label>
            <input id="navigation-search" className={styles.searchInput} type="search" autoComplete="off"
              placeholder="Search…" value={query} onChange={(event) => setQuery(event.target.value)} />
            <nav aria-label="Navigation search results"><ul className={styles.panelLinks}>{renderLinks(results)}</ul></nav>
            <p className={styles.searchStatus} role="status">{results.length === 0 ? "No matching pages." : results.length + (results.length === 1 ? " page found." : " pages found.")}</p>
          </div>
        ) : panel === "menu" ? (
          <nav aria-label="Expanded navigation">
            <ul className={styles.panelLinks}>{renderLinks(navigation)}</ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
