"use client"
import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

const locations = [
  'An Industrial & Defence Robotics Company',
  3000,
];
function Vikash() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        // Function to handle storing the video playback state in local storage
        const updatePlaybackState = () => {
            localStorage.setItem('videoPlaying', video.paused ? 'false' : 'true');
        };

        // Function to handle the 'play' event
        const handlePlay = () => {
            updatePlaybackState();
        };

        // Function to handle the 'pause' event
        const handlePause = () => {
            updatePlaybackState();
        };

        // Add event listeners for 'play' and 'pause' events
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        // Check if the video playback state is stored in local storage
        const isVideoPlaying = localStorage.getItem('videoPlaying');

        // If the video playback state is 'true', resume playback
        if (isVideoPlaying === 'true') {
            video.play().catch(error => console.error('Error playing video:', error));
        }

        return () => {
            // Remove event listeners when the component is unmounted
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    return (
        <section style={{ width: "100%", height: "100%" }} className='bg-primary h-screen bg-cover bg-no-repeat'>
            <div className="bg-primary video-section">
                <video ref={videoRef} src="./video.mp4" loop autoPlay playsInline></video>
                <div className="bg-primary video-copy ">
                    <h1 className={bebas.className}>
                        ARMATRIX
                        <div className='mevikash min-h-[10px] flex items-center mb-6 lg:text-[60px] md:text-2md lg:text-2xl sm:text-xl'>
                            <TypeAnimation sequence={locations} speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} style={{ color: 'white' }} />
                        </div>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Vikash;