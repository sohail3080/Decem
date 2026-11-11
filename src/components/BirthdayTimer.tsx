"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  targetYear: number;
};

function getNextBirthday(from: Date): Date {
  const year = from.getFullYear();
  const birthdayPassed =
    from.getMonth() > 11 || (from.getMonth() === 11 && from.getDate() > 1);

  return birthdayPassed
    ? new Date(year + 1, 11, 1, 0, 0, 0, 0)
    : new Date(year, 11, 1, 0, 0, 0, 0);
}

function getTimeLeft(now: Date): TimeLeft {
  const target = getNextBirthday(now);
  const diff = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    targetYear: target.getFullYear(),
  };
}

const units: { key: keyof Omit<TimeLeft, "targetYear">; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function BirthdayTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <div className="countdown-grid" aria-hidden>
        {units.map(({ key, label }) => (
          <div className="countdown-cell" key={key}>
            <div className="countdown-value">--</div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="countdown-grid" aria-live="polite">
        {units.map(({ key, label }) => (
          <div className="countdown-cell" key={key}>
            <div className="countdown-value" key={`${key}-${timeLeft[key]}`}>
              {timeLeft[key]}
            </div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
      <p className="countdown-note">
        December 1st, {timeLeft.targetYear} is the next chapter marker on my
        calendar.
      </p>
    </>
  );
}
