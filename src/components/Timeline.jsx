import React from 'react'
import me from './../assets/me.jpg'
import { FaFacebook } from 'react-icons/fa'
import { useMemo, useEffect, useRef, useState } from 'react';

const experienceData = [
   {
      id: 1,
      company: "Google LLC",
      position: "Senior Software Engineer",
      time: "2023 - Present",
      logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-4.99H7v-2h2V7h2v3.01h2v2h-2V17zm4-4h-2v-2h2v2z',
      color: 'bg-red-500', // Changed for contrast
      iconColor: 'text-white'
   },
   {
      id: 2,
      company: "Microsoft Research",
      position: "Lead Data Scientist",
      time: "2020 - 2023",
      logo: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
      color: 'bg-sky-500', // Changed for contrast
      iconColor: 'text-white'
   },
   {
      id: 3,
      company: "Apple Inc.",
      position: "Principal Product Manager",
      time: "2018 - 2020",
      logo: 'M12 2c-3.1 0-5.5 1.5-6.5 4.5-.4 1.3-.3 2.8.2 4.1.6 1.6 1.7 3 3 4.2C9.7 17.5 11 19 12 19s2.3-1.5 3.3-4.2c1.3-1.2 2.4-2.6 3-4.2.5-1.3.6-2.8.2-4.1C17.5 3.5 15.1 2 12 2z',
      color: 'bg-gray-700', // Changed for professional dark look
      iconColor: 'text-white'
   },
   {
      id: 4,
      company: "SpaceX",
      position: "Aerospace Engineer",
      time: "2015 - 2018",
      logo: 'M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      color: 'bg-indigo-600',
      iconColor: 'text-white'
   },
];

const MARQUEE_COUNT = 10; // Number of times to duplicate for seamless effect

// Timeline Item with alternating design
const TimelineItem = ({ data, index }) => {
   const isLeft = index % 2 === 0; // Even index on left (start), odd on right (end)

   // Tailwind classes for alternating layout
   const contentOrder = isLeft ? 'order-1' : 'order-2';
   const iconOrder = isLeft ? 'order-2' : 'order-1';
   const iconMargin = isLeft ? 'ml-4' : 'mr-4';
   const contentAlignment = isLeft ? 'text-right' : 'text-left';

   return (
      // Relative position and z-index ensures items appear above the central line
      <div className={`relative flex justify-center w-full py-8 z-10`}>

         {/* Outer container for horizontal arrangement */}
         <div className={`flex w-11/12 items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>

            {/* Content Box (Text) - 1/2 width to leave space for the line/dot */}
            <div className={`w-1/2 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-2xl border border-gray-100 dark:border-gray-700 ${contentOrder} ${contentAlignment}`}
               style={{ backdropFilter: 'blur(5px)' }}> 
               <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">{data.time}</p>
               <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{data.position}</h3>
               <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{data.company}</p>
            </div>

            {/* Timeline Icon (Dot on the Line) - Fixed size and margin */}
            <div className={`flex-shrink-0 z-20 ${iconOrder} ${iconMargin}`}>
               <div className={`w-10 h-10 ${data.color} rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white dark:ring-gray-900 transition duration-300 hover:scale-110 cursor-pointer`}>
                  <svg className={`w-5 h-5 ${data.iconColor}`} viewBox="0 0 24 24" fill="currentColor">
                     <path d={data.logo} />
                  </svg>
               </div>
            </div>

         </div>
      </div>
   );
};


function Timeline() {

   const [scrollHeight, setScrollHeight] = useState(0);
   const contentRef = useRef(null);

   const duplicatedData = useMemo(() => {
      let combined = [];
      for (let i = 0; i < MARQUEE_COUNT; i++) {
         // Use unique keys for React rendering
         combined = combined.concat(experienceData.map(item => ({ ...item, uniqueId: `${item.id}-${i}` })));
      }
      return combined;
   }, []);

   // Calculate the total height of one set of data to define the animation loop end point
   useEffect(() => {
      // We only need the height of the first block of items (the original data)
      if (contentRef.current) {
         // Get the height of the first set of items (4 items * 1 block)
         const firstSet = Array.from(contentRef.current.children).slice(0, experienceData.length);
         const totalHeight = firstSet.reduce((sum, item) => sum + item.offsetHeight, 0);
         setScrollHeight(totalHeight);
      }
   }, [duplicatedData.length]);


   // The animation translation calculation logic remains the same.
   // We use scrollHeight in pixels for the animation.

   return (
      <>
         <div
            className="relative overflow-hidden bg-gray-200/50 dark:bg-gray-900/50 rounded-2xl h-full w-full"
         >
            {/* Custom CSS for the infinite running effect */}
            {scrollHeight > 0 && (
               <style>{`
              /* Define the animation for infinite vertical scroll (Marquee effect) */
              @keyframes marquee {
                /* Translate by the calculated pixel height of one set of original data */
                0% { transform: translateY(0); }
                100% { transform: translateY(-${scrollHeight}px); }
              }
            `}</style>
            )}

            {/* The content container that scrolls */}
            <div
               ref={contentRef} // Reference to measure content height
               className="absolute top-0 left-0 w-full"
               style={{
                  // Animation time changed to 45s for faster speed
                  animation: scrollHeight > 0 ? 'marquee 30s linear infinite' : 'none',
                  height: 'auto', // Allow content to determine height
               }}
            >
               {/* Central Vertical Line (behind the content) - Height must cover ALL scrolling content */}
               <div
                  className="absolute top-0 left-1/2 -ml-0.5 w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent dark:via-blue-500 z-0 shadow-md"
                  style={{ height: `${scrollHeight * MARQUEE_COUNT}px` }} // Height must cover ALL duplicated data
               ></div>

               {/* Render all duplicated data for scrolling */}
               {duplicatedData.map((data, index) => (
                  <TimelineItem key={data.uniqueId} data={data} index={index} />
               ))}
            </div>
         </div>
      </>
   )
}

export default Timeline