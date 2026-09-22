"use client";

import { useEffect, useRef } from "react";
import styles from "./homepage.module.css";

export function StoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => undefined);
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => {
      preference.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, []);

  return <>
    <video ref={videoRef} className={styles.storyVideo} muted loop playsInline preload="metadata" poster="/images/hero/hero-board-advisory.png" aria-label="Crestavia leadership story">
      <source src="/videos/crestavia-leadership.mp4" type="video/mp4" />
    </video>
    <div className={styles.storyCaption} aria-hidden="true"><span className={styles.storyTitle}>Our Leadership Story</span></div>
  </>;
}
