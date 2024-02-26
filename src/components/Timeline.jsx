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
        <section className="h-[100vh] bg-newsletter bg-fixed h-[1500px] bg-cover w-full bg-center bg-no-repeat xl:h-[850px] flexCenter flex-col">
            
            <div className='pixel flex text-white flex-wrap justify-center items-center gap-10 py-20'>
                <motion.div
                    initial='hidden'
                    whileinview='show'
                    className='text-4xl xl:text-6xl font-bold mb-0'>
                    Timeline
                </motion.div>
            </div>

            <div className="pixel timeline-wrapper">
            

                <div className="timeline-container" ref={timelineContainerRef}>
                    <div className="timeline-block">
                        <div className="iconic"><Image
                                    src='/assets/hero/a.jpeg'
                                    width={200}
                                    height={200}
                                    className='rounded-full border shadow-md'
                                    alt='Team Member Image'
                                /></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Event values 1</h4>
                            </header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus
                                sit saepe</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Event values 1</h4>
                            </header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus
                                sit saepe</p>
                        </div>
                    </div>
                   
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Event values 1</h4>
                            </header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus
                                sit saepe</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Event values 1</h4>
                            </header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus
                                sit saepe</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <div className="iconic"><i className="fa fa-graduation-cap"></i></div>
                        <div className="text">
                            <header className="heading">
                                <h4 className="title">Event values 1</h4>
                            </header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus
                                sit saepe</p>
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
