"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import styles from "./profile.module.css";

const driver = {
  firstName: "Brandon",
  lastName: "Johnson",
  phone: "(555) 867-5309",
  email: "b.johnson@email.com",
  grade: "A",
  points: 847,
  streak: 3,
  bestStreak: 7,
  bestScore: 1150,
  monthsActive: 4,
};

const monthlyHistory = [
  { month: "Apr 2026", points: 847, grade: "A", rank: 5 },
  { month: "Mar 2026", points: 1020, grade: "A", rank: 3 },
  { month: "Feb 2026", points: 780, grade: "B", rank: 8 },
  { month: "Jan 2026", points: 620, grade: "C", rank: 14 },
];

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      {/* Profile Header */}
      <div className={styles.header}>
        <div className={styles.avatar}>
          <span className={styles.avatarText}>
            {driver.firstName[0]}{driver.lastName[0]}
          </span>
        </div>
        <h2 className={styles.name}>{driver.firstName} {driver.lastName}</h2>
        <div className={styles.gradeRow}>
          <GradeBadge grade={driver.grade} size="lg" />
          <span className={styles.pointsLabel}>{driver.points.toLocaleString()} pts</span>
        </div>
      </div>

      {/* Personal Records */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Records</h3>
        <div className={styles.recordsGrid}>
          <MetalCard variant="gold">
            <div className={styles.record}>
              <span className={styles.recordValue}>{driver.bestStreak}</span>
              <span className={styles.recordLabel}>Best Streak (wks)</span>
            </div>
          </MetalCard>
          <MetalCard variant="gold">
            <div className={styles.record}>
              <span className={styles.recordValue}>{driver.bestScore.toLocaleString()}</span>
              <span className={styles.recordLabel}>Best Score</span>
            </div>
          </MetalCard>
          <MetalCard>
            <div className={styles.record}>
              <span className={styles.recordValue}>{driver.streak}</span>
              <span className={styles.recordLabel}>Current Streak</span>
            </div>
          </MetalCard>
          <MetalCard>
            <div className={styles.record}>
              <span className={styles.recordValue}>{driver.monthsActive}</span>
              <span className={styles.recordLabel}>Months Active</span>
            </div>
          </MetalCard>
        </div>
      </div>

      {/* Contact Info */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Contact Info</h3>
        <MetalCard>
          <div className={styles.contactList}>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Phone</span>
              <span className={styles.contactValue}>{driver.phone}</span>
            </div>
            <div className={styles.contactDivider} />
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>{driver.email}</span>
            </div>
          </div>
        </MetalCard>
      </div>

      {/* Monthly History */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Monthly History</h3>
        {monthlyHistory.map((m) => (
          <MetalCard key={m.month}>
            <div className={styles.historyRow}>
              <span className={styles.historyMonth}>{m.month}</span>
              <span className={styles.historyPoints}>{m.points.toLocaleString()} pts</span>
              <GradeBadge grade={m.grade} size="sm" />
              <span className={styles.historyRank}>#{m.rank}</span>
            </div>
          </MetalCard>
        ))}
      </div>

      {/* Logout */}
      <button className={styles.logoutButton}>Log Out</button>
    </div>
  );
}
