// import React from "react";
'use client' 
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from 'next/link';

import Nav from './Nav';
import logo from '../../public/logo4.svg'
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

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className={`fixed z-50 w-full ${active
                ? 'bg-secondary py-6 transition-all'
                : 'bg-transparent py-8 transition-all'
                }`}
        >
            <div className="bg-gradient-to-r from-gray-500/20 to-gray-100/20 shadow-black text-[25px] container mx-40 flex flex-col xl:flex-row items-center">
                <Link href='/' legacyBehavior>
                    <a className="cursor-pointer">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={50}
                            height={50}
                            priority
                        />
                    </a>
                </Link>
                <Nav containerStyles='hidden xl:flex items-center gap-x-18' />
            </div>
        </motion.header>
    );
};

export default Header;