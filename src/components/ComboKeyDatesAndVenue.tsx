


import React, { useEffect, useState } from "react";
import Header from "./Header";
import EndFooter from "./EndFooter";
import { useConference } from "../contexts/ConferenceContext";

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
  const { data, loading, error } = useConference();

  const dates = React.useMemo(() => {
    const mapped: Record<string, string> = {};
    data?.importantDates?.forEach((item) => {
      mapped[item.dateType] = item.date;
    });
    return mapped;
  }, [data]);

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
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading important dates...
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            Error loading dates: {error}
          </div>
        ) : (
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
        )}
      </div>

      <EndFooter />
    </section>
  );
};

export default ComboKeyDatesAndVenue;
