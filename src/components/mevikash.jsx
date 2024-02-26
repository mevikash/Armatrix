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
  'An Industrial and Defence Robotics Company',
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
            <div className='mevikash min-h-[60px] flex items-center mb-6 text-[80px]'>
        <div className='mevikash hidden xl:flex items-ceneter xl:gap-x-0'>
          <div className=' relative w-2 h-2 mx-2 flex items-center justify-center'>
            {/* <Image fill src={'/assets/hero/dot.svg'} alt='' sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px" /> */}
          </div>
        </div>

        <TypeAnimation sequence={locations}  speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} style={{ color: 'white' }} />
      </div>
          </h1>
        </div>
      </div>
      
    </section>
  );
}

export default vikash;
