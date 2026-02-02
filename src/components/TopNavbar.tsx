// // // // import React from "react";
// // // // import { useState } from "react";
// // // // import { Calendar, Globe, MapPin, Menu, Monitor, X } from "lucide-react";
// // // // import { Link } from "react-router-dom";

// // // // const TopNavbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) => {
// // // //   return (
// // // //     <div className="border-b">
// // // //       <div className="container mx-auto px-4 h-[90px] sm:h-[120px] flex items-center justify-between">
// // // //         {/* Left Section */}
// // // //         <div className="flex h-full items-center divide-x divide-gray-200">
// // // //           {/* Logo */}
// // // //           <div className="h-full flex items-center">
// // // //             <Link to="/" title="Go to ICBME 2026 Home Page" aria-label="ICBME 2026 Home Page">
// // // //               <img
// // // //                 src="aimllogo.jpg"
// // // //                 alt="Artificial Intelligence, Machine Learning and Robotics Conference Logo"
// // // //                 className="h-[70px] sm:h-[120px] w-auto object-contain transition-all duration-300"
// // // //               />
// // // //             </Link>
// // // //           </div>

// // // //           {/* Event Details (visible on sm and up) */}
// // // //           <div className="pl-4 sm:pl-6 flex-col space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-800 min-w-[180px] sm:min-w-[200px] flex">
// // // //             <div className="flex items-center space-x-2 sm:space-x-3">
// // // //               <Calendar className="text-indigo-900" size={16} />
// // // //               <span className="font-bold tracking-tight sm:text-sm">
// // // //                 July 28–30, 2026
// // // //               </span>
// // // //             </div>

// // // //             <div className="flex items-center space-x-2 sm:space-x-3">
// // // //               <MapPin className="text-indigo-900" size={16} />
// // // //               <span className="font-bold tracking-tight sm:text-sm leading-snug">
// // // //                 Crowne Plaza - St. Peter’s Rome, Italy
// // // //               </span>
// // // //             </div>
            
// // // //             <div className="flex items-center space-x-2 sm:space-x-3">
// // // //   <div className="flex items-center justify-center space-x-1">
// // // //     {/* <MapPin className="text-indigo-900" size={16} /> */}
// // // //     {/* <Monitor className="text-indigo-900" size={16} /> */}
// // // //     <Globe className="text-indigo-900" size={16} />
// // // //   </div>
// // // //   <span className="font-semibold tracking-tight sm:text-sm leading-snug text-indigo-900">
// // // //     Hybrid Event: In-Person & Virtual Participation
// // // //   </span>
// // // // </div>

// // // //           </div>
// // // //         </div>

// // // //         {/* Right Section (desktop buttons) */}
// // // //         <div className="hidden md:flex items-center gap-4 ml-12">
// // // //           <Link to="/register" title="Register for ICBME 2026 Conference" aria-label="Register for ICBME 2026 Conference">
// // // //             <button 
// // // //               style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} 
// // // //               className="w-[120px] text-white font-bold py-2 hover:bg-[#425a92] transition-colors duration-300"
// // // //               title="Register for ICBME 2026 Conference"
// // // //               aria-label="Register for ICBME 2026 Conference"
// // // //             >
// // // //               REGISTER
// // // //             </button>
// // // //           </Link>

// // // //           <Link to="/AbstractSubmission" title="Submit Abstract for ICBME 2026 Conference" aria-label="Submit Abstract for ICBME 2026 Conference">
// // // //             <button 
// // // //               style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} 
// // // //               className="w-[232px] text-white font-bold py-2 hover:bg-[#011136] transition-colors duration-300"
// // // //               title="Submit Abstract for ICBME 2026 Conference"
// // // //               aria-label="Submit Abstract for ICBME 2026 Conference"
// // // //             >
// // // //               ABSTRACT SUBMISSION
// // // //             </button>
// // // //           </Link>
// // // //         </div>

// // // //         {/* Mobile Menu Toggle */}
// // // //         <div className="md:hidden ml-3">
// // // //           <button 
// // // //             onClick={() => setMenuOpen(!menuOpen)} 
// // // //             aria-label={menuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
// // // //             title={menuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
// // // //           >
// // // //             {menuOpen ? <X size={26} /> : <Menu size={26} />}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TopNavbar;







// // // import React from "react";
// // // import { Menu, X } from "lucide-react";
// // // import { Link } from "react-router-dom";

// // // interface Props {
// // //   menuOpen: boolean;
// // //   setMenuOpen: (open: boolean) => void;
// // // }

// // // const TopNavbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
// // //   return (
// // //     <header className="w-full bg-white border-b">
// // //       <div className="max-w-[1400px] mx-auto px-6 h-[110px] flex items-center justify-between">

// // //         {/* LEFT — Logo & Event Info */}
// // //         <div className="flex items-center gap-4">
// // //           <Link to="/" aria-label="ICBME 2026 Home">
// // //             <img
// // //               src="aimllogo.jpg"
// // //               alt="ICBME 2026 Logo"
// // //               className="h-[70px] w-auto object-contain"
// // //             />
// // //           </Link>

// // //           <div className="hidden sm:block text-left">
// // //             <h1 className="text-sm font-bold text-[#0B5ED7] leading-tight">
// // //               ICBME 2026
// // //             </h1>
// // //             <p className="text-xs text-gray-600">
// // //               28–30 July 2026
// // //             </p>
// // //             <p className="text-xs text-gray-600">
// // //               Rome, Italy
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* CENTER — Navigation (Desktop only) */}
// // //         <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#4B56A6]">
// // //           <Link to="/exhibition" className="hover:text-[#0B5ED7]">
// // //             EXHIBITION
// // //           </Link>
// // //           <Link to="/conference" className="hover:text-[#0B5ED7]">
// // //             CONFERENCE
// // //           </Link>
// // //           <Link to="/visit" className="hover:text-[#0B5ED7]">
// // //             VISIT
// // //           </Link>
// // //           <Link to="/energy-club" className="hover:text-[#0B5ED7]">
// // //             ENERGY CLUB
// // //           </Link>
// // //           <Link to="/media" className="hover:text-[#0B5ED7]">
// // //             MEDIA CENTER
// // //           </Link>
// // //           <Link to="/travel" className="hover:text-[#0B5ED7]">
// // //             TRAVEL
// // //           </Link>
// // //           <Link to="/faqs" className="hover:text-[#0B5ED7]">
// // //             FAQS
// // //           </Link>
// // //         </nav>

// // //         {/* RIGHT — CTA Buttons */}
// // //         <div className="hidden md:flex items-center gap-3">
// // //           <Link to="/register">
// // //             <button className="px-6 py-3 bg-[#4B56A6] text-white font-bold rounded-md hover:bg-[#3f4893] transition">
// // //               REGISTER AS A VISITOR
// // //             </button>
// // //           </Link>

// // //           <Link to="/delegate-pass">
// // //             <button className="px-6 py-3 bg-[#77A942] text-white font-bold rounded-md hover:bg-[#68963a] transition">
// // //               BOOK YOUR DELEGATE PASS
// // //             </button>
// // //           </Link>
// // //         </div>

// // //         {/* MOBILE MENU ICON */}
// // //         <div className="lg:hidden">
// // //           <button
// // //             onClick={() => setMenuOpen(!menuOpen)}
// // //             aria-label="Toggle menu"
// // //           >
// // //             {menuOpen ? <X size={26} /> : <Menu size={26} />}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default TopNavbar;



// // import React from "react";
// // import { Menu, X } from "lucide-react";
// // import { Link } from "react-router-dom";

// // interface Props {
// //   menuOpen: boolean;
// //   setMenuOpen: (open: boolean) => void;
// // }

// // const TopNavbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
// //   return (
// //     <header className="w-full bg-white shadow-sm font-sans">
// //       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-auto py-3 md:py-0 md:h-[100px] flex items-center justify-between">

// //         {/* --- LEFT: LOGO & INFO --- */}
// //         <div className="flex items-center gap-3 md:gap-4 shrink-0">
// //           <Link to="/" aria-label="ICBME 2026 Home">
// //             {/* Logo Image */}
// //             <img
// //               src="aimllogo.jpg"
// //               alt="ICBME 2026 Logo"
// //               className="h-12 md:h-16 w-auto object-contain"
// //             />
// //           </Link>

// //           {/* Text Info - Mimicking the Orange Title & Grey Details */}
// //           <div className="flex flex-col justify-center leading-tight">
// //             <h1 className="text-lg md:text-2xl font-bold text-[#F58220] uppercase tracking-tight">
// //               ICBME 2026
// //             </h1>
// //             <div className="flex flex-col text-[10px] md:text-[11px] font-semibold text-gray-500 mt-1 space-y-0.5">
// //               <span>28 – 30 JULY 2026</span>
// //               <span>CROWNE PLAZA, ROME, ITALY</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* --- CENTER: NAVIGATION (Hidden on mobile/tablet, visible on large screens) --- */}
// //         {/* Using xl:flex to ensure it doesn't wrap awkwardly on smaller desktops */}
// //         <nav className="hidden xl:flex items-center gap-6 text-[13px] font-bold text-[#3C4B98] tracking-wide">
// //           <Link to="/exhibition" className="hover:text-[#F58220] transition-colors">EXHIBITION</Link>
// //           <Link to="/conference" className="hover:text-[#F58220] transition-colors">CONFERENCE</Link>
// //           <Link to="/visit" className="hover:text-[#F58220] transition-colors">VISIT</Link>
// //           <Link to="/energy-club" className="hover:text-[#F58220] transition-colors">ICBME CLUB</Link>
// //           <Link to="/media" className="hover:text-[#F58220] transition-colors">MEDIA CENTER</Link>
// //           <Link to="/travel" className="hover:text-[#F58220] transition-colors">TRAVEL</Link>
// //           <Link to="/faqs" className="hover:text-[#F58220] transition-colors">FAQS</Link>
// //         </nav>

// //         {/* --- RIGHT: STACKED CTA BUTTONS --- */}
// //         <div className="hidden md:flex flex-col gap-2 shrink-0 w-[240px]">
// //           {/* Blue Button */}
// //           <Link to="/register" className="w-full">
// //             <button className="w-full bg-[#4854A2] hover:bg-[#394285] text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-sm uppercase tracking-wide transition-colors text-center">
// //               REGISTER AS A VISITOR
// //             </button>
// //           </Link>

// //           {/* Green Button */}
// //           <Link to="/delegate-pass" className="w-full">
// //             <button className="w-full bg-[#7BB343] hover:bg-[#689836] text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-sm uppercase tracking-wide transition-colors text-center">
// //               BOOK YOUR DELEGATE PASS
// //             </button>
// //           </Link>
// //         </div>

// //         {/* --- MOBILE MENU TOGGLE --- */}
// //         <div className="xl:hidden flex items-center">
// //           <button
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle menu"
// //             className="text-[#3C4B98] hover:text-[#F58220] transition-colors p-2"
// //           >
// //             {menuOpen ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // };

// // export default TopNavbar;


// import React, { useState, useRef, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";

// interface Props {
//   menuOpen: boolean;
//   setMenuOpen: (open: boolean) => void;
// }

// const TopNavbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
//   // --- State for Dropdowns ---
//   const [hovered, setHovered] = useState<string | null>(null);
  
//   // --- Mobile Accordion States ---
//   const [callsOpen, setCallsOpen] = useState(false);
//   const [conferenceOpen, setConferenceOpen] = useState(false);
//   const [programOpen, setProgramOpen] = useState(false);
//   const [awardsOpen, setAwardsOpen] = useState(false);

//   // --- Close Mobile Menu on Resize ---
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1280) {
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [setMenuOpen]);

//   return (
//     <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-auto py-3 lg:py-0 lg:h-[100px] flex items-center justify-between">

//         {/* ================= LEFT: LOGO & INFO ================= */}
//         <div className="flex items-center gap-3 shrink-0">
//           <Link to="/" aria-label="ICBME 2026 Home" onClick={() => window.scrollTo(0,0)}>
//             <img
//               src="aimllogo.jpg"
//               alt="ICBME 2026 Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//           </Link>

//           <div className="flex flex-col justify-center leading-tight">
//             <h1 className="text-lg md:text-2xl font-bold text-[#F58220] uppercase tracking-tight">
//               ICBME 2026
//             </h1>
//             <div className="flex flex-col text-[10px] md:text-[11px] font-semibold text-gray-500 mt-1 space-y-0.5">
//               <span>28 – 30 JULY 2026</span>
//               <span>CROWNE PLAZA, ROME, ITALY</span>
//             </div>
//           </div>
//         </div>

//         {/* ================= CENTER: DESKTOP NAVIGATION ================= */}
//         <nav className="hidden xl:flex items-center gap-6 text-[13px] font-bold text-[#3C4B98] tracking-wide h-full">
          
//           {/* 1. CALLS DROPDOWN */}
//           <div 
//             className="relative h-full flex items-center cursor-pointer group"
//             onMouseEnter={() => setHovered("calls")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <span className="flex items-center hover:text-[#F58220] transition-colors py-8">
//               CALLS <ChevronDown size={14} className="ml-1" />
//             </span>
//             {/* Dropdown Menu */}
//             <div className={`absolute top-[80%] left-0 w-56 bg-white shadow-xl border-t-4 border-[#F58220] transition-all duration-200 ease-in-out transform ${hovered === "calls" ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
//               <div className="py-2 flex flex-col text-gray-700 font-medium normal-case">
//                 <Link to="/call-for-abstract" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Call for Abstracts</Link>
//                 <Link to="/call-for-papers" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Call for Papers</Link>
//                 <Link to="/call-for-posters" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Call for Posters</Link>
//                 <Link to="/call-for-speakers" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Call for Speakers</Link>
//                 <Link to="/call-for-reviewers" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Call for Reviewers</Link>
//               </div>
//             </div>
//           </div>

//           {/* 2. CONFERENCE DROPDOWN */}
//           <div 
//             className="relative h-full flex items-center cursor-pointer group"
//             onMouseEnter={() => setHovered("conference")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <span className="flex items-center hover:text-[#F58220] transition-colors py-8">
//               CONFERENCE <ChevronDown size={14} className="ml-1" />
//             </span>
//             <div className={`absolute top-[80%] left-0 w-56 bg-white shadow-xl border-t-4 border-[#F58220] transition-all duration-200 ease-in-out transform ${hovered === "conference" ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
//               <div className="py-2 flex flex-col text-gray-700 font-medium normal-case">
//                 <Link to="/about" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">About Conference</Link>
//                 <Link to="/committee" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Committee</Link>
//                 <Link to="/past-conferences" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Past Conferences</Link>
//               </div>
//             </div>
//           </div>

//           {/* 3. DIRECT LINKS */}
//           <Link to="/sessions" className="hover:text-[#F58220] transition-colors">SESSIONS</Link>
//           <Link to="/speakers" className="hover:text-[#F58220] transition-colors">SPEAKERS</Link>
  


//           {/* 5. PROGRAM DROPDOWN */}
//           <div 
//             className="relative h-full flex items-center cursor-pointer group"
//             onMouseEnter={() => setHovered("program")}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <span className="flex items-center hover:text-[#F58220] transition-colors py-8">
//               PROGRAM <ChevronDown size={14} className="ml-1" />
//             </span>
//             <div className={`absolute top-[80%] -left-10 w-56 bg-white shadow-xl border-t-4 border-[#F58220] transition-all duration-200 ease-in-out transform ${hovered === "program" ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
//               <div className="py-2 flex flex-col text-gray-700 font-medium normal-case">
//                 <Link to="/schedule" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Program Schedule</Link>
//                 <Link to="/venue" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Venue</Link>
//                 <Link to="/important-dates" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Important Dates</Link>
//                 <Link to="/guidelines" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">Guidelines</Link>
//                 <Link to="/faq" className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#F58220] transition-colors">FAQ</Link>
//               </div>
//             </div>
//           </div>



//           <Link to="/contact" className="hover:text-[#F58220] transition-colors">CONTACT</Link>
//         </nav>

//         {/* ================= RIGHT: STACKED CTA BUTTONS ================= */}
//         <div className="hidden md:flex flex-col gap-1.5 shrink-0 w-[240px]">
//           {/* Blue Button */}
//           <Link to="/register" className="w-full">
//             <button className="w-full bg-[#4854A2] hover:bg-[#394285] text-white text-[11px] font-extrabold py-2.5 px-4 rounded-sm uppercase tracking-wider transition-colors text-center shadow-sm">
//               REGISTER AS A VISITOR
//             </button>
//           </Link>

//           {/* Green Button */}
//           <Link to="/delegate-pass" className="w-full">
//             <button className="w-full bg-[#7BB343] hover:bg-[#689836] text-white text-[11px] font-extrabold py-2.5 px-4 rounded-sm uppercase tracking-wider transition-colors text-center shadow-sm">
//               BOOK DELEGATE PASS
//             </button>
//           </Link>
//         </div>

//         {/* ================= MOBILE MENU TOGGLE ================= */}
//         <div className="xl:hidden flex items-center">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             className="text-[#3C4B98] hover:text-[#F58220] transition-colors p-2"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//       </div>

//       {/* ================= MOBILE MENU DRAWER ================= */}
//       {menuOpen && (
//         <div className="xl:hidden bg-white shadow-2xl border-t absolute top-[100%] left-0 w-full max-h-[85vh] overflow-y-auto z-40">
//           <div className="px-6 py-6 flex flex-col space-y-4">
            
//             <Link to="/" onClick={() => setMenuOpen(false)} className="text-[#3C4B98] font-bold text-sm border-b pb-2">HOME</Link>

//             {/* Mobile Calls */}
//             <div>
//               <button onClick={() => setCallsOpen(!callsOpen)} className="flex items-center justify-between w-full text-[#3C4B98] font-bold text-sm py-2">
//                 CALLS <ChevronDown size={16} className={`transition-transform ${callsOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {callsOpen && (
//                 <div className="pl-4 border-l-2 border-gray-100 flex flex-col space-y-2 mt-1 mb-2">
//                    <Link to="/call-for-abstract" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Abstracts</Link>
//                    <Link to="/call-for-papers" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Papers</Link>
//                    <Link to="/call-for-posters" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Posters</Link>
//                    <Link to="/call-for-speakers" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Speakers</Link>
//                    <Link to="/call-for-reviewers" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Reviewers</Link>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Conference */}
//             <div>
//               <button onClick={() => setConferenceOpen(!conferenceOpen)} className="flex items-center justify-between w-full text-[#3C4B98] font-bold text-sm py-2">
//                 CONFERENCE <ChevronDown size={16} className={`transition-transform ${conferenceOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {conferenceOpen && (
//                 <div className="pl-4 border-l-2 border-gray-100 flex flex-col space-y-2 mt-1 mb-2">
//                    <Link to="/about" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>About</Link>
//                    <Link to="/committee" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Committee</Link>
//                    <Link to="/past-conferences" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Past Conferences</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/sessions" className="text-[#3C4B98] font-bold text-sm py-2" onClick={() => setMenuOpen(false)}>SESSIONS</Link>
//             <Link to="/speakers" className="text-[#3C4B98] font-bold text-sm py-2" onClick={() => setMenuOpen(false)}>SPEAKERS</Link>



//             {/* Mobile Program */}
//             <div>
//               <button onClick={() => setProgramOpen(!programOpen)} className="flex items-center justify-between w-full text-[#3C4B98] font-bold text-sm py-2">
//                 PROGRAM <ChevronDown size={16} className={`transition-transform ${programOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {programOpen && (
//                 <div className="pl-4 border-l-2 border-gray-100 flex flex-col space-y-2 mt-1 mb-2">
//                    <Link to="/schedule" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Schedule</Link>
//                    <Link to="/venue" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Venue</Link>
//                    <Link to="/important-dates" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Important Dates</Link>
//                    <Link to="/guidelines" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>Guidelines</Link>
//                    <Link to="/faq" className="text-gray-600 text-sm hover:text-[#F58220]" onClick={() => setMenuOpen(false)}>FAQ</Link>
//                 </div>
//               )}
//             </div>


//             <Link to="/contact" className="text-[#3C4B98] font-bold text-sm py-2" onClick={() => setMenuOpen(false)}>CONTACT</Link>

//             {/* Mobile Action Buttons */}
//             <div className="pt-4 flex flex-col gap-3">
//               <Link to="/register" onClick={() => setMenuOpen(false)}>
//                 <button className="w-full bg-[#4854A2] text-white font-bold py-3 rounded-sm uppercase">REGISTER AS A VISITOR</button>
//               </Link>
//               <Link to="/delegate-pass" onClick={() => setMenuOpen(false)}>
//                 <button className="w-full bg-[#7BB343] text-white font-bold py-3 rounded-sm uppercase">BOOK DELEGATE PASS</button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default TopNavbar;



import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const TopNavbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const [callsOpen, setCallsOpen] = useState(false);
  const [conferenceOpen, setConferenceOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenuOpen]);

  return (
    <header className="w-full bg-white border-b border-[#D1FAE5] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-auto py-3 lg:h-[96px] flex items-center justify-between">

        {/* ================= LEFT: LOGO ================= */}
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="aimllogo.jpg"
              alt="ICBME 2026 Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          <div className="leading-tight">
            <h1 className="text-lg md:text-2xl font-extrabold text-[#047857] uppercase">
              ICBME 2026
            </h1>
            <div className="text-[10px] md:text-[11px] font-semibold text-[#64748B] mt-1">
              <span>28 – 30 July 2026</span><br />
              <span>Rome, Italy</span>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-[#1E293B]">

          {/* CALLS */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHovered("calls")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex items-center cursor-pointer hover:text-[#047857]">
              CALLS <ChevronDown size={14} className="ml-1" />
            </span>

            {hovered === "calls" && (
              <div className="absolute top-[120%] left-0 w-60 bg-white shadow-xl border-t-4 border-[#047857] rounded-md">
                {[
                  ["Call for Abstracts", "/call-for-abstract"],
                  ["Call for Papers", "/call-for-papers"],
                  ["Call for Posters", "/call-for-posters"],
                  ["Call for Speakers", "/call-for-speakers"],
                  ["Call for Reviewers", "/call-for-reviewers"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    className="block px-4 py-2.5 text-sm hover:bg-[#ECFDF5]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONFERENCE */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHovered("conference")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex items-center cursor-pointer hover:text-[#047857]">
              CONFERENCE <ChevronDown size={14} className="ml-1" />
            </span>

            {hovered === "conference" && (
              <div className="absolute top-[120%] left-0 w-56 bg-white shadow-xl border-t-4 border-[#047857] rounded-md">
                <Link to="/about" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">About Conference</Link>
                <Link to="/committee" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Committee</Link>
                <Link to="/past-conferences" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Past Conferences</Link>
              </div>
            )}
          </div>

          <Link to="/sessions" className="hover:text-[#047857]">SESSIONS</Link>
          <Link to="/speakers" className="hover:text-[#047857]">SPEAKERS</Link>

          {/* PROGRAM */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHovered("program")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex items-center cursor-pointer hover:text-[#047857]">
              PROGRAM <ChevronDown size={14} className="ml-1" />
            </span>

            {hovered === "program" && (
              <div className="absolute top-[120%] left-0 w-56 bg-white shadow-xl border-t-4 border-[#047857] rounded-md">
                <Link to="/schedule" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Program Schedule</Link>
                <Link to="/venue" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Venue</Link>
                <Link to="/important-dates" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Important Dates</Link>
                <Link to="/guidelines" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">Guidelines</Link>
                <Link to="/faq" className="block px-4 py-2.5 hover:bg-[#ECFDF5]">FAQ</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-[#047857]">CONTACT</Link>
        </nav>

        {/* ================= CTA ================= */}
        <div className="hidden md:flex gap-2">
          <Link to="/register">
            <button className="bg-[#84CC16] hover:bg-[#65A30D] text-[#1E293B] text-xs font-bold px-5 py-2.5 rounded-md uppercase">
              Register
            </button>
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="xl:hidden text-[#047857]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t shadow-xl">
          <div className="px-6 py-6 space-y-4">

            <Link to="/" onClick={() => setMenuOpen(false)} className="font-bold text-[#1E293B]">
              HOME
            </Link>

            {/* CALLS */}
            <button onClick={() => setCallsOpen(!callsOpen)} className="w-full flex justify-between font-bold">
              CALLS <ChevronDown className={`${callsOpen && "rotate-180"}`} />
            </button>
            {callsOpen && (
              <div className="pl-4 space-y-2 text-sm text-[#64748B]">
                <Link to="/call-for-abstract">Abstracts</Link>
                <Link to="/call-for-papers">Papers</Link>
                <Link to="/call-for-posters">Posters</Link>
                <Link to="/call-for-speakers">Speakers</Link>
                <Link to="/call-for-reviewers">Reviewers</Link>
              </div>
            )}

            <Link to="/sessions" className="font-bold">SESSIONS</Link>
            <Link to="/speakers" className="font-bold">SPEAKERS</Link>
            <Link to="/venue" className="font-bold">VENUE</Link>

            <Link to="/register">
              <button className="w-full bg-[#84CC16] py-3 rounded-md font-bold">
                REGISTER
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavbar;
