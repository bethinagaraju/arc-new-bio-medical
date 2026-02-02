// // // // import { Link } from "react-router-dom";

// // // // export default function ScientificSessions() {
// // // // const sessions = [
// // // //   "Responsible & Ethical Artificial Intelligence",
// // // //   "Explainable AI (XAI) for Real-World Applications",
// // // //   "Generative AI and Large Language Models (LLMs)",
// // // //   "AI for Healthcare, Diagnosis & Medical Imaging",
// // // //   "AI for Cybersecurity and Fraud Detection",
// // // //   "AI in Smart Cities and Urban Development",
// // // //   "Human-Centered AI and Trustworthy Systems",

// // // //   "Deep Learning Architectures & Optimization",
// // // //   "Reinforcement Learning and Decision Making",
// // // //   "Federated Learning & Privacy-Preserving ML",

// // // //   "Autonomous Robots and Intelligent Systems",
// // // //   "Human-Robot Interaction (HRI)",
// // // //   "AI-Driven Robotics for Industrial Automation",
// // // //   "Swarm Robotics and Multi-Robot Systems",
// // // //   "AI-Powered Drones and Autonomous Vehicles"
// // // // ];


// // // //   return (
// // // //     <section className="w-full py-12 px-6 max-w-6xl mx-auto">
      
// // // //           <h2 className="text-3xl font-bold text-[#00488B] mb-10 text-center">
// // // //             ICBME 2026 CONFERENCE TOPICS
// // // //           </h2>

// // // //       {/* Grid including buttons */}
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
// // // //         {sessions.map((item, idx) => (
// // // //           <div
// // // //             key={idx}
// // // //             className="bg-gray-100 text-[#053047] font-medium p-4 border border-gray-300 hover:bg-gray-200 transition cursor-pointer text-sm"
// // // //           >
// // // //             {item}
// // // //           </div>
// // // //         ))}


// // // // <Link to="/AbstractSubmission" className="w-full md:w-auto" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // //   <button className="p-4 w-full text-center font-semibold bg-[#053047] text-white hover:bg-[#07456a] transition" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // //     Submit Abstract
// // // //   </button>
// // // // </Link>

// // // // {/* Button 2 */}
// // // // <Link to="/sessions" className="w-full md:w-auto" title="View All Sessions at ICBME 2026 Conference" aria-label="View All Sessions at ICBME 2026 Conference">
// // // //   <button className="p-4 w-full text-center font-semibold border border-[#053047] bg-[#394a81] text-white hover:bg-[#2e3b6b] transition" title="View All Sessions at ICBME 2026 Conference" aria-label="View All Sessions at ICBME 2026 Conference">
// // // //     View All Sessions
// // // //   </button>
// // // // </Link>

// // // // {/* Button 3 */}
// // // // <Link to="/register" className="w-full md:w-auto" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // //   <button className="p-4 w-full text-center font-semibold bg-[#0282b8] text-white hover:bg-[#036a97] transition" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // //     Register
// // // //   </button>
// // // // </Link>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }











// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { ArrowRight, CheckCircle2 } from "lucide-react";

// // // export default function ScientificSessions() {
// // //   const sessions = [
// // //     "Responsible & Ethical Artificial Intelligence",
// // //     "Explainable AI (XAI) for Real-World Applications",
// // //     "Generative AI and Large Language Models (LLMs)",
// // //     "AI for Healthcare, Diagnosis & Medical Imaging",
// // //     "AI for Cybersecurity and Fraud Detection",
// // //     "AI in Smart Cities and Urban Development",
// // //     "Human-Centered AI and Trustworthy Systems",
// // //     "Deep Learning Architectures & Optimization",
// // //     "Reinforcement Learning and Decision Making",
// // //     "Federated Learning & Privacy-Preserving ML",
// // //     "Autonomous Robots and Intelligent Systems",
// // //     "Human-Robot Interaction (HRI)",
// // //     "AI-Driven Robotics for Industrial Automation",
// // //     "Swarm Robotics and Multi-Robot Systems",
// // //     "AI-Powered Drones and Autonomous Vehicles"
// // //   ];

// // //   return (
// // //     <section className="w-full py-16 px-4 bg-slate-50">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* --- Header Section --- */}
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-3xl md:text-4xl font-extrabold text-[#00488B] mb-4">
// // //             ICBME 2026 CONFERENCE TOPICS
// // //           </h2>
// // //           <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
// // //           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
// // //             Explore the cutting-edge themes shaping the future of intelligent systems.
// // //           </p>
// // //         </div>

// // //         {/* --- Sessions Grid (Cards) --- */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
// // //           {sessions.map((item, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="
// // //                 group relative
// // //                 bg-white p-6 rounded-xl
// // //                 shadow-sm border border-slate-200
// // //                 hover:shadow-md hover:border-blue-300
// // //                 transition-all duration-300
// // //                 flex items-start gap-3
// // //                 cursor-default
// // //               "
// // //             >
// // //               {/* Decorative Icon */}
// // //               <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0 group-hover:text-blue-600 transition-colors" />
              
// // //               <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-[#00488B] transition-colors">
// // //                 {item}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* --- Action Buttons (Separated Row) --- */}
// // //         <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
// // //           {/* Button 1: Abstract */}
// // //           <Link 
// // //             to="/AbstractSubmission" 
// // //             title="Submit Abstract for ICBME 2026 Conference" 
// // //             className="w-full md:w-auto group"
// // //           >
// // //             <button className="w-full md:w-[220px] px-6 py-4 bg-[#053047] text-white font-semibold rounded-lg shadow-lg hover:bg-[#07456a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
// // //               Submit Abstract <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //           </Link>

// // //           {/* Button 2: Sessions */}
// // //           <Link 
// // //             to="/sessions" 
// // //             title="View All Sessions at ICBME 2026 Conference" 
// // //             className="w-full md:w-auto group"
// // //           >
// // //             <button className="w-full md:w-[220px] px-6 py-4 bg-[#394a81] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2e3b6b] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
// // //               View All Sessions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //           </Link>

// // //           {/* Button 3: Register */}
// // //           <Link 
// // //             to="/register" 
// // //             title="Register for ICBME 2026 Conference" 
// // //             className="w-full md:w-auto group"
// // //           >
// // //             <button className="w-full md:w-[220px] px-6 py-4 bg-[#0282b8] text-white font-semibold rounded-lg shadow-lg hover:bg-[#036a97] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
// // //               Register Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //           </Link>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Check, Send, CalendarDays, UserPlus } from "lucide-react";

// // export default function ScientificSessions() {
// //   const sessions = [
// //     "Responsible & Ethical Artificial Intelligence",
// //     "Explainable AI (XAI) for Real-World Applications",
// //     "Generative AI and Large Language Models (LLMs)",
// //     "AI for Healthcare, Diagnosis & Medical Imaging",
// //     "AI for Cybersecurity and Fraud Detection",
// //     "AI in Smart Cities and Urban Development",
// //     "Human-Centered AI and Trustworthy Systems",
// //     "Deep Learning Architectures & Optimization",
// //     "Reinforcement Learning and Decision Making",
// //     "Federated Learning & Privacy-Preserving ML",
// //     "Autonomous Robots and Intelligent Systems",
// //     "Human-Robot Interaction (HRI)",
// //     "AI-Driven Robotics for Industrial Automation",
// //     "Swarm Robotics and Multi-Robot Systems",
// //     "AI-Powered Drones and Autonomous Vehicles"
// //   ];

// //   return (
// //     <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
// //       {/* Decorative Background Blur */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />

// //       <div className="max-w-7xl mx-auto relative z-10">
        
// //         {/* --- Header Section --- */}
// //         <div className="text-center mb-16">
// //           <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
// //             Scientific Program
// //           </span>
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-[#00488B] mb-6 tracking-tight">
// //             Conference Topics
// //           </h2>
// //           <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
// //           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
// //             Discover the latest breakthroughs in intelligent systems. Join global experts as we explore the future of Biomedical Engineering.
// //           </p>
// //         </div>

// //         {/* --- Sessions Grid --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
// //           {sessions.map((item, idx) => (
// //             <div
// //               key={idx}
// //               className="
// //                 group relative
// //                 bg-white p-4
// //                 border border-slate-100
// //                 shadow-sm hover:shadow-xl hover:shadow-blue-900/5
// //                 hover:-translate-y-1
// //                 transition-all duration-300 ease-out
// //                 flex items-start gap-4
// //                 cursor-default
// //                 overflow-hidden
// //               "
// //             >
// //               {/* Hover Accent Line */}
// //               <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

// //               {/* Icon Container */}
// //               {/* <div className="
// //                 shrink-0 w-10 h-10 
// //                 rounded-full bg-blue-50 
// //                 flex items-center justify-center 
// //                 group-hover:bg-blue-600 group-hover:text-white
// //                 transition-colors duration-300
// //               ">
// //                 <Check className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
// //               </div> */}
              
// //               {/* Text */}
// //               <span className="text-slate-700 font-semibold text-[15px] leading-snug group-hover:text-slate-900 ">
// //                 {item}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* --- Call to Action Buttons --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
// //           {/* Button 1: Submit Abstract */}
// //           <Link 
// //             to="/AbstractSubmission" 
// //             title="Submit Abstract for ICBME 2026" 
// //             className="group"
// //           >
// //             <div className="h-full p-1 rounded-xl bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
// //               <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center justify-center gap-2 group-hover:bg-opacity-95 transition-all">
// //                 <Send className="w-6 h-6 text-[#053047] group-hover:text-blue-600 mb-1" />
// //                 <span className="font-bold text-[#053047] group-hover:text-blue-700">Submit Abstract</span>
// //                 {/* <span className="text-xs text-slate-500 font-medium">Share your research</span> */}
// //               </button>
// //             </div>
// //           </Link>

// //           {/* Button 2: View Program */}
// //           <Link 
// //             to="/sessions" 
// //             title="View Full Program" 
// //             className="group"
// //           >
// //             <div className="h-full p-1 rounded-xl bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
// //               <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center justify-center gap-2 group-hover:bg-opacity-95 transition-all">
// //                 <CalendarDays className="w-6 h-6 text-[#394a81] group-hover:text-blue-600 mb-1" />
// //                 <span className="font-bold text-[#394a81] group-hover:text-blue-700">View All Topics</span>
// //                 {/* <span className="text-xs text-slate-500 font-medium">Explore the agenda</span> */}
// //               </button>
// //             </div>
// //           </Link>

// //           {/* Button 3: Register - Primary */}
// //           <Link 
// //             to="/register" 
// //             title="Register Now" 
// //             className="group"
// //           >
// //             <div className="h-full p-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-200 group-hover:shadow-blue-400/50 transition-all duration-300">
// //               <button className="w-full h-full bg-transparent rounded-lg px-6 py-4 flex flex-col items-center justify-center gap-2 text-white">
// //                 <UserPlus className="w-6 h-6 text-white mb-1" />
// //                 <span className="font-bold text-white">Register Now</span>
// //                 {/* <span className="text-xs text-blue-100 font-medium flex items-center gap-1">
// //                   Secure your spot <ArrowRight className="w-3 h-3" />
// //                 </span> */}
// //               </button>
// //             </div>
// //           </Link>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import React from "react";
// import { Link } from "react-router-dom";
// import { Send, CalendarDays, UserPlus } from "lucide-react";

// export default function ScientificSessions() {
//   const sessions = [
//     "Responsible & Ethical Artificial Intelligence",
//     "Explainable AI (XAI) for Real-World Applications",
//     "Generative AI and Large Language Models (LLMs)",
//     "AI for Healthcare, Diagnosis & Medical Imaging",
//     "AI for Cybersecurity and Fraud Detection",

//     "AI in Smart Cities and Urban Development",
//     "Human-Centered AI and Trustworthy Systems",
//     "Deep Learning Architectures & Optimization",
//     "Reinforcement Learning and Decision Making",
//     "Federated Learning & Privacy-Preserving ML",

//     "Autonomous Robots and Intelligent Systems",
//     "Human-Robot Interaction (HRI)",
//     "AI-Driven Robotics for Industrial Automation",
//     "Swarm Robotics and Multi-Robot Systems",
//     "AI-Powered Drones and Autonomous Vehicles"
//   ];

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

//           <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
//             Discover the latest breakthroughs in intelligent systems. Join global experts as we explore the future of Biomedical Engineering.
//           </p>
//         </div>

//         {/* Sessions Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
//           {sessions.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 group relative
//                 bg-white p-4
//                 border border-[#D1FAE5]
//                 shadow-sm hover:shadow-lg
//                 hover:-translate-y-1
//                 transition-all duration-300
//                 flex items-start gap-4
//                 overflow-hidden
//               "
//             >
//               {/* Hover Accent Line */}
//               <div className="absolute top-0 left-0 w-1 h-full bg-[#047857] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

//               <span className="text-[#1E293B] font-semibold text-[15px] leading-snug">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>

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












import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Send, CalendarDays, UserPlus } from "lucide-react";

/* ================= TYPES ================= */

interface Topic {
  id: number;
  topicName: string;
  orderIndex: number;
}

/* ================= COMPONENT ================= */

export default function ScientificSessions() {
  const [sessions, setSessions] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://backendconf.roboticsaisummit.com/api/robotics/topics/by-conferencecode/biomedical"
        );

        const data: Topic[] = await res.json();

        // sort by orderIndex and limit to 15
        const sorted = data
          .sort((a, b) => a.orderIndex - b.orderIndex)
          .slice(0, 15);

        setSessions(sorted);
      } catch (error) {
        console.error("Failed to load topics");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-[#ECFDF5] to-white relative overflow-hidden">

      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#A7F3D0]/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#047857] font-bold tracking-wider text-sm uppercase mb-2 block">
            Scientific Program
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6 tracking-tight">
            Conference Topics
          </h2>

          <div className="h-1.5 w-24 bg-[#84CC16] mx-auto rounded-full mb-6"></div>

          {/* <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in intelligent systems. Join global experts as we explore the future of Biomedical Engineering.
          </p> */}

          <p className="text-lg text-[#64748B] max-w-6xl mx-auto leading-relaxed">
  Discover the latest breakthroughs in biomedical engineering and healthcare innovation. Join global experts as we explore advanced medical technologies, AI-enabled healthcare systems, and their real-world clinical impact.
</p>

        </div>

        {/* Sessions Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading conference topics...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sessions.map((item) => (
              <div
                key={item.id}
                className="
                  group relative
                  bg-white p-4
                  border border-[#D1FAE5]
                  shadow-sm hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                  flex items-start gap-4
                  overflow-hidden
                "
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#047857] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <span className="text-[#1E293B] font-semibold text-[15px] leading-snug">
                  {item.topicName}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          {/* Submit Abstract */}
          <Link to="/AbstractSubmission" className="group">
            <div className="h-full p-1 rounded-xl bg-[#D1FAE5] group-hover:bg-[#047857] transition-all">
              <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center gap-2 group-hover:bg-white/95">
                <Send className="w-6 h-6 text-[#047857]" />
                <span className="font-bold text-[#1E293B]">
                  Submit Abstract
                </span>
              </button>
            </div>
          </Link>

          {/* View Topics */}
          <Link to="/sessions" className="group">
            <div className="h-full p-1 rounded-xl bg-[#D1FAE5] group-hover:bg-[#047857] transition-all">
              <button className="w-full h-full bg-white rounded-lg px-6 py-4 flex flex-col items-center gap-2">
                <CalendarDays className="w-6 h-6 text-[#047857]" />
                <span className="font-bold text-[#1E293B]">
                  View All Topics
                </span>
              </button>
            </div>
          </Link>

          {/* Register – Primary */}
          <Link to="/register" className="group">
            <div className="h-full p-1 rounded-xl bg-[#84CC16] shadow-lg hover:shadow-xl transition-all">
              <button className="w-full h-full bg-transparent rounded-lg px-6 py-4 flex flex-col items-center gap-2 text-[#1E293B]">
                <UserPlus className="w-6 h-6" />
                <span className="font-bold">
                  Register Now
                </span>
              </button>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
