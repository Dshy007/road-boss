"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import StatCard from "@/components/ui/StatCard";
import FeaturedBanner from "@/components/ui/FeaturedBanner";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./dashboard.module.css";

const driver = {
  firstName: "J.",
  lastName: "Smith",
  points: 1150,
  grade: "A" as const,
  streak: 12,
  shields: 4,
  maxShields: 5,
  rank: 3,
  nextGrade: "A+",
  pointsToNext: 50,
  nextGradeThreshold: 1200,
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
    body: "Winter driving conditions — watch before Friday to stay eligible for rewards.",
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

// Countdown: 3 days from now
const countdownDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      {/* 1. Compact Header */}
      <div className={`${styles.header}`}>
        <div className={styles.headerLeft}>
          <GradeBadge grade={driver.grade} size="lg" />
          <div className={styles.headerText}>
            <h2 className={styles.headerName}>
              {driver.firstName} {driver.lastName}
            </h2>
            <span className={styles.headerGrade}>Grade {driver.grade} — #{driver.rank} Rank</span>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.bellIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className={styles.bellDot} />
          </div>
        </div>
      </div>

      {/* 2. Featured Banner */}
      <div className="">
        <FeaturedBanner
          title="Weekly Challenge"
          subtitle="Zero hard braking events this week to enter the gas card drawing"
          gradient="gold"
          countdownDate={countdownDate}
          badge={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          }
        />
      </div>

      {/* 3. Stats Grid */}
      <div className={`${styles.statsGrid}`}>
        <StatCard
          label="Points"
          value={driver.points.toLocaleString()}
          accentColor="#C9A84C"
        />
        <StatCard
          label="Day Streak"
          value={`${driver.streak} days`}
          accentColor="#C0C0C0"
        />
        <StatCard
          label="Shields"
          value={`${driver.shields}/${driver.maxShields}`}
          accentColor="#1A2B4A"
        />
        <StatCard
          label="Rank"
          value={`#${driver.rank}`}
          accentColor="#6B1F2A"
        />
      </div>

      {/* 4. Grade Progress */}
      <div className="">
        <MetalCard>
          <div className={styles.gradeProgressHeader}>
            <span className={styles.gradeProgressLabel}>Grade Progress</span>
            <span className={styles.gradeProgressPoints}>
              {driver.pointsToNext} pts to {driver.nextGrade}
            </span>
          </div>
          <ProgressBar
            current={driver.points}
            max={driver.nextGradeThreshold}
            variant="gold"
          />
          <div className={styles.gradeMarkers}>
            <span>{driver.grade} ({driver.points.toLocaleString()} pts)</span>
            <span>{driver.nextGrade} ({driver.nextGradeThreshold.toLocaleString()} pts)</span>
          </div>
        </MetalCard>
      </div>

      {/* 5. Quick Actions */}
      <div className="">
        <h3 className={styles.sectionTitle}>Quick Actions</h3>
        <div className={styles.actionList}>
          <MetalCard variant="action" onClick={() => {}}>
            <div className={styles.actionRow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className={styles.actionLabel}>Earn More Points</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </MetalCard>
          <MetalCard variant="action" onClick={() => {}}>
            <div className={styles.actionRow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12" />
                <path d="M15.5 9.4c-.3-1.2-1.5-2.1-3-2.1-1.7 0-3 1.1-3 2.5 0 1.7 1.8 2.3 3.5 2.8 1.7.5 3.5 1.1 3.5 2.8 0 1.4-1.3 2.5-3 2.5-1.5 0-2.7-.9-3-2.1" />
              </svg>
              <span className={styles.actionLabel}>Redeem Rewards</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </MetalCard>
          <MetalCard variant="action" onClick={() => {}}>
            <div className={styles.actionRow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className={styles.actionLabel}>Watch Safety Video</span>
              <span className={styles.requiredBadge}>Required</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </MetalCard>
        </div>
      </div>

      {/* 6. Driver HQ */}
      <div className="">
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
          <button className={styles.viewAll}>View All</button>
        </div>
      </div>
    </div>
  );
}
