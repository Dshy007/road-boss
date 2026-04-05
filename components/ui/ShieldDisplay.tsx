import styles from "./ShieldDisplay.module.css";

interface ShieldDisplayProps {
  count: number;
  max?: number;
}

export default function ShieldDisplay({ count, max = 4 }: ShieldDisplayProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Shields</span>
      <div className={styles.shields}>
        {Array.from({ length: max }).map((_, i) => (
          <svg
            key={i}
            className={`${styles.shield} ${i < count ? styles.active : styles.inactive}`}
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M10 1L1 5V11C1 16.5 5 21.2 10 23C15 21.2 19 16.5 19 11V5L10 1Z"
              fill={i < count ? "url(#goldGrad)" : "none"}
              stroke={i < count ? "#C9A84C" : "#333"}
              strokeWidth="1.5"
            />
            {i < count && (
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4B65A" />
                  <stop offset="100%" stopColor="#B8943F" />
                </linearGradient>
              </defs>
            )}
          </svg>
        ))}
      </div>
    </div>
  );
}
