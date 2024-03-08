'use client';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

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
            <div className='flex xl:flex sm:flex md:flex lg:flex absolute justify-between right-10 top-12'>
                <ul className={`my-6 sm:flex transition-all duration-300 ${scrollPosition > 100 ? 'text-lg' : 'text-2xl'}`}>
                    <li className="ml-40 mr-0 uppercase text-white font-poppins">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="ml-20 mr-0 uppercase text-white">
                        <Link href="/team">
                            Team
                        </Link>
                    </li>
                    <li className="ml-20 mr-0 uppercase text-white">
                        <Link href="/Contacts">
                            Contact US
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
