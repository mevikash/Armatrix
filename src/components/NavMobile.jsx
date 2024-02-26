import React, { useContext } from 'react';
import { NavContext } from './context/NavContext';

import {RiCloseLine} from 'react-icons/ri';

import Nav from './Nav';
const NavMobile = () => {
    const { isOpen, setIsOpen } = useContext(NavContext);
    return (
        <nav className={`${isOpen ? 'right-5' : '-right-full'} 
        xl:hidden fixed w-full top-0 2-20 bottom-0 transition-all duration-500`}
        containerstyles=' text-[30px] uppercase font-sm bg-primary h-full items-center justify-center gap-y-8 ' >
            <div
            onClick={() => setIsOpen(false)}
            className='absolute right-4 top-5 cursor-pointer'>
                <RiCloseLine className='text-white text-6xl' />
                <Nav/>
                </div>
        </nav>
    );
};
export default NavMobile;