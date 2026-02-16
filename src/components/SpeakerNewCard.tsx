// import React from "react";

// interface SpeakerNewCardProps {
//   image: string;
//   name: string;
//   role: string;
//   company: string;
//   companyLogo?: string; // optional image logo
// }

// const SpeakerNewCard: React.FC<SpeakerNewCardProps> = ({
//   image,
//   name,
//   role,
//   company,
//   companyLogo,
// }) => {
//   return (
//     <div className="w-[240px] bg-white rounded-xl flex flex-col items-center text-center">
      
//       {/* Image Wrapper */}
//       <div className="relative mt-6">
//         {/* Dotted background */}
//         <div
//           className="
//             absolute -top-6 -left-6 w-32 h-32
//             bg-[radial-gradient(#c7b9ff_1px,transparent_1px)]
//             bg-[length:8px_8px]
//             rounded-full
//           "
//         />

//         {/* Lavender circle */}
//         <div className="w-32 h-32 rounded-full bg-[#d8ccff] flex items-center justify-center relative">
//           <img
//             src={image}
//             alt={name}
//             className="w-28 h-28 rounded-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Text */}
//       <div className="mt-5 px-4">
//         <h3 className="text-[#3b2f7f] font-semibold text-base">
//           {name},{" "}
//           <span className="font-normal text-[#6b7280]">
//             {role}
//           </span>
//         </h3>
//       </div>

//       {/* Company */}
//       <div className="mt-4 mb-6">
//         {companyLogo ? (
//           <img
//             src={companyLogo}
//             alt={company}
//             className="h-6 mx-auto object-contain"
//           />
//         ) : (
//           <div className="text-xl font-bold tracking-widest text-[#2f2f2f]">
//             {company}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpeakerNewCard;



import React from "react";
import { Link } from "react-router-dom";

interface SpeakerNewCardProps {
  speakerImageUrl: string;
  speakerName: string;
  speakerType: string;
  universityName: string;
  universityLogo: string;
  slug: string;
}

const SpeakerNewCard: React.FC<SpeakerNewCardProps> = ({
  speakerImageUrl,
  speakerName,
  speakerType,
  universityName,
  universityLogo,
  slug,
}) => {
  return (
    <Link to={`/speakers/${slug}`} className="block">
      <div className="w-[240px] rounded-xl flex flex-col items-center text-center">
      
      {/* Image Section */}
      <div className="relative mt-6">
        {/* Dotted Pattern */}
        <div
          className="
            absolute -top-6 -left-6
            w-32 h-32
            bg-[radial-gradient(#b8b5ff_1px,transparent_1px)]
            bg-[length:8px_8px]
            
          "
        />

        {/* Purple Circle */}
        <div className="w-32 h-32 rounded-full bg-[#d9d4ff] flex items-center justify-center relative">
          <img
            src={speakerImageUrl}
            alt={speakerName}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        {/* Name */}
<div className="mt-3 px-4">
  <h3 className="text-[#0f172a] font-semibold text-[15px] leading-tight text-start">
    {speakerName}
  </h3>

  <p className="mt-1 text-[14px] text-gray-500 text-start">
    {universityName}
  </p>

  <p className="mt-0 text-[14px] font-semibold text-[#004E5A] text-start">
    {speakerType}
  </p>
</div>

      </div>

      {/* Name */}
    

      {/* University Logo */}
      {/* <div className="mt-4 mb-2">
        <img
          src={universityLogo}
          alt={universityName}
          className="h-7 mx-auto object-contain"
        />
      </div> */}

      {/* University Name */}
     
    </div>
    </Link>
  );
};

export default SpeakerNewCard;
