
// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";

// // // // // const ContentSection: React.FC = () => {
// // // // //   return (
// // // // //     <section
// // // // //       id="about-section"
// // // // //       className="py-8 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white pt-6"
// // // // //     >
// // // // //       <div className="max-w-7xl mx-auto">

// // // // //         {/* --- VIDEO CONTAINER (Floated Right) --- */}
// // // // //         <div className="w-full md:w-1/2 lg:w-[45%] mb-6 md:mb-4 md:ml-10 md:float-right mt-2">
// // // // //           <div className="overflow-hidden bg-black relative">
// // // // //             <video
// // // // //               className="w-full h-full object-cover"
// // // // //               src="/ICHIS-2026-video.mp4"
// // // // //               controls
// // // // //               autoPlay
// // // // //               muted
// // // // //               loop
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* --- TEXT CONTENT --- */}
// // // // //         <div
// // // // //           className="
// // // // //             text-gray-700
// // // // //             leading-relaxed
// // // // //             text-[16px]
// // // // //             text-left
// // // // //             whitespace-normal
// // // // //           "
// // // // //         >
// // // // //           <h2 className="text-3xl font-bold text-[#00488B] mb-6">
// // // // //             ABOUT ICHIS 2026  HYBRID EVENT
// // // // //           </h2>

// // // // //           <p className="mb-3">
// // // // //             The International Conference on Artificial Intelligence, Machine
// // // // //             Learning & Robotics (ICHIS 2026) is a global academic forum bringing
// // // // //             together researchers, faculty members, students, and industry
// // // // //             professionals to exchange knowledge and present recent advances in
// // // // //             intelligent systems.
// // // // //           </p>

// // // // //           <p className="mb-3">
// // // // //             Scheduled for July 28–30, 2026, in Seoul, South Korea, ICHIS 2026 will be
// // // // //             conducted in a hybrid format, enabling participation through both
// // // // //             in-person and virtual presentations.
// // // // //           </p>

// // // // //           <p className="mb-3">
// // // // //             The conference focuses on fostering academic discussion,
// // // // //             interdisciplinary collaboration, and responsible innovation across
// // // // //             Health Innovation Summit. Participants are invited to
// // // // //             share original research, case studies, and emerging ideas through
// // // // //             oral and poster sessions.
// // // // //           </p>

// // // // //           <p className="mb-3">
// // // // //             ICHIS 2026 aims to support meaningful knowledge exchange,
// // // // //             professional networking, and collaboration within the global
// // // // //             research community.<Link to="/about" className="text-[#0091b5] hover:text-[#00488B] hover:underline ml-1" title="About ICHIS 2026 Conference" aria-label="About ICHIS 2026 Conference">Know more</Link>
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* --- BUTTON GROUP --- */}
// // // // //         <div className="clear-both pt-8 mt-4 border-t border-gray-100">
// // // // //           <div className="flex gap-4">
// // // // //             <Link to="/register" title="Register for ICHIS 2026 Conference" aria-label="Register for ICHIS 2026 Conference">
// // // // //               <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Register for ICHIS 2026 Conference" aria-label="Register for ICHIS 2026 Conference">
// // // // //                 REGISTER NOW
// // // // //               </button>
// // // // //             </Link>

// // // // //             <Link to="/AbstractSubmission" title="Submit Abstract for ICHIS 2026 Conference" aria-label="Submit Abstract for ICHIS 2026 Conference">
// // // // //               <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5" title="Submit Abstract for ICHIS 2026 Conference" aria-label="Submit Abstract for ICHIS 2026 Conference">
// // // // //                 SUBMIT ABSTRACT
// // // // //               </button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* --- QUICK LINKS STRIP --- */}
// // // // //         <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
// // // // //           <span className="text-black font-semibold mr-1">Quick Links:</span>

// // // // //           <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Abstract Submission for ICHIS 2026 Conference" aria-label="Abstract Submission for ICHIS 2026 Conference">
// // // // //             Abstract Submission
// // // // //           </Link>
// // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // //           <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Registration for ICHIS 2026 Conference" aria-label="Registration for ICHIS 2026 Conference">
// // // // //             Registration
// // // // //           </Link>
// // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // //           <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Speaker Registration for ICHIS 2026 Conference" aria-label="Speaker Registration for ICHIS 2026 Conference">
// // // // //             Speaker Registration
// // // // //           </Link>

// // // // //           <span className="mx-2 text-gray-400">|</span>

// // // // //           <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline" title="Program Schedule for ICHIS 2026 Conference" aria-label="Program Schedule for ICHIS 2026 Conference">
// // // // //             Program Schedule
// // // // //           </Link>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ContentSection;













// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const ContentSection: React.FC = () => {
// // // //   return (
// // // //     <section
// // // //       id="about-section"
// // // //       className="py-8 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white pt-6"
// // // //     >
// // // //       <div className="max-w-7xl mx-auto">

// // // //         {/* VIDEO + CONTENT WRAPPER */}
// // // //         <div className="flex flex-col md:flex-row gap-8 items-start">

// // // //           {/* --- VIDEO (LEFT) --- */}
// // // //           <div className="w-full md:w-1/2 lg:w-[45%]">
// // // //             <div className="overflow-hidden bg-black relative">
// // // //               <video
// // // //                 className="w-full h-full object-cover"
// // // //                 src="/ICHIS-2026-video.mp4"
// // // //                 controls
// // // //                 autoPlay
// // // //                 muted
// // // //                 loop
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* --- TEXT CONTENT (RIGHT) --- */}
// // // //           <div
// // // //             className="
// // // //               w-full md:w-1/2 lg:w-[55%]
// // // //               text-gray-700
// // // //               leading-relaxed
// // // //               text-[16px]
// // // //               text-left
// // // //               whitespace-normal
// // // //             "
// // // //           >
// // // //             <h2 className="text-3xl font-bold text-[#00488B] mb-6">
// // // //               ABOUT ICHIS 2026 HYBRID EVENT
// // // //             </h2>

// // // //             <p className="mb-3">
// // // //               The International Conference on Artificial Intelligence, Machine
// // // //               Learning & Robotics (ICHIS 2026) is a global academic forum bringing
// // // //               together researchers, faculty members, students, and industry
// // // //               professionals to exchange knowledge and present recent advances in
// // // //               intelligent systems.
// // // //             </p>

// // // //             <p className="mb-3">
// // // //               Scheduled for July 28–30, 2026, in Seoul, South Korea, ICHIS 2026 will be
// // // //               conducted in a hybrid format, enabling participation through both
// // // //               in-person and virtual presentations.
// // // //             </p>

// // // //             <p className="mb-3">
// // // //               The conference focuses on fostering academic discussion,
// // // //               interdisciplinary collaboration, and responsible innovation across
// // // //               Health Innovation Summit. Participants are invited to
// // // //               share original research, case studies, and emerging ideas through
// // // //               oral and poster sessions.
// // // //             </p>

// // // //             <p className="mb-3">
// // // //               ICHIS 2026 aims to support meaningful knowledge exchange,
// // // //               professional networking, and collaboration within the global
// // // //               research community.
// // // //               <Link
// // // //                 to="/about"
// // // //                 className="text-[#0091b5] hover:text-[#00488B] hover:underline ml-1"
// // // //                 title="About ICHIS 2026 Conference"
// // // //                 aria-label="About ICHIS 2026 Conference"
// // // //               >
// // // //                 Know more
// // // //               </Link>
// // // //             </p>

// // // //             {/* --- BUTTON GROUP --- */}
// // // //             <div className="pt-6 mt-4 border-t border-gray-100">
// // // //               <div className="flex gap-4 flex-wrap">
// // // //                 <Link to="/register">
// // // //                   <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
// // // //                     REGISTER NOW
// // // //                   </button>
// // // //                 </Link>

// // // //                 <Link to="/AbstractSubmission">
// // // //                   <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
// // // //                     SUBMIT ABSTRACT
// // // //                   </button>
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* --- QUICK LINKS STRIP --- */}
// // // //         <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
// // // //           <span className="text-black font-semibold mr-1">Quick Links:</span>

// // // //           <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // //             Abstract Submission
// // // //           </Link>
// // // //           <span className="mx-2 text-gray-400">|</span>

// // // //           <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // //             Registration
// // // //           </Link>
// // // //           <span className="mx-2 text-gray-400">|</span>

// // // //           <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // //             Speaker Registration
// // // //           </Link>
// // // //           <span className="mx-2 text-gray-400">|</span>

// // // //           <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline">
// // // //             Program Schedule
// // // //           </Link>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContentSection;



// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const ContentSection: React.FC = () => {
// // //   return (
// // //     <section
// // //       id="about-section"
// // //       className="bg-gradient-to-b from-[#f7f9fc] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// // //     >
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* SECTION HEADER */}
// // //         <div className="mb-12 max-w-3xl flex justify-end">
// // //           <h2 className="text-4xl font-extrabold text-[#0b3a6f] leading-tight">
// // //             About ICHIS 2026
// // //           </h2>
// // //           {/* <p className="mt-3 text-lg text-gray-600">
// // //             A premier global conference advancing research and innovation in
// // //             Health Innovation Summit.
// // //           </p> */}
// // //         </div>

// // //         {/* MAIN CONTENT GRID */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// // //           {/* VIDEO CARD */}
// // //           <div className="relative overflow-hidden shadow-xl bg-black">
// // //             <span className="absolute top-4 left-4 z-10 bg-[#00488B] text-white text-xs font-semibold px-3 py-1 tracking-wide">
// // //               HYBRID EVENT • JULY 2026
// // //             </span>

// // //             <video
// // //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// // //               src="/ICHIS-2026-video.mp4"
// // //               controls
// // //               muted
// // //               loop
// // //               playsInline
// // //             />
// // //           </div>

// // //           {/* TEXT CONTENT */}
// // //           <div className="text-gray-700 text-[16.5px] leading-relaxed">

// // //             <p className="mb-4">
// // //               The <strong>ICHIS 2026 Conference</strong> is an international
// // //               academic forum bringing together researchers, faculty members,
// // //               students, and industry professionals to present and discuss recent
// // //               advances in intelligent systems.
// // //             </p>

// // //             <p className="mb-4">
// // //               Scheduled for <strong>July 28–30, 2026</strong>, in
// // //               <strong> Seoul, South Korea</strong>, the conference will be conducted in a
// // //               <strong> hybrid format</strong>, enabling both in-person and
// // //               virtual participation.
// // //             </p>

// // //             <p className="mb-4">
// // //               ICHIS 2026 emphasizes interdisciplinary collaboration, responsible
// // //               innovation, and the exchange of original research through keynote
// // //               talks, oral presentations, poster sessions, and technical
// // //               discussions.
// // //             </p>

// // //             <p className="mb-6">
// // //               The conference aims to foster long-term collaboration, professional
// // //               networking, and meaningful knowledge exchange within the global
// // //               research community.
// // //               <Link
// // //                 to="/about"
// // //                 className="ml-2 text-[#0077b6] font-medium hover:underline"
// // //               >
// // //                 Learn more →
// // //               </Link>
// // //             </p>

// // //             {/* CTA BUTTONS */}
// // //             <div className="flex flex-wrap gap-4 mt-8">
// // //               <Link to="/register">
// // //                 <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all">
// // //                   REGISTER NOW
// // //                 </button>
// // //               </Link>

// // //               <Link to="/AbstractSubmission">
// // //                 <button className="bg-white border-2 border-[#00488B] text-[#00488B]
// // //                   hover:bg-[#00488B] hover:text-white px-7 py-3 text-sm font-bold
// // //                   tracking-wide transition-all">
// // //                   SUBMIT ABSTRACT
// // //                 </button>
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* QUICK LINKS */}
// // //         <div className="mt-6 pt-8 border-t border-dashed border-gray-300">
// // //           <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
// // //             Quick Access
// // //           </h4>

// // //           <div className="flex flex-wrap gap-3">
// // //             {[
// // //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// // //               { to: "/register", label: "Registration" },
// // //               { to: "/speakers", label: "Speaker Registration" },
// // //               { to: "/schedule", label: "Program Schedule" },
// // //             ].map((item, i) => (
// // //               <Link
// // //                 key={i}
// // //                 to={item.to}
// // //                 className="px-4 py-2 text-sm rounded-full border border-gray-300
// // //                 text-gray-700 hover:border-[#00488B] hover:text-[#00488B]
// // //                 transition-all"
// // //               >
// // //                 {item.label}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ContentSection;











// // import React from "react";
// // import { Link } from "react-router-dom";

// // const ContentSection: React.FC = () => {
// //   return (
// //     <section
// //       id="about-section"
// //       className="bg-gradient-to-b from-[#EAF2FF] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// //     >
// //       <div className="max-w-7xl mx-auto">

// //         {/* SECTION HEADER */}
// //         <div className="mb-12 max-w-3xl">
// //           <h2 className="text-4xl font-extrabold text-[#111827] leading-tight">
// //             About ICHIS 2026
// //           </h2>
// //         </div>

// //         {/* MAIN CONTENT GRID */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// //           {/* VIDEO CARD */}
// //           <div className="relative overflow-hidden shadow-xl rounded-xl bg-black">
// //             <span className="absolute top-4 left-4 z-10 bg-[#0B5ED7] text-white text-xs font-semibold px-3 py-1 tracking-wide rounded">
// //               HYBRID EVENT • JULY 2026
// //             </span>

// //             <video
// //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// //               src="/ICHIS-2026-video.mp4"
// //               controls
// //               muted
// //               loop
// //               playsInline
// //             />
// //           </div>

// //           {/* TEXT CONTENT */}
// //           <div className="text-[#1F2937] text-[16.5px] leading-relaxed">

// //             <p className="mb-4">
// //               The <strong>ICHIS 2026 Conference</strong> is an international
// //               academic forum bringing together researchers, faculty members,
// //               students, and industry professionals to present and discuss recent
// //               advances in intelligent systems.
// //             </p>

// //             <p className="mb-4">
// //               Scheduled for <strong>July 28–30, 2026</strong>, in
// //               <strong> Seoul, South Korea</strong>, the conference will be conducted in a
// //               <strong> hybrid format</strong>, enabling both in-person and
// //               virtual participation.
// //             </p>

// //             <p className="mb-4">
// //               ICHIS 2026 emphasizes interdisciplinary collaboration, responsible
// //               innovation, and the exchange of original research through keynote
// //               talks, oral presentations, poster sessions, and technical
// //               discussions.
// //             </p>

// //             <p className="mb-6">
// //               The conference aims to foster long-term collaboration, professional
// //               networking, and meaningful knowledge exchange within the global
// //               research community.
// //               <Link
// //                 to="/about"
// //                 className="ml-2 text-[#00B4D8] font-medium hover:underline"
// //               >
// //                 Learn more →
// //               </Link>
// //             </p>

// //             {/* CTA BUTTONS */}
// //             <div className="flex flex-wrap gap-4 mt-8">
// //               <Link to="/register">
// //                 <button className="bg-[#0B5ED7] hover:bg-[#084298] text-white px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all rounded-md">
// //                   REGISTER NOW
// //                 </button>
// //               </Link>

// //               <Link to="/AbstractSubmission">
// //                 <button
// //                   className="bg-white border-2 border-[#0B5ED7] text-[#0B5ED7]
// //                   hover:bg-[#0B5ED7] hover:text-white px-7 py-3 text-sm font-bold
// //                   tracking-wide transition-all rounded-md"
// //                 >
// //                   SUBMIT ABSTRACT
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* QUICK LINKS */}
// //         <div className="mt-10 pt-8 border-t border-dashed border-gray-300">
// //           <h4 className="text-sm font-semibold text-[#1F2937] mb-4 uppercase tracking-wider">
// //             Quick Access
// //           </h4>

// //           <div className="flex flex-wrap gap-3">
// //             {[
// //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// //               { to: "/register", label: "Registration" },
// //               { to: "/speakers", label: "Speaker Registration" },
// //               { to: "/schedule", label: "Program Schedule" },
// //             ].map((item, i) => (
// //               <Link
// //                 key={i}
// //                 to={item.to}
// //                 className="px-4 py-2 text-sm rounded-full border border-gray-300
// //                 text-[#1F2937] hover:border-[#00B4D8] hover:text-[#00B4D8]
// //                 transition-all"
// //               >
// //                 {item.label}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ContentSection;





// // import React from "react";
// // import { Link } from "react-router-dom";

// // const ContentSection: React.FC = () => {
// //   return (
// //     <section
// //       id="about-section"
// //       className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
// //     >
// //       <div className="max-w-7xl mx-auto">

// //         {/* SECTION HEADER */}
// //         <div className="mb-12 max-w-3xl">
// //           <h2 className="text-4xl font-extrabold text-[#1E293B] leading-tight">
// //             About ICHIS 2026
// //           </h2>
// //         </div>

// //         {/* MAIN CONTENT GRID */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// //           {/* VIDEO CARD */}
// //           <div className="relative overflow-hidden shadow-xl rounded-xl bg-black">
// //             <span className="absolute top-4 left-4 z-10 bg-[#047857] text-white text-xs font-semibold px-3 py-1 tracking-wide rounded">
// //               HYBRID EVENT • JULY 2026
// //             </span>

// //             <video
// //               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
// //               src="/ICHIS-2026-video.mp4"
// //               controls
// //               muted
// //               loop
// //               playsInline
// //             />
// //           </div>

// //           {/* TEXT CONTENT */}
// //           <div className="text-[#1E293B] text-[16.5px] leading-relaxed">

// //             <p className="mb-4">
// //               The <strong>ICHIS 2026 Conference</strong> is an international
// //               academic forum bringing together researchers, faculty members,
// //               students, and industry professionals to present and discuss recent
// //               advances in intelligent systems.
// //             </p>

// //             <p className="mb-4">
// //               Scheduled for <strong>July 28–30, 2026</strong>, in
// //               <strong> Seoul, South Korea</strong>, the conference will be conducted in a
// //               <strong> hybrid format</strong>, enabling both in-person and
// //               virtual participation.
// //             </p>

// //             <p className="mb-4">
// //               ICHIS 2026 emphasizes interdisciplinary collaboration, responsible
// //               innovation, and the exchange of original research through keynote
// //               talks, oral presentations, poster sessions, and technical
// //               discussions.
// //             </p>

// //             <p className="mb-6">
// //               The conference aims to foster long-term collaboration, professional
// //               networking, and meaningful knowledge exchange within the global
// //               research community.
// //               <Link
// //                 to="/about"
// //                 className="ml-2 text-[#047857] font-semibold hover:underline"
// //               >
// //                 Learn more →
// //               </Link>
// //             </p>

// //             {/* CTA BUTTONS */}
// //             <div className="flex flex-wrap gap-4 mt-8">
// //               <Link to="/register">
// //                 <button className="bg-[#84CC16] hover:bg-[#65A30D] text-[#1E293B] px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all rounded-md">
// //                   REGISTER NOW
// //                 </button>
// //               </Link>

// //               <Link to="/AbstractSubmission">
// //                 <button
// //                   className="bg-white border-2 border-[#047857] text-[#047857]
// //                   hover:bg-[#047857] hover:text-white px-7 py-3 text-sm font-bold
// //                   tracking-wide transition-all rounded-md"
// //                 >
// //                   SUBMIT ABSTRACT
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* QUICK LINKS */}
// //         <div className="mt-10 pt-8 border-t border-dashed border-[#D1FAE5]">
// //           <h4 className="text-sm font-semibold text-[#1E293B] mb-4 uppercase tracking-wider">
// //             Quick Access
// //           </h4>

// //           <div className="flex flex-wrap gap-3">
// //             {[
// //               { to: "/AbstractSubmission", label: "Abstract Submission" },
// //               { to: "/register", label: "Registration" },
// //               { to: "/speakers", label: "Speaker Registration" },
// //               { to: "/schedule", label: "Program Schedule" },
// //             ].map((item, i) => (
// //               <Link
// //                 key={i}
// //                 to={item.to}
// //                 className="px-4 py-2 text-sm rounded-full border border-[#A7F3D0]
// //                 text-[#1E293B] hover:border-[#047857] hover:text-[#047857]
// //                 transition-all"
// //               >
// //                 {item.label}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ContentSection;




// import React from "react";
// import { Link } from "react-router-dom";

// const ContentSection: React.FC = () => {
//   return (
//     <section
//       id="about-section"
//       className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 sm:px-8 lg:px-24 scroll-mt-32"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* SECTION HEADER */}
//         <div className="mb-12">
//           <h2 className="text-4xl text-center font-extrabold text-[#1E293B] leading-tight">
//             About Health Innovation Summit Conference 2026
//           </h2>
//         </div>

//         {/* MAIN CONTENT GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//           {/* VIDEO CARD */}
//           <div className="relative overflow-hidden shadow-xl rounded-xl bg-black">
//             <span className="absolute top-4 left-4 z-10 bg-[#047857] text-white text-xs font-semibold px-3 py-1 tracking-wide rounded">
//               HYBRID EVENT • 2026
//             </span>

//             <video
//               className="w-full h-[300px] sm:h-[320px] lg:h-[350px] object-cover"
//               src="/aimlr-2026-video.mp4"
//               controls
//               muted
//               loop
//               playsInline
//             />
//           </div>

//           {/* TEXT CONTENT */}
//           <div className="text-[#1E293B] text-[16.5px] leading-relaxed">

//             <p className="mb-4">
//               The <strong>Health Innovation Summit & Healthcare Innovation Summit 2026</strong>{" "}
//               is a global platform dedicated to advancing research, technology,
//               and interdisciplinary collaboration in Health Innovation Summit,
//               medical devices, AI-enabled healthcare systems, and life sciences
//               innovation.
//             </p>

//             <p className="mb-4">
//               This summit brings together <strong>scientists, clinicians, engineers,
//               researchers, and industry leaders</strong> to explore cutting-edge
//               developments in healthcare technologies, translational research,
//               and real-world clinical impact.
//             </p>

//             <p className="mb-4">
//               The conference emphasizes innovation in areas such as intelligent
//               medical systems, digital health, biomedical imaging, wearable
//               technologies, robotics-assisted healthcare, and data-driven
//               decision-making in medicine.
//             </p>

//             <p className="mb-6">
//               By fostering knowledge exchange and cross-disciplinary
//               collaboration, the summit aims to accelerate the translation of
//               research into impactful healthcare solutions that address global
//               challenges.
//               <Link
//                 to="/about"
//                 className="ml-2 text-[#047857] font-semibold hover:underline"
//               >
//                 Learn more →
//               </Link>
//             </p>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-wrap gap-4 mt-8">
//               <Link to="/register">
//                 <button className="bg-[#84CC16] hover:bg-[#65A30D] text-[#1E293B] px-7 py-3 text-sm font-bold tracking-wide shadow-lg transition-all rounded-md">
//                   REGISTER NOW
//                 </button>
//               </Link>

//               <Link to="/AbstractSubmission">
//                 <button
//                   className="bg-white border-2 border-[#047857] text-[#047857]
//                   hover:bg-[#047857] hover:text-white px-7 py-3 text-sm font-bold
//                   tracking-wide transition-all rounded-md"
//                 >
//                   SUBMIT ABSTRACT
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div className="mt-10 pt-8 border-t border-dashed border-[#D1FAE5]">
//           <h4 className="text-sm font-semibold text-[#1E293B] mb-4 uppercase tracking-wider">
//             Quick Access
//           </h4>

//           <div className="flex flex-wrap gap-3">
//             {[
//               { to: "/AbstractSubmission", label: "Abstract Submission" },
//               { to: "/register", label: "Registration" },
//               { to: "/speakers", label: "Speaker Registration" },
//               { to: "/schedule", label: "Program Schedule" },
//             ].map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.to}
//                 className="px-4 py-2 text-sm rounded-full border border-[#A7F3D0]
//                 text-[#1E293B] hover:border-[#047857] hover:text-[#047857]
//                 transition-all"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContentSection;




import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const ContentSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative bg-white py-16 px-4 sm:px-8 lg:px-24 scroll-mt-32"
    >
      {/* RIGHT SOCIAL BAR */}
      <div className="fixed right-0 top-1/3 z-50 hidden md:flex flex-col">
        {[
          { icon: Facebook },
          { icon: Twitter },
          { icon: Linkedin },
          { icon: Instagram },
        ].map((Item, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-[#4FBFC3] flex items-center justify-center text-white border-b border-white/20 hover:bg-[#0F766E] transition"
          >
            <Item.icon className="w-5 h-5" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
          {/* <h2 className="text-[34px] sm:text-[40px] font-semibold text-[#004E5A] leading-tight">
            About Health Innovation Summit Conference 2026
          </h2> */}
          <h2
            className="text-center text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: "'Manrope', sans-serif", color: "#004E5A" }}
          >
            {/* About Health Innovation Summit Conference 2026 */}
            About Health Innovation Summit 2026
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* VIDEO */}
          <div className="relative overflow-hidden bg-black">
            <video
              className="w-full h-[320px] lg:h-[360px] object-cover"
              src="/aimlr-2026-video.mp4"
              controls
              muted
              loop
              playsInline
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="text-[#111827] text-[17px] leading-[1.5]">

            {/* <p className="mb-2">
              The Health Innovation Summit 2026 aims to foster collaboration among healthcare professionals, academic researchers, policymakers, and industry experts to address emerging global health challenges.
            </p>

            <p className="mb-8">
              The conference will highlight cutting-edge research, breakthrough medical technologies, and practical solutions shaping the future of healthcare delivery. From AI-driven diagnostics to precision medicine and public health policy reform, the summit promotes interdisciplinary exchange and global partnerships.
              <Link
                to="/about"
                className="ml-2 text-[#0F766E] font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </p> */}


            <p className="mb-2">
  The Health Innovation Summit 2026 aims to foster collaboration among healthcare professionals, academic researchers, policymakers, and industry experts to address emerging global health challenges. The summit provides a platform for knowledge sharing, networking, and innovative strategies that enhance healthcare accessibility and patient outcomes.
</p>

<p className="mb-6">
  The conference will highlight cutting-edge research, breakthrough medical technologies, and practical solutions shaping the future of healthcare delivery. From AI-driven diagnostics to precision medicine and public health policy reform, the summit promotes interdisciplinary exchange and global partnerships through expert panels and collaborative sessions.
  <br />
  <Link
    to="/about"
    className="text-[#0F766E] font-semibold hover:underline"
  >
    Learn more →
  </Link>
</p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <Link to="/register">
                <button className="bg-[#022C22] hover:bg-[#022C22]/80 text-white px-8 py-3 text-sm font-semibold tracking-wide transition">
                  REGISTER NOW
                </button>
              </Link>

              <Link to="/AbstractSubmission">
                <button
                  className="
                    border border-[#0F766E]
                    text-[#0F766E]
                    hover:bg-[#0F766E]
                    hover:text-white
                    px-8 py-3
                    text-sm font-semibold
                    tracking-wide
                    transition
                  "
                >
                  SUBMIT ABSTRACT
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-[#022C22] mb-4 uppercase tracking-wider">
            Quick Access
          </h4>

          <div className="flex flex-wrap gap-4">
            {[
              { to: "/AbstractSubmission", label: "Abstract Submission" },
              { to: "/register", label: "Registration" },
              { to: "/speakers", label: "Speaker Registration" },
              { to: "/schedule", label: "Program Schedule" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="
                  text-sm
                  text-[#374151]
                  hover:text-[#0F766E]
                  transition
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default ContentSection;
