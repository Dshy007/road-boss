"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import ShieldDisplay from "@/components/ui/ShieldDisplay";
import styles from "./rewards.module.css";

const driver = {
  points: 847,
  grade: "A",
  shields: 2,
  videosComplete: true,
};

const giftCards = [
  { id: 1, amount: 10, points: 400, label: "Amazon" },
  { id: 2, amount: 25, points: 900, label: "Amazon" },
  { id: 3, amount: 50, points: 1600, label: "Amazon" },
  { id: 4, amount: 100, points: 3000, label: "Amazon" },
];

const adminPrizes = [
  { id: 1, title: "Paid Day Off", requirement: "A+ Only", icon: "trophy" },
  { id: 2, title: "Game Tickets", requirement: "Ironclad", icon: "ticket" },
  { id: 3, title: "Cash Bonus", requirement: "Top 3", icon: "cash" },
];

const history = [
  { id: 1, item: "$25 Amazon Gift Card", status: "approved", date: "Mar 28" },
  { id: 2, item: "$10 Amazon Gift Card", status: "pending", date: "Apr 2" },
];

export default function RewardsPage() {
  return (
    <div className={styles.container}>
      {/* Points Header */}
      <div className={styles.pointsHeader}>
        <div className={styles.pointsRow}>
          <div className={styles.pointsMain}>
            <span className={styles.pointsLabel}>Your Points</span>
            <span className={styles.pointsValue}>{driver.points.toLocaleString()}</span>
          </div>
          <div className={styles.pointsMeta}>
            <GradeBadge grade={driver.grade} size="md" />
            <ShieldDisplay count={driver.shields} />
          </div>
        </div>
        {driver.videosComplete ? (
          <div className={styles.gateOpen}>
            <span className={styles.gateIcon}>&#10003;</span>
            Monthly videos complete - Rewards unlocked
          </div>
        ) : (
          <div className={styles.gateLocked}>
            <span className={styles.gateIcon}>&#128274;</span>
            Watch monthly safety videos to unlock redemption
          </div>
        )}
      </div>

      {/* Gift Card Store */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Reward Store</h3>
        <div className={styles.cardGrid}>
          {giftCards.map((card) => {
            const canAfford = driver.points >= card.points;
            return (
              <MetalCard
                key={card.id}
                variant={canAfford ? "elevated" : "default"}
                className={!canAfford ? styles.locked : ""}
              >
                <div className={styles.giftCard}>
                  <span className={styles.giftAmount}>${card.amount}</span>
                  <span className={styles.giftBrand}>{card.label}</span>
                  <span className={styles.giftPoints}>{card.points.toLocaleString()} pts</span>
                </div>
              </MetalCard>
            );
          })}
        </div>
      </div>

      {/* Admin Prizes */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Admin Prizes</h3>
        {adminPrizes.map((prize) => (
          <MetalCard key={prize.id}>
            <div className={styles.prizeRow}>
              <span className={styles.prizeIcon}>
                {prize.icon === "trophy" && "\u{1F3C6}"}
                {prize.icon === "ticket" && "\u{1F3AB}"}
                {prize.icon === "cash" && "\u{1F4B0}"}
              </span>
              <span className={styles.prizeTitle}>{prize.title}</span>
              <span className={styles.prizeReq}>{prize.requirement}</span>
            </div>
          </MetalCard>
        ))}
      </div>

      {/* Redemption History */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Redemption History</h3>
        {history.map((item) => (
          <MetalCard key={item.id}>
            <div className={styles.historyRow}>
              <div className={styles.historyInfo}>
                <span className={styles.historyItem}>{item.item}</span>
                <span className={styles.historyDate}>{item.date}</span>
              </div>
              <span className={`${styles.historyStatus} ${styles[item.status]}`}>
                {item.status === "approved" ? "Approved \u2713" : "Pending \u23F3"}
              </span>
            </div>
          </MetalCard>
        ))}
      </div>
    </div>
  );
}
