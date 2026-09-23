import type { SVGProps } from "react";

export type IconName = "people" | "building" | "globe" | "star" | "target" | "growth" | "document" | "arrow" | "pin" | "phone" | "email" | "link" | "linkedin";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths = {
    people: <><circle cx="16" cy="8" r="4" fill="var(--icon-fill, none)" /><path d="M9 27v-5a7 7 0 0 1 14 0v5M9 10a3 3 0 1 0-4 3M23 10a3 3 0 1 1 4 3M7 16a6 6 0 0 0-5 6v3h4m19-9a6 6 0 0 1 5 6v3h-4" /></>,
    building: <><path d="M7 29V3h18v26ZM3 29h26" fill="var(--icon-fill, none)" /><path d="M12 7h1m6 0h1m-8 5h1m6 0h1m-8 5h1m6 0h1m-8 12v-7h7v7" /></>,
    globe: <><circle cx="16" cy="16" r="13" fill="var(--icon-fill, none)" /><ellipse cx="16" cy="16" rx="6" ry="13" /><path d="M3 16h26M6 8c6 4 14 4 20 0M6 24c6-4 14-4 20 0" /></>,
    star: <path d="m16 3 4 8 9 1-6.5 6.5L24 28l-8-4.5L8 28l1.5-9.5L3 12l9-1Z" fill="var(--icon-fill, none)" />,
    target: <><circle cx="15" cy="17" r="12" /><circle cx="15" cy="17" r="7" /><circle cx="15" cy="17" r="2" /><path d="M15 17 28 4m-7-1v7h8" /></>,
    growth: <><path d="M4 28V18h5v10Zm10 0V10h5v18Zm10 0V3h5v25Z" fill="var(--icon-fill, none)" /></>,
    document: <><path d="M7 3h12l7 7v19H7Zm12 0v8h7" fill="var(--icon-fill, none)" /><path d="M11 15h10m-10 5h10m-10 5h7M3 7v23" /></>,
    arrow: <path d="M5 16h22m-8-8 8 8-8 8" />,
    pin: <><path d="M25 12c0 7-9 17-9 17S7 19 7 12a9 9 0 0 1 18 0Z" /><circle cx="16" cy="12" r="3" /></>,
    phone: <path d="M8 4h5l2 7-3 2c1.7 3.4 3.6 5.3 7 7l2-3 7 2v5c0 2-1.7 3.5-3.7 3.2C12.8 26.1 5.9 19.2 4.8 7.7 4.5 5.7 6 4 8 4Z" />,
    email: <><rect x="3" y="6" width="26" height="20" rx="2" /><path d="m5 9 11 8 11-8" /></>,
    link: <><path d="m13 19 6-6m-8 1-4 4a5 5 0 0 0 7 7l4-4m-4-10 4-4a5 5 0 0 1 7 7l-4 4" /></>,
    linkedin: <><rect x="2" y="2" width="28" height="28" rx="2" fill="currentColor" stroke="none" /><path d="M9 14v10m0-16v1m7 15V14m0 5c0-7 8-7 8-1v6" stroke="white" strokeWidth="3" /></>,
  };
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
