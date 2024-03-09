"use client"
import React from "react";
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
  return (
    <section  style={{ width: "100%", height: "100%" }} className='bg-primary h-screen bg-cover bg-no-repeat'>
      <div className="bg-primary video-section">
        <video src="./video.mp4" loop autoPlay playsInline></video>
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

