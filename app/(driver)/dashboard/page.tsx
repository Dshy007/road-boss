"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import ShieldDisplay from "@/components/ui/ShieldDisplay";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./dashboard.module.css";

const driver = {
  firstName: "J.",
  lastName: "Smith",
  points: 847,
  grade: "A",
  streak: 3,
  shields: 2,
  nextGrade: "A+",
  pointsToNext: 153,
  nextGradeThreshold: 1000,
  rank: 5,
};

const announcements = [
  {
    id: 1,
    title: "Holiday Schedule Update",
    body: "All drivers check the updated holiday schedule. Extra runs available Dec 23-26.",
    date: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "New Safety Video Available",
    body: "Winter driving conditions - watch before Friday to stay eligible for rewards.",
    date: "1 day ago",
    unread: true,
  },
  {
    id: 3,
    title: "Top Drivers This Month",
    body: "Congrats to K. Lee and A. Chen for maintaining A+ grades all month.",
    date: "3 days ago",
    unread: false,
  },
];

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      {/* Header - centered like profile */}
      <div className={styles.header}>
        <GradeBadge grade={driver.grade} size="lg" />
        <h2 className={styles.greeting}>
          Welcome back, <span className={styles.gold}>{driver.firstName} {driver.lastName}</span>
        </h2>
        <p className={styles.subtitle}>Safety Pays</p>
      </div>

      {/* Stats Grid - 2x2 like profile records */}
      <div className={styles.section}>
        <div className={styles.statsRow}>
          <MetalCard variant="gold">
            <div className={styles.statCard}>
              <span className={styles.statValue}>{driver.points.toLocaleString()}</span>
              <span className={styles.statLabel}>Points</span>
            </div>
          </MetalCard>

          <MetalCard variant="gold">
            <div className={styles.statCard}>
              <span className={styles.statValue}>{driver.streak} <span className={styles.statUnit}>wks</span></span>
              <span className={styles.statLabel}>Streak</span>
            </div>
          </MetalCard>

          <MetalCard>
            <div className={styles.statCard}>
              <ShieldDisplay count={driver.shields} />
            </div>
          </MetalCard>

          <MetalCard>
            <div className={styles.statCard}>
              <span className={styles.statValue}>#{driver.rank}</span>
              <span className={styles.statLabel}>Rank</span>
            </div>
          </MetalCard>
        </div>
      </div>

      {/* Grade Progress */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Grade Progress</h3>
        <MetalCard>
          <ProgressBar
            current={driver.points}
            max={driver.nextGradeThreshold}
            label={`${driver.pointsToNext} points to ${driver.nextGrade}`}
            variant="gold"
          />
        </MetalCard>
      </div>

      {/* Driver HQ */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Driver HQ
          <span className={styles.unreadBadge}>
            {announcements.filter((a) => a.unread).length}
          </span>
        </h3>

        <div className={styles.announcements}>
          {announcements.map((item) => (
            <MetalCard key={item.id} variant={item.unread ? "elevated" : "default"}>
              <div className={styles.announcement}>
                {item.unread && <span className={styles.unreadDot} />}
                <div className={styles.announcementContent}>
                  <h4 className={styles.announcementTitle}>{item.title}</h4>
                  <p className={styles.announcementBody}>{item.body}</p>
                  <span className={styles.announcementDate}>{item.date}</span>
                </div>
              </div>
            </MetalCard>
          ))}
        </div>
      </div>
    </div>
  );
}
