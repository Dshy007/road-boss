"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import ShieldDisplay from "@/components/ui/ShieldDisplay";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./dashboard.module.css";

// Mock data - will be replaced with Supabase
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
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h2 className={styles.greeting}>
              Welcome back, <span className={styles.gold}>{driver.firstName} {driver.lastName}</span>
            </h2>
            <p className={styles.subtitle}>Safety Pays</p>
          </div>
          <GradeBadge grade={driver.grade} size="lg" />
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          <MetalCard variant="gold" className={styles.statCard}>
            <span className={styles.statLabel}>Points</span>
            <span className={styles.statValue}>{driver.points.toLocaleString()}</span>
          </MetalCard>

          <MetalCard className={styles.statCard}>
            <span className={styles.statLabel}>Streak</span>
            <span className={styles.statValue}>{driver.streak} <span className={styles.statUnit}>wks</span></span>
          </MetalCard>

          <MetalCard className={styles.statCard}>
            <ShieldDisplay count={driver.shields} />
          </MetalCard>

          <MetalCard className={styles.statCard}>
            <span className={styles.statLabel}>Rank</span>
            <span className={styles.statValue}>#{driver.rank}</span>
          </MetalCard>
        </div>

        {/* Grade Progress */}
        <MetalCard>
          <ProgressBar
            current={driver.points}
            max={driver.nextGradeThreshold}
            label={`${driver.pointsToNext} points to ${driver.nextGrade}`}
            variant="gold"
          />
        </MetalCard>
      </div>

      {/* Driver HQ - Announcements */}
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
