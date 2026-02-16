
// import React from "react";
// import { Link } from "react-router-dom";
// import { Send, CalendarDays, UserPlus } from "lucide-react";
// import { useConference } from "../contexts/ConferenceContext";

// /* ================= TYPES ================= */

// interface Topic {
//   id: number;
//   topicName: string;
//   orderIndex: number;
// }

// /* ================= COMPONENT ================= */

// export default function ScientificSessions() {
//   const { data, loading, error } = useConference();

//   const sessions = data?.topics.sort((a, b) => a.orderIndex - b.orderIndex).slice(0, 15) || [];

//   return (
//     <section className="w-full py-20 px-4 bg-gradient-to-b from-[#ECFDF5] to-white relative overflow-hidden">

//       {/* Decorative Background Blur */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#A7F3D0]/40 blur-[120px] rounded-full pointer-events-none -z-10" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="text-[#047857] font-bold tracking-wider text-sm uppercase mb-2 block">
//             Scientific Program
//           </span>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6 tracking-tight">
//             Conference Topics
//           </h2>

//           <div className="h-1.5 w-24 bg-[#84CC16] mx-auto rounded-full mb-6"></div>



//           <p className="text-lg text-[#64748B] max-w-6xl mx-auto leading-relaxed">
//   Discover the latest breakthroughs in biomedical engineering and healthcare innovation. Join global experts as we explore advanced medical technologies, AI-enabled healthcare systems, and their real-world clinical impact.
// </p>

//         </div>

//         {/* Sessions Grid */}
//         {loading ? (
//           <div className="text-center py-12 text-gray-500">
//             Loading conference topics...
//           </div>
//         ) : error ? (
//           <div className="text-center py-12 text-red-500">
//             Error loading topics: {error}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
//             {sessions.map((item) => (
//               <div
//                 key={item.id}
//                 className="
//                   group relative
//                   bg-white p-4
//                   border border-[#D1FAE5]
//                   shadow-sm hover:shadow-lg
//                   hover:-translate-y-1
//                   transition-all duration-300
//                   flex items-start gap-4
//                   overflow-hidden
//                 "
//               >
//                 {/* Hover Accent Line */}
//                 <div className="absolute top-0 left-0 w-1 h-full bg-[#047857] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

//                 <span className="text-[#1E293B] font-semibold text-[15px] leading-snug">
//                   {item.topicName}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* CTA Buttons */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

//           {/* Submit Abstract */}
//           <Link to="/AbstractSubmission" className="group">
//             <div className="h-full p-1 rounded-xl bg-[#D1FAE5] group-hover:bg-[#047857] transition-all">
//               <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center gap-2 group-hover:bg-white/95">
//                 <Send className="w-6 h-6 text-[#047857]" />
//                 <span className="font-bold text-[#1E293B]">
//                   Submit Abstract
//                 </span>
//               </button>
//             </div>
//           </Link>

//           {/* View Topics */}
//           <Link to="/sessions" className="group">
//             <div className="h-full p-1 rounded-xl bg-[#D1FAE5] group-hover:bg-[#047857] transition-all">
//               <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center gap-2">
//                 <CalendarDays className="w-6 h-6 text-[#047857]" />
//                 <span className="font-bold text-[#1E293B]">
//                   View All Topics
//                 </span>
//               </button>
//             </div>
//           </Link>

//           {/* Register – Primary */}
//           <Link to="/register" className="group">
//             <div className="h-full p-1 rounded-xl bg-[#84CC16] shadow-lg hover:shadow-xl transition-all">
//               <button className="w-full h-full bg-transparent rounded-lg px-6 py-4 flex flex-col items-center gap-2 text-[#1E293B]">
//                 <UserPlus className="w-6 h-6" />
//                 <span className="font-bold">
//                   Register Now
//                 </span>
//               </button>
//             </div>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import { Send, CalendarDays, UserPlus } from "lucide-react";
import { useConference } from "../contexts/ConferenceContext";

/* ================= TYPES ================= */
interface Topic {
  id: number;
  topicName: string;
  orderIndex: number;
}

/* ================= COMPONENT ================= */
export default function ScientificSessions() {
  const { data, loading, error } = useConference();

  const sessions =
    data?.topics
      ?.sort((a, b) => a.orderIndex - b.orderIndex)
      .slice(0, 15) || [];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#047857] font-semibold text-sm uppercase tracking-wide">
            Scientific Program
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Conference Topics
          </h2>

          <p className="mt-5 text-lg text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in biomedical engineering and
            healthcare innovation. Join global experts exploring advanced
            medical technologies and AI-enabled healthcare systems.
          </p>
        </div>

        {/* Sessions Grid */}
        {loading ? (
          <div className="text-center py-12 text-[#64748B]">
            Loading conference topics…
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            Error loading topics: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sessions.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white
                9  border border-[#E5E7EB]
                
                  p-3
                  transition
                  hover:border-[#047857]

                  items-center
                  justify-center
                  flex
                "

              >
                <span className="text-[#022C22] font-medium text-[15px] leading-snug">
                  {item.topicName}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          {/* Submit Abstract */}
          <Link to="/AbstractSubmission">
            <div className="border border-[#E5E7EB] p-4 text-center hover:border-[#047857] transition">
              <Send className="mx-auto mb-2 text-[#047857]" />
              <div className="font-semibold text-[#022C22]">
                Submit Abstract
              </div>
            </div>
          </Link>

          {/* View Topics */}
          <Link to="/sessions">
            <div className="border border-[#E5E7EB] p-4 text-center hover:border-[#047857] transition">
              <CalendarDays className="mx-auto mb-2 text-[#047857]" />
              <div className="font-semibold text-[#022C22]">
                View All Topics
              </div>
            </div>
          </Link>

          {/* Register */}
          <Link to="/register">
            <div className="p-4 text-center bg-[#047857] hover:bg-[#065F46] transition">
              <UserPlus className="mx-auto mb-2 text-white" />
              <div className="font-semibold text-white">
                Register Now
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
