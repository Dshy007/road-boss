"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MetalCard from "@/components/ui/MetalCard";
import FeaturedBanner from "@/components/ui/FeaturedBanner";
import TabSwitcher from "@/components/ui/TabSwitcher";
import ChallengeRow from "@/components/ui/ChallengeRow";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./challenges.module.css";

const weeklyChallenges = [
  {
    id: "w1",
    title: "Zero Hard Braking",
    subtitle: "No hard braking events all week",
    progress: 60,
    progressLabel: "3/5 days",
    isClaimable: false,
    reward: "50 pts",
    iconBg: "rgba(45, 138, 78, 0.15)",
    iconColor: "#2D8A4E",
  },
  {
    id: "w2",
    title: "Watch Safety Video",
    subtitle: "Complete March safety module",
    progress: 100,
    progressLabel: "",
    isClaimable: true,
    reward: "25 pts",
    iconBg: "rgba(42, 90, 138, 0.15)",
    iconColor: "#2A5A8A",
  },
  {
    id: "w3",
    title: "Top 5 Finish",
    subtitle: "End the week ranked in the top 5",
    progress: 0,
    progressLabel: "Rank #8",
    isClaimable: false,
    reward: "100 pts",
    iconBg: "rgba(201, 168, 76, 0.15)",
    iconColor: "#C9A84C",
  },
  {
    id: "w4",
    title: "On-Time Champion",
    subtitle: "95%+ on-time delivery score",
    progress: 78,
    progressLabel: "78/95%",
    isClaimable: false,
    reward: "75 pts",
    iconBg: "rgba(192, 192, 192, 0.12)",
    iconColor: "#C0C0C0",
  },
];

const dailyChallenges = [
  {
    id: "d1",
    title: "Complete Pre-Trip DVI",
    subtitle: "Submit today's inspection",
    progress: 100,
    progressLabel: "",
    isClaimable: true,
    reward: "10 pts",
    iconBg: "rgba(45, 138, 78, 0.15)",
    iconColor: "#2D8A4E",
  },
  {
    id: "d2",
    title: "Clean Drive",
    subtitle: "Zero alerts for today's routes",
    progress: 0,
    progressLabel: "In Progress",
    isClaimable: false,
    reward: "15 pts",
    iconBg: "rgba(42, 90, 138, 0.15)",
    iconColor: "#2A5A8A",
  },
  {
    id: "d3",
    title: "All Stops On Time",
    subtitle: "No late deliveries today",
    progress: 50,
    progressLabel: "4/8 stops",
    isClaimable: false,
    reward: "20 pts",
    iconBg: "rgba(201, 168, 76, 0.15)",
    iconColor: "#C9A84C",
  },
];

const videoProgress = { moduleName: "March Safety Module", watched: 2, total: 4 };

const tabs = [
  { id: "weekly", label: "This Week" },
  { id: "daily", label: "Daily" },
];

function ChallengeIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState("weekly");
  const challenges = activeTab === "weekly" ? weeklyChallenges : dailyChallenges;
  const completed = challenges.filter((c) => c.progress >= 100).length;

  return (
    <div className={styles.container}>
      {/* 1. Header */}
      <div className={`${styles.header}`}>
        <h2 className={styles.title}>Challenges</h2>
        <p className={styles.subtitle}>Complete challenges. Earn rewards. Stay safe.</p>
      </div>

      {/* 2. Featured Challenge Banner */}
      <div className="">
        <FeaturedBanner
          title="Gas Card Giveaway"
          subtitle="Complete 3 challenges this week to enter the $500 gas card drawing"
          gradient="navy"
          ctaLabel="Enter Now"
          badge={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 22V8l4-4h10l4 4v14H3z" />
              <path d="M3 14h18" />
              <path d="M12 8v6" />
            </svg>
          }
        />
      </div>

      {/* 3. Complete All Incentive */}
      <div className="">
        <MetalCard variant="featured">
          <div className={styles.incentive}>
            <div className={styles.incentiveIcons}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div className={styles.incentiveText}>
              <span className={styles.incentiveTitle}>Complete All Quests</span>
              <span className={styles.incentiveDesc}>Unlock a guaranteed scratch card!</span>
            </div>
            <span className={styles.incentiveProgress}>{completed}/{challenges.length}</span>
          </div>
        </MetalCard>
      </div>

      {/* 4. Tab Switcher */}
      <div className="">
        <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* 5. Challenge Rows */}
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {challenges.map((c) => (
              <ChallengeRow
                key={c.id}
                icon={<ChallengeIcon color={c.iconColor} />}
                iconBg={c.iconBg}
                title={c.title}
                subtitle={c.subtitle}
                progress={c.progress}
                progressLabel={c.progressLabel}
                isClaimable={c.isClaimable}
                reward={c.reward}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 6. Safety Videos */}
      <div className="">
        <h3 className={styles.sectionTitle}>Safety Videos</h3>
        <MetalCard variant="gold">
          <div className={styles.videoSection}>
            <h4 className={styles.videoModuleName}>{videoProgress.moduleName}</h4>
            <ProgressBar
              current={videoProgress.watched}
              max={videoProgress.total}
              variant="gold"
            />
            <div className={styles.videoMeta}>
              <span className={styles.videoCount}>
                {videoProgress.watched} of {videoProgress.total} videos completed
              </span>
              <span className={styles.videoLock}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Complete all to unlock redemption
              </span>
            </div>
            <button className={styles.watchButton}>Watch Next</button>
          </div>
        </MetalCard>
      </div>

      {/* 7. History Link */}
      <div className="">
        <MetalCard variant="action" onClick={() => {}}>
          <div className={styles.historyRow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={styles.historyLabel}>View Challenge History</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </MetalCard>
      </div>
    </div>
  );
}
