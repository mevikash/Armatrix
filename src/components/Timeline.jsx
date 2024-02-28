'use client';
import "./styles.css";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Timeline } from "react-beautiful-horizontal-timeline";

function App() {
  const [labelWidth, setLabelWidth] = useState(140);
  const [amountMove, setAmountMove] = useState(150);
  const [lineColor, setLineColor] = useState("#fff");
  const [darkMode, setDarkMode] = useState(false);
  const [eventTextAlignCenter, setEventTextAlignCenter] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const [arrowsSize, setArrowsSize] = useState(false);

  const myList = [
    {
      date: "July 2019",
      name: "Three roommates start their journey at IIT Kanpur to pursue their undergraduate degree",
    },
    {
      date: "March 2023",
      name: "Decision to start a robotics company is made and ideation stage begins",
    },
    {
      date: "Nov 2023",
      name: "Received Gradcapital Atomic Fellowship",
    },
    {
      date: "03 Jan 2024",
      name: "Company Incorporated",
    },
    {
      date: "10 Jan 2024",
      name: "Collaboration with Space Dynamics Lab, IIT Kanpur starts on the TIH Foundation - IIT Bombay funded Project",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <section className=" xl:h-[950px] lg:h-[902px] sm:h-[755px] md:h-[810px] bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
        <div className="pixel timeline-wrapper overflow-x-scroll px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex text-white justify-center items-center gap-10 py-20">
            <motion.div
              initial='hidden'
              whileInView='show'
              className='text-4xl xl:text-6xl sm:text-6sm font-bold mb-0'
            >
              Timeline
            </motion.div>
          </div>
        </div>
        <div className="timeline-wrapper overflow-x-scroll px-4 sm:px-0 md:px-0 lg:px-0 xl:px-0">
          <div className="pixel timeline-wrapper overflow-x-scroll">
            <div className="flex text-white justify-center items-center gap-10 py-20">
              <motion.div
                initial='hidden'
                whileInView='show'
                className='xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold mb-0'
              >
                <Timeline
                  myList={myList}
                  labelWidth={labelWidth}
                  amountMove={amountMove}
                  onClick={() => console.log("click")}
                  lineColor={lineColor}
                  darkMode={darkMode}
                  eventTextAlignCenter={eventTextAlignCenter}
                  showSlider={showSlider}
                  arrowsSize={arrowsSize}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useState, useRef } from 'react';
// import { RiArrowLeftDoubleFill } from "react-icons/ri";
// import { RiArrowRightDoubleFill } from "react-icons/ri";

// const Timeline = () => {
//     const [showTimeline, setShowTimeline] = useState(false);
//     const timelineContainerRef = useRef(null);

//     const toggleTimeline = () => {
//         setShowTimeline(!showTimeline);
//     };

//     const handleScroll = (scrollOffset) => {
//         if (timelineContainerRef.current) {
//             timelineContainerRef.current.scrollLeft += scrollOffset;
//         }
//     };

//     return (
//         <section className="xl:h-[1100px] lg:h-[1200px] md:h-[1320px] sm:h-[1540px] bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
// <div className="pixel timeline-wrapper overflow-x-scroll">

//             <div className=" flex text-white justify-center items-center gap-10 py-20">
//                 <motion.div
//                     initial='hidden'
//                     whileInView='show'
//                     className='text-4xl xl:text-6xl sm:text-6sm font-bold mb-0'>
//                     Timeline
//                 </motion.div>
//                         </div>
//             </div>
//             <div className="pixel timeline-wrapper overflow-x-scroll">
//                 <div className="timeline-container" ref={timelineContainerRef}>
//                     <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
//                         <div className="iconic">
//                              2019
//                         </div>
//                         <div className="text mt-4">
//                         <header className="heading">
//                                 <h4 className="title">July 2019</h4>
//                             </header>
//                             <p>Three roommates start their journey at IIT Kanpur to pursue their undergraduate degree</p>
//                         </div>
//                     </div>
//                     <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
//                         <div className="iconic ">
//                          2023
//                         </div>
//                         <div className="text mt-4">
//                         <header className="heading">
//                                 <h4 className="title">March 2023</h4>
//                             </header>
//                             <p> Decision to start a robotics company is made and ideation stage begins</p>
//                         </div>
//                     </div>

//                     <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
//                         <div className="iconic">
//                          2023
//                         </div>
//                         <div className="text mt-4">
//                         <header className="heading">
//                                 <h4 className="title">Nav 2023</h4>
//                             </header>
//                             <p> Received Gradcapital Atomic Fellowship</p>
//                         </div>
//                     </div>
//                     <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
//                         <div className="iconic">
//                         2024
//                         </div>
//                         <div className="text mt-4">
//                         <header className="heading">
//                                 <h4 className="title">03 Jan 2024</h4>
//                             </header>
//                             <p> Company Incorporated</p>
//                         </div>
//                     </div>
//                     <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
//                         <div className="iconic">
//                         2024
//                         </div>
//                         <div className="text mt-4">
//                         <header className="heading">
//                                 <h4 className="title">10 Jan 2024</h4>
//                             </header>
//                             <p> Collaboration with Space Dynamics Lab, IIT Kanpur starts on the TIH Foundation - IIT Bombay funded Project</p>
//                         </div>
//                     </div>
                    
//                     {/* Add more timeline blocks here */}
//                 </div>
//             </div>

//             <div className="flex justify-center mt-6">
//                 <button className="scroll-button prev-button mr-2" onClick={() => handleScroll(-300)}>
//                     <RiArrowLeftDoubleFill />
//                 </button>
//                 <button className="scroll-button next-button" onClick={() => handleScroll(300)}>
//                     <RiArrowRightDoubleFill />
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default Timeline;
