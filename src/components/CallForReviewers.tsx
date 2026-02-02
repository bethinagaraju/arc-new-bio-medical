// import React from "react";
// import {
//   FileText,
//   Users,
//   Presentation,
//   Award,
//   ChevronRight,
//   ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const CallForReviewers: React.FC = () => {
//   return (
//     <>
//       <Helmet>
//         {/* ✅ 1. TITLE: Specific to Academic Service + Keywords */}
//         <title>Call for Reviewers | Scientific Committee ICBME 2026</title>

//         {/* ✅ 2. DESCRIPTION: Targets "Peer Review" and "Committee" keywords */}
//         <meta 
//           name="description" 
//           content="Join the ICBME 2026 Scientific Committee. We invite qualified academicians and researchers to serve as peer reviewers for the AI & Robotics conference in Rome." 
//         />

//         {/* ✅ 3. KEYWORDS: Specific to academic volunteering */}
//         <meta 
//           name="keywords" 
//           content="Call for Reviewers, Scientific Committee, Peer Review Service, Academic Volunteer, AI Research Evaluator, Technical Program Committee, ICBME 2026" 
//         />

//         {/* ✅ 4. CANONICAL LINK */}
//         <link rel="canonical" href="https://roboticsaisummit.com/call-for-reviewers" />
        
//         {/* 5. Robots Tag */}
//         <meta name="robots" content="index, follow, max-image-preview:large" />
//         <meta name="author" content="ICBME Organizing Committee" />
//         <meta name="publisher" content="Robotics & AI Summit" />

//         {/* 6. Open Graph */}
//         <meta property="og:title" content="Join the Scientific Committee - ICBME 2026" />
//         <meta property="og:url" content="https://roboticsaisummit.com/call-for-reviewers" />
//         <meta property="og:description" content="Apply to become a peer reviewer for the 3rd Global Conference on AI & Robotics. Gain recognition and certificates for your academic service." />
//         <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
//         <meta property="og:type" content="website" />

//         {/* 7. Twitter Cards */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Call for Reviewers | ICBME 2026" />
//         <meta name="twitter:description" content="Join the scientific committee for the premier AI & Robotics conference in Rome." />
//         <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
//       </Helmet>



//     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

//       {/* Page Header */}
//       <div className="mb-12 border-b-2 border-[#304278] pb-4">
//         <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
//           CALL FOR REVIEWERS – ICBME 2026
//         </h1>
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
//           We invite qualified researchers and academicians to join the Review Committee of ICBME 2026 and contribute to maintaining the academic quality of the conference.
//         </p>
//       </div>

//       <div className="grid gap-4">

//         {/* Who Can Apply? */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Users className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Who Can Apply?</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Professors & Associate Professors",
//               "Postdoctoral Researchers",
//               "Experienced Researchers"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Reviewer Responsibilities */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Presentation className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Reviewer Responsibilities</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Review abstracts or papers",
//               "Provide constructive feedback",
//               "Ensure topic relevance and quality"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Reviewer Benefits */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Award className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Reviewer Benefits</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Reviewer Certificate",
//               "Recognition on conference website",
//               "Academic networking opportunities"
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
//           title="Join as Reviewer for ICBME 2026 Conference"
//           aria-label="Join as Reviewer for ICBME 2026 Conference"
//         >
//           Join as Reviewer
//         </Link>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CallForReviewers;











import React from "react";
import {
  FileText,
  Users,
  Presentation,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CallForReviewers: React.FC = () => {
  return (
    <>
      {/* ================= SEO (UNCHANGED) ================= */}
      <Helmet>
        <title>Call for Reviewers | Scientific Committee ICBME 2026</title>
        <meta
          name="description"
          content="Join the ICBME 2026 Scientific Committee. We invite qualified academicians and researchers to serve as peer reviewers for the AI & Robotics conference in Rome."
        />
        <meta
          name="keywords"
          content="Call for Reviewers, Scientific Committee, Peer Review Service, Academic Volunteer, AI Research Evaluator, Technical Program Committee, ICBME 2026"
        />
        <link
          rel="canonical"
          href="https://roboticsaisummit.com/call-for-reviewers"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="ICBME Organizing Committee" />
        <meta name="publisher" content="Robotics & AI Summit" />

        <meta property="og:title" content="Join the Scientific Committee - ICBME 2026" />
        <meta
          property="og:description"
          content="Apply to become a peer reviewer for the premier AI & Robotics conference. Gain recognition and certificates for academic service."
        />
        <meta
          property="og:image"
          content="https://roboticsaisummit.com/aimllogo.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Call for Reviewers | ICBME 2026" />
        <meta
          name="twitter:description"
          content="Join the scientific committee for the premier AI & Robotics conference in Rome."
        />
        <meta
          name="twitter:image"
          content="https://roboticsaisummit.com/aimllogo.jpg"
        />
      </Helmet>

      <div className="font-sans text-[#1E293B] bg-white">

        {/* ================= PAGE HEADER ================= */}
        <div className="bg-white px-6 pt-12 pb-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F766E] tracking-tight">
              CALL FOR REVIEWERS – ICBME 2026
            </h1>

            <p className="mt-2 text-[17px] text-slate-600 max-w-3xl">
              Join the Scientific Committee and contribute to maintaining the academic quality of ICBME 2026.
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
              We invite qualified researchers and academicians to serve as peer reviewers
              for ICBME 2026 and help ensure the technical rigor, originality, and relevance
              of submitted research contributions.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="space-y-0">

            <SectionRow icon={<Users className="w-5 h-5" />} title="Who Can Apply?">
              {[
                "Professors & Associate Professors",
                "Postdoctoral Researchers",
                "Experienced Researchers",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>

            <Divider />

            <SectionRow
              icon={<Presentation className="w-5 h-5" />}
              title="Reviewer Responsibilities"
            >
              {[
                "Review abstracts or full papers",
                "Provide constructive and unbiased feedback",
                "Ensure topic relevance, originality, and academic quality",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>

            <Divider />

            <SectionRow icon={<Award className="w-5 h-5" />} title="Reviewer Benefits">
              {[
                "Official Reviewer Certificate",
                "Recognition on the conference website",
                "Academic networking and professional visibility",
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
              Join as Reviewer
            </Link>
          </div>
        </div>
      </div>
    </>
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

export default CallForReviewers;
