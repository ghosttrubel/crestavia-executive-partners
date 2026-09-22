"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/homepage/site-footer";
import styles from "@/components/public-page.module.css";

const enquiries = ["executive-search", "board-advisory", "leadership-advisory", "talent-intelligence", "general"] as const;
function ContactForm({ initial }: { initial: string }) { const [enquiry, setEnquiry] = useState(initial); const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault(); return <form className={styles.grid} onSubmit={submit}><label>Full name<input name="name" required autoComplete="name" /></label><label>Organisation<input name="organisation" autoComplete="organization" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label><label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" /></label><label>Enquiry type<select name="enquiry" value={enquiry} onChange={(event) => setEnquiry(event.target.value)}>{enquiries.map((item) => <option key={item} value={item}>{item.replaceAll("-", " ")}</option>)}</select></label><label>Message<textarea name="message" required rows={5} /></label><button className={styles.red} type="submit">Send enquiry</button></form>; }
function ContactContent() { const requested = useSearchParams().get("enquiry") ?? "general"; const selected = enquiries.includes(requested as (typeof enquiries)[number]) ? requested : "general"; return <div id="top"><SiteHeader /><main><section className={styles.hero}><div className={styles.container}><p>CONTACT CRESTAVIA</p><h1>Start the Right Conversation.</h1><span>Organisations, executives and leadership teams can contact Crestavia regarding executive search, board and advisory requirements, leadership priorities and general enquiries.</span></div></section><section className={styles.body}><div className={styles.container}><h2>Tell us how we can help.</h2><ContactForm key={selected} initial={selected} /><p>Your enquiry is not sent from this website until a secure contact service is connected.</p><p>Phone: <a href="tel:+16722267432">+1 (672) 226-7432</a></p></div></section></main><SiteFooter /></div>; }
export default function ContactPage() { return <Suspense fallback={null}><ContactContent /></Suspense>; }
