"use client";

import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  max: number;
  label?: string;
  variant?: "chrome" | "gold";
}

export default function ProgressBar({
  current,
  max,
  label,
  variant = "chrome",
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const pct = Math.min((current / max) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(pct), 100);
    return () => clearTimeout(timer);
  }, [pct]);

  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${styles[variant]}`}
          style={{ width: `${width}%` }}
        />
        <div className={styles.shimmer} style={{ width: `${width}%` }} />
      </div>
      <span className={styles.value}>
        {current.toLocaleString()} / {max.toLocaleString()}
      </span>
    </div>
  );
}
