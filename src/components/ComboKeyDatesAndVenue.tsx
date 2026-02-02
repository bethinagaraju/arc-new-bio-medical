// // // import React, { useState } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import Header from "./Header";
// // // import EndFooter from "./EndFooter";

// // // const ComboKeyDatesAndVenue: React.FC = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const conferenceOpenings = [
// // //     { date: "January 30, 2026" },

// // //   ];

// // //   const registrationDeadlines = [
// // //     { date: "February 15, 2026" },

// // //   ];

// // //   const abstractDeadlines = [
// // //     {date: "July 28–30, 2026" },

// // //   ];

// // //     const abstractDeadliness = [
// // //     { date: "Febrauary 28, 2026" },

// // //   ];

// // //   const cards = [
// // //         {
// // //       title: "Conference Dates",
// // //       bgColor: "#222222",
// // //       data: abstractDeadlines,
// // //     },
// // //     {
// // //       title: "Submission Deadline",
// // //       bgColor: "#0c3e61",
// // //       data: conferenceOpenings,
// // //     },  
// // //     {
// // //       title: "Notification of Acceptance",
// // //       bgColor: "#0087b6",
// // //       data: registrationDeadlines,
// // //     },

// // //         {
// // //       title: "Final Paper Submission",
// // //       bgColor: "#4C6DA6",
// // //       data: abstractDeadliness,
// // //     },
// // //   ];

// // //   return (
// // //     <section>
// // //       <Header />
// // //       <div className="max-w-6xl mx-auto">

// // //         {/* Header */}
// // //         <div className="text-center mb-12 pt-6">
// // //           <h2 className="text-4xl font-bold text-[#2E376C]">
// // //             Important Dates
// // //           </h2>
// // //           <p className="text-gray-600 max-w-xl mx-auto mt-2">
// // //             Mark your calendar for the key milestones of ICBME 2026
// // //           </p>
// // //         </div>

// // //         {/* Desktop View */}
// // //         <div className="hidden md:grid grid-cols-4 gap-4">
// // //           {cards.map((card, index) => (
// // //             <div
// // //               key={index}
// // //               className="shadow-xl"
// // //             >
// // //               <div
// // //                 className="text-white text-center font-semibold py-3 rounded-t-3xl"
// // //                 style={{ backgroundColor: card.bgColor }}
// // //               >
// // //                 {card.title}
// // //               </div>
// // //               <div className="p-6 text-center space-y-5">
// // //                 {card.data.map((item, idx) => (
// // //                   <div key={idx}>
// // //                     <p className="text-gray-600 text-3xl font-bold">{item.date}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Mobile Slider */}
// // //         <div className="md:hidden">
// // //           <div className="relative">
// // //             <div className="bg-white shadow-xl border border-gray-200 rounded-3xl">
// // //               <div
// // //                 className="text-white text-center font-semibold py-3 rounded-t-3xl"
// // //                 style={{ backgroundColor: cards[currentIndex].bgColor }}
// // //               >
// // //                 {cards[currentIndex].title}
// // //               </div>
// // //               <div className="p-6 text-center space-y-5">
// // //                 {cards[currentIndex].data.map((item, idx) => (
// // //                   <div key={idx}>
// // //                     <p className="font-semibold">{item.title}</p>
// // //                     <p>{item.date}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Controls */}
// // //             <button
// // //               onClick={() =>
// // //                 setCurrentIndex(
// // //                   currentIndex === 0 ? cards.length - 1 : currentIndex - 1
// // //                 )
// // //               }
// // //               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
// // //             >
// // //               <ChevronLeft size={20} />
// // //             </button>

// // //             <button
// // //               onClick={() =>
// // //                 setCurrentIndex(
// // //                   currentIndex === cards.length - 1 ? 0 : currentIndex + 1
// // //                 )
// // //               }
// // //               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
// // //             >
// // //               <ChevronRight size={20} />
// // //             </button>
// // //           </div>

// // //           {/* Dots */}
// // //           <div className="flex justify-center mt-4 space-x-2">
// // //             {cards.map((_, idx) => (
// // //               <button
// // //                 key={idx}
// // //                 onClick={() => setCurrentIndex(idx)}
// // //                 className={`w-3 h-3 rounded-full ${
// // //                   idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
// // //                 }`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="mt-12">
// // //         <EndFooter/>
// // //       </div>
      
// // //     </section>
// // //   );
// // // };

// // // export default ComboKeyDatesAndVenue;











// // import React from "react";
// // import Header from "./Header";
// // import EndFooter from "./EndFooter";

// // const ComboKeyDatesAndVenue: React.FC = () => {
// //   const conferenceOpenings = [{ date: "January 30, 2026" }];
// //   const registrationDeadlines = [{ date: "February 15, 2026" }];
// //   const abstractDeadlines = [{ date: "July 28–30, 2026" }];
// //   const finalPaperDeadlines = [{ date: "February 28, 2026" }];

// //   const cards = [
// //     {
// //       title: "Conference Dates",
// //       bgColor: "#222222",
// //       data: abstractDeadlines,
// //     },
// //     {
// //       title: "Submission Deadline",
// //       bgColor: "#0c3e61",
// //       data: conferenceOpenings,
// //     },
// //     {
// //       title: "Notification of Acceptance",
// //       bgColor: "#0087b6",
// //       data: registrationDeadlines,
// //     },
// //     {
// //       title: "Final Paper Submission",
// //       bgColor: "#4C6DA6",
// //       data: finalPaperDeadlines,
// //     },
// //   ];

// //   return (
// //     <section>
// //       <Header />

// //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
// //         {/* Page Header */}
// //         <div className="text-center mb-12 pt-6">
// //           <h2 className="text-3xl sm:text-4xl font-bold text-[#2E376C]">
// //             Important Dates
// //           </h2>
// //           <p className="text-gray-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
// //             Mark your calendar for the key milestones of ICBME 2026
// //           </p>
// //         </div>

// //         {/* Responsive Cards Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //           {cards.map((card, index) => (
// //             <div
// //               key={index}
// //               className="bg-white shadow-xl rounded-3xl overflow-hidden"
// //             >
// //               {/* Card Header */}
// //               <div
// //                 className="text-white text-center font-semibold py-4 text-sm sm:text-base"
// //                 style={{ backgroundColor: card.bgColor }}
// //               >
// //                 {card.title}
// //               </div>

// //               {/* Card Body */}
// //               <div className="p-6 text-center">
// //                 {card.data.map((item, idx) => (
// //                   <p
// //                     key={idx}
// //                     className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700"
// //                   >
// //                     {item.date}
// //                   </p>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mt-12">
// //         <EndFooter />
// //       </div>
// //     </section>
// //   );
// // };

// // export default ComboKeyDatesAndVenue;






// import React from "react";
// import Header from "./Header";
// import EndFooter from "./EndFooter";

// const ComboKeyDatesAndVenue: React.FC = () => {
//   const conferenceOpenings = [{ date: "January 30, 2026" }];
//   const registrationDeadlines = [{ date: "February 15, 2026" }];
//   const abstractDeadlines = [{ date: "July 28–30, 2026" }];
//   const finalPaperDeadlines = [{ date: "February 28, 2026" }];

//   const cards = [
//     {
//       title: "Conference Dates",
//       accent: "from-[#047857] to-[#065F46]",
//       data: abstractDeadlines,
//     },
//     {
//       title: "Submission Deadline",
//       accent: "from-[#0F766E] to-[#047857]",
//       data: conferenceOpenings,
//     },
//     {
//       title: "Notification of Acceptance",
//       accent: "from-[#059669] to-[#047857]",
//       data: registrationDeadlines,
//     },
//     {
//       title: "Final Paper Submission",
//       accent: "from-[#16A34A] to-[#047857]",
//       data: finalPaperDeadlines,
//     },
//   ];

//   return (
//     <section className="bg-white">
//       <Header />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
//         {/* Page Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
//             Important Dates
//           </h2>
//           <p className="text-gray-600 max-w-xl mx-auto mt-3 text-sm sm:text-base">
//             Mark your calendar for the key milestones of ICBME 2026
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white border border-gray-200 rounded-2xl
//                 transition-all duration-300
//                 hover:-translate-y-1 hover:shadow-lg
//               "
//             >
//               {/* Accent Bar */}
//               <div
//                 className={`h-2 bg-gradient-to-r ${card.accent}`}
//               />

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
//                   {card.title}
//                 </h3>

//                 {card.data.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="text-xl sm:text-2xl font-bold text-[#047857]"
//                   >
//                     {item.date}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <EndFooter />
//     </section>
//   );
// };

// export default ComboKeyDatesAndVenue;



import React, { useEffect, useState } from "react";
import Header from "./Header";
import EndFooter from "./EndFooter";

/* =======================
   Types
======================= */
interface ImportantDate {
  id: number;
  date: string;
  conferencecode: string;
  dateType: string;
}

/* =======================
   Component
======================= */
const ComboKeyDatesAndVenue: React.FC = () => {
  const [dates, setDates] = useState<Record<string, string>>({});

  /* =======================
     Fetch Important Dates
  ======================= */
  useEffect(() => {
    fetch(
      "https://backendconf.roboticsaisummit.com/api/robotics/important-dates/by-conferencecode/biomedical"
    )
      .then((res) => res.json())
      .then((data: ImportantDate[]) => {
        const mapped: Record<string, string> = {};

        data.forEach((item) => {
          mapped[item.dateType] = item.date;
        });

        setDates(mapped);
      })
      .catch((err) =>
        console.error("Important Dates API error:", err)
      );
  }, []);

  /* =======================
     Cards Configuration
  ======================= */
  const cards = [
    {
      title: "Conference Dates",
      accent: "from-[#047857] to-[#065F46]",
      value: dates["Conference Dates"],
    },
    {
      title: "Submission Deadline",
      accent: "from-[#0F766E] to-[#047857]",
      value: dates["Submission Deadline"],
    },
    {
      title: "Notification of Acceptance",
      accent: "from-[#059669] to-[#047857]",
      value: dates["Notification of Acceptance"],
    },
    {
      title: "Final Paper Submission",
      accent: "from-[#16A34A] to-[#047857]",
      value: dates["Final Paper Submission"],
    },
  ];

  return (
    <section className="bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Important Dates
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Mark your calendar for the key milestones of ICBME 2026
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white border border-gray-200 rounded-2xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* Accent Bar */}
              <div className={`h-2 bg-gradient-to-r ${card.accent}`} />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  {card.title}
                </h3>

                <p className="text-xl sm:text-2xl font-bold text-[#047857]">
                  {card.value || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EndFooter />
    </section>
  );
};

export default ComboKeyDatesAndVenue;
