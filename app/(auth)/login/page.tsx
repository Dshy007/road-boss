"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

type Step = "phone" | "otp" | "pin";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) return;
    setLoading(true);
    // TODO: Supabase phone OTP
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setStep("otp");
  };

  const handleCodeInput = useCallback(
    (
      index: number,
      value: string,
      arr: string[],
      setArr: (v: string[]) => void,
      refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
      onComplete: () => void
    ) => {
      if (!/^\d?$/.test(value)) return;
      const next = [...arr];
      next[index] = value;
      setArr(next);
      if (value && index < arr.length - 1) {
        refs.current[index + 1]?.focus();
      }
      if (next.every((d) => d !== "")) {
        onComplete();
      }
    },
    []
  );

  const handleCodeKeyDown = (
    e: React.KeyboardEvent,
    index: number,
    arr: string[],
    setArr: (v: string[]) => void,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>
  ) => {
    if (e.key === "Backspace" && !arr[index] && index > 0) {
      const next = [...arr];
      next[index - 1] = "";
      setArr(next);
      refs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    // TODO: Supabase OTP verification
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setStep("pin");
  };

  const savePin = async () => {
    setLoading(true);
    // TODO: Save PIN to Supabase user profile
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.fireBackground} />

      <div className={styles.content}>
        {/* Contained hero card */}
        <div className={styles.heroCard}>
          <h1 className={styles.logoTitle}>
            Road <span className={styles.logoAccent}>Boss</span>
          </h1>

          <div className={styles.divider} />

          {/* Ticker marquee */}
          <div className={styles.tickerWrap}>
            <div className={styles.ticker}>
              <span className={styles.tickerItem}>$ Safety Pays $</span>
              <span className={styles.tickerDot}>&bull;</span>
              <span className={styles.tickerItem}>$ Safety Pays $</span>
              <span className={styles.tickerDot}>&bull;</span>
              <span className={styles.tickerItem}>$ Safety Pays $</span>
              <span className={styles.tickerDot}>&bull;</span>
              <span className={styles.tickerItem}>$ Safety Pays $</span>
              <span className={styles.tickerDot}>&bull;</span>
            </div>
          </div>

          <p className={styles.challengeText}>Do you have what it takes?</p>
        </div>

        {step === "phone" && (
          <form className={styles.formSection} onSubmit={handlePhoneSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Enter your phone number</label>
              <input
                className={styles.input}
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                autoFocus
              />
            </div>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={phone.replace(/\D/g, "").length !== 10 || loading}
            >
              {loading ? "Sending..." : "Send Code"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <div className={styles.otpSection}>
            <p className={styles.subtitle}>
              Enter the 6-digit code sent to {phone}
            </p>
            <div className={styles.otpInputs}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { otpRefs.current[i] = el; }}
                  className={styles.otpDigit}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  autoFocus={i === 0}
                  onChange={(e) =>
                    handleCodeInput(i, e.target.value, otp, setOtp, otpRefs, verifyOtp)
                  }
                  onKeyDown={(e) => handleCodeKeyDown(e, i, otp, setOtp, otpRefs)}
                />
              ))}
            </div>
            <button className={styles.backLink} onClick={() => setStep("phone")}>
              Change phone number
            </button>
          </div>
        )}

        {step === "pin" && (
          <div className={styles.otpSection}>
            <p className={styles.subtitle}>
              Create a 4-digit PIN to secure your rewards
            </p>
            <div className={styles.otpInputs}>
              {pin.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { pinRefs.current[i] = el; }}
                  className={styles.otpDigit}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  autoFocus={i === 0}
                  onChange={(e) =>
                    handleCodeInput(i, e.target.value, pin, setPin, pinRefs, savePin)
                  }
                  onKeyDown={(e) => handleCodeKeyDown(e, i, pin, setPin, pinRefs)}
                />
              ))}
            </div>
            <p className={styles.subtitle}>
              You&apos;ll use this PIN to redeem rewards
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
