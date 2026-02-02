



// import React from "react";

// function Mixcomponents() {
//   const speakers = [
//     {
//       image: "yanda-li.jpg",
//       alt: "Prof. Yanda Li – Keynote Speaker at ICBME 2026 | Tsinghua University, China",
//       name: "Prof. Yanda Li",
//       title: "Tsinghua University, China",
//       type: "Keynote",
//     },
//     {
//       image: "Felisa-Baynes-Ross.jpeg",
//       alt: "Prof. Felisa Baynes-Ross – Speaker at ICBME 2026 | Yale University, USA",
//       name: "Prof. Felisa Baynes-Ross",
//       title: "Yale University, USA",
//       type: "Keynote",
//     },
//     {
//       image: "Athanasios-Paschalis.jpeg",
//       alt: "Prof. Athanasios Paschalis – Speaker at ICBME 2026 | Imperial College London, UK",
//       name: "Prof. Athanasios Paschalis",
//       title: "Imperial College London, UK",
//       type: "Keynote",
//     },
//     {
//       image: "michael-cafarella.webp",
//       alt: "Dr. Michael Cafarella – Speaker at ICBME 2026 | MIT, USA",
//       name: "Dr. Michael Cafarella",
//       title: "Massachusetts Institute of Technology, USA",
//       type: "Speaker",
//     },
//     {
//       image: "liu-yurong.jpeg",
//       alt: "Yurong Liu – Speaker at ICBME 2026 | Southeast University, China",
//       name: "Yurong Liu",
//       title: "Southeast University, China",
//       type: "Speaker",
//     },
//     {
//       image: "charles-romain.jpeg",
//       alt: "Dr. Charles Romain – Speaker at ICBME 2026 | Imperial College London, UK",
//       name: "Dr. Charles Romain",
//       title: "Imperial College London, UK",
//       type: "Speaker",
//     },
//   ];

//   return (
//     <section
//       id="speakers-section"
//       className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 md:px-10"
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#047857]">
//           ICBME 2026 Speakers
//         </h2>
//         <p className="mt-2 text-[#64748B]">
//           Distinguished keynote and invited speakers from leading global institutions
//         </p>
//       </div>

//       {/* Speaker Cards */}
//       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {speakers.map((speaker, idx) => (
//           <div
//             key={idx}
//             className="flex gap-4 p-5 bg-white border border-[#E5E7EB]
//             shadow-sm hover:shadow-lg transition rounded-xl"
//           >
//             {/* Image */}
//             <img
//               src={speaker.image}
//               alt={speaker.alt}
//               className="w-28 h-28 object-cover rounded-lg"
//             />

//             {/* Content */}
//             <div className="flex flex-col justify-center">
//               <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
//                 {speaker.name}
//               </h3>

//               <p className="text-xs md:text-sm text-[#64748B] leading-snug">
//                 {speaker.title}
//               </p>

//               <span
//                 className={`mt-2 inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full
//                 ${
//                   speaker.type === "Keynote"
//                     ? "bg-[#D1FAE5] text-[#047857]"
//                     : "bg-[#ECFDF5] text-[#1E293B]"
//                 }`}
//               >
//                 {speaker.type}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-10">
//         <a
//           href="/speakers"
//           className="inline-block bg-[#84CC16] hover:bg-[#65A30D]
//           text-[#1E293B] font-bold py-3 px-10 transition rounded-md shadow-md"
//           title="View all speakers at ICBME 2026 Conference"
//           aria-label="View all speakers at ICBME 2026 Conference"
//         >
//           View All Speakers
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Mixcomponents;






import React, { useEffect, useState } from "react";

interface Speaker {
  id: number;
  name: string;
  university: string;
  conferencecode: string;
  imagePath: string;
  speakerType: "Keynote" | "Speaker";
  orderIndex: number;
}

function Mixcomponents() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch(
          "https://backendconf.roboticsaisummit.com/api/speakers/conference/biomedical"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch speakers");
        }

        const data: Speaker[] = await res.json();

        // optional: sort by orderIndex
        data.sort((a, b) => a.orderIndex - b.orderIndex);

        setSpeakers(data);
      } catch (err) {
        setError("Unable to load speakers");
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading speakers...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section
      id="speakers-section"
      className="bg-gradient-to-b from-[#ECFDF5] to-white py-14 px-4 md:px-10"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#047857]">
          ICBME 2026 Speakers
        </h2>
        <p className="mt-2 text-[#64748B]">
          Distinguished keynote and invited speakers from leading global institutions
        </p>
      </div>

      {/* Speaker Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="/speakers"
          className="inline-block bg-[#84CC16] hover:bg-[#65A30D]
          text-[#1E293B] font-bold py-3 px-10 transition rounded-md shadow-md"
        >
          View All Speakers
        </a>
      </div>
    </section>
  );
}

export default Mixcomponents;
