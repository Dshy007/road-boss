"use client";

import GradeBadge from "@/components/ui/GradeBadge";
import ShieldDisplay from "@/components/ui/ShieldDisplay";
import styles from "./rewards.module.css";

const driver = {
  points: 847,
  grade: "A" as const,
  shields: 2,
  videosComplete: true,
  totalEarned: 2600,
  totalRedeemed: 1753,
  remaining: 847,
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

const prizeIcons: Record<string, React.ReactNode> = {
  trophy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C3FF36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  ticket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C3FF36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" />
    </svg>
  ),
  cash: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C3FF36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v12" />
      <path d="M15.5 9.4c-.3-1.2-1.5-2.1-3-2.1-1.7 0-3 1.1-3 2.5 0 1.7 1.8 2.3 3.5 2.8 1.7.5 3.5 1.1 3.5 2.8 0 1.4-1.3 2.5-3 2.5-1.5 0-2.7-.9-3-2.1" />
    </svg>
  ),
};

export default function RewardsPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={`${styles.hero}`}>
        <div className={styles.heroOverlay}>
          <span className={styles.heroTitle}>Rewards</span>
          <h2 className={styles.heroTagline}>Safety Pays</h2>
        </div>
      </div>

      <div className={styles.content}>
        {/* Points Card */}
        <div className={`${styles.pointsCard}`}>
          <span className={styles.pointsLabel}>Your Points</span>
          <span className={styles.pointsValue}>{driver.points.toLocaleString()}</span>
          <div className={styles.pointsBottom}>
            <div className={styles.pointsMeta}>
              <GradeBadge grade={driver.grade} size="md" />
            </div>
            <div className={styles.pointsMeta}>
              <ShieldDisplay count={driver.shields} />
            </div>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className={`${styles.earningsRow}`}>
          <div className={styles.earningCard}>
            <span className={styles.earningValue}>{driver.totalEarned.toLocaleString()}</span>
            <span className={styles.earningLabel}>Total Earned</span>
          </div>
          <div className={styles.earningCard}>
            <span className={styles.earningValue}>{driver.totalRedeemed.toLocaleString()}</span>
            <span className={styles.earningLabel}>Redeemed</span>
          </div>
          <div className={styles.earningCard}>
            <span className={`${styles.earningValue} ${styles.earningGreen}`}>{driver.remaining.toLocaleString()}</span>
            <span className={styles.earningLabel}>Available</span>
          </div>
        </div>

        {/* Video Gate Status */}
        <div className="">
          {driver.videosComplete ? (
            <div className={styles.gateOpen}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C3FF36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Monthly videos complete — Rewards unlocked
            </div>
          ) : (
            <div className={styles.gateLocked}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Watch monthly safety videos to unlock redemption
            </div>
          )}
        </div>

        {/* Reward Store */}
        <div className="">
          <h3 className={styles.sectionTitle}>Reward Store</h3>
          <div className={styles.cardGrid}>
            {giftCards.map((card) => {
              const canAfford = driver.points >= card.points;
              return (
                <div key={card.id} className={`${styles.giftCardWrap} ${!canAfford ? styles.locked : ""}`}>
                  <div className={styles.giftCard}>
                    <span className={styles.giftAmount}>${card.amount}</span>
                    <span className={styles.giftBrand}>{card.label}</span>
                    <span className={styles.giftPoints}>{card.points.toLocaleString()} pts</span>
                    {canAfford && (
                      <button className={styles.redeemButton}>Redeem</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admin Prizes */}
        <div className="">
          <h3 className={styles.sectionTitle}>Admin Prizes</h3>
          {adminPrizes.map((prize) => (
            <div key={prize.id} className={styles.prizeCard}>
              <div className={styles.prizeRow}>
                <div className={styles.prizeIcon}>{prizeIcons[prize.icon]}</div>
                <span className={styles.prizeTitle}>{prize.title}</span>
                <span className={styles.prizeReq}>{prize.requirement}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B949E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Redemption History */}
        <div className="">
          <h3 className={styles.sectionTitle}>Redemption History</h3>
          {history.map((item) => (
            <div key={item.id} className={styles.historyCard}>
              <div className={styles.historyRow}>
                <div className={styles.historyInfo}>
                  <span className={styles.historyItem}>{item.item}</span>
                  <span className={styles.historyDate}>{item.date}</span>
                </div>
                <span className={`${styles.historyStatus} ${styles[item.status]}`}>
                  {item.status === "approved" ? "Approved" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
