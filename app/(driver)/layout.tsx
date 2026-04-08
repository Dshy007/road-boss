"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import styles from "./driver-layout.module.css";

const tabs = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/challenges", label: "Challenges", icon: "challenges" },
  { href: "/leaderboard", label: "Leaderboard", icon: "leaderboard" },
  { href: "/rewards", label: "Rewards", icon: "rewards" },
  { href: "/profile", label: "Profile", icon: "profile" },
];

function TabIcon({ name, active }: { name: string; active: boolean }) {
  const color = active ? "#C9A84C" : "#666666";

  const icons: Record<string, React.ReactNode> = {
    dashboard: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    challenges: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    leaderboard: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    rewards: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12" />
        <path d="M15.5 9.4c-.3-1.2-1.5-2.1-3-2.1-1.7 0-3 1.1-3 2.5 0 1.7 1.8 2.3 3.5 2.8 1.7.5 3.5 1.1 3.5 2.8 0 1.4-1.3 2.5-3 2.5-1.5 0-2.7-.9-3-2.1" />
      </svg>
    ),
    profile: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div className={styles.fireBackground} />
        <main className={styles.main}>{children}</main>

        <nav className={styles.tabBar}>
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`${styles.tab} ${active ? styles.tabActive : ""}`}
              >
                <TabIcon name={tab.icon} active={active} />
                <span className={styles.tabLabel}>{tab.label}</span>
                {active && <span className={styles.tabIndicator} />}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
