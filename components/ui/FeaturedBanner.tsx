"use client";

import { useEffect, useState } from "react";
import styles from "./FeaturedBanner.module.css";

interface FeaturedBannerProps {
  title: string;
  subtitle: string;
  gradient?: "gold" | "navy";
  countdownDate?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  badge?: React.ReactNode;
}

function getTimeRemaining(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return "0d 0h 0m";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${days}d ${hours}h ${minutes}m`;
}

export default function FeaturedBanner({
  title,
  subtitle,
  gradient = "gold",
  countdownDate,
  ctaLabel,
  onCtaClick,
  badge,
}: FeaturedBannerProps) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!countdownDate) return;
    setTimeLeft(getTimeRemaining(countdownDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(countdownDate));
    }, 60000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className={`${styles.banner} ${styles[gradient]}`}>
      <div className={styles.topRow}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          {countdownDate && (
            <div>
              <span className={styles.countdownLabel}>Time Remaining</span>
              <div className={styles.countdown}>{timeLeft}</div>
            </div>
          )}
          {ctaLabel && (
            <button className={styles.cta} onClick={onCtaClick}>
              {ctaLabel}
            </button>
          )}
        </div>
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>
    </div>
  );
}
