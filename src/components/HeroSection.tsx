

// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import QuickLinksSection from './QuickLinksSection';

// // // // // const HeroSection: React.FC = () => {
// // // // //   return (
// // // // //     <section className="relative text-white overflow-hidden">

// // // // //       {/* Background Video */}
// // // // //       <video
// // // // //         className="absolute inset-0 w-full h-full object-cover"
// // // // //         src="/ICBME-banner-video.mp4"
// // // // //         autoPlay
// // // // //         loop
// // // // //         muted
// // // // //         playsInline
// // // // //       ></video>

// // // // //       {/* Content Container */}
// // // // //       <div className="relative min-h-[430px] flex items-center justify-center px-4 sm:px-6 md:px-10">
// // // // //         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4 pt-20 pb-10 justify-center items-center">

// // // // //           {/* LEFT CONTENT */}
// // // // //           <div className="max-w-3xl w-full bg-white bg-opacity-40 backdrop-blur-sm py-5 sm:py-6 px-4 sm:px-6 text-center lg:text-left">
// // // // //             <h1
// // // // //               className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 text-black uppercase leading-snug"
// // // // //               style={{ fontFamily: 'Manrope, sans-serif' }}
// // // // //             >
// // // // //               {/* Artificial Intelligence, Machine Learning and Robotics Conference */}
// // // // //               3rd Global Conference on Biomedical Engineering – July 2026, Rome, Italy.
// // // // //             </h1>

// // // // //             <p className="text-lg sm:text-xl md:text-2xl font-medium mb-5 text-gray-800">
// // // // //               July 28–30, 2026 | Crowne Plaza – St. Peter's Rome, Italy
// // // // //             </p>

// // // // //             <div className="flex flex-row items-center lg:items-start justify-center lg:justify-center gap-3 sm:gap-4 w-full">


// // // // //               <Link to="/register" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // // //                 <button
// // // // //                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
// // // // //                   style={{
// // // // //                     backgroundImage:
// // // // //                       'linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)',
// // // // //                   }}
// // // // //                   title="Register for ICBME 2026 Conference"
// // // // //                   aria-label="Register for ICBME 2026 Conference"
// // // // //                 >
// // // // //                   REGISTER
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link to="/register" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // // //                 <button
// // // // //                   className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition hover:opacity-90"
// // // // //                   style={{
// // // // //                     backgroundImage:
// // // // //                       'linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)',
// // // // //                   }}
// // // // //                   title="Submit Abstract for ICBME 2026 Conference"
// // // // //                   aria-label="Submit Abstract for ICBME 2026 Conference"
// // // // //                 >
// // // // //                   SUBMISSION
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </div>



// // // // //           </div>

// // // // //           {/* RIGHT SIDE QUICK LINKS */}
// // // // //           <div className="w-full lg:w-auto lg:ml-3">
// // // // //             <QuickLinksSection />
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;



// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import QuickLinksSection from "./QuickLinksSection";

// // // // const stats = [
// // // //   { value: 35, label: "EXPECTED SPEAKERS" },
// // // //   { value: 20, label: "COUNTRIES REPRESENTED" },
// // // //   { value: 150, label: "PARTICIPANTS" },
// // // //   { value: 25, label: "SESSIONS & ACTIVITIES" },
// // // // ];

// // // // const HeroSection: React.FC = () => {
// // // //   return (
// // // //     <section className="relative w-full min-h-[520px] text-white overflow-hidden">
      
// // // //       {/* Background Video */}
// // // //       <video
// // // //         className="absolute inset-0 w-full h-full object-cover"
// // // //         src="/ICBME-banner-video.mp4"
// // // //         autoPlay
// // // //         loop
// // // //         muted
// // // //         playsInline
// // // //       />

// // // //       {/* Dark Blue Overlay */}
// // // //       <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/90 via-[#0b1f3a]/80 to-[#0b1f3a]/60" />

// // // //       {/* Main Content */}
// // // //       <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-16">
// // // //         <div className="grid lg:grid-cols-2 gap-10 items-center">

// // // //           {/* LEFT CONTENT */}
// // // //           <div className="max-w-3xl">
// // // //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-wide">
// // // //               Energising Growth.<br />
// // // //               Securing Economies.<br />
// // // //               Enriching Lives.
// // // //             </h1>

// // // //             <p className="mt-6 text-lg sm:text-xl text-white/90 font-medium">
// // // //               3rd Global Conference on Biomedical Engineering
// // // //             </p>

// // // //             <p className="mt-2 text-base sm:text-lg text-white/80">
// // // //               July 28–30, 2026 | Rome, Italy
// // // //             </p>

// // // //             {/* CTA Buttons */}
// // // //             <div className="mt-8 flex flex-wrap gap-4">
// // // //               <Link to="/register">
// // // //                 <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold uppercase text-sm hover:opacity-90 transition">
// // // //                   Register
// // // //                 </button>
// // // //               </Link>

// // // //               <Link to="/register">
// // // //                 <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 font-semibold uppercase text-sm hover:opacity-90 transition">
// // // //                   Submission
// // // //                 </button>
// // // //               </Link>
// // // //             </div>
// // // //           </div>


// // // //         </div>
// // // //       </div>

// // // //       {/* STATS BAR */}
// // // //       <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
// // // //         <div className="container mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
// // // //           {stats.map((item, index) => (
// // // //             <div key={index}>
// // // //               <p className="text-3xl font-extrabold">
// // // //                 {item.value}
// // // //                 <span className="text-blue-400">+</span>
// // // //               </p>
// // // //               <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-white/80">
// // // //                 {item.label}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSection;



// // // import React from "react";

// // // const stats = [
// // //   { value: "35+", label: "Expected Speakers" },
// // //   { value: "20+", label: "Countries Represented" },
// // //   { value: "150+", label: "Participants" },
// // //   { value: "25+", label: "Sessions & Activities" },
// // // ];

// // // const HeroSection: React.FC = () => {
// // //   return (
// // //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// // //       {/* Background Video */}
// // //       <video
// // //         className="absolute inset-0 w-full h-full object-cover"
// // //         src="/ICBME-banner-video.mp4"
// // //         autoPlay
// // //         loop
// // //         muted
// // //         playsInline
// // //       />

// // //       {/* Blue Overlay (MATCH IMAGE) */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e57]/90 via-[#243a6b]/80 to-[#1c2e57]/70" />

// // //       {/* Content */}
// // //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-20">

// // //         {/* Heading */}
// // //         <div className="max-w-4xl">
// // //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// // //             Energising Growth.<br />
// // //             Securing Economies.<br />
// // //             Enriching Lives.
// // //           </h1>
// // //         </div>

// // //         {/* Stats (ON IMAGE) */}
// // //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// // //           {stats.map((stat, index) => (
// // //             <div
// // //               key={index}
// // //               className={`pl-4 ${
// // //                 index !== 0 ? "border-l border-white/30" : ""
// // //               }`}
// // //             >
// // //               <p className="text-3xl lg:text-4xl font-bold">
// // //                 {stat.value}
// // //               </p>
// // //               <p className="mt-1 text-sm text-white/80 leading-tight">
// // //                 {stat.label}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;






// // import React from "react";
// // import { Link } from "react-router-dom";

// // const stats = [
// //   { value: "35+", label: "Expected Speakers" },
// //   { value: "20+", label: "Countries Represented" },
// //   { value: "150+", label: "Participants" },
// //   { value: "25+", label: "Sessions & Activities" },
// // ];

// // const HeroSection: React.FC = () => {
// //   return (
// //     <section className="relative w-full h-[470px] text-white overflow-hidden">

// //       {/* Background Video */}
// //       <video
// //         className="absolute inset-0 w-full h-full object-cover"
// //         src="/ICBME-banner-video.mp4"
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //       />

// //       {/* Blue Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e57]/90 via-[#243a6b]/80 to-[#1c2e57]/70" />

// //       {/* Content */}
// //       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

// //         {/* Heading + Buttons */}
// //         <div className="max-w-4xl">
// //           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// //             Energising Growth.<br />
// //             Securing Economies.<br />
// //             Enriching Lives.
// //           </h1>

// //           {/* Buttons */}
// //           <div className="mt-6 flex flex-wrap gap-4">
// //             <Link to="/abstract-submission">
// //               <button
// //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// //                 bg-gradient-to-r from-[#0f5bdc] to-[#1e88e5]
// //                 hover:opacity-90 transition"
// //               >
// //                 Abstract Submission
// //               </button>
// //             </Link>

// //             <Link to="/register">
// //               <button
// //                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
// //                 bg-gradient-to-r from-[#243a6b] to-[#3f5fa3]
// //                 hover:opacity-90 transition border border-white/30"
// //               >
// //                 Register
// //               </button>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Stats */}
// //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
// //           {stats.map((stat, index) => (
// //             <div
// //               key={index}
// //               className={`pl-4 ${
// //                 index !== 0 ? "border-l border-white/30" : ""
// //               }`}
// //             >
// //               <p className="text-3xl lg:text-4xl font-bold">
// //                 {stat.value}
// //               </p>
// //               <p className="mt-1 text-sm text-white/80 leading-tight">
// //                 {stat.label}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;



// import React from "react";
// import { Link } from "react-router-dom";

// const stats = [
//   { value: "35+", label: "Expected Speakers" },
//   { value: "20+", label: "Countries Represented" },
//   { value: "150+", label: "Participants" },
//   { value: "25+", label: "Sessions & Activities" },
// ];

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative w-full h-[470px] text-white overflow-hidden">

//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/AdobeStock_1249345095_Video_HD_Preview.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Blue Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(90deg, rgba(11, 94, 215, 0.45) 0%, rgba(11, 94, 215, 0.32) 50%, rgba(11, 94, 215, 0.18) 100%)"
//         }}
//       />
//       <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

//         {/* Heading + Buttons */}
//         <div className="max-w-4xl">
//           <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             3rd Global Conference on <br />
//             Biomedical Technology – <br />
//             July 2026, Rome, Italy.
//           </h1>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-wrap gap-4">
//             <Link to="/abstract-submission">
//               <button
//                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
//                 bg-gradient-to-r from-[#0f5bdc] to-[#1e88e5]
//                 hover:opacity-90 transition"
//               >
//                 Abstract Submission
//               </button>
//             </Link>

//             <Link to="/register">
//               <button
//                 className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
//                 bg-gradient-to-r from-[#243a6b] to-[#3f5fa3]
//                 hover:opacity-90 transition border border-white/30"
//               >
//                 Register
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className={`pl-4 ${
//                 index !== 0 ? "border-l border-white/30" : ""
//               }`}
//             >
//               <p className="text-3xl lg:text-4xl font-bold">
//                 {stat.value}
//               </p>
//               <p className="mt-1 text-sm text-white/80 leading-tight">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "35+", label: "Expected Speakers" },
  { value: "20+", label: "Countries Represented" },
  { value: "150+", label: "Participants" },
  { value: "25+", label: "Sessions & Activities" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[470px] text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/AdobeStock_1249345095_Video_HD_Preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Emerald Overlay (NO BLUE) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,120,87,0.55) 0%, rgba(4,120,87,0.42) 50%, rgba(4,120,87,0.28) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-16">

        {/* Heading + Buttons */}
        <div className="max-w-4xl">
          <h1 className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            2nd International Conference<br />
            On Health Innovation Summit 2026. Seoul, South Korea.<br />
            
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/abstract-submission">
              <button
                className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                bg-[#047857] text-white
                hover:bg-[#065f46] transition shadow-md"
              >
                Abstract Submission
              </button>
            </Link>

            <Link to="/register">
              <button
                className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wide
                bg-[#84CC16] text-[#1E293B]
                hover:bg-[#65a30d] transition shadow-md"
              >
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`pl-4 ${
                index !== 0 ? "border-l border-white/30" : ""
              }`}
            >
              <p className="text-3xl lg:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/80 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
