// // // import React from 'react';
// // // import Header from '../components/Header';
// // // import SpeakersSection from '../components/SpeakersSection';
// // // import SpeakersBanner from '../components/SpeakersBanner';
// // // import SpeakersBottomSection from '../components/SpeakersBottomSection';
// // // import { Link } from 'react-router-dom';

// // // const plenarySpeakers = [
// // //   {
// // //     image: 'speakerone.png',
// // //     name: 'Michael Cafarella',
// // //     title: 'Massachusetts Institute of Technology, USA',
// // //     company: 'EDF Renewables'
// // //   },
// // //   {
// // //     image: 'speakertwo.png',
// // //     name: 'Chris Atkenson',
// // //     title: 'Carnegie Mellon University, USA',
// // //     company: 'McKinsey'
// // //   },
// // //   {
// // //     image: 'speaker3.png',
// // //     name: 'Yanda Li',
// // //     title: 'Tsinghua University, China',
// // //     company: 'McKinsey'
// // //   }
// // // ];

// // // const keynoteSpeakers = [
// // //   {
// // //     image: 'speaker04.png',
// // //     name: 'Samuel Coogan',
// // //     title: 'Georgia institute of Technology, USA',
// // //     company: 'Deloitte'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
// // //     name: 'Leonidas Guibas',
// // //     title: 'Stanford University, USA',
// // //     company: 'KPMG'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_19cov119cov119co.png',
// // //     name: 'Jeannette Bohg',
// // //     title: 'Stanford University, USA',
// // //     company: 'KPMG, UK'
// // //   }
// // // ];

// // // const invitedSpeakers = [
// // //   {
// // //     image: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
// // //     name: 'Gustavo Alonso',
// // //     title: 'ETH Zurich, Switzerland',
// // //     company: 'Ministry of Energy & Infrastructure, UAE'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
// // //     name: 'Weidong Chen',
// // //     title: 'Shanghai Jiao Tong University, China',
// // //     company: 'Shanghai Jiao Tong University, China'
// // //   }
// // // ];

// // // function SpeakersPage() {
// // //   return (
// // //     <div>
// // //       <Header />
// // //       <SpeakersBanner />
// // //       <SpeakersSection speakers={plenarySpeakers} title="Plenary Speakers" />
// // //       <SpeakersSection speakers={keynoteSpeakers} title="Keynote Speakers" />
// // //       <SpeakersSection speakers={invitedSpeakers} title="Invited Speakers" />
// // //       <SpeakersBottomSection />
// // //     </div>
// // //   );
// // // }

// // // export default SpeakersPage;


// // import React from "react";
// // import Header from "../components/Header";
// // import { Link } from "react-router-dom";
// // import SpeakersBanner from "../components/SpeakersBanner";
// // import SpeakersBottomSection from "../components/SpeakersBottomSection";

// // const speakers = [
// //   {
// //     image: "speakerone.png",
// //     name: "Michael Cafarella",
// //     title: "Massachusetts Institute of Technology, USA",
// //     company: "EDF Renewables",
// //   },
// //   {
// //     image: "speakertwo.png",
// //     name: "Chris Atkenson",
// //     title: "Carnegie Mellon University, USA",
// //     company: "McKinsey",
// //   },
// //   {
// //     image: "speaker3.png",
// //     name: "Yanda Li",
// //     title: "Tsinghua University, China",
// //     company: "McKinsey",
// //   },
// //   {
// //     image: "speaker04.png",
// //     name: "Samuel Coogan",
// //     title: "Georgia institute of Technology, USA",
// //     company: "Deloitte",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_v41z06v41z06v41z.png",
// //     name: "Leonidas Guibas",
// //     title: "Stanford University, USA",
// //     company: "KPMG",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_19cov119cov119co.png",
// //     name: "Jeannette Bohg",
// //     title: "Stanford University, USA",
// //     company: "KPMG, UK",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_n1hse1n1hse1n1hs.png",
// //     name: "Gustavo Alonso",
// //     title: "ETH Zurich, Switzerland",
// //     company: "Ministry of Energy & Infrastructure, UAE",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_cksm8zcksm8zcksm.png",
// //     name: "Weidong Chen",
// //     title: "Shanghai Jiao Tong University, China",
// //     company: "Shanghai Jiao Tong University, China",
// //   },
// // ];

// // const committee = [
// //   { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
// //   { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
// //   { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
// //   { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
// // ];

// // function SpeakersPage() {
// //   return (
// //     <div>
// //       <Header />

// //       {/* Hero Section */}
// //       <SpeakersBanner />

// //       {/* Speakers + Committee Grid */}
// //       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

// //         {/* Left: Speakers (auto grid) */}
// //         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
// //           {speakers.map((speaker, i) => (
// //             <div key={i} className="text-center">
// //               <img
// //                 src={speaker.image}
// //                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
// //                 alt={speaker.name}
// //               />
// //               <h3 className="font-semibold">{speaker.name}</h3>
// //               <p className="text-sm text-gray-600">{speaker.title}</p>
// //               <p className="text-xs text-gray-500">{speaker.company}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Right: Committee */}
// //         <div className="grid grid-cols-2 gap-6 border-l pl-6">
// //           {committee.map((member, i) => (
// //             <div
// //               key={i}
// //               className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition text-center"
// //             >
// //               <img
// //                 src={member.image}
// //                 className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
// //                 alt={member.name}
// //               />
// //               <h4 className="font-bold text-sm">{member.name}</h4>
// //               <p className="text-xs text-gray-600">{member.university}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <SpeakersBottomSection />
// //     </div>
// //   );
// // }

// // export default SpeakersPage;



// import React from "react";
// import Header from "../components/Header";
// import { Link } from "react-router-dom";
// import SpeakersBanner from "../components/SpeakersBanner";
// import SpeakersBottomSection from "../components/SpeakersBottomSection";
// import { User } from "lucide-react";
// import EndFooter from "../components/EndFooter";
// import { Helmet } from "react-helmet-async";


// const speakers = [

//   {
//     image: "yanda-li.jpg",
//     alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
//     name: "Prof. Yanda Li",
//     title: "Tsinghua University, China",
//     company: "",
//     type: "Keynote",
//   },

//       {
//     image: "Felisa-Baynes-Ross.jpeg",
//     alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
//     name: "Prof. Felisa Baynes-Ross",
//     title: "Yale University, USA",
//     company: "",
//     type: "Keynote",
//   },
//   {
//     image: "Athanasios-Paschalis.jpeg",
//     alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
//     name: "Prof. Athanasios Paschalis",
//     title: "Professor, Imperial College London, UK",
//     company: "",
//     type: "Keynote",
//   },

//   {
//     image: "michael-cafarella.webp",
//     alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | Massachusetts Institute of Technology, USA",
//     name: "Dr. Michael Cafarella",
//     title: "Massachusetts Institute of Technology, USA",
//     company: "",
//     type: "Speaker",
//   },




//   // {
//   //   image: "jan-rosell.jpeg",
//   //   alt: "Dr. Jan Rosell – Speaker at ICBME 2026 | Shanghai Jiao Tong University, China",
//   //   name: "Dr. f. Jan Rosell",
//   //   title: "Shanghai Jiao Tong University, China",
//   //   company: "",
//   //   type: "Speaker",
//   // },

//   {
//     image: "liu-yurong.jpeg",
//     alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
//     name: "LIU, Yurong",
//     title: "Southeast University, China",
//     company: "",
//     type: "Speaker",
//   },


//   {
//     image: "charles-romain.jpeg",
//     alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
//     name: "Dr. Charles Romain",
//     title: "Imperial College London, UK",
//     company: "",
//     type: "Speaker",
//   },



//   {
//     image: "James-Berger.jpeg",
//     alt: "Dr. James Berger – Keynote Speaker at ICBME 2026 | Yale University, USA",
//     name: "Dr. James Berger",
//     title: "Yale University, USA",
//     company: "",
//     type: "Speaker",
//   },


//     {
//     image: "James-Berger.jpeg",
//     alt: "Dr. James Berger – Keynote Speaker at ICBME 2026 | Yale University, USA",
//     name: "Dr. James Berger",
//     title: "Yale University, USA",
//     company: "",
//     type: "Speaker",
//   },



// ];



// const committee = [
//   { image: "commit1.png", name: "Prof. Yanda Li", university: "Tsinghua University, China" },
//   { image: "commit2.png", name: "Prof. Felisa Baynes-Ross", university: "Yale University, USA" },
//   { image: "commit3.png", name: "Prof. Athanasios Paschalis", university: "Imperial College London, UK" },
//   { image: "commit4.png", name: "Dr. Michael Cafarella", university: "Massachusetts Institute of Technology, USA" },
// ];

// // function SpeakersPage() {
// //   return (
// //     <>

// //           <Helmet>
// //         <meta name="robots" content="noindex, follow" />
// //       </Helmet>

// //     <div>


// //       <Header />

// //       {/* Hero Section */}
// //       {/* <SpeakersBanner /> */}

// //       {/* Speakers + Committee */}
// //       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        

// //         {/* Left: Speakers */}
// //         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
// //           {/* <h1 className="text-3xl font-bold text-gray-800 mb-8 col-span-full">
// //             ICBME 2026 SPEAKERS
// //           </h1> */}

// //             <h2 className="text-3xl font-bold text-[#00488B] mb-6 col-span-full">
// //             {/* ABOUT ICBME 2026  HYBRID EVENT */}
// //             ICBME 2026 SPEAKERS
// //           </h2>
// //           {speakers.map((speaker, i) => (
// //             <div key={i} className="text-center">
// //               <img
// //                 src={speaker.image}
// //                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
// //                 alt={speaker.alt}
// //               />
// //               <h3 className="font-semibold">{speaker.name}</h3>
// //               <p className="text-sm text-gray-600">{speaker.title}</p>
// //               {/* <p className="text-xs text-gray-500">{speaker.company}</p> */}
// //               <p className="text-sm text-[#292e63] font-semibold">{speaker.type}</p>
// //             </div>
// //           ))}
// //           <p className="text-sm text-[#2F2C7C] mt-4 col-span-full text-center">Additional speakers and session details will be announced shortly</p>
// //         </div>

// //         {/* Right: Committee - FIXED LAYOUT */}
// //         <div className="border-l pl-6 flex flex-col gap-6">
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">
// //             Scientific Committee
// //           </h2>

// //           {committee.map((member, i) => (
// //             <div
// //               key={i}
// //               className="flex items-center gap-4 bg-[#2e2b7a] p-4 shadow-md hover:shadow-lg transition"
// //             >
// //               {/* <User className="w-10 h-10 text-white flex-shrink-0" /> */}
// //               <div className=" gap-4 items-center">
// //                 <h4 className="font-bold text-white">{member.name}</h4>
// //                 <p className="text-sm text-white">{member.university}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>






// //       </div>

// //       {/* CTA Section */}
// //       <SpeakersBottomSection />
// //       <EndFooter />
// //     </div>
// //     </>
// //   );
// // }


// function SpeakersPage() {
//   return (
//     <>
//       <Helmet>
//         <meta name="robots" content="noindex, follow" />
//       </Helmet>

//       <div>
//         <Header />

//         {/* ================= SPEAKERS + COMMITTEE ================= */}
//         <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

//           {/* ================= LEFT: SPEAKERS ================= */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-bold text-[#047857] mb-8">
//               ICBME 2026 Speakers
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {speakers.map((speaker, idx) => (
//                 <div
//                   key={idx}
//                   className="flex gap-4 p-5 bg-white border border-[#E5E7EB]
//                   shadow-sm hover:shadow-lg transition rounded-xl"
//                 >
//                   {/* Image */}
//                   <img
//                     src={speaker.image}
//                     alt={speaker.alt}
//                     className="w-28 h-28 object-cover rounded-lg"
//                   />

//                   {/* Content */}
//                   <div className="flex flex-col justify-center">
//                     <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
//                       {speaker.name}
//                     </h3>

//                     <p className="text-xs md:text-sm text-[#64748B] leading-snug">
//                       {speaker.title}
//                     </p>

//                     <span
//                       className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
//                       ${
//                         speaker.type === "Keynote"
//                           ? "bg-[#D1FAE5] text-[#047857]"
//                           : "bg-[#ECFDF5] text-[#1E293B]"
//                       }`}
//                     >
//                       {speaker.type}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <p className="text-sm text-[#475569] mt-8 text-center">
//               Additional speakers and session details will be announced shortly.
//             </p>
//           </div>

//           {/* ================= RIGHT: SCIENTIFIC COMMITTEE ================= */}
//           <div className="border-l pl-8">
//             <h3 className="text-xl font-bold text-[#1E293B] mb-6">
//               Scientific Committee
//             </h3>

//             <div className="space-y-4">
//               {committee.map((member, i) => (
//                 <div
//                   key={i}
//                   className="p-4 rounded-lg bg-[#ECFDF5] border border-[#D1FAE5]"
//                 >
//                   <h4 className="font-semibold text-[#047857]">
//                     {member.name}
//                   </h4>
//                   <p className="text-sm text-[#475569]">
//                     {member.university}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* CTA + Footer */}
//         <SpeakersBottomSection />
//         <EndFooter />
//       </div>
//     </>
//   );
// }


// export default SpeakersPage;








import React from "react";
import Header from "../components/Header";
import SpeakersBottomSection from "../components/SpeakersBottomSection";
import EndFooter from "../components/EndFooter";
import { Helmet } from "react-helmet-async";
import { useConference } from "../contexts/ConferenceContext";

/* ================= TYPES ================= */

interface Speaker {
  id: number;
  name: string;
  university: string;
  imagePath: string;
  speakerType: "Keynote" | "Speaker";
  orderIndex: number;
}

interface CommitteeMember {
  id: number;
  name: string;
  university: string;
  orderIndex: number;
}

/* ================= COMPONENT ================= */

function SpeakersPage() {
  const { data, loading, error } = useConference();

  const speakers = data?.speakers || [];
  const committee = data?.committee || [];

  if (loading) {
    return (
      <div className="text-center py-24 text-gray-500">
        Loading speakers & committee...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24 text-red-500">
        Error loading data: {error}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div>
        <Header />

        {/* ================= SPEAKERS + COMMITTEE ================= */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

          {/* ================= LEFT: SPEAKERS ================= */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#047857] mb-8">
              ICBME 2026 Speakers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="flex gap-4 p-5 bg-white border border-[#E5E7EB]
                  shadow-sm hover:shadow-lg transition rounded-xl"
                >
                  {/* Image */}
                  <img
                    src={speaker.imagePath}
                    alt={`${speaker.name} – ${speaker.university}`}
                    className="w-28 h-28 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/150";
                    }}
                  />

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
                      {speaker.name}
                    </h3>

                    <p className="text-xs md:text-sm text-[#64748B] leading-snug">
                      {speaker.university}
                    </p>

                    <span
                      className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
                      ${
                        speaker.speakerType === "Keynote"
                          ? "bg-[#D1FAE5] text-[#047857]"
                          : "bg-[#ECFDF5] text-[#1E293B]"
                      }`}
                    >
                      {speaker.speakerType}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#475569] mt-8 text-center">
              Additional speakers and session details will be announced shortly.
            </p>
          </div>

          {/* ================= RIGHT: SCIENTIFIC COMMITTEE ================= */}
          <div className="border-l pl-8">
            <h3 className="text-xl font-bold text-[#1E293B] mb-6">
              Scientific Committee
            </h3>

            <div className="space-y-4">
              {committee.slice(0, 4).map((member) => (
                <div
                  key={member.id}
                  className="p-4 bg-[#ECFDF5] border border-[#D1FAE5]"
                >
                  <h4 className="font-semibold text-[#047857]">
                    {member.name}
                  </h4>
                  <p className="text-sm text-[#475569]">
                    {member.university}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA + Footer */}
        <SpeakersBottomSection />
        <EndFooter />
      </div>
    </>
  );
}

export default SpeakersPage;
