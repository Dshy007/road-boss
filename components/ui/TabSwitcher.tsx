"use client";

import { motion } from "framer-motion";
import styles from "./TabSwitcher.module.css";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
          onClick={() => onChange(tab.id)}
        >
          {activeTab === tab.id && (
            <motion.div
              className={styles.indicator}
              layoutId="tabIndicator"
              style={{ position: "absolute", inset: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span style={{ position: "relative", zIndex: 1 }}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
