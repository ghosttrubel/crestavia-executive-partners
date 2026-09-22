"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";
import styles from "./homepage.module.css";

export function StoryPlay() {
  const [requested, setRequested] = useState(false);
  return (
    <div className={styles.storyCaption}>
      <button type="button" className={styles.storyPlay} aria-label="Watch our story — video coming soon" aria-describedby="story-status" onClick={() => setRequested(true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" fill="currentColor" /></svg>
      </button>
      <span className={styles.storyTitle}>Watch Our Story</span>
      <span className={styles.storyDuration}>1:45</span>
      <span id="story-status" role="status" className={styles.storyStatus}>{requested ? "Our story film is coming soon." : ""}</span>
    </div>
  );
}

export function NewsletterPreview() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Newsletter sign-up is coming soon. Your email has not been submitted.");
  }
  return (
    <form className={styles.newsletter} onSubmit={submit}>
      <label htmlFor="homepage-newsletter" className={styles.srOnly}>Your email address</label>
      <div className={styles.emailField}>
        <input id="homepage-newsletter" type="email" placeholder="Your email address" autoComplete="email" required aria-describedby="newsletter-status" />
        <button type="submit" aria-label="Newsletter sign-up availability"><Icon name="arrow" /></button>
      </div>
      <p id="newsletter-status" className={styles.newsletterStatus} role="status">{message || "Newsletter sign-up coming soon."}</p>
    </form>
  );
}
