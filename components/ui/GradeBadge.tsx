import styles from "./GradeBadge.module.css";

interface GradeBadgeProps {
  grade: string;
  size?: "sm" | "md" | "lg";
}

const gradeColors: Record<string, string> = {
  "A+": "var(--color-grade-a-plus)",
  A: "var(--color-grade-a)",
  B: "var(--color-grade-b)",
  C: "var(--color-grade-c)",
  D: "var(--color-grade-d)",
  F: "var(--color-grade-f)",
};

export default function GradeBadge({ grade, size = "md" }: GradeBadgeProps) {
  const color = gradeColors[grade] || "var(--color-text-muted)";

  return (
    <span
      className={`${styles.badge} ${styles[size]}`}
      style={{
        borderColor: color,
        color: color,
        boxShadow: `0 0 10px ${color}22`,
      }}
    >
      {grade}
    </span>
  );
}
