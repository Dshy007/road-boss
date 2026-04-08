"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Drive", "Earn", "Dominate"];
const DURATION_MS = 2700;
const WORD_INTERVAL_MS = 900;
const COMPLETE_DELAY_MS = 400;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Word rotation
  useEffect(() => {
    if (!mounted) return;
    if (wordIndex >= WORDS.length - 1) return;
    const timer = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= WORDS.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, WORD_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [mounted, wordIndex]);

  // Counter via requestAnimationFrame
  useEffect(() => {
    if (!mounted) return;
    let start: number | null = null;
    let raf: number;
    let completed = false;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else if (!completed) {
        completed = true;
        setTimeout(() => onCompleteRef.current(), COMPLETE_DELAY_MS);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  // Split number into individual digits for coin effect
  const digits = Math.round(progress).toString().padStart(3, "0").split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Top-Left: Road Boss label */}
      <div
        style={{
          position: "absolute",
          top: "clamp(32px, 5vw, 48px)",
          left: "clamp(32px, 5vw, 48px)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(10px, 1.2vw, 14px)",
            color: "#888888",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontWeight: 600,
          }}
        >
          Road Boss
        </span>
      </div>

      {/* Top-Right: "Safety Pays" tagline */}
      <div
        style={{
          position: "absolute",
          top: "clamp(32px, 5vw, 48px)",
          right: "clamp(32px, 5vw, 48px)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(12px, 1.4vw, 16px)",
            color: "#C9A84C",
            letterSpacing: "0.05em",
          }}
        >
          Safety Pays
        </span>
      </div>

      {/* Center: Rotating words */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "rgba(245, 245, 245, 0.85)",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-Right: Coin-style counter */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(32px, 5vw, 48px)",
          right: "clamp(32px, 5vw, 48px)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
          display: "flex",
          gap: "clamp(4px, 0.8vw, 8px)",
          alignItems: "center",
        }}
      >
        {digits.map((digit, i) => (
          <div
            key={`pos-${i}`}
            style={{
              width: "clamp(40px, 7vw, 72px)",
              height: "clamp(56px, 9vw, 96px)",
              borderRadius: "clamp(6px, 1vw, 10px)",
              background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)",
              border: "1px solid rgba(192, 192, 192, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            {/* Chrome highlight on coin top edge */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "15%",
                right: "15%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(192,192,192,0.3), transparent)",
              }}
            />
            {/* Center divider line (split-flap style) */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: "1px",
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.03)",
              }}
            />
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: progress >= 100 ? "#C9A84C" : "#f5f5f5",
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
                transition: "color 0.3s ease",
                textShadow: progress >= 100
                  ? "0 0 12px rgba(201, 168, 76, 0.4)"
                  : "none",
              }}
            >
              {digit}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Edge: Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(31, 31, 31, 0.5)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #C9A84C 0%, #D4B65A 50%, #C9A84C 100%)",
            boxShadow: "0 0 8px rgba(201, 168, 76, 0.35)",
            transition: "width 0.1s linear",
            transformOrigin: "left",
          }}
        />
      </div>
    </motion.div>
  );
}
