// // // // import React, { useState, useEffect } from 'react';
// // // // import { Calendar } from 'lucide-react';

// // // // const CountdownTimer: React.FC = () => {
// // // //   const [daysLeft, setDaysLeft] = useState<number>(0);

// // // //   useEffect(() => {
// // // //     const calculateDaysLeft = () => {
// // // //       const conferenceDate = new Date('2026-07-28'); // July 28, 2026
// // // //       const today = new Date();
// // // //       const timeDifference = conferenceDate.getTime() - today.getTime();
// // // //       const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
// // // //       setDaysLeft(daysDifference > 0 ? daysDifference : 0);
// // // //     };

// // // //     calculateDaysLeft();
// // // //     // Update every day
// // // //     const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   return (
// // // //     <div className="py-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
// // // //       <div className="container mx-auto px-6 text-center">
// // // //         <div className="flex items-center justify-center gap-3 mb-2">
// // // //           <Calendar className="w-6 h-6" />
// // // //           <span className="text-lg font-semibold">Conference Begins In:</span>
// // // //         </div>
// // // //         <div className="text-4xl md:text-5xl font-bold">
// // // //           {daysLeft} Days
// // // //         </div>
// // // //         <p className="text-blue-100 mt-2 text-sm">
// // // //           July 28–30, 2026 • Crowne Plaza – St. Peter’s Rome, Italy
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CountdownTimer;


// // // import React, { useState, useEffect } from 'react';
// // // import { Timer } from 'lucide-react';

// // // interface TimeLeft {
// // //   days: number;
// // //   hours: number;
// // //   minutes: number;
// // //   seconds: number;
// // // }

// // // const CountdownTimer: React.FC = () => {
// // //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// // //   useEffect(() => {
// // //     const calculateTimeLeft = () => {
// // //       const conferenceDate = new Date('2026-07-28T00:00:00'); // Set specific time if needed
// // //       const now = new Date();
// // //       const difference = conferenceDate.getTime() - now.getTime();

// // //       if (difference > 0) {
// // //         setTimeLeft({
// // //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // //           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// // //           minutes: Math.floor((difference / 1000 / 60) % 60),
// // //           seconds: Math.floor((difference / 1000) % 60),
// // //         });
// // //       } else {
// // //         // Stop timer if date passed
// // //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// // //       }
// // //     };

// // //     // Initial call
// // //     calculateTimeLeft();

// // //     // Update every second
// // //     const timer = setInterval(calculateTimeLeft, 1000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   // Helper to add leading zero (e.g., 5 -> 05)
// // //   const formatNumber = (num: number) => num.toString().padStart(2, '0');

// // //   return (
// // //     <div className="w-full py-8">
// // //       <div className="container mx-auto px-6">
// // //         <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-slate-800">
          
// // //           {/* Header Section */}
// // //           <div className="text-center md:text-left">
// // //             <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-indigo-600 font-semibold uppercase tracking-wider text-sm">
// // //               <Timer className="w-5 h-5" />
// // //               <span>Event Countdown</span>
// // //             </div>
// // //             <h2 className="text-2xl font-bold leading-tight">
// // //               Crowne Plaza, Rome<br />
// // //               <span className="text-slate-500 font-normal">July 28–30, 2026</span>
// // //             </h2>
// // //           </div>

// // //           {/* Timer Grid */}
// // //           <div className="flex items-start gap-4 md:gap-6">
// // //             <TimeUnit value={timeLeft.days} label="Days" />
// // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
// // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
// // //             <div className="text-3xl font-light text-slate-300 mt-2">:</div>
// // //             <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" isActive={true} />
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Sub-component for individual time blocks
// // // const TimeUnit = ({ value, label, isActive = false }: { value: string | number, label: string, isActive?: boolean }) => (
// // //   <div className="flex flex-col items-center">
// // //     <div className={`text-4xl md:text-5xl font-extrabold tabular-nums ${isActive ? 'text-indigo-600' : 'text-slate-900'}`}>
// // //       {value}
// // //     </div>
// // //     <span className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
// // //       {label}
// // //     </span>
// // //   </div>
// // // );

// // // export default CountdownTimer;


// // import React, { useState, useEffect } from 'react';
// // import { Timer } from 'lucide-react';

// // interface TimeLeft {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // }

// // const CountdownTimer: React.FC = () => {
// //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// //   useEffect(() => {
// //     const calculateTimeLeft = () => {
// //       const conferenceDate = new Date('2026-05-28T00:00:00'); 
// //       const now = new Date();
// //       const difference = conferenceDate.getTime() - now.getTime();

// //       if (difference > 0) {
// //         setTimeLeft({
// //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// //           minutes: Math.floor((difference / 1000 / 60) % 60),
// //           seconds: Math.floor((difference / 1000) % 60),
// //         });
// //       } else {
// //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// //       }
// //     };

// //     calculateTimeLeft();
// //     const timer = setInterval(calculateTimeLeft, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   const formatNumber = (num: number) => num.toString().padStart(2, '0');

// //   return (
// //     <div className="w-full py-12">
// //       <div className="container mx-auto px-6">
// //         <div className="flex flex-col items-center justify-center text-slate-800">
          
// //           {/* Single Heading */}
// //           <div className="flex items-center justify-center gap-2 mb-8">
// //             <Timer className="w-10 h-10 text-red-600" />
// //             <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
// //               Time Remaining Until Conference Begins
// //             </h2>
// //           </div>

// //           {/* Timer Grid */}
// //           <div className="flex items-start gap-4 md:gap-8">
// //             <TimeUnit value={timeLeft.days} label="Days" />
// //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// //             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
// //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// //             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
// //             <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
// //             <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" isActive={true} />
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Sub-component for individual time blocks
// // const TimeUnit = ({ value, label, isActive = false }: { value: string | number, label: string, isActive?: boolean }) => (
// //   <div className="flex flex-col items-center">
// //     <div className={`text-4xl md:text-6xl font-extrabold tabular-nums ${isActive ? 'text-indigo-600' : 'text-slate-900'}`}>
// //       {value}
// //     </div>
// //     <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 mt-2 font-medium">
// //       {label}
// //     </span>
// //   </div>
// // );

// // export default CountdownTimer;




// import React, { useState, useEffect } from "react";
// import { Timer } from "lucide-react";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const CountdownTimer: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const conferenceDate = new Date("2026-05-28T00:00:00");
//       const now = new Date();
//       const difference = conferenceDate.getTime() - now.getTime();

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatNumber = (num: number) => num.toString().padStart(2, "0");

//   return (
//     <section className="w-full py-16 bg-gradient-to-b from-[#ECFDF5] to-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex flex-col items-center justify-center">

//           {/* Heading */}
//           <div className="flex items-center gap-3 mb-10">
//             <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#047857]">
//               <Timer className="w-6 h-6" />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E293B]">
//               Time Remaining Until Conference Begins
//             </h2>
//           </div>

//           {/* Timer */}
//           <div className="flex items-start gap-4 md:gap-8">
//             <TimeUnit value={timeLeft.days} label="Days" />
//             <Separator />
//             <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
//             <Separator />
//             <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
//             <Separator />
//             <TimeUnit
//               value={formatNumber(timeLeft.seconds)}
//               label="Seconds"
//               isActive
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* ------------------ Sub Components ------------------ */

// const Separator = () => (
//   <div className="text-3xl md:text-5xl font-light text-[#A7F3D0] mt-1">
//     :
//   </div>
// );

// const TimeUnit = ({
//   value,
//   label,
//   isActive = false,
// }: {
//   value: string | number;
//   label: string;
//   isActive?: boolean;
// }) => (
//   <div className="flex flex-col items-center min-w-[70px]">
//     <div
//       className={`text-4xl md:text-6xl font-extrabold tabular-nums
//         ${isActive ? "text-[#84CC16]" : "text-[#047857]"}`}
//     >
//       {value}
//     </div>
//     <span className="text-xs md:text-sm uppercase tracking-widest text-[#64748B] mt-2 font-medium">
//       {label}
//     </span>
//   </div>
// );

// export default CountdownTimer;





import React, { useState, useEffect } from "react";
import { Timer } from "lucide-react";

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
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* =======================
     Fetch Conference Date
  ======================= */
  useEffect(() => {
    fetch(
      "https://backendconf.roboticsaisummit.com/api/robotics/important-dates/by-conferencecode/biomedical"
    )
      .then((res) => res.json())
      .then((data: ImportantDate[]) => {
        const conferenceStart = data.find(
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
      })
      .catch((err) => console.error("Date API error:", err));
  }, []);

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
          {targetDate ? (
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
              Loading conference date...
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
        ${isActive ? "text-[#84CC16]" : "text-[#047857]"}`}
    >
      {value}
    </div>
    <span className="text-xs md:text-sm uppercase tracking-widest text-[#64748B] mt-2 font-medium">
      {label}
    </span>
  </div>
);

export default CountdownTimer;
