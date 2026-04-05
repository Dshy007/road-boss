"use client";

import MetalCard from "@/components/ui/MetalCard";
import GradeBadge from "@/components/ui/GradeBadge";
import styles from "./leaderboard.module.css";

const drivers = [
  { rank: 1, name: "J. Smith", points: 5100, grade: "A+" },
  { rank: 2, name: "K. Lee", points: 4950, grade: "A+" },
  { rank: 3, name: "A. Chen", points: 4800, grade: "A+" },
  { rank: 4, name: "S. McQueen", points: 4250, grade: "A" },
  { rank: 5, name: "B. Johnson", points: 4100, grade: "A" },
  { rank: 6, name: "G. Pets", points: 4050, grade: "A" },
  { rank: 7, name: "B. Ellran", points: 3800, grade: "B" },
  { rank: 8, name: "D. Hayes", points: 3600, grade: "B" },
  { rank: 9, name: "M. Torres", points: 3400, grade: "B" },
  { rank: 10, name: "R. Park", points: 3200, grade: "C" },
];

const currentDriver = "B. Johnson";
const daysLeft = 12;

export default function LeaderboardPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} stagger-1`}>
        <h2 className={styles.title}>Leaderboard</h2>
        <div className={styles.resetTimer}>
          <span className={styles.resetLabel}>Monthly Reset in</span>
          <span className={`${styles.resetDays} glow-gold`}>{daysLeft} days</span>
        </div>
      </div>

      <div className={styles.list}>
        {drivers.map((driver, i) => {
          const isTop3 = driver.rank <= 3;
          const isCurrentUser = driver.name === currentDriver;

          return (
            <div key={driver.rank} className={`stagger-${Math.min(i + 2, 8)}`}>
              <MetalCard
                variant={isTop3 ? "elevated" : "default"}
                className={`${isCurrentUser ? styles.currentUser : ""} shimmer-card`}
              >
                <div className={styles.row}>
                  <div className={`${styles.rankBadge} ${isTop3 ? styles[`rank${driver.rank}`] : ""}`}>
                    {driver.rank}
                  </div>
                  <div className={styles.driverInfo}>
                    <span className={styles.driverName}>
                      {isCurrentUser ? "You" : driver.name}
                    </span>
                    <span className={styles.driverPoints}>
                      {driver.points.toLocaleString()} pts
                    </span>
                  </div>
                  <div className="scale-in">
                    <GradeBadge grade={driver.grade} size="sm" />
                  </div>
                </div>
              </MetalCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
