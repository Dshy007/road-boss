import styles from "./ChallengeRow.module.css";

interface ChallengeRowProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  progress: number;
  progressLabel: string;
  isClaimable?: boolean;
  reward?: string;
  onClaim?: () => void;
}

export default function ChallengeRow({
  icon,
  iconBg,
  title,
  subtitle,
  progress,
  progressLabel,
  isClaimable = false,
  reward,
  onClaim,
}: ChallengeRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.iconWrap} style={{ background: iconBg }}>
        {icon}
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
        <div className={styles.progressTrack}>
          <div
            className={`${styles.progressFill} ${progress >= 100 ? styles.progressFillComplete : ""}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
      <div className={styles.right}>
        {isClaimable ? (
          <button className={styles.claimButton} onClick={onClaim}>Claim</button>
        ) : (
          <span className={styles.statusLabel}>{progressLabel}</span>
        )}
        {reward && <span className={styles.reward}>{reward}</span>}
      </div>
    </div>
  );
}
