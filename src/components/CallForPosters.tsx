// import React from "react";
// import {
//   FileText,
//   Users,
//   Upload,
//   Presentation,
//   Award,
//   ChevronRight,
//   ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const CallForPosters: React.FC = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

//       {/* Page Header */}
//       <div className="mb-12 border-b-2 border-[#304278] pb-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//           CALL FOR POSTERS – ICBME 2026
//         </h2>
//         <p className="mt-2 text-gray-500 text-lg">
//           Submit your research and join the global conversation on Biomedical Engineering.
//         </p>
//       </div>

//       {/* About the Call */}
//       <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
//         <div className="flex items-center gap-3 mb-4">
//           <FileText className="w-6 h-6 text-blue-900" />
//           <h3 className="text-2xl font-bold text-gray-900">About the Call</h3>
//         </div>
//         <p className="text-gray-700 leading-relaxed">
//           Poster presentations offer an excellent opportunity to visually present early-stage research, innovative ideas, case studies, or preliminary results.
//         </p>
//         <p className="text-gray-700 leading-relaxed mt-4">
//           This format is especially suitable for students and early-career researchers.
//         </p>
//       </div>

//       <div className="grid gap-4">

//         {/* Who Can Submit? */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Users className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Who Can Submit?</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Undergraduate & Postgraduate Students",
//               "PhD Scholars",
//               "Early-Career Researchers"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* What to Submit? */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Upload className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">What to Submit?</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Poster Abstract (150–250 words)",
//               "Original or ongoing research work"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Poster Presentation Format */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Presentation className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Poster Presentation Format</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Physical Poster (In-Person)",
//               "Digital Poster (Virtual participants)",
//               "Poster template will be provided after acceptance"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Benefits */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Award className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Poster Presentation Certificate",
//               "Opportunity to interact with experts",
//               "Academic exposure and CV enhancement"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t pt-8">

//         <Link
//           to="/register"
//           className="flex items-center justify-center gap-2 px-8 py-3 bg-[#304278] text-white font-semibold rounded hover:bg-[#304278] transition-colors"
//           title="Register for the ICBME 2026 Conference in Rome"
//           aria-label="Register for the ICBME 2026 Conference in Rome"
//         >
//           Register Now <ArrowRight className="w-4 h-4" />
//         </Link>

//         <Link
//           to="/AbstractSubmission"
//           className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded hover:border-[#0091b5] hover:text-[#0091b5] transition-colors"
//           title="Submit your poster abstract for ICBME 2026 Conference"
//           aria-label="Submit your poster abstract for ICBME 2026 Conference"
//         >
//           Submit Poster Abstract
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CallForPosters;



import React from "react";
import {
  FileText,
  Users,
  Upload,
  Presentation,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CallForPosters: React.FC = () => {
  return (
    <div className="font-sans text-[#1E293B] bg-white">

      {/* ================= PAGE HEADER ================= */}
      <div className="bg-white px-6 pt-12 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F766E] tracking-tight">
            CALL FOR POSTERS – ICBME 2026
          </h1>

          <p className="mt-2 text-[17px] text-slate-600 max-w-3xl">
            Submit your research and join the global conversation on Biomedical Engineering.
          </p>

          <div className="mt-5 h-[2px] w-full bg-[#0F766E]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ================= INTRO ================= */}
        <div className="mb-12 border-l-2 border-[#0F766E]/40 pl-5">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-[#0F766E]" />
            <h3 className="text-lg font-bold text-[#1E293B]">
              About the Call
            </h3>
          </div>

          <p className="text-[16.5px] text-slate-600 leading-relaxed max-w-3xl">
            Poster presentations offer an excellent opportunity to visually
            present early-stage research, innovative ideas, case studies, or
            preliminary results.
          </p>

          <p className="mt-2 text-[16.5px] text-slate-600 leading-relaxed max-w-3xl">
            This format is especially suitable for students and early-career researchers.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-0">

          <SectionRow icon={<Users className="w-5 h-5" />} title="Who Can Submit?">
            {[
              "Undergraduate & Postgraduate Students",
              "PhD Scholars",
              "Early-Career Researchers",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>

          <Divider />

          <SectionRow icon={<Upload className="w-5 h-5" />} title="What to Submit?">
            {[
              "Poster Abstract (150–250 words)",
              "Original or ongoing research work",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>

          <Divider />

          <SectionRow
            icon={<Presentation className="w-5 h-5" />}
            title="Poster Presentation Format"
          >
            {[
              "Physical Poster (In-Person)",
              "Digital Poster (Virtual participants)",
              "Poster template will be provided after acceptance",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>

          <Divider />

          <SectionRow icon={<Award className="w-5 h-5" />} title="Benefits">
            {[
              "Poster Presentation Certificate",
              "Opportunity to interact with experts",
              "Academic exposure and CV enhancement",
            ].map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </SectionRow>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#84CC16] text-[#1E293B] font-bold rounded-md hover:brightness-95 transition"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/AbstractSubmission"
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-[#1E293B] font-bold rounded-md hover:border-[#0F766E] hover:text-[#0F766E] transition"
          >
            Submit Poster Abstract
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
        <div className="p-2 bg-[#ECFDF5] rounded-md text-[#0F766E]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-[#1E293B]">
          {title}
        </h3>
      </div>
    </div>

    <div className="md:w-2/3">{children}</div>
  </div>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 mb-2 last:mb-0">
    <div className="mt-2 w-[5px] h-[5px] rounded-full bg-[#0F766E]" />
    <span className="text-[16.5px] text-slate-600 leading-relaxed">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="border-slate-100" />;

export default CallForPosters;
