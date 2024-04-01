'use client'
import React, { useEffect, useRef } from "react";
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { fadeIn } from '../../variants';



const Newsletter = () => {

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const handleVideoClick1 = () => {
        if (videoRef1.current) {
            videoRef1.current.currentTime = 0; // Reset the video to start from the beginning
            const playPromise = videoRef1.current.play(); // Start playing the video

            // Handling browser restrictions
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                }).catch(error => {
                    // Auto-play was prevented
                    // Show a UI element to let the user start playback manually
                    console.error('Auto-play was prevented:', error);
                });
            }
        }
    };

    const handleVideoClick2 = () => {
        if (videoRef2.current) {
            videoRef2.current.currentTime = 0; // Reset the video to start from the beginning
            const playPromise = videoRef2.current.play(); // Start playing the video

            // Handling browser restrictions
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                }).catch(error => {
                    // Auto-play was prevented
                    // Show a UI element to let the user start playback manually
                    console.error('Auto-play was prevented:', error);
                });
            }
        }
    };


    useEffect(() => {
        const video1 = videoRef1.current;
        const video2 = videoRef2.current;

        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video1.play();
                } else {
                    video1.pause();
                }
            });
        });

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video2.play();
                } else {
                    video2.pause();
                }
            });
        });

        observer1.observe(video1);
        observer2.observe(video2);

        return () => {
            observer1.unobserve(video1);
            observer2.unobserve(video2);
        };
    }, []);

    return (
        // <section style={{ width: "100%", height: "100%" }} className=' bg-newsletter w-full h-full bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat bg-[cover]'>
        <section  className='bg-fixed' style={{ backgroundImage: "url('/b111.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}>

            <div className='max-w-screen-xl mx-auto px-4 sm:px-2 lg:px-8'>
                <div className='flex text-black flex-wrap justify-center items-center gap-0 lg:py-20 xl:py-20 md:py-20 sm:py-4'>
                    <SectionHeader text="Products" />
                    <motion.div
                        initial='hidden'
                        whileInView='show'
                        className='text-xl items-center xl:text-8xl lg:text-6xl md:text-4xl sm:text-xl shadow rounded-xl font-alexBrush font-bold mb-0 '>
                        PRODUCTS
                    </motion.div>
                    <div className="grid  grid-cols-1 sm:grid-cols-2 sm:gap-2 xl:gap-20 md:gap-20 lg:gap-20 mt-8">
                        <div>
                            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={16000}>
                                <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                    <Image
                                        src="/Render1.png"
                                        alt="meter"
                                        width={1080}
                                        height={1080}
                                    />
                                </div>
                                <div style={{ maxWidth: '650px', maxHeight: '700px', overflow: 'hidden' }}>
                                    <video
                                        src="/videosource.mp4"
                                        alt="meter"
                                        width={650}
                                        height={950}
                                        autoPlay
                                        loop
                                        playsInline // Ensure video plays inline on iOS
                                        muted
                                        controls={false} // Disable default browser controls
                                        ref={videoRef1}
                                        onClick={handleVideoClick1} // Add onClick event handler
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure video covers entire container
                                    />
                                </div>
                                <div style={{ maxWidth: '650px', maxHeight: '700px', overflow: 'hidden' }}>
                                    <video
                                        src="/videosource1.mp4"
                                        alt="meter"
                                        width={650}
                                        height={950}
                                        autoPlay
                                        loop
                                        playsInline // Ensure video plays inline on iOS
                                        muted
                                        controls={false} // Disable default browser controls
                                        ref={videoRef2}
                                        onClick={handleVideoClick2} // Add onClick event handler
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure video covers entire container
                                    />
                                </div>

                            </Carousel>

                            <div className="flex flex-col xl:h-[300px] lg:h-[300px] md:h-[380px] lg:text-xl xl:text-xl sm:text-xs md:text-lg  bg-white sm:py-2 lg:py-8 md:py-8 xl:py-8  sm:px-2 lg:px-5 md:px-5 xl:px-5 border shadow-md lg:mr-0 mb-8 product-details">
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="product-name regular text-gray-700"><strong>FlexFuel V1</strong></p>
                                        <p className="bold text-black-500 ">Current TRL: 4</p>
                                    </div>
                                </div>
                                <p className="bold mb-2 text-base lg:text-sm xl:text-sm sm:text-xs md:text-sm ">
                                    FlexFuel represents the next generation of hyper-redundant robotic arms tailored specifically for seamless and efficient refueling operations. Equipped with advanced AI algorithms, FlexFuel operates autonomously relieving manpower to do other important tasks.
                                </p>
                                <p className="regular text-gray-700 mb-2 text-base lg:text-sm xl:text-sm sm:text-xs md:text-sm ">
                                    <strong>Key Target:</strong> Aviation Industry (Defence and Commercial)<br />
                                    <strong>Other Applications:</strong> Snake-like arm can be further developed for use in nuclear reactor inspections, maintenance in oil and gas industries, navigating complex environments, etc.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                <Image
                                    src="/Render2.png"
                                    alt="meter"
                                    width={1080}
                                    height={1080}
                                />
                            </div>
                            {/* <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={16000}>
                                
                            </Carousel> */}

                            <div className="flex flex-col xl:h-[300px] lg:h-[300px] md:h-[380px] lg:text-xl xl:text-xl sm:py-4 lg:py-8 md:py-8 xl:py-8 sm:text-xs md:text-lg  sm:px-2 lg:px-5 md:px-5 xl:px-5 bg-white py-8 px-5 border shadow-md lg:mr-0 mb-8 product-details">
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="product-name regular text-gray-700"><strong>Jerry</strong></p>
                                        <p className="bold text-black-500">Current TRL: 5</p>
                                    </div>
                                </div>
                                <p className="bold mb-2 text-base lg:text-sm xl:text-sm sm:text-xs md:text-sm ">
                                    Jerry is an autonomous ground vehicle developed to carry up to 100 kg payload. Enabled with a 4-wheel holonomic drive system, it is capable of navigating an obstacle-filled environment using its vision-based perception module. It can detect obstacles, self-localize, navigate, and strategically plan its path.
                                </p>
                                <p className="regular text-gray-700 mb-2 text-base lg:text-sm xl:text-sm sm:text-xs md:text-sm ">
                                    <strong>Key Target:</strong> Mobile unit to FlexFuel<br />
                                    <strong>Other Applications:</strong> Warehouse management, ASRS systems, Autonomous defence mobile units, etc.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

