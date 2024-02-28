
'use client' 
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Nav from './Nav';
import NavMobile from './NavMobile';
import MenuBtn from './MenuBtn';
import logo from '../../public/logo6.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoSize = active ? 100 : 250; // Adjust the logo size based on scroll position

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
            <div className="container sm:mx-10 xl:mx-40 flex flex-col xl:flex-row items-center">
                <Link href='/' legacyBehavior>
                    <a className="cursor-pointer absolute top-0">
                        <motion.div
                            animate={{ width: logoSize, height: logoSize }} // Animate changes in width and height
                            transition={{ duration: 0.5 }} // Set the duration of the transition
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                width={250} // Initial width of the logo
                                height={250} // Initial height of the logo
                                priority
                            />
                        </motion.div>
                    </a>
                </Link>
                <Nav containerStyles='hidden  xl:flex items-center gap-x-40' />
                <NavMobile />
                <div className="absolute left-7 top-9 z-10 xl:hidden">
                    <MenuBtn />
                </div>
            </div>
        </motion.header>
    );
};

export default Header;

