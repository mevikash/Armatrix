'use client';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Nav = ({ containerStyles, LinkStyles }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${containerStyles}`}>
            <motion.div // Wrap the div with motion
                initial={{ fontSize: '2rem' }} // Initial font size
                animate={{ fontSize: scrollPosition > 100 ? '1rem' : '2rem' }} // Animate changes in font size
                transition={{ duration: 0.5 }} // Set the duration of the transition
                className='flex xl:flex sm:flex md:flex lg:flex absolute justify-between right-10 top-20'
            >
                <ul className={`my-6 sm:flex`}>
                    <li className="ml-0 uppercase text-white">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="ml-40 uppercase text-white">
                        <Link href="/team">
                            Team
                        </Link>
                    </li>
                    <li className="ml-40 uppercase text-white">
                        <Link href="/Contacts">
                            Contact US
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default Nav;
