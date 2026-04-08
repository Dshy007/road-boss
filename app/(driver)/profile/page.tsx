"use client";

import styles from "./profile.module.css";

const driver = {
  firstName: "Brandon",
  lastName: "Johnson",
  phone: "(555) 867-5309",
  email: "b.johnson@email.com",
  grade: "A",
  points: 847,
  safetyScore: 85,
  rank: 12,
  totalDrivers: 38,
  regionPercentile: 3,
  streak: 14,
  bestStreak: 28,
  bestScore: 1150,
  monthsActive: 4,
};

const monthlyHistory = [
  { month: "Apr 2026", points: 847, grade: "A", rank: 5 },
  { month: "Mar 2026", points: 1020, grade: "A", rank: 3 },
  { month: "Feb 2026", points: 780, grade: "B", rank: 8 },
  { month: "Jan 2026", points: 620, grade: "C", rank: 14 },
];

function SafetyRing({ score }: { score: number }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={styles.ringContainer}>
      <svg width="148" height="148" viewBox="0 0 148 148">
        <circle cx="74" cy="74" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
        <circle
          cx="74" cy="74" r={radius} fill="none"
          stroke="#1E3A8A" strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 74 74)"
        />
      </svg>
      <div className={styles.ringInner}>
        <span className={styles.ringScore}>{score}</span>
        <span className={styles.ringLabel}>Safety Score</span>
      </div>
    </div>
  );
}

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
          <span className={styles.gradeBadge}>{driver.grade}</span>
          <span className={styles.pointsLabel}>{driver.points.toLocaleString()} pts</span>
        </div>
      </div>

      {/* Fleet Standing */}
      <div className={styles.card}>
        <span className={styles.cardLabel}>Fleet Standing</span>
        <h3 className={styles.rankValue}>Rank #{driver.rank}</h3>
        <div className={styles.rankBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
          <span>Top {driver.regionPercentile}% regionally</span>
        </div>
        <p className={styles.rankDesc}>
          Exemplary performance maintained over the last 30 days. Your safety compliance score
          is 8.4% higher than the fleet average.
        </p>
      </div>

      {/* Safety Score Ring */}
      <div className={styles.card}>
        <SafetyRing score={driver.safetyScore} />
        <span className={styles.tierLabel}>Elite Tier</span>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{driver.streak}</span>
          <span className={styles.statLabel}>Day Streak</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{driver.bestStreak}</span>
          <span className={styles.statLabel}>Best Streak (Days)</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{driver.bestScore.toLocaleString()}</span>
          <span className={styles.statLabel}>Best Score</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{driver.monthsActive}</span>
          <span className={styles.statLabel}>Months Active</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className={styles.card}>
        <span className={styles.cardLabel}>Contact Info</span>
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
      </div>

      {/* Monthly History */}
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Monthly History</span>
        {monthlyHistory.map((m) => (
          <div key={m.month} className={styles.historyCard}>
            <span className={styles.historyMonth}>{m.month}</span>
            <span className={styles.historyPoints}>{m.points.toLocaleString()} pts</span>
            <span className={styles.historyGrade}>{m.grade}</span>
            <span className={styles.historyRank}>#{m.rank}</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <button className={styles.logoutButton}>Log Out</button>
    </div>
  );
}
