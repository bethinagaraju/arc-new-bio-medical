// // // import React from "react";
// // // import { 
// // //   FileText, 
// // //   Users, 
// // //   Upload, 
// // //   Target, 
// // //   Presentation, 
// // //   CheckCircle, 
// // //   Award, 
// // //   ChevronRight,
// // //   ArrowRight
// // // } from "lucide-react";
// // // import { Link } from "react-router-dom";

// // // const CallForPapers: React.FC = () => {
// // //   return (
// // //     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

// // //       {/* Page Header */}
// // //       <div className="mb-12 border-b-2 border-[#304278] pb-4">
// // //         <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
// // //           CALL FOR PAPERS – ICHIS 2026
// // //         </h1>
// // //         <p className="mt-2 text-gray-500 text-lg">
// // //           Submit your research and join the global conversation on Health Innovation Summit.
// // //         </p>
// // //       </div>

// // //       {/* About the Call */}
// // //       <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
// // //         <div className="flex items-center gap-3 mb-4">
// // //           <FileText className="w-6 h-6 text-blue-900" />
// // //           <h3 className="text-2xl font-bold text-gray-900">About the Call</h3>
// // //         </div>
// // //         <p className="text-gray-700 leading-relaxed">
// // //           Health Innovation Summit Conference 2026 invites full-length research papers that present original research contributions, innovative methodologies, or significant applications in the fields of Health Innovation Summit.
// // //         </p>
// // //       </div>

// // //       <div className="grid gap-4">

// // //         {/* Who Should Submit? */}
// // //         <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Users className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Who Should Submit?</h3>
// // //           </div>
// // //           <ul className="space-y-1 ml-2 md:ml-12">
// // //             {[
// // //               "Professors & Senior Researchers",
// // //               "Research Scientists",
// // //               "Industry Researchers",
// // //               "Academicians with completed research work"
// // //             ].map((item, idx) => (
// // //               <li key={idx} className="flex items-start gap-3">
// // //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //                 <span className="leading-relaxed text-gray-700">{item}</span>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </section>

// // //         <hr className="border-gray-100" />

// // //         {/* Paper Guidelines */}
// // //         <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Upload className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Paper Guidelines</h3>
// // //           </div>
// // //           <ul className="space-y-1 ml-2 md:ml-12">
// // //             {[
// // //               "Length: 6–10 pages",
// // //               "Original, unpublished work",
// // //               "Clear methodology and results"
// // //             ].map((item, idx) => (
// // //               <li key={idx} className="flex items-start gap-3">
// // //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //                 <span className="leading-relaxed text-gray-700">{item}</span>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </section>

// // //         <hr className="border-gray-100" />

// // //         {/* Topics Covered */}
// // //         {/* <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Target className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Topics Covered</h3>
// // //           </div>
// // //           <p className="text-gray-600 mb-4 ml-2 md:ml-12">(All topics listed under Call for Abstracts apply)</p>
// // //         </section> */}

// // //                 <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Target className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Topics of Interest</h3>
// // //           </div>
          
// // //           <ul className="space-y-1 ml-2 md:ml-12">
// // //             {[
// // //               "Artificial Intelligence",
// // //               "Machine Learning & Deep Learning",
// // //               "Robotics & Autonomous Systems",
// // //               "Generative AI",
// // //               "AI in Healthcare",
// // //               "Computer Vision & NLP",
// // //               "Human–Robot Interaction",
// // //               "Smart Systems & IoT"
// // //             ].map((item, idx) => (
// // //               <li key={idx} className="flex items-start gap-3">
// // //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //                 <span className="leading-relaxed text-gray-700">{item}</span>
// // //               </li>
// // //             ))}
// // //             <li className="flex items-start gap-3">
// // //               <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //               <Link
// // //                 to="/sessions"
// // //                 className="leading-relaxed text-blue-600 hover:text-blue-800 underline"
// // //                 title="View more topics for ICHIS 2026 Conference"
// // //                 aria-label="View more topics for ICHIS 2026 Conference"
// // //               >
// // //                 more topics
// // //               </Link>
// // //             </li>
// // //           </ul>



          
          
// // //         </section>

// // //         <hr className="border-gray-100" />

// // //         {/* Review Process */}
// // //         <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <CheckCircle className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Review Process</h3>
// // //           </div>
// // //           <p className="leading-relaxed text-gray-700 ml-2 md:ml-12">
// // //             Submitted papers will undergo a peer-review process to ensure academic quality and relevance.
// // //           </p>
// // //         </section>

// // //         <hr className="border-gray-100" />

// // //         {/* Presentation Options */}
// // //         <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Presentation className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Presentation Options</h3>
// // //           </div>
// // //           <ul className="space-y-1 ml-2 md:ml-12">
// // //             {[
// // //               "Oral Presentation (In-Person or Virtual)"
// // //             ].map((item, idx) => (
// // //               <li key={idx} className="flex items-start gap-3">
// // //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //                 <span className="leading-relaxed text-gray-700">{item}</span>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </section>

// // //         <hr className="border-gray-100" />

// // //         {/* Benefits */}
// // //         <section>
// // //           <div className="flex items-center gap-3">
// // //             <div className="p-2 rounded-lg text-blue-900">
// // //               <Award className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
// // //           </div>
// // //           <ul className="space-y-1 ml-2 md:ml-12">
// // //             {[
// // //               "Publication in conference proceedings",
// // //               "Certificate of Presentation",
// // //               "Global academic visibility",
// // //               "Professional networking"
// // //             ].map((item, idx) => (
// // //               <li key={idx} className="flex items-start gap-3">
// // //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// // //                 <span className="leading-relaxed text-gray-700">{item}</span>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </section>

// // //       </div>

// // //       {/* Buttons */}
// // //       <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t pt-8">
        
// // //         <Link
// // //           to="/register"
// // //           className="flex items-center justify-center gap-2 px-8 py-3 bg-[#304278] text-white font-semibold rounded hover:bg-[#304278] transition-colors"
// // //           title="Register for the ICHIS 2026 Conference in Rome"
// // //           aria-label="Register for the ICHIS 2026 Conference in Rome"
// // //         >
// // //           Register Now <ArrowRight className="w-4 h-4" />
// // //         </Link>

// // //         <Link
// // //           to="/AbstractSubmission"
// // //           className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded hover:border-[#0091b5] hover:text-[#0091b5] transition-colors"
// // //           title="Submit your full paper for ICHIS 2026 Conference"
// // //           aria-label="Submit your full paper for ICHIS 2026 Conference"
// // //         >
// // //           Submit Full Paper
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CallForPapers;






// // import React from "react";
// // import { 
// //   FileText, 
// //   Users, 
// //   Upload, 
// //   Target, 
// //   Presentation, 
// //   CheckCircle, 
// //   Award, 
// //   ChevronRight,
// //   ArrowRight
// // } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const CallForPapers: React.FC = () => {
// //   return (
// //     <div className="font-sans text-gray-800 bg-white">

// //       {/* --- 1. Hero / Header Section --- */}
// //       <div className="bg-[#304278] text-white py-16 px-6">
// //         <div className="max-w-5xl mx-auto">
// //           <div className="inline-block py-1 px-3 border border-blue-400 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
// //             Conference 2026
// //           </div>
// //           <h1 className="text-3xl md:text-5xl font-bold mb-4">
// //             Call For Papers
// //           </h1>
// //           <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
// //             Submit your research and join the global conversation on AI, ML, and Robotics.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="max-w-5xl mx-auto px-6 py-12">
        
// //         {/* --- 2. Introduction (Full Width) --- */}
// //         <div className="mb-16 border-l-4 border-[#304278] pl-6 py-2">
// //           <div className="flex items-center gap-3 mb-2">
// //              <FileText className="w-6 h-6 text-[#304278]" />
// //              <h3 className="text-xl font-bold text-gray-900">About the Call</h3>
// //           </div>
// //           <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
// //             Health Innovation Summit Conference 2026 invites full-length research papers that present original research contributions, innovative methodologies, or significant applications in the fields of Health Innovation Summit.
// //           </p>
// //         </div>

// //         {/* --- 3. The Content Lists (Split Layout) --- */}
// //         <div className="space-y-0">

// //           {/* Section: Who Should Submit */}
// //           <SectionRow 
// //             icon={<Users className="w-6 h-6" />}
// //             title="Who Should Submit?"
// //           >
// //             {[
// //               "Professors & Senior Researchers",
// //               "Research Scientists",
// //               "Industry Researchers",
// //               "Academicians with completed research work"
// //             ].map((item, idx) => <ListItem key={idx} text={item} />)}
// //           </SectionRow>

// //           <Divider />

// //           {/* Section: Paper Guidelines */}
// //           <SectionRow 
// //             icon={<Upload className="w-6 h-6" />}
// //             title="Paper Guidelines"
// //           >
// //             {[
// //               "Length: 6–10 pages",
// //               "Original, unpublished work",
// //               "Clear methodology and results"
// //             ].map((item, idx) => <ListItem key={idx} text={item} />)}
// //           </SectionRow>

// //           <Divider />

// //           {/* Section: Topics */}
// //           <SectionRow 
// //             icon={<Target className="w-6 h-6" />}
// //             title="Topics of Interest"
// //           >
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
// //               {[
// //                 "Artificial Intelligence",
// //                 "Machine Learning & Deep Learning",
// //                 "Robotics & Autonomous Systems",
// //                 "Generative AI",
// //                 "AI in Healthcare",
// //                 "Computer Vision & NLP",
// //                 "Human–Robot Interaction",
// //                 "Smart Systems & IoT"
// //               ].map((item, idx) => <ListItem key={idx} text={item} />)}
// //             </div>
            
// //             <div className="mt-4 flex items-center gap-2 pl-1">
// //               <Link
// //                 to="/sessions"
// //                 className="text-[#304278] font-bold hover:underline flex items-center gap-1 group"
// //               >
// //                 View all topics 
// //                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
// //               </Link>
// //             </div>
// //           </SectionRow>

// //           <Divider />

// //           {/* Section: Review Process */}
// //           <SectionRow 
// //             icon={<CheckCircle className="w-6 h-6" />}
// //             title="Review Process"
// //           >
// //              <p className="text-gray-700 leading-relaxed py-1">
// //               Submitted papers will undergo a rigorous peer-review process to ensure academic quality and relevance before acceptance.
// //             </p>
// //           </SectionRow>

// //           <Divider />

// //           {/* Section: Presentation */}
// //           <SectionRow 
// //             icon={<Presentation className="w-6 h-6" />}
// //             title="Presentation Options"
// //           >
// //             <ListItem text="Oral Presentation (In-Person or Virtual)" />
// //           </SectionRow>

// //           <Divider />

// //           {/* Section: Benefits */}
// //           <SectionRow 
// //             icon={<Award className="w-6 h-6" />}
// //             title="Benefits"
// //           >
// //             {[
// //               "Publication in conference proceedings",
// //               "Certificate of Presentation",
// //               "Global academic visibility",
// //               "Professional networking"
// //             ].map((item, idx) => <ListItem key={idx} text={item} />)}
// //           </SectionRow>

// //         </div>

// //         {/* --- 4. Action Buttons --- */}
// //         <div className="mt-20 flex flex-col sm:flex-row gap-4">
// //           <Link
// //             to="/register"
// //             className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-[#304278] text-white font-bold rounded hover:bg-[#23305a] transition-all shadow-sm"
// //           >
// //             Register Now <ArrowRight className="w-5 h-5" />
// //           </Link>

// //           <Link
// //             to="/AbstractSubmission"
// //             className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded hover:border-[#304278] hover:text-[#304278] transition-all"
// //           >
// //             Submit Full Paper
// //           </Link>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // // --- Helper Components for Clean Code ---

// // // 1. The Row Layout (Left Title, Right Content)
// // const SectionRow: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
// //   <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-10">
// //     {/* Left Side: Header */}
// //     <div className="md:w-1/3 flex-shrink-0">
// //       <div className="flex items-center gap-3 text-[#304278] mb-2 sticky top-6">
// //         <div className="p-2 bg-blue-50 rounded-lg">
// //           {icon}
// //         </div>
// //         <h3 className="text-xl font-bold text-gray-900">{title}</h3>
// //       </div>
// //     </div>

// //     {/* Right Side: Content */}
// //     <div className="md:w-2/3">
// //       {children}
// //     </div>
// //   </div>
// // );

// // // 2. The List Item Style
// // const ListItem: React.FC<{ text: string }> = ({ text }) => (
// //   <div className="flex items-start gap-3 mb-3 last:mb-0">
// //     <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#304278]" />
// //     <span className="text-gray-700 leading-relaxed text-lg">{text}</span>
// //   </div>
// // );

// // // 3. Simple Divider
// // const Divider = () => <hr className="border-gray-100" />;

// // export default CallForPapers;


// import React from "react";
// import {
//   FileText,
//   Users,
//   Upload,
//   Target,
//   Presentation,
//   CheckCircle,
//   Award,
//   ArrowRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const CallForPapers: React.FC = () => {
//   return (
//     <div className="font-sans text-slate-800 bg-white">
//       {/* ================= PAGE HEADER (CLEAN STYLE) ================= */}
// <div className="bg-white px-6 pt-14 pb-10">
//   <div className="max-w-6xl mx-auto">

//     <h1 className="text-3xl md:text-4xl font-extrabold text-[#243B8F] tracking-tight">
//       CALL FOR POSTERS – ICHIS 2026
//     </h1>

//     <p className="mt-3 text-lg text-slate-600 max-w-3xl">
//       Submit your research and join the global conversation on Health Innovation Summit.
//     </p>

//     {/* Divider */}
//     <div className="mt-6 h-[2px] w-full bg-[#243B8F]" />
//   </div>
// </div>


//       <div className="max-w-5xl mx-auto px-6 py-14">

//         {/* ================= INTRO ================= */}
//         <div className="mb-16 border-l-2 border-slate-300 pl-6">
//           <div className="flex items-center gap-3 mb-2">
//             <FileText className="w-6 h-6 text-slate-700" />
//             <h3 className="text-xl font-bold text-slate-900">
//               About the Call
//             </h3>
//           </div>

//           <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
//             ICHIS 2026 invites full-length research papers that present original
//             contributions, innovative methodologies, or impactful applications
//             in Health Innovation Summit.
//           </p>
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="space-y-0">

//           <SectionRow icon={<Users className="w-6 h-6" />} title="Who Should Submit?">
//             {[
//               "Professors & Senior Researchers",
//               "Research Scientists",
//               "Industry Researchers",
//               "Academicians with completed research work",
//             ].map((item, idx) => (
//               <ListItem key={idx} text={item} />
//             ))}
//           </SectionRow>

//           <Divider />

//           <SectionRow icon={<Upload className="w-6 h-6" />} title="Paper Guidelines">
//             {[
//               "Length: 6–10 pages",
//               "Original, unpublished work",
//               "Clear methodology and experimental results",
//             ].map((item, idx) => (
//               <ListItem key={idx} text={item} />
//             ))}
//           </SectionRow>

//           <Divider />

//           <SectionRow icon={<Target className="w-6 h-6" />} title="Topics of Interest">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
//               {[
//                 "Artificial Intelligence",
//                 "Machine Learning & Deep Learning",
//                 "Robotics & Autonomous Systems",
//                 "Generative AI",
//                 "AI in Healthcare",
//                 "Computer Vision & NLP",
//                 "Human–Robot Interaction",
//                 "Smart Systems & IoT",
//               ].map((item, idx) => (
//                 <ListItem key={idx} text={item} />
//               ))}
//             </div>

//             <div className="mt-4">
//               <Link
//                 to="/sessions"
//                 className="inline-flex items-center gap-1 text-slate-700 font-semibold hover:underline"
//               >
//                 View all topics
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </SectionRow>

//           <Divider />

//           <SectionRow icon={<CheckCircle className="w-6 h-6" />} title="Review Process">
//             <p className="text-slate-600 leading-relaxed text-lg">
//               Submitted papers will undergo a rigorous peer-review process to
//               ensure academic quality and relevance.
//             </p>
//           </SectionRow>

//           <Divider />

//           <SectionRow icon={<Presentation className="w-6 h-6" />} title="Presentation Options">
//             <ListItem text="Oral Presentation (In-Person or Virtual)" />
//           </SectionRow>

//           <Divider />

//           <SectionRow icon={<Award className="w-6 h-6" />} title="Benefits">
//             {[
//               "Publication in conference proceedings",
//               "Certificate of Presentation",
//               "Global academic visibility",
//               "Professional networking",
//             ].map((item, idx) => (
//               <ListItem key={idx} text={item} />
//             ))}
//           </SectionRow>
//         </div>

//         {/* ================= CTA ================= */}
//         <div className="mt-20 flex flex-col sm:flex-row gap-4">
//           <Link
//             to="/register"
//             className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-md hover:bg-slate-800 transition"
//           >
//             Register Now <ArrowRight className="w-5 h-5" />
//           </Link>

//           <Link
//             to="/AbstractSubmission"
//             className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 font-bold rounded-md hover:border-slate-900 hover:text-slate-900 transition"
//           >
//             Submit Full Paper
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ================= HELPERS (UNCHANGED STRUCTURE) ================= */

// const SectionRow: React.FC<{
//   icon: React.ReactNode;
//   title: string;
//   children: React.ReactNode;
// }> = ({ icon, title, children }) => (
//   <div className="flex flex-col md:flex-row gap-8 md:gap-14 py-12">
//     <div className="md:w-1/3 flex-shrink-0">
//       <div className="flex items-center gap-3 sticky top-6">
//         <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-slate-900">
//           {title}
//         </h3>
//       </div>
//     </div>

//     <div className="md:w-2/3">{children}</div>
//   </div>
// );

// const ListItem: React.FC<{ text: string }> = ({ text }) => (
//   <div className="flex items-start gap-3 mb-3 last:mb-0">
//     <div className="mt-2 w-[5px] h-[5px] rounded-full bg-slate-500" />
//     <span className="text-slate-600 leading-relaxed text-lg">
//       {text}
//     </span>
//   </div>
// );

// const Divider = () => <hr className="border-slate-100" />;

// export default CallForPapers;




import React from "react";
import {
  FileText,
  Users,
  Upload,
  Target,
  Presentation,
  CheckCircle,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useConference } from '../contexts/ConferenceContext';

const CallForPapers: React.FC = () => {
  const { data } = useConference();
  return (
    <div className="font-sans text-[#1E293B] bg-white">

      {/* ================= PAGE HEADER ================= */}
      <div className="bg-white px-6 pt-12 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#004E5A] tracking-tight">
            CALL FOR PAPERS – ICHIS 2026
          </h1>

          <p className="mt-2 text-[17px] text-slate-600 max-w-3xl">
            Submit your research and join the global conversation on Health Innovation Summit.
          </p>

          <div className="mt-5 h-[2px] w-full bg-[#0F766E]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ================= INTRO ================= */}
        <div className="mb-12 border-l-2 border-[#0F766E]/40 pl-5">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-[#0F766E]" />
            <h3 className="text-lg font-bold text-[#004E5A]">
              About the Call
            </h3>
          </div>

          <p className="text-[16.5px] text-slate-600 leading-relaxed max-w-3xl">
            ICHIS 2026 invites full-length research papers presenting original
            contributions, innovative methodologies, or impactful applications
            in Health Innovation Summit.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-0">

          <SectionRow icon={<Users className="w-5 h-5" />} title="Who Should Submit?">
            {[
              "Professors & Senior Researchers",
              "Research Scientists",
              "Industry Researchers",
              "Academicians with completed research work",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>

          <Divider />

          <SectionRow icon={<Upload className="w-5 h-5" />} title="Paper Guidelines">
            {[
              "Length: 6–10 pages",
              "Original, unpublished work",
              "Clear methodology and experimental results",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>

          <Divider />

          <SectionRow icon={<Target className="w-5 h-5" />} title="Topics of Interest">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
              {data?.topics?.slice(0, 8).map((item) => (
                <ListItem key={item.id} text={item.topicName} />
              ))}
            </div>

            <div className="mt-3">
              <Link
                to="/sessions"
                className="inline-flex items-center gap-1 text-[#0F766E] font-semibold hover:underline"
              >
                View all topics <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionRow>

          <Divider />

          <SectionRow icon={<CheckCircle className="w-5 h-5" />} title="Review Process">
            <p className="text-[16.5px] text-slate-600 leading-relaxed">
              Submitted papers will undergo a rigorous peer-review process to
              ensure academic quality and relevance.
            </p>
          </SectionRow>

          <Divider />

          <SectionRow icon={<Presentation className="w-5 h-5" />} title="Presentation Options">
            <ListItem text="Oral Presentation (In-Person or Virtual)" />
          </SectionRow>

          <Divider />

          <SectionRow icon={<Award className="w-5 h-5" />} title="Benefits">
            {[
              "Publication in conference proceedings",
              "Certificate of Presentation",
              "Global academic visibility",
              "Professional networking",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#004E5A] text-[#FFFFFF] font-bold hover:brightness-95 transition"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/AbstractSubmission"
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-[#004E5A] font-bold hover:border-[#004E5A] hover:text-[#004E5A] transition"
          >
            Submit Full Paper
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ================= HELPERS ================= */

const SectionRow: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
    <div className="md:w-1/3 flex-shrink-0">
      <div className="flex items-center gap-3 sticky top-6">
        <div className="p-2 bg-[#ECFDF5] text-[#004E5A]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-[#004E5A]">
          {title}
        </h3>
      </div>
    </div>

    <div className="md:w-2/3">{children}</div>
  </div>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 mb-2 last:mb-0">
    <div className="mt-3 w-[5px] h-[5px] rounded-full bg-[#0F766E]" />
    <span className="text-[16.5px] text-slate-600 leading-relaxed">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="border-slate-100" />;

export default CallForPapers;
