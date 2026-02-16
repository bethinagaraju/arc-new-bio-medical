


// // // import React, { useState, useEffect } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // interface Testimonial {
// // //   id: number;
// // //   name: string;
// // //   title: string;
// // //   location: string;
// // //   image: string;
// // //   message: string;
// // // }


// // // const testimonials: Testimonial[] = [
// // //   {
// // //     id: 1,
// // //     name: "Dr. Aisha Raman",
// // //     title: "Faculty Participant, Previous Edition",
// // //     location: "India",
// // //     image: "aisha-raman.jpeg",
// // //     message:
// // //       "The conference provided a structured platform for presenting research and engaging in constructive technical discussions with participants from different institutions."
// // //   },

// // //   {
// // //     id: 2,
// // //     name: "Miguel Alvarez",
// // //     title: "Research Participant, Previous Edition",
// // //     location: "Spain",
// // //     image: "miguel-alvarez.jpeg",
// // //     message:
// // //       "The sessions were well organized and covered a broad range of topics in Biomedical Engineering."
// // //   },

// // //   {
// // //     id: 3,
// // //     name: "Dr. Hana Sato",
// // //     title: "Poster Presenter, Previous Edition",
// // //     location: "Japan",
// // //     image: "hana-sato.jpeg",
// // //     message:
// // //       "I found the opportunity to present my work and receive feedback from peers to be valuable for improving my research."
// // //   },

// // //   {
// // //     id: 4,
// // //     name: "Jonathan Miller",
// // //     title: "Conference Attendee, Previous Edition",
// // //     location: "USA",
// // //     image: "jonathan-miller.jpeg",
// // //     message:
// // //       "The conference created a professional environment for knowledge exchange and interdisciplinary interaction."
// // //   },

// // //   {
// // //     id: 5,
// // //     name: "Martin Alvarez",
// // //     title: "PhD Scholar in AI & Robotics, University of Manchester",
// // //     location: "UK",
// // //     image: "martin-alvarez.jpeg",
// // //     message:
// // //       "The hybrid format enabled effective participation and interaction with researchers despite geographical limitations."
// // //   },

// // //     {
// // //     id: 6,
// // //     name: "Hasan Yilmaz",
// // //     title: "PhD Scholar in AI & Robotics, University of Aberdeen",
// // //     location: "UK",
// // //     image: "hasan-yilmaz.jpeg",
// // //     message:
// // //       "The discussions and networking opportunities contributed positively to research collaboration and idea sharing."
// // //   }
// // // ];




// // // const Testimonials: React.FC = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isMobile, setIsMobile] = useState(false);

// // //   useEffect(() => {
// // //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// // //     checkMobile();
// // //     window.addEventListener('resize', checkMobile);
// // //     return () => window.removeEventListener('resize', checkMobile);
// // //   }, []);

// // //   // Logic to move the slide window
// // //   const prevSlide = () => {
// // //     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
// // //   };

// // //   const nextSlide = () => {
// // //     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
// // //   };

// // //   // Logic to get the visible testimonials based on screen size
// // //   const getVisibleTestimonials = () => {
// // //     if (isMobile) {
// // //       return [testimonials[currentIndex % testimonials.length]];
// // //     } else {
// // //       const item1 = testimonials[currentIndex % testimonials.length];
// // //       const item2 = testimonials[(currentIndex + 1) % testimonials.length];
// // //       const item3 = testimonials[(currentIndex + 2) % testimonials.length];
// // //       return [item1, item2, item3];
// // //     }
// // //   };

// // //   const visibleItems = getVisibleTestimonials();

// // //   return (
// // //     // Background color matched to the deep blue in your image reference
// // //     <section className="bg-[#0f3453] py-16 px-4">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* Title */}
// // //         <div className="text-center text-white mb-12">
// // //           {/* <h2 className="text-4xl font-bold">Participants Feedback</h2> */}

// // //           <h2 className="text-3xl font-bold text-[#ffffff] mb-4 text-center">
// // //             ICBME 2025 PARTICIPANTS FEEDBACK
// // //           </h2>
// // //         </div>

// // //         <div className="flex items-center justify-center gap-4">
          
// // //           {/* Left Arrow */}
// // //           <button
// // //             onClick={prevSlide}
// // //             className="hidden md:block text-white p-2 hover:bg-white/10 rounded-full transition-colors"
// // //           >
// // //             <ChevronLeft size={40} strokeWidth={2.5} />
// // //           </button>

// // //           {/* Cards Grid */}
// // //           {/* Grid cols 1 on mobile, 3 on Desktop */}
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
// // //             {visibleItems.map((item) => (
// // //               <div 
// // //                 key={`${item.id}-${currentIndex}`} // Unique key to help React render updates
// // //                 className="bg-white p-8 shadow-lg flex flex-col items-center text-center h-full transition-all duration-300"
// // //               >
               
// // //                 <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-sm">
// // //                   <img
// // //                     src={item.image}
// // //                     alt={item.name}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>

// // //                 {/* Message */}
// // //                 <p className="text-gray-600 mb-2 leading-relaxed flex-grow text-[15px]">
// // //                   {item.message}
// // //                 </p>

// // //                 {/* Name & Title */}
// // //                 <div className="mt-0">
// // //                   <h3 className="text-[#0f3453] font-bold text-lg mb-1">
// // //                     {item.name}
// // //                   </h3>
// // //                   <p className="text-gray-500 italic text-sm">
// // //                     {item.title}
// // //                   </p>
// // //                   {/* <p className="text-gray-500 italic text-sm">
// // //                     {item.location}
// // //                   </p> */}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Right Arrow */}
// // //           <button
// // //             onClick={nextSlide}
// // //             className="hidden md:block text-white p-2 hover:bg-white/10 rounded-full transition-colors"
// // //           >
// // //             <ChevronRight size={40} strokeWidth={2.5} />
// // //           </button>
// // //         </div>

// // //         {/* Mobile Navigation Controls (Visible only on small screens) */}
// // //         <div className="flex justify-center gap-8 mt-8 md:hidden">
// // //             <button onClick={prevSlide} className="text-white bg-white/10 p-2 rounded-full">
// // //                 <ChevronLeft size={24} />
// // //             </button>
// // //             <button onClick={nextSlide} className="text-white bg-white/10 p-2 rounded-full">
// // //                 <ChevronRight size={24} />
// // //             </button>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Testimonials;








// // import React, { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// // interface Testimonial {
// //   id: number;
// //   name: string;
// //   title: string;
// //   location: string;
// //   image: string;
// //   message: string;
// //   rating?: number;
// // }

// // const testimonials: Testimonial[] = [
// //   {
// //     id: 1,
// //     name: "Dr. Aisha Raman",
// //     title: "Faculty Participant",
// //     location: "India",
// //     image: "aisha-raman.jpeg",
// //     rating: 5,
// //     message:
// //       "The conference provided a structured platform for presenting research and engaging in constructive technical discussions with participants from different institutions."
// //   },
// //   {
// //     id: 2,
// //     name: "Miguel Alvarez",
// //     title: "Research Participant",
// //     location: "Spain",
// //     image: "miguel-alvarez.jpeg",
// //     rating: 4,
// //     message:
// //       "The sessions were well organized and covered a broad range of topics in Biomedical Engineering."
// //   },
// //   {
// //     id: 3,
// //     name: "Dr. Hana Sato",
// //     title: "Poster Presenter",
// //     location: "Japan",
// //     image: "hana-sato.jpeg",
// //     rating: 5,
// //     message:
// //       "I found the opportunity to present my work and receive feedback from peers to be valuable for improving my research."
// //   },
// //   {
// //     id: 4,
// //     name: "Jonathan Miller",
// //     title: "Conference Attendee",
// //     location: "USA",
// //     image: "jonathan-miller.jpeg",
// //     rating: 5,
// //     message:
// //       "The conference created a professional environment for knowledge exchange and interdisciplinary interaction."
// //   },
// //   {
// //     id: 5,
// //     name: "Martin Alvarez",
// //     title: "PhD Scholar, University of Manchester",
// //     location: "UK",
// //     image: "martin-alvarez.jpeg",
// //     rating: 5,
// //     message:
// //       "The hybrid format enabled effective participation and interaction with researchers despite geographical limitations."
// //   },
// //   {
// //     id: 6,
// //     name: "Hasan Yilmaz",
// //     title: "PhD Scholar, University of Aberdeen",
// //     location: "UK",
// //     image: "hasan-yilmaz.jpeg",
// //     rating: 4,
// //     message:
// //       "The discussions and networking opportunities contributed positively to research collaboration and idea sharing."
// //   }
// // ];

// // const Testimonials: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);
// //     return () => window.removeEventListener("resize", checkMobile);
// //   }, []);

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === 0 ? testimonials.length - 1 : prev - 1
// //     );
// //   };

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === testimonials.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   const visibleItems = isMobile
// //     ? [testimonials[currentIndex]]
// //     : [
// //         testimonials[currentIndex % testimonials.length],
// //         testimonials[(currentIndex + 1) % testimonials.length],
// //         testimonials[(currentIndex + 2) % testimonials.length]
// //       ];

// //   return (
// //     <section className="bg-[#0f3453] py-20 px-4">
// //       <div className="max-w-7xl mx-auto">

// //         {/* Heading */}
// //         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
// //           ICBME Participants Feedback
// //         </h2>

// //         <div className="flex items-center gap-6">
// //           {/* Left Arrow */}
// //           <button
// //             onClick={prevSlide}
// //             className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
// //           >
// //             <ChevronLeft size={36} />
// //           </button>

// //           {/* Cards */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
// //             {visibleItems.map((item) => (
// //               <div
// //                 key={`${item.id}-${currentIndex}`}
// //                 className="relative bg-white rounded-3xl border border-gray-200 p-8 shadow-md hover:shadow-lg transition-all"
// //               >
// //                 {/* Quote icon */}
// //                 <div className="absolute top-6 right-6 text-gray-300 text-6xl font-serif leading-none">
// //                   ”
// //                 </div>

// //                 {/* Stars */}
// //                 <div className="flex gap-1 mb-5">
// //                   {Array.from({ length: 5 }).map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={18}
// //                       className={
// //                         i < (item.rating ?? 5)
// //                           ? "fill-yellow-400 text-yellow-400"
// //                           : "text-gray-300"
// //                       }
// //                     />
// //                   ))}
// //                 </div>

// //                 {/* Message */}
// //                 <p className="text-gray-600 leading-relaxed text-[15.5px] mb-8">
// //                   {item.message}
// //                 </p>

// //                 {/* Footer */}
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-12 h-12 rounded-full overflow-hidden border">
// //                     <img
// //                       src={item.image}
// //                       alt={item.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>

// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">
// //                       {item.name}
// //                     </h4>
// //                     <p className="text-sm text-gray-500">
// //                       {item.title}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Right Arrow */}
// //           <button
// //             onClick={nextSlide}
// //             className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
// //           >
// //             <ChevronRight size={36} />
// //           </button>
// //         </div>

// //         {/* Mobile controls */}
// //         <div className="flex justify-center gap-6 mt-10 md:hidden">
// //           <button onClick={prevSlide} className="text-white bg-white/10 p-3 rounded-full">
// //             <ChevronLeft />
// //           </button>
// //           <button onClick={nextSlide} className="text-white bg-white/10 p-3 rounded-full">
// //             <ChevronRight />
// //           </button>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;





// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   title: string;
//   location: string;
//   image: string;
//   message: string;
//   rating?: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Dr. Aisha Raman",
//     title: "Faculty Participant, Previous Edition",
//     location: "India",
//     image: "aisha-raman.jpeg",
//     rating: 5,
//     message:
//       "The conference provided a structured platform for presenting research and engaging in constructive technical discussions with participants from different institutions."
//   },
//   {
//     id: 2,
//     name: "Miguel Alvarez",
//     title: "Research Participant, Previous Edition",
//     location: "Spain",
//     image: "miguel-alvarez.jpeg",
//     rating: 4,
//     message:
//       "The sessions were well organized and covered a broad range of topics in Biomedical Engineering."
//   },
//   {
//     id: 3,
//     name: "Dr. Hana Sato",
//     title: "Poster Presenter, Previous Edition",
//     location: "Japan",
//     image: "hana-sato.jpeg",
//     rating: 5,
//     message:
//       "I found the opportunity to present my work and receive feedback from peers to be valuable for improving my research."
//   },
//   {
//     id: 4,
//     name: "Jonathan Miller",
//     title: "Conference Attendee, Previous Edition",
//     location: "USA",
//     image: "jonathan-miller.jpeg",
//     rating: 5,
//     message:
//       "The conference created a professional environment for knowledge exchange and interdisciplinary interaction."
//   },
//   {
//     id: 5,
//     name: "Martin Alvarez",
//     title: "PhD Scholar, University of Manchester",
//     location: "UK",
//     image: "martin-alvarez.jpeg",
//     rating: 5,
//     message:
//       "The hybrid format enabled effective participation and interaction with researchers despite geographical limitations."
//   },
//   {
//     id: 6,
//     name: "Hasan Yilmaz",
//     title: "PhD Scholar, University of Aberdeen",
//     location: "UK",
//     image: "hasan-yilmaz.jpeg",
//     rating: 4,
//     message:
//       "The discussions and networking opportunities contributed positively to research collaboration and idea sharing."
//   }
// ];

// const Testimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const visibleItems = isMobile
//     ? [testimonials[currentIndex]]
//     : [
//         testimonials[currentIndex % testimonials.length],
//         testimonials[(currentIndex + 1) % testimonials.length],
//         testimonials[(currentIndex + 2) % testimonials.length]
//       ];

//   return (
//     <section className="bg-[#047857] py-20 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
//           ICBME Participants Feedback
//         </h2>

//         <div className="flex items-center gap-6">

//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
//             aria-label="Previous testimonials"
//           >
//             <ChevronLeft size={36} />
//           </button>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {visibleItems.map((item) => (
//               <div
//                 key={`${item.id}-${currentIndex}`}
//                 className="relative bg-white border border-gray-200
//                 p-8 shadow-md hover:shadow-lg transition-all
//                 flex flex-col h-full"
//               >
//                 {/* Quote */}
//                 <div className="absolute top-6 right-6 text-gray-300 text-6xl font-serif leading-none">
//                   ”
//                 </div>

//                 {/* Stars */}
//                 <div className="flex gap-1 mb-5">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className={
//                         i < (item.rating ?? 5)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                 </div>

//                 {/* Message */}
//                 <p className="text-[#1E293B] leading-relaxed text-[15.5px] mb-6">
//                   {item.message}
//                 </p>

//                 {/* Footer — pinned to bottom */}
//                 <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
//                   <div className="w-12 h-12 rounded-full overflow-hidden border">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div>
//                     <h4 className="font-semibold text-[#1E293B]">
//                       {item.name}
//                     </h4>
//                     <p className="text-sm text-[#1E293B]">
//                       {item.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
//             aria-label="Next testimonials"
//           >
//             <ChevronRight size={36} />
//           </button>
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex justify-center gap-6 mt-10 md:hidden">
//           <button
//             onClick={prevSlide}
//             className="text-white bg-white/10 p-3 rounded-full"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="text-white bg-white/10 p-3 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;














import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useConference } from "../contexts/ConferenceContext";

/* =======================
   Types
======================= */
interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  message: string;
  rating?: number;
}

/* =======================
   Component
======================= */
const Testimonials: React.FC = () => {
  const { data, loading, error } = useConference();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials: Testimonial[] = data?.testimonials.map((item) => ({
    id: item.id,
    name: item.name,
    title: item.university,
    image: item.imagePath,
    message: item.description,
    rating: item.rating,
  })) || [];

  /* =======================
     Responsive Check
  ======================= */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (loading) return <div>Loading testimonials...</div>;
  if (error) return <div>Error loading testimonials: {error}</div>;
  if (!testimonials.length) return null;

  /* =======================
     Slider Logic
  ======================= */
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleItems = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];

  /* =======================
     JSX (UI UNCHANGED)
  ======================= */
  return (
    <section className="bg-[#022C22] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          ICBME Participants Feedback
        </h2>

        <div className="flex items-center gap-6">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {visibleItems.map((item) => (
              <div
                key={`${item.id}-${currentIndex}`}
                className="relative bg-white border border-gray-200
                p-8 shadow-md hover:shadow-lg transition-all
                flex flex-col h-full"
              >
                {/* Quote */}
                <div className="absolute top-6 right-6 text-gray-300 text-6xl font-serif leading-none">
                  ”
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < (item.rating ?? 5)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-[#1E293B] leading-relaxed text-[15.5px] mb-6">
                  {item.message}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1E293B]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#1E293B]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex text-white hover:bg-white/10 p-3 rounded-full transition"
            aria-label="Next testimonials"
          >
            <ChevronRight size={36} />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center gap-6 mt-10 md:hidden">
          <button
            onClick={prevSlide}
            className="text-white bg-white/10 p-3 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white bg-white/10 p-3 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
