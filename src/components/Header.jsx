// import React from "react";
'use client' 
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from 'next/link';

import Nav from './Nav';
import logo from '../../public/logo4.svg'
import Contact from './contacts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Header = () => {

    const [active, setActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            //detect scroll
            setActive(window.scrollY > 100);
        };

        //add event listner
        window.addEventListener('scroll', handleScroll);

        //clear event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <motion.header
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        className={`fixed z-50 w-full ${active
            ? 'bg-secondary py-6 transition-all'
            : 'bg-transparent py-8 transition-all'
            }`}
    >
        {/* <div className="bg-gradient-to-r from-gray-500/20 to-gray-300/20 shodow-black text-[25px] container mx-40/20 flex flex-col xl:flex-row items-center"> */}
        <div className="bg-gradient-to-r from-gray-500/20 to-gray-100/20 shodow-black text-[25px] container mx-40 flex flex-col xl:flex-row items-center">
        {/* <div className="bg-gradient-to-r from-gray-500 to-gray-300 shadow-black text-[25px] mx-auto flex items-center justify-between"> */}

        {/* <div className="bg-green-500 shadow-black text-[25px] mx-auto flex items-center justify-between"> */}



            {/**logo */}

            <Link href='/'>
                <Image
                    src={logo}
                    alt="Logo"
                    width={50}
                    height={205}
                    className="cursor-pointer"
                    priority />
            </Link>
            {/**nav */}
            <Nav containerStyles='hidden xl:flex items-center gap-x-18' />
        </div>
    </motion.header>
}

export default Header;