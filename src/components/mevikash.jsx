"use client"
import React from "react";
// import Typewriter from "typewriter-effect";
// import "../app/team/";
import Image from 'next/image';
import Robo from '../../assets/assets/hero/another_image.png'
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const locations = [
  'An Industrial & Defence Robotics Company',
  3000,
  // 'Kanpur Nagar,  Uttar Pradesh, 208016',
  // 3000,
]

import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

function vikash() {
  // gsap.registerPlugin(scrollTrigger);
  return (
    <section className='bg-primary h-[1200px]  bg-cover w-full bg-no-repeat'
    >
      <div className="bg-primary video-section">
        <video src="./video.mp4" loop autoPlay ></video>
        <div className="bg-primary video-copy">
          <h1 className={bebas.className} >
            ARMATRIX
            <div className='mevikash min-h-[10px] flex items-center mb-6 lg:text-[60px] sm:text-4xl'>

        <TypeAnimation sequence={locations}  speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} style={{ color: 'white' }} />
      </div>
          </h1>
        </div>
      </div>
      
    </section>
  );
}

export default vikash;
