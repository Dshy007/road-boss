"use client";

import MetalCard from "@/components/ui/MetalCard";
import styles from "./challenges.module.css";

const challenges = [
  {
    id: 1,
    title: "Zero Hard Braking",
    description: "Complete the week with zero hard braking events",
    reward: "$10 Amazon Gift Card",
    deadline: "3 days left",
    progress: null,
    active: true,
  },
  {
    id: 2,
    title: "Perfect Pre-Trip Week",
    description: "First 5 drivers with perfect pre-trip inspections all week get dinner on the boss",
    reward: "Dinner for 2",
    deadline: "5 days left",
    progress: "3/5 spots taken",
    active: true,
  },
];

const videoProgress = { watched: 3, total: 5 };

export default function ChallengesPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} stagger-1`}>
        <h2 className={styles.title}>Challenges</h2>
        <p className={styles.subtitle}>Complete challenges. Earn rewards. Stay safe.</p>
      </div>

      <div className={`${styles.section} stagger-2`}>
        <h3 className={styles.sectionTitle}>This Week&apos;s Challenges</h3>
        {challenges.map((c, i) => (
          <div key={c.id} className={`stagger-${i + 3}`}>
            <MetalCard variant="elevated" className="shimmer-card">
              <div className={styles.challenge}>
                <div className={styles.challengeHeader}>
                  <h4 className={styles.challengeTitle}>{c.title}</h4>
                  <span className={styles.deadline}>{c.deadline}</span>
                </div>
                <p className={styles.challengeDesc}>{c.description}</p>
                <div className={styles.challengeFooter}>
                  <span className={styles.reward}>{c.reward}</span>
                  {c.progress && (
                    <span className={styles.progress}>{c.progress}</span>
                  )}
                </div>
              </div>
            </MetalCard>
          </div>
        ))}
      </div>

      <div className={`${styles.section} stagger-5`}>
        <h3 className={styles.sectionTitle}>Safety Video Completions</h3>
        <MetalCard className="shimmer-card">
          <div className={styles.videoSection}>
            <div className={styles.videoIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className={styles.videoInfo}>
              <span className={styles.videoCount}>
                {videoProgress.watched}/{videoProgress.total} Videos Completed
              </span>
              <div className={styles.videoBar}>
                <div
                  className={styles.videoFill}
                  style={{ width: `${(videoProgress.watched / videoProgress.total) * 100}%` }}
                />
              </div>
            </div>
            <button className={styles.watchButton}>Watch Next</button>
          </div>
        </MetalCard>
      </div>

      <div className="stagger-6">
        <MetalCard variant="gold" className="shimmer-card">
          <div className={styles.giveaway}>
            <div className={styles.giveawayIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22V8l4-4h10l4 4v14H3z" />
                <path d="M3 14h18" />
                <path d="M12 8v6" />
              </svg>
            </div>
            <div className={styles.giveawayContent}>
              <h3 className={styles.giveawayTitle}>Gas Card Giveaway</h3>
              <p className={`${styles.giveawayDesc} glow-gold`}>Win $500 Gas Card!</p>
            </div>
            <button className={styles.enterButton}>Enter Now</button>
          </div>
        </MetalCard>
      </div>
    </div>
  );
}
