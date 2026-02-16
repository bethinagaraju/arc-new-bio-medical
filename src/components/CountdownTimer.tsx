

import React, { useState, useEffect } from "react";
import { Timer } from "lucide-react";
import { useConference } from "../contexts/ConferenceContext";

/* =======================
   Types
======================= */
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ImportantDate {
  id: number;
  date: string;
  conferencecode: string;
  dateType: string;
}

/* =======================
   Component
======================= */
const CountdownTimer: React.FC = () => {
  const { data, loading, error } = useConference();
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* =======================
     Set Target Date from Context
  ======================= */
  useEffect(() => {
    if (data?.importantDates) {
      const conferenceStart = data.importantDates.find(
        (item) => item.dateType === "Conference Start Date"
      );

      if (conferenceStart?.date) {
        // API format: DD-MM-YYYY
        const [day, month, year] = conferenceStart.date.split("-");
        const parsedDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(day),
          0,
          0,
          0
        );
        setTargetDate(parsedDate);
      }
    }
  }, [data]);

  /* =======================
     Countdown Logic
  ======================= */
  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  /* =======================
     UI
  ======================= */
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#ECFDF5] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center">

          {/* Heading */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#047857]">
              <Timer className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E293B]">
              Time Remaining Until Conference Begins
            </h2>
          </div>

          {/* Timer */}
          {loading ? (
            <div className="text-center py-12 text-gray-500">
              Loading countdown...
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              Error loading countdown: {error}
            </div>
          ) : targetDate ? (
            <div className="flex items-start gap-4 md:gap-8">
              <TimeUnit value={timeLeft.days} label="Days" />
              <Separator />
              <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
              <Separator />
              <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
              <Separator />
              <TimeUnit
                value={formatNumber(timeLeft.seconds)}
                label="Seconds"
                isActive
              />
            </div>
          ) : (
            <p className="text-slate-500 text-lg">
              Conference date not available
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

/* =======================
   Sub Components
======================= */

const Separator = () => (
  <div className="text-3xl md:text-5xl font-light text-[#A7F3D0] mt-1">:</div>
);

const TimeUnit = ({
  value,
  label,
  isActive = false,
}: {
  value: string | number;
  label: string;
  isActive?: boolean;
}) => (
  <div className="flex flex-col items-center min-w-[70px]">
    <div
      className={`text-4xl md:text-6xl font-extrabold tabular-nums
        ${isActive ? "text-[#84CC16]" : "text-[#022C22]"}`}
    >
      {value}
    </div>
    <span className="text-xs md:text-sm uppercase tracking-widest text-[#64748B] mt-2 font-medium">
      {label}
    </span>
  </div>
);

export default CountdownTimer;
