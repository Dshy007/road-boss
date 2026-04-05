import styles from "./MetalCard.module.css";

interface MetalCardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "gold";
  className?: string;
  onClick?: () => void;
}

export default function MetalCard({
  children,
  variant = "default",
  className = "",
  onClick,
}: MetalCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
