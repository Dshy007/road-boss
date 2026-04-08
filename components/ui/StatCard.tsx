import styles from "./StatCard.module.css";

interface StatCardProps {
  label: string;
  value: string;
  accentColor?: string;
  icon?: React.ReactNode;
}

export default function StatCard({ label, value, accentColor = "#C9A84C", icon }: StatCardProps) {
  return (
    <div className={styles.card} style={{ borderTop: `3px solid ${accentColor}` }}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
