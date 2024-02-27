'use client';
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
        <section className="h-[100vh] bg-newsletter bg-fixed h-[1500px] bg-cover w-full bg-center bg-no-repeat xl:h-[850px]  md:h-[1100px]  lg:h-[900px]  sm:h-[916px] flexCenter flex-col">
            
            <div className='pixel flex text-white flex-wrap justify-center items-center gap-10 py-20'>
                <motion.div
                    initial='hidden'
                    whileinview='show'
                    className='text-4xl xl:text-6xl sm:text-6sm font-bold mb-0'>
                    Timeline
                </motion.div>
            </div>

            <div className="pixel timeline-wrapper">
            

                <div className="timeline-container" ref={timelineContainerRef}>
                    <div className="timeline-block">
                        <div className="iconic"><Image
                                    src='/assets/hero/l1.png'
                                    width={200}
                                    height={200}
                                    className='rounded-full border shadow-md'
                                    alt='Team Member Image'
                                /></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">July 2019</h4>
                            </header>
                            <p>
                            Three roommates start their journey at IIT Kanpur to pursue their undergraduate degree</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">March 2023</h4>
                            </header>
                            <p>
                            Decision to start a robotics company is made and ideation stage begins</p>
                        </div>
                    </div>
                   
                    
                    <div className="timeline-block">
                        <div className="iconic"></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Nov 2023</h4>
                            </header>
                            <p>
                            Received Gradcapital Atomic Fellowship</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">03 Jun 2024</h4>
                            </header>
                            <p>
                            Company Incorporated</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">10 Jun 2024</h4>
                            </header>
                            <p>
                            Collaboration with Space Dynamics Lab, IIT Kanpur starts on the TIH Foundation - IIT Bombay funded Project</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="scroll-button prev-button" onClick={() => handleScroll(-600)}>
                <RiArrowLeftDoubleFill></RiArrowLeftDoubleFill>
            </button>
            <button className="scroll-button next-button" onClick={() => handleScroll(600)}>
                <RiArrowRightDoubleFill></RiArrowRightDoubleFill>
            </button>
        </section>
    );
};

export default Timeline;
