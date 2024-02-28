'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Timeline = () => {
    const [showTimeline, setShowTimeline] = useState(false);
    const timelineContainerRef = useRef(null);

    const toggleTimeline = () => {
        setShowTimeline(!showTimeline);
    };

    const handleScroll = (scrollOffset) => {
        if (timelineContainerRef.current) {
            timelineContainerRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <section className="xl:h-[1100px] lg:h-[1200px] md:h-[1320px] sm:h-[1540px] bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
<div className="pixel timeline-wrapper overflow-x-scroll">

            <div className=" flex text-white justify-center items-center gap-10 py-20">
                <motion.div
                    initial='hidden'
                    whileInView='show'
                    className='text-4xl xl:text-6xl sm:text-6sm font-bold mb-0'>
                    Timeline
                </motion.div>
                        </div>
            </div>
            <div className="pixel timeline-wrapper overflow-x-scroll">
                <div className="timeline-container" ref={timelineContainerRef}>
                    <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
                        <div className="iconic">
                            July 2019
                        </div>
                        <div className="text mt-4">
                            <p>Three roommates start their journey at IIT Kanpur to pursue their undergraduate degree</p>
                        </div>
                    </div>
                    <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
                        <div className="iconic ">
                        March 2023
                        </div>
                        <div className="text mt-4">
                            <p> Decision to start a robotics company is made and ideation stage begins</p>
                        </div>
                    </div>

                    <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
                        <div className="iconic">
                        Nav 2023
                        </div>
                        <div className="text mt-4">
                            
                            <p> Received Gradcapital Atomic Fellowship</p>
                        </div>
                    </div>
                    <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
                        <div className="iconic">
                        03 Jan 2024
                        </div>
                        <div className="text mt-4">
                            
                            <p> Company Incorporated</p>
                        </div>
                    </div>
                    <div className="timeline-block max-w-xs mx-auto mb-12 text-center">
                        <div className="iconic">
                        10 Jan 2024
                        </div>
                        <div className="text mt-4">
                            
                            <p> Collaboration with Space Dynamics Lab, IIT Kanpur starts on the TIH Foundation - IIT Bombay funded Project</p>
                        </div>
                    </div>
                    
                    {/* Add more timeline blocks here */}
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <button className="scroll-button prev-button mr-2" onClick={() => handleScroll(-300)}>
                    <RiArrowLeftDoubleFill />
                </button>
                <button className="scroll-button next-button" onClick={() => handleScroll(300)}>
                    <RiArrowRightDoubleFill />
                </button>
            </div>
        </section>
    );
};

export default Timeline;
