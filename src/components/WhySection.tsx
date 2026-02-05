// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   Monitor,
// // // // // // // // // // //   Globe,
// // // // // // // // // // //   Paintbrush,
// // // // // // // // // // //   Smartphone,
// // // // // // // // // // //   Pencil,
// // // // // // // // // // //   Server,
// // // // // // // // // // // } from "lucide-react";

// // // // // // // // // // // const services = [
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "01",
// // // // // // // // // // //     title: "WEBSITE DESIGN &\nDEVELOPMENT",
// // // // // // // // // // //     icon: Monitor,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "02",
// // // // // // // // // // //     title: "WEB APPLICATIONS",
// // // // // // // // // // //     icon: Globe,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "03",
// // // // // // // // // // //     title: "UI/UX\nDESIGNING",
// // // // // // // // // // //     icon: Paintbrush,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "04",
// // // // // // // // // // //     title: "APP\nDEVELOPMENT",
// // // // // // // // // // //     icon: Smartphone,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "05",
// // // // // // // // // // //     title: "CONTENT\nWRITING",
// // // // // // // // // // //     icon: Pencil,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     id: "06",
// // // // // // // // // // //     title: "WEB\nHOSTING",
// // // // // // // // // // //     icon: Server,
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // export default function WhySection() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="relative bg-[#14181D] text-white py-24 overflow-hidden">

// // // // // // // // // // //       {/* Background Pattern Overlay */}
// // // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f242b_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />

// // // // // // // // // // //       <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

// // // // // // // // // // //         {/* ================= LEFT CONTENT ================= */}
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
// // // // // // // // // // //             WE SHAPE THE PERFECT <br />
// // // // // // // // // // //             SOLUTIONS<span className="text-[#FFB020]">.</span>
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <p className="mt-6 text-sm tracking-[0.2em] text-gray-300 uppercase max-w-md">
// // // // // // // // // // //             We provide the best solutions in the modern era
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* ================= RIGHT GRID ================= */}
// // // // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // // // // // // // // // //           {services.map(({ id, title, icon: Icon }) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               key={id}
// // // // // // // // // // //               className="
// // // // // // // // // // //                 relative
// // // // // // // // // // //                 bg-[#181D23]
// // // // // // // // // // //                 rounded-xl
// // // // // // // // // // //                 p-8
// // // // // // // // // // //                 h-[210px]
// // // // // // // // // // //                 flex flex-col justify-between
// // // // // // // // // // //                 hover:bg-[#1d232b]
// // // // // // // // // // //                 transition
// // // // // // // // // // //               "
// // // // // // // // // // //             >
// // // // // // // // // // //               {/* Number watermark */}
// // // // // // // // // // //               <span className="absolute top-6 left-6 text-6xl font-extrabold text-white/5">
// // // // // // // // // // //                 {id}
// // // // // // // // // // //               </span>

// // // // // // // // // // //               {/* Icon */}
// // // // // // // // // // //               <Icon className="w-12 h-12 text-[#FFB020]" strokeWidth={1.6} />

// // // // // // // // // // //               {/* Title */}
// // // // // // // // // // //               <h3 className="mt-6 whitespace-pre-line font-extrabold tracking-wide text-sm leading-relaxed">
// // // // // // // // // // //                 {title}
// // // // // // // // // // //               </h3>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // }










// // // // // // // // // // import React from "react";
// // // // // // // // // // import {
// // // // // // // // // //   Monitor,
// // // // // // // // // //   Globe,
// // // // // // // // // //   Paintbrush,
// // // // // // // // // //   Smartphone,
// // // // // // // // // //   Pencil,
// // // // // // // // // //   Server,
// // // // // // // // // // } from "lucide-react";

// // // // // // // // // // const services = [
// // // // // // // // // //   { id: "01", title: "WEBSITE DESIGN &\nDEVELOPMENT", icon: Monitor },
// // // // // // // // // //   { id: "02", title: "WEB APPLICATIONS", icon: Globe },
// // // // // // // // // //   { id: "03", title: "UI/UX\nDESIGNING", icon: Paintbrush },
// // // // // // // // // //   { id: "04", title: "APP\nDEVELOPMENT", icon: Smartphone },
// // // // // // // // // //   { id: "05", title: "CONTENT\nWRITING", icon: Pencil },
// // // // // // // // // //   { id: "06", title: "WEB\nHOSTING", icon: Server },
// // // // // // // // // // ];

// // // // // // // // // // export default function WhySection() {
// // // // // // // // // //   return (
// // // // // // // // // //     <section className="relative bg-[#0F1419] text-white py-28 overflow-hidden">

// // // // // // // // // //       {/* 🔥 TOPOGRAPHY BACKGROUND */}
// // // // // // // // // //       <div className="absolute inset-0 bg-[url('/topography.svg')] bg-cover bg-center opacity-10" />
// // // // // // // // // //       <div className="absolute inset-0 bg-[#0F1419]/90" />

// // // // // // // // // //       <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

// // // // // // // // // //         {/* ================= LEFT CONTENT ================= */}
// // // // // // // // // //         <div>
// // // // // // // // // //           <h2 className="text-5xl font-extrabold leading-tight">
// // // // // // // // // //             WE SHAPE THE PERFECT <br />
// // // // // // // // // //             SOLUTIONS<span className="text-[#FFB020]">.</span>
// // // // // // // // // //           </h2>

// // // // // // // // // //           <p className="mt-6 text-xs tracking-[0.3em] text-gray-300 uppercase max-w-md">
// // // // // // // // // //             We provide the best solutions in the modern era
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ================= RIGHT GRID ================= */}
// // // // // // // // // //         <div className="grid grid-cols-2 gap-8 translate-y-10">
// // // // // // // // // //           {services.map(({ id, title, icon: Icon }) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={id}
// // // // // // // // // //               className="
// // // // // // // // // //                 relative
// // // // // // // // // //                 bg-[#161B22]
// // // // // // // // // //                 rounded-xl
// // // // // // // // // //                 p-10
// // // // // // // // // //                 h-[230px]
// // // // // // // // // //                 flex flex-col justify-between
// // // // // // // // // //                 shadow-lg
// // // // // // // // // //               "
// // // // // // // // // //             >
// // // // // // // // // //               {/* Big faded number */}
// // // // // // // // // //               <span className="absolute top-6 left-6 text-6xl font-extrabold text-white/5">
// // // // // // // // // //                 {id}
// // // // // // // // // //               </span>

// // // // // // // // // //               {/* Icon */}
// // // // // // // // // //               <Icon
// // // // // // // // // //                 className="w-12 h-12 text-[#FFB020]"
// // // // // // // // // //                 strokeWidth={1.5}
// // // // // // // // // //               />

// // // // // // // // // //               {/* Title */}
// // // // // // // // // //               <h3 className="whitespace-pre-line text-sm font-extrabold tracking-wide leading-relaxed">
// // // // // // // // // //                 {title}
// // // // // // // // // //               </h3>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // }











// // // // // // // // // import React from "react";
// // // // // // // // // import {
// // // // // // // // //   Monitor,
// // // // // // // // //   Globe,
// // // // // // // // //   Paintbrush,
// // // // // // // // //   Smartphone,
// // // // // // // // //   Pencil,
// // // // // // // // //   Server,
// // // // // // // // // } from "lucide-react";

// // // // // // // // // export default function WhySection() {
// // // // // // // // //   return (
// // // // // // // // //     <section className="relative bg-[#0F1419] text-white py-28 overflow-hidden">

// // // // // // // // //       {/* 🔥 Topography Background */}
// // // // // // // // //       <div className="absolute inset-0 bg-[url('/topography.svg')] bg-cover bg-center opacity-10" />
// // // // // // // // //       <div className="absolute inset-0 bg-[#0F1419]/90" />

// // // // // // // // //       <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

// // // // // // // // //         {/* ================= LEFT CONTENT ================= */}
// // // // // // // // //         <div>
// // // // // // // // //           <h2 className="text-5xl font-extrabold leading-tight">
// // // // // // // // //             WE SHAPE THE PERFECT <br />
// // // // // // // // //             SOLUTIONS<span className="text-[#FFB020]">.</span>
// // // // // // // // //           </h2>

// // // // // // // // //           <p className="mt-6 text-xs tracking-[0.3em] text-gray-300 uppercase max-w-md">
// // // // // // // // //             We provide the best solutions in the modern era
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ================= RIGHT SIDE ================= */}
// // // // // // // // //         <div className="space-y-10">

// // // // // // // // //           {/* -------- TOP ROW (2 CARDS) -------- */}
// // // // // // // // //           <div className="grid grid-cols-2 gap-8">
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="01"
// // // // // // // // //               icon={Monitor}
// // // // // // // // //               title="WEBSITE DESIGN &\nDEVELOPMENT"
// // // // // // // // //             />
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="02"
// // // // // // // // //               icon={Globe}
// // // // // // // // //               title="WEB APPLICATIONS"
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* -------- BOTTOM ROW (4 CARDS) -------- */}
// // // // // // // // //           <div className="grid grid-cols-2 gap-8">
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="03"
// // // // // // // // //               icon={Paintbrush}
// // // // // // // // //               title="UI/UX\nDESIGNING"
// // // // // // // // //             />
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="04"
// // // // // // // // //               icon={Smartphone}
// // // // // // // // //               title="APP\nDEVELOPMENT"
// // // // // // // // //             />
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="05"
// // // // // // // // //               icon={Pencil}
// // // // // // // // //               title="CONTENT\nWRITING"
// // // // // // // // //             />
// // // // // // // // //             <ServiceCard
// // // // // // // // //               number="06"
// // // // // // // // //               icon={Server}
// // // // // // // // //               title="WEB\nHOSTING"
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ================= CARD COMPONENT ================= */

// // // // // // // // // const ServiceCard = ({ number, icon: Icon, title }) => (
// // // // // // // // //   <div
// // // // // // // // //     className="
// // // // // // // // //       relative
// // // // // // // // //       bg-[#161B22]
// // // // // // // // //       rounded-xl
// // // // // // // // //       p-10
// // // // // // // // //       h-[230px]
// // // // // // // // //       flex flex-col justify-between
// // // // // // // // //       shadow-lg
// // // // // // // // //     "
// // // // // // // // //   >
// // // // // // // // //     {/* Watermark Number */}
// // // // // // // // //     <span className="absolute top-6 left-6 text-6xl font-extrabold text-white/5">
// // // // // // // // //       {number}
// // // // // // // // //     </span>

// // // // // // // // //     {/* Icon */}
// // // // // // // // //     <Icon className="w-12 h-12 text-[#FFB020]" strokeWidth={1.5} />

// // // // // // // // //     {/* Title */}
// // // // // // // // //     <h3 className="whitespace-pre-line text-sm font-extrabold tracking-wide leading-relaxed">
// // // // // // // // //       {title}
// // // // // // // // //     </h3>
// // // // // // // // //   </div>
// // // // // // // // // );




// // // // // // // // import React from "react";
// // // // // // // // import {
// // // // // // // //   Monitor,
// // // // // // // //   Globe,
// // // // // // // //   Paintbrush,
// // // // // // // //   Smartphone,
// // // // // // // //   Pencil,
// // // // // // // //   Server,
// // // // // // // // } from "lucide-react";

// // // // // // // // export default function WhySection() {
// // // // // // // //   return (
// // // // // // // //     <section className="relative bg-[#1a1d23] text-white py-20 overflow-hidden">
// // // // // // // //       {/* Background texture */}
// // // // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // // // //         <div className="absolute inset-0" style={{
// // // // // // // //           backgroundImage: `repeating-linear-gradient(
// // // // // // // //             0deg,
// // // // // // // //             transparent,
// // // // // // // //             transparent 2px,
// // // // // // // //             rgba(255,255,255,0.03) 2px,
// // // // // // // //             rgba(255,255,255,0.03) 4px
// // // // // // // //           )`
// // // // // // // //         }} />
// // // // // // // //       </div>

// // // // // // // //       <div className="relative max-w-7xl mx-auto px-8">
// // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
// // // // // // // //           {/* LEFT CONTENT */}
// // // // // // // //           <div className="pt-8">
// // // // // // // //             <h2 className="text-6xl font-black leading-tight tracking-tight">
// // // // // // // //               WE SHAPE THE PERFECT<br />
// // // // // // // //               SOLUTIONS<span className="text-[#FFA726]">.</span>
// // // // // // // //             </h2>
// // // // // // // //             <p className="mt-8 text-[11px] tracking-[0.25em] text-gray-400 uppercase font-light">
// // // // // // // //               We provide the best solutions in the modern era
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           {/* RIGHT GRID */}
// // // // // // // //           <div className="space-y-6">
// // // // // // // //             {/* Top Row - 2 cards */}
// // // // // // // //             <div className="grid grid-cols-2 gap-6">
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="01"
// // // // // // // //                 icon={Monitor}
// // // // // // // //                 title={["WEBSITE DESIGN &", "DEVELOPMENT"]}
// // // // // // // //               />
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="02"
// // // // // // // //                 icon={Globe}
// // // // // // // //                 title={["WEB APPLICATIONS"]}
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             {/* Bottom Grid - 4 cards */}
// // // // // // // //             <div className="grid grid-cols-2 gap-6">
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="03"
// // // // // // // //                 icon={Paintbrush}
// // // // // // // //                 title={["UI/UX", "DESIGNING"]}
// // // // // // // //               />
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="04"
// // // // // // // //                 icon={Smartphone}
// // // // // // // //                 title={["APP", "DEVELOPMENT"]}
// // // // // // // //               />
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="05"
// // // // // // // //                 icon={Pencil}
// // // // // // // //                 title={["CONTENT", "WRITING"]}
// // // // // // // //               />
// // // // // // // //               <ServiceCard
// // // // // // // //                 number="06"
// // // // // // // //                 icon={Server}
// // // // // // // //                 title={["WEB", "HOSTING"]}
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* SERVICE CARD COMPONENT */
// // // // // // // // const ServiceCard = ({ number, icon: Icon, title }) => (
// // // // // // // //   <div className="relative bg-[#23262d] rounded-lg p-8 h-[200px] flex flex-col justify-between overflow-hidden group hover:bg-[#2a2d35] transition-colors duration-300">
    
// // // // // // // //     {/* Large watermark number */}
// // // // // // // //     <span className="absolute top-4 left-4 text-[80px] font-black text-white/[0.03] leading-none select-none">
// // // // // // // //       {number}
// // // // // // // //     </span>

// // // // // // // //     {/* Icon */}
// // // // // // // //     <div className="relative z-10">
// // // // // // // //       <Icon className="w-14 h-14 text-[#FFA726]" strokeWidth={1.5} />
// // // // // // // //     </div>

// // // // // // // //     {/* Title */}
// // // // // // // //     <div className="relative z-10">
// // // // // // // //       <h3 className="text-[13px] font-black tracking-[0.08em] leading-relaxed">
// // // // // // // //         {title.map((line, i) => (
// // // // // // // //           <React.Fragment key={i}>
// // // // // // // //             {line}
// // // // // // // //             {i < title.length - 1 && <br />}
// // // // // // // //           </React.Fragment>
// // // // // // // //         ))}
// // // // // // // //       </h3>
// // // // // // // //     </div>
// // // // // // // //   </div>
// // // // // // // // );



// // // // // // // import React from "react";
// // // // // // // import {
// // // // // // //   Monitor,
// // // // // // //   Globe,
// // // // // // //   Paintbrush,
// // // // // // //   Smartphone,
// // // // // // //   Pencil,
// // // // // // //   Server,
// // // // // // // } from "lucide-react";

// // // // // // // export default function WhySection() {
// // // // // // //   return (
// // // // // // //     <section className="relative bg-[#1a1d23] text-white py-20 overflow-hidden">
// // // // // // //       {/* Background texture */}
// // // // // // //       <div className="absolute inset-0 opacity-5">
// // // // // // //         <div className="absolute inset-0" style={{
// // // // // // //           backgroundImage: `repeating-linear-gradient(
// // // // // // //             0deg,
// // // // // // //             transparent,
// // // // // // //             transparent 2px,
// // // // // // //             rgba(255,255,255,0.03) 2px,
// // // // // // //             rgba(255,255,255,0.03) 4px
// // // // // // //           )`
// // // // // // //         }} />
// // // // // // //       </div>

// // // // // // //       <div className="relative max-w-7xl mx-auto px-8">
        
// // // // // // //         {/* Header Section */}
// // // // // // //         <div className="mb-16">
// // // // // // //           <h2 className="text-6xl font-black leading-tight tracking-tight">
// // // // // // //             WE SHAPE THE PERFECT<br />
// // // // // // //             SOLUTIONS<span className="text-[#FFA726]">.</span>
// // // // // // //           </h2>
// // // // // // //           <p className="mt-8 text-[11px] tracking-[0.25em] text-gray-400 uppercase font-light">
// // // // // // //             We provide the best solutions in the modern era
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Grid Structure - Matching Image Layout */}
// // // // // // //         <div className="grid grid-cols-12 gap-6">
          
// // // // // // //           {/* Row 1 */}
// // // // // // //           {/* Large card - spans 5 columns */}
// // // // // // //           <div className="col-span-5">
// // // // // // //             <ServiceCard
// // // // // // //               number="01"
// // // // // // //               icon={Monitor}
// // // // // // //               title={["WEBSITE DESIGN &", "DEVELOPMENT"]}
// // // // // // //               tall={true}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           {/* Medium card - spans 3.5 columns */}
// // // // // // //           <div className="col-span-4">
// // // // // // //             <ServiceCard
// // // // // // //               number="02"
// // // // // // //               icon={Globe}
// // // // // // //               title={["WEB APPLICATIONS"]}
// // // // // // //               tall={true}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           {/* Medium card - spans 3.5 columns */}
// // // // // // //           <div className="col-span-3">
// // // // // // //             <ServiceCard
// // // // // // //               number="03"
// // // // // // //               icon={Paintbrush}
// // // // // // //               title={["UI/UX", "DESIGNING"]}
// // // // // // //               tall={true}
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* Row 2 */}
// // // // // // //           {/* Small card */}
// // // // // // //           <div className="col-span-3">
// // // // // // //             <ServiceCard
// // // // // // //               number="04"
// // // // // // //               icon={Smartphone}
// // // // // // //               title={["APP", "DEVELOPMENT"]}
// // // // // // //               tall={false}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           {/* Small card */}
// // // // // // //           <div className="col-span-3">
// // // // // // //             <ServiceCard
// // // // // // //               number="05"
// // // // // // //               icon={Pencil}
// // // // // // //               title={["CONTENT", "WRITING"]}
// // // // // // //               tall={false}
// // // // // // //             />
// // // // // // //           </div>
          
// // // // // // //           {/* Medium card */}
// // // // // // //           <div className="col-span-3">
// // // // // // //             <ServiceCard
// // // // // // //               number="06"
// // // // // // //               icon={Server}
// // // // // // //               title={["WEB", "HOSTING"]}
// // // // // // //               tall={false}
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* Medium card - placeholder or you can add 7th service */}
// // // // // // //           <div className="col-span-3">
// // // // // // //             <ServiceCard
// // // // // // //               number="07"
// // // // // // //               icon={Globe}
// // // // // // //               title={["ADDITIONAL", "SERVICE"]}
// // // // // // //               tall={false}
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* SERVICE CARD COMPONENT */
// // // // // // // const ServiceCard = ({ number, icon: Icon, title, tall = false }) => (
// // // // // // //   <div className={`relative bg-[#23262d] rounded-lg p-8 ${tall ? 'h-[280px]' : 'h-[240px]'} flex flex-col justify-between overflow-hidden group hover:bg-[#2a2d35] transition-colors duration-300`}>
    
// // // // // // //     {/* Large watermark number */}
// // // // // // //     <span className="absolute top-4 left-4 text-[80px] font-black text-white/[0.03] leading-none select-none">
// // // // // // //       {number}
// // // // // // //     </span>

// // // // // // //     {/* Icon */}
// // // // // // //     <div className="relative z-10">
// // // // // // //       <Icon className="w-14 h-14 text-[#FFA726]" strokeWidth={1.5} />
// // // // // // //     </div>

// // // // // // //     {/* Title */}
// // // // // // //     <div className="relative z-10">
// // // // // // //       <h3 className="text-[13px] font-black tracking-[0.08em] leading-relaxed">
// // // // // // //         {title.map((line, i) => (
// // // // // // //           <React.Fragment key={i}>
// // // // // // //             {line}
// // // // // // //             {i < title.length - 1 && <br />}
// // // // // // //           </React.Fragment>
// // // // // // //         ))}
// // // // // // //       </h3>
// // // // // // //     </div>
// // // // // // //   </div>
// // // // // // // );



// // // // // // import React from "react";
// // // // // // import {
// // // // // //   Monitor,
// // // // // //   Globe,
// // // // // //   PenTool, // Better match for 'Paintbrush'/UI Design
// // // // // //   Smartphone,
// // // // // //   Pencil, // Or Edit3
// // // // // //   Server,
// // // // // // } from "lucide-react";

// // // // // // export default function WhySection() {
// // // // // //   return (
// // // // // //     <section className="relative bg-[#111316] text-white py-24 font-sans overflow-hidden">
// // // // // //       {/* Abstract Background Texture (Subtle Topographic lines simulation) */}
// // // // // //       <div 
// // // // // //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// // // // // //         style={{
// // // // // //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
// // // // // //         }}
// // // // // //       />

// // // // // //       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
// // // // // //         {/* 4-Column Grid System */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// // // // // //           {/* Header Section: Spans 2 Columns */}
// // // // // //           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-8 lg:mb-0">
// // // // // //             <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
// // // // // //               WE SHAPE THE PERFECT <br />
// // // // // //               SOLUTIONS<span className="text-[#FFA726]">.</span>
// // // // // //             </h2>
// // // // // //             <p className="mt-6 text-xs md:text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
// // // // // //               We provide the best solutions in the modern era
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* Card 01 */}
// // // // // //           <ServiceCard
// // // // // //             number="01"
// // // // // //             icon={Monitor}
// // // // // //             title="WEBSITE DESIGN & DEVELOPMENT"
// // // // // //           />

// // // // // //           {/* Card 02 */}
// // // // // //           <ServiceCard
// // // // // //             number="02"
// // // // // //             icon={Globe}
// // // // // //             title="WEB APPLICATIONS"
// // // // // //           />

// // // // // //           {/* Card 03 */}
// // // // // //           <ServiceCard
// // // // // //             number="03"
// // // // // //             icon={PenTool}
// // // // // //             title="UI/UX DESIGNING"
// // // // // //           />

// // // // // //           {/* Card 04 */}
// // // // // //           <ServiceCard
// // // // // //             number="04"
// // // // // //             icon={Smartphone}
// // // // // //             title="APP DEVELOPMENT"
// // // // // //           />

// // // // // //           {/* Card 05 */}
// // // // // //           <ServiceCard
// // // // // //             number="05"
// // // // // //             icon={Pencil}
// // // // // //             title="CONTENT WRITING"
// // // // // //           />

// // // // // //           {/* Card 06 */}
// // // // // //           <ServiceCard
// // // // // //             number="06"
// // // // // //             icon={Server}
// // // // // //             title="WEB HOSTING"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // function ServiceCard({ number, icon: Icon, title }) {
// // // // // //   return (
// // // // // //     <div className="group bg-[#16181C] hover:bg-[#1a1d21] border border-white/5 rounded-lg p-8 h-[260px] flex flex-col justify-between transition-all duration-300">
      
// // // // // //       {/* Top Row: Number and Icon */}
// // // // // //       <div className="flex justify-between items-start">
// // // // // //         {/* Number */}
// // // // // //         <span className="text-4xl font-bold text-[#2A2D33] group-hover:text-[#33363d] transition-colors select-none">
// // // // // //           {number}
// // // // // //         </span>
        
// // // // // //         {/* Icon */}
// // // // // //         <Icon 
// // // // // //           className="w-12 h-12 text-[#FFA726]" 
// // // // // //           strokeWidth={1.5}
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Bottom Row: Title */}
// // // // // //       <div>
// // // // // //         <h3 className="text-white font-bold text-sm tracking-wide leading-relaxed uppercase">
// // // // // //           {title.split(" ").map((word, i, arr) => (
// // // // // //              <React.Fragment key={i}>
// // // // // //                {word} {i === 1 && arr.length > 2 ? <br/> : " "}
// // // // // //              </React.Fragment>
// // // // // //           ))}
// // // // // //         </h3>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // import React from "react";
// // // // // import {
// // // // //   Cpu,
// // // // //   Globe,
// // // // //   Mic2,
// // // // //   FileText,
// // // // //   Bot,
// // // // //   Briefcase
// // // // // } from "lucide-react";

// // // // // const features = [
// // // // //   {
// // // // //     icon: Cpu,
// // // // //     title: "Cutting-Edge Research",
// // // // //     description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering.",
// // // // //   },
// // // // //   {
// // // // //     icon: Globe,
// // // // //     title: "Global Networking",
// // // // //     description: "Connect with researchers, faculty members, students, and industry professionals from around the world.",
// // // // //   },
// // // // //   {
// // // // //     icon: Mic2,
// // // // //     title: "World-Class Speakers",
// // // // //     description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications.",
// // // // //   },
// // // // //   {
// // // // //     icon: FileText,
// // // // //     title: "Publication Opportunities",
// // // // //     description: "Present your research through oral or poster sessions and receive official conference recognition.",
// // // // //   },
// // // // //   {
// // // // //     icon: Bot,
// // // // //     title: "Industry & Innovation",
// // // // //     description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics.",
// // // // //   },
// // // // //   {
// // // // //     icon: Briefcase,
// // // // //     title: "Career & Academic Growth",
// // // // //     description: "Strengthen your academic profile, receive peer feedback, and expand your professional network.",
// // // // //   },
// // // // // ];

// // // // // export default function WhySection() {
// // // // //   return (
// // // // //     <section className="relative bg-[#111316] text-white py-24 font-sans overflow-hidden">
// // // // //       {/* Abstract Background Texture */}
// // // // //       <div 
// // // // //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// // // // //         style={{
// // // // //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
// // // // //         }}
// // // // //       />

// // // // //       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// // // // //           {/* Header Section: Spans 2 Columns */}
// // // // //           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-8 lg:mb-0">
// // // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
// // // // //               WHY ATTEND <br />
// // // // //               OUR CONFERENCE<span className="text-[#FFA726]">.</span>
// // // // //             </h2>
// // // // //             <p className="mt-6 text-xs md:text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
// // // // //               Advancing innovation in Biomedical Engineering
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Render Features */}
// // // // //           {features.map((feature, index) => (
// // // // //             <ServiceCard
// // // // //               key={index}
// // // // //               number={`0${index + 1}`}
// // // // //               icon={feature.icon}
// // // // //               title={feature.title}
// // // // //               description={feature.description}
// // // // //             />
// // // // //           ))}

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // function ServiceCard({ number, icon: Icon, title, description }) {
// // // // //   return (
// // // // //     <div className="group bg-[#16181C] hover:bg-[#1a1d21] border border-white/5 rounded-lg p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300">
      
// // // // //       {/* Top Row: Number and Icon */}
// // // // //       <div className="flex justify-between items-start mb-6">
// // // // //         <span className="text-4xl font-bold text-[#2A2D33] group-hover:text-[#33363d] transition-colors select-none">
// // // // //           {number}
// // // // //         </span>
// // // // //         <Icon 
// // // // //           className="w-10 h-10 text-[#FFA726]" 
// // // // //           strokeWidth={1.5}
// // // // //         />
// // // // //       </div>

// // // // //       {/* Bottom Content */}
// // // // //       <div className="flex flex-col gap-3">
// // // // //         <h3 className="text-white font-bold text-sm tracking-wide uppercase leading-relaxed">
// // // // //           {title}
// // // // //         </h3>
// // // // //         <p className="text-gray-400 text-xs leading-5 opacity-80 group-hover:opacity-100 transition-opacity">
// // // // //           {description}
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }













// // // // import React from "react";
// // // // import {
// // // //   Cpu,
// // // //   Globe,
// // // //   Mic2,
// // // //   FileText,
// // // //   Bot,
// // // //   Briefcase
// // // // } from "lucide-react";

// // // // const features = [
// // // //   {
// // // //     icon: Cpu,
// // // //     title: "Cutting-Edge Research",
// // // //     description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering.",
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "Global Networking",
// // // //     description: "Connect with researchers, faculty members, students, and industry professionals from around the world.",
// // // //   },
// // // //   {
// // // //     icon: Mic2,
// // // //     title: "World-Class Speakers",
// // // //     description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "Publication Opportunities",
// // // //     description: "Present your research through oral or poster sessions and receive official conference recognition.",
// // // //   },
// // // //   {
// // // //     icon: Bot,
// // // //     title: "Industry & Innovation",
// // // //     description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics.",
// // // //   },
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "Career & Academic Growth",
// // // //     description: "Strengthen your academic profile, receive peer feedback, and expand your professional network.",
// // // //   },
// // // // ];

// // // // export default function WhySection() {
// // // //   return (
// // // //     <section className="relative bg-[#111316] text-white py-24 font-sans overflow-hidden">
// // // //       {/* Background Pattern */}
// // // //       <div 
// // // //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// // // //         style={{
// // // //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// // // //         }}
// // // //       />

// // // //       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// // // //           {/* Header Section */}
// // // //           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-8 lg:mb-0">
// // // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
// // // //               WHY ATTEND <br />
// // // //               OUR CONFERENCE<span className="text-[#FFA726]">.</span>
// // // //             </h2>
// // // //             <p className="mt-6 text-xs md:text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
// // // //               Advancing innovation in Biomedical Engineering
// // // //             </p>
// // // //           </div>

// // // //           {/* Render Features */}
// // // //           {features.map((feature, index) => (
// // // //             <ServiceCard
// // // //               key={index}
// // // //               icon={feature.icon}
// // // //               title={feature.title}
// // // //               description={feature.description}
// // // //             />
// // // //           ))}

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function ServiceCard({ icon: Icon, title, description }) {
// // // //   return (
// // // //     <div className="group bg-[#16181C] hover:bg-[#1a1d21] border border-white/10 rounded-xl p-8 min-h-[220px] flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
      
// // // //       {/* Top Row: Heading (Left) + Logo (Right) */}
// // // //       <div className="flex justify-between items-start gap-4">
// // // //         {/* Left: Heading Only */}
// // // //         <h3 className="text-white font-bold text-lg leading-tight uppercase max-w-[150px] pt-1">
// // // //           {title}
// // // //         </h3>

// // // //         {/* Right: Logo/Icon Box */}
// // // //         <div className="bg-[#2A2D33] group-hover:bg-[#FFA726] p-3 rounded-lg transition-colors duration-300 flex items-center justify-center shrink-0">
// // // //           <Icon 
// // // //             className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" 
// // // //             strokeWidth={2}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Bottom Row: Description */}
// // // //       <div className="pt-2 border-t border-white/5">
// // // //         <p className="text-gray-400 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
// // // //           {description}
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import React from "react";
// // // import {
// // //   Cpu,
// // //   Globe,
// // //   Mic2,
// // //   FileText,
// // //   Bot,
// // //   Briefcase
// // // } from "lucide-react";

// // // const features = [
// // //   {
// // //     icon: Cpu,
// // //     title: "Cutting-Edge Research",
// // //     description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering.",
// // //   },
// // //   {
// // //     icon: Globe,
// // //     title: "Global Networking",
// // //     description: "Connect with researchers, faculty members, students, and industry professionals from around the world.",
// // //   },
// // //   {
// // //     icon: Mic2,
// // //     title: "World-Class Speakers",
// // //     description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "Publication Opportunities",
// // //     description: "Present your research through oral or poster sessions and receive official conference recognition.",
// // //   },
// // //   {
// // //     icon: Bot,
// // //     title: "Industry & Innovation",
// // //     description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "Career & Academic Growth",
// // //     description: "Strengthen your academic profile, receive peer feedback, and expand your professional network.",
// // //   },
// // // ];

// // // export default function WhySection() {
// // //   return (
// // //     // Updated Background Color to match the Dark Green/Teal from your site footer/hero
// // //     <section className="relative bg-[#022c22] text-white py-24 font-sans overflow-hidden">
      
// // //       {/* Background Pattern - Kept subtle but adjusted opacity */}
// // //       <div 
// // //         className="absolute inset-0 opacity-[0.05] pointer-events-none"
// // //         style={{
// // //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// // //         }}
// // //       />

// // //       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// // //           {/* Header Section */}
// // //           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-8 lg:mb-0">
// // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
// // //               WHY ATTEND <br />
// // //               OUR CONFERENCE<span className="text-[#84cc16]">.</span> {/* Updated Accent Dot */}
// // //             </h2>
// // //             <p className="mt-6 text-xs md:text-sm font-medium tracking-[0.2em] text-gray-300 uppercase">
// // //               Advancing innovation in Biomedical Engineering
// // //             </p>
// // //           </div>

// // //           {/* Render Features */}
// // //           {features.map((feature, index) => (
// // //             <ServiceCard
// // //               key={index}
// // //               icon={feature.icon}
// // //               title={feature.title}
// // //               description={feature.description}
// // //             />
// // //           ))}

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function ServiceCard({ icon: Icon, title, description }) {
// // //   return (
// // //     // Updated Card Background to a rich Forest Green
// // //     <div className="group bg-[#064e3b] hover:bg-[#065f46] border border-white/10 rounded-xl p-8 min-h-[220px] flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1">
      
// // //       {/* Top Row: Heading (Left) + Icon (Right) */}
// // //       <div className="flex justify-between items-start gap-4">
// // //         {/* Left: Heading */}
// // //         <h3 className="text-white font-bold text-lg leading-tight uppercase max-w-[150px] pt-1">
// // //           {title}
// // //         </h3>

// // //         {/* Right: Icon Box - Updated to lighter green background with Lime accent on hover */}
// // //         <div className="bg-[#022c22] group-hover:bg-[#84cc16] p-3 rounded-lg transition-colors duration-300 flex items-center justify-center shrink-0 border border-white/5">
// // //           <Icon 
// // //             className="w-6 h-6 text-[#84cc16] group-hover:text-[#022c22] transition-colors duration-300" 
// // //             strokeWidth={2}
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Bottom Row: Description */}
// // //       <div className="pt-2 border-t border-white/10">
// // //         <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
// // //           {description}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React from "react";
// // import {
// //   Cpu,
// //   Globe,
// //   Mic2,
// //   FileText,
// //   Bot,
// //   Briefcase,
// //   ArrowUpRight
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Cpu,
// //     title: "Cutting-Edge Research",
// //     description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "Global Networking",
// //     description: "Connect with researchers, faculty members, students, and industry professionals from around the world.",
// //   },
// //   {
// //     icon: Mic2,
// //     title: "World-Class Speakers",
// //     description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "Publication Opportunities",
// //     description: "Present your research through oral or poster sessions and receive official conference recognition.",
// //   },
// //   {
// //     icon: Bot,
// //     title: "Industry & Innovation",
// //     description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "Career & Academic Growth",
// //     description: "Strengthen your academic profile, receive peer feedback, and expand your professional network.",
// //   },
// // ];

// // export default function WhySection() {
// //   return (
// //     <section className="bg-[#022c22] text-white py-24 font-sans">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
// //           {/* Header Section */}
// //           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-10 lg:mb-0">
// //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
// //               WHY ATTEND <br />
// //               OUR CONFERENCE<span className="text-[#84cc16]">.</span>
// //             </h2>
// //             <p className="mt-6 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase border-l-2 border-[#84cc16] pl-4">
// //               Advancing innovation in Biomedical Engineering
// //             </p>
// //           </div>

// //           {/* Render Features */}
// //           {features.map((feature, index) => (
// //             <ServiceCard
// //               key={index}
// //               icon={feature.icon}
// //               title={feature.title}
// //               description={feature.description}
// //             />
// //           ))}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ServiceCard({ icon: Icon, title, description }) {
// //   return (
// //     <div className="group relative bg-white/[0.02] border border-white/10 hover:border-[#84cc16]/50 rounded-lg p-8 min-h-[220px] flex flex-col gap-6 transition-all duration-300 hover:bg-white/[0.04]">
      
// //       {/* Top Row: Heading + Icon */}
// //       <div className="flex justify-between items-start gap-4">
// //         <h3 className="text-white font-bold text-lg leading-tight uppercase max-w-[160px]">
// //           {title}
// //         </h3>
        
// //         {/* Icon - Clean floating style */}
// //         <Icon 
// //           className="w-6 h-6 text-[#84cc16] group-hover:scale-110 transition-transform duration-300" 
// //           strokeWidth={1.5}
// //         />
// //       </div>

// //       {/* Bottom Row: Description */}
// //       <div className="mt-auto">
// //         <p className="text-gray-400 text-sm leading-relaxed">
// //           {description}
// //         </p>
// //       </div>

// //       {/* Decorative Hover Element (Optional corner accent) */}
// //       <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //         <ArrowUpRight className="w-4 h-4 text-[#84cc16]" />
// //       </div>
// //     </div>
// //   );
// // }



// import React from "react";
// import { Cpu, Globe, Mic2, FileText, Bot, Briefcase } from "lucide-react";

// const features = [
//   { icon: Cpu, title: "Cutting-Edge Research", description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering." },
//   { icon: Globe, title: "Global Networking", description: "Connect with researchers, faculty members, students, and industry professionals from around the world." },
//   { icon: Mic2, title: "World-Class Speakers", description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications." },
//   { icon: FileText, title: "Publication Opportunities", description: "Present your research through oral or poster sessions and receive official conference recognition." },
//   { icon: Bot, title: "Industry & Innovation", description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics." },
//   { icon: Briefcase, title: "Career & Academic Growth", description: "Strengthen your academic profile, receive peer feedback, and expand your professional network." },
// ];

// export default function WhySection() {
//   return (
//     <section className="bg-[#022c22] text-white py-24 font-sans">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* Header Section */}
//           <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-10 lg:mb-0">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
//               WHY ATTEND <br />
//               OUR CONFERENCE<span className="text-[#84cc16]">.</span>
//             </h2>
//             <p className="mt-6 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase border-l-2 border-[#84cc16] pl-4">
//               Advancing innovation in Biomedical Engineering
//             </p>
//           </div>

//           {/* Render Features */}
//           {features.map((feature, index) => (
//             <ServiceCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ icon: Icon, title, description }) {
//   return (
//     // CHANGE 1: Lighter background and shadow
//     <div className="group relative bg-[#064e3b] border border-[#84cc16]/20 rounded-lg p-8 min-h-[220px] flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#064e3b]/50 hover:-translate-y-1">
      
//       {/* Top Row: Heading + Icon */}
//       <div className="flex justify-between items-start gap-4">
//         <h3 className="text-white font-bold text-lg leading-tight uppercase max-w-[160px]">
//           {title}
//         </h3>
        
//         <Icon 
//           className="w-6 h-6 text-[#84cc16] group-hover:scale-110 transition-transform duration-300" 
//           strokeWidth={1.5}
//         />
//       </div>

//       {/* Bottom Row: Description */}
//       <div className="mt-auto">
//         <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { Cpu, Globe, Mic2, FileText, Bot, Briefcase } from "lucide-react";

const features = [
  { icon: Cpu, title: "Cutting-Edge Research", description: "Explore recent advances, emerging ideas, and practical innovations across Biomedical Engineering." },
  { icon: Globe, title: "Global Networking", description: "Connect with researchers, faculty members, students, and industry professionals from around the world." },
  { icon: Mic2, title: "World-Class Speakers", description: "Gain insights from experienced researchers and industry practitioners sharing real-world applications." },
  { icon: FileText, title: "Publication Opportunities", description: "Present your research through oral or poster sessions and receive official conference recognition." },
  { icon: Bot, title: "Industry & Innovation", description: "Engage with applied research, emerging technologies, and real-world use cases in AI and robotics." },
  { icon: Briefcase, title: "Career & Academic Growth", description: "Strengthen your academic profile, receive peer feedback, and expand your professional network." },
];

export default function WhySection() {
  return (
    <section className="bg-[#022c22] text-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Header Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center pr-8 mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              WHY ATTEND <br />
              OUR CONFERENCE<span className="text-[#84cc16]">.</span>
            </h2>
            <p className="mt-6 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase border-l-2 border-[#84cc16] pl-4">
              Advancing innovation in Biomedical Engineering
            </p>
          </div>

          {/* Render Features */}
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    // CHANGE 2: Gradient background
    <div className="group relative bg-gradient-to-b from-[#064e3b] to-[#022c22] border border-[#84cc16]/20 p-8 min-h-[220px] flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1">
      
      {/* Top Row: Heading + Icon */}
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-white font-bold text-lg leading-tight uppercase max-w-[160px]">
          {title}
        </h3>
        
        <Icon 
          className="w-12 h-12 text-[#84cc16] group-hover:scale-110 transition-transform duration-300" 
          strokeWidth={1.5}
        />
      </div>

      {/* Bottom Row: Description */}
      <div className="mt-auto">
        <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </div>
  );
}