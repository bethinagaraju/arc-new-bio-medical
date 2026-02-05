

// // import { useState, useEffect } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // interface Sponsor {
// //   id: number;
// //   name: string;
// //   type: string;
// //   conferencecode: string;
// //   imagePath: string;
// // }

// // const CompanyCarousel = () => {
// //   const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);

// //   useEffect(() => {
// //     fetch('https://backendconf.roboticsaisummit.com/api/robotics/sponsors/by-conferencecode/biomedical')
// //       .then(res => res.json())
// //       .then((data: Sponsor[]) => {
// //         const mappedLogos = data.map((item: Sponsor) => ({
// //           src: item.imagePath,
// //           alt: `${item.name} logo - Partner of Biomedical Conference`
// //         }));
// //         setLogos(mappedLogos);
// //       })
// //       .catch(err => console.error('Error fetching sponsors:', err));
// //   }, []);
// //   const settings = {
// //     infinite: true,
// //     speed: 3000,
// //     slidesToShow: 6,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 0,
// //     cssEase: "linear",
// //     arrows: false,
// //     pauseOnHover: false,
// //     responsive: [
// //       {
// //         breakpoint: 1280, // Large screens
// //         settings: {
// //           slidesToShow: 5,
// //         },
// //       },
// //       {
// //         breakpoint: 1024, // Laptops
// //         settings: {
// //           slidesToShow: 4,
// //         },
// //       },
// //       {
// //         breakpoint: 768, // Tablets
// //         settings: {
// //           slidesToShow: 3,
// //         },
// //       },
// //       {
// //         breakpoint: 480, // Mobile
// //         settings: {
// //           slidesToShow: 2,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <section className="my-10 px-4 md:px-10 mb-0" aria-label="Partner Institutions">
// //       <h2
// //         className="text-center text-2xl md:text-3xl font-bold mb-2"
// //         style={{ fontFamily: "'Manrope', sans-serif", color: "#0B5ED7" }}
// //       >
// //         PARTNER INSTITUTIONS & SPONSORS
// //       </h2>

// //       <Slider {...settings} className="partner-slider">
// //         {logos.map((logo, index) => (
// //           <div key={index} className="px-4 md:px-4 outline-none">
// //             <div className="flex items-center justify-center h-36 w-48 mx-auto p-4 px-6">
// //               <img
// //                 src={logo.src}
// //                 alt={logo.alt}
// //                 className="object-contain w-full h-full"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </section>
// //   );
// // };

// // export default CompanyCarousel;



// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useConference } from "../contexts/ConferenceContext";

// interface Sponsor {
//   id: number;
//   name: string;
//   type: string;
//   conferencecode: string;
//   imagePath: string;
// }

// const CompanyCarousel = () => {
//   const { data, loading, error } = useConference();

//   const logos = data?.sponsors.map((item) => ({
//     src: item.imagePath,
//     alt: `${item.name} logo - Partner of Biomedical Conference`,
//   })) || [];

//   const settings = {
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     arrows: false,
//     pauseOnHover: false,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 5 } },
//       { breakpoint: 1024, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <section
//       className="my-10 px-4 md:px-10"
//       aria-label="Partner Institutions"
//     >
//       <h2
//         className="text-center text-2xl md:text-3xl font-bold mb-6 text-blue-600"
//         style={{ fontFamily: "'Manrope', sans-serif" }}
//       >
//         PARTNER INSTITUTIONS & SPONSORS
//       </h2>

//       {loading ? (
//         <div className="flex justify-center items-center py-12">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <span className="ml-3 text-slate-600">Loading sponsors...</span>
//         </div>
//       ) : error ? (
//         <div className="flex justify-center items-center py-12">
//           <span className="text-red-600">Error loading sponsors: {error}</span>
//         </div>
//       ) : logos.length === 0 ? (
//         <div className="flex justify-center items-center py-12">
//           <span className="text-slate-600">No sponsors available</span>
//         </div>
//       ) : (
//         <Slider {...settings}>
//           {logos.map((logo, index) => (
//             <div key={index} className="outline-none">
//               <div className="mx-auto flex h-[120px] w-[180px] items-center justify-center rounded-lg bg-white transition-transform duration-300 hover:scale-105">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   loading="lazy"
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </section>
//   );
// };

// export default CompanyCarousel;








import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const logos = [
  { src: "purdue-university.png", alt: "Purdue University logo - Partner of AIMLR 2026" },
  { src: "shanghai-jiao-tong-university.webp", alt: "Shanghai Jiao Tong University logo - Partner of AIMLR 2026" },
  { src: "princeton-university.webp", alt: "Princeton University logo - Partner of AIMLR 2026" },
  { src: "university-of-milan.webp", alt: "University of Milan logo - Partner of AIMLR 2026" },
  { src: "university-of-electronic-science-technology-china.webp", alt: "University of Electronic Science and Technology of China logo - Partner of AIMLR 2026" },
  { src: "copenhagen-university.webp", alt: "University of Copenhagen logo - Partner of AIMLR 2026" },
  { src: "penn-state-university.webp", alt: "Pennsylvania State University logo - Partner of AIMLR 2026" },
  { src: "san-jose-state-university.webp", alt: "San José State University logo - Partner of AIMLR 2026" },
  { src: "hochschule-kempten-university-of-applied-sciences.webp", alt: "Kempten University of Applied Sciences logo" },
];


const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="my-10 px-4 md:px-10 mb-0" aria-label="Partner Institutions">
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-2"
        style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
      >
        PARTNER INSTITUTIONS & SPONSORS
      </h2>

      <Slider {...settings} className="partner-slider">
        {logos.map((logo, index) => (
          <div key={index} className="px-4 md:px-4 outline-none">
            <div className="flex items-center justify-center h-36 w-48 mx-auto p-4 px-6">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CompanyCarousel;