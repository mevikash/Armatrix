import React, { useContext } from 'react';
import { NavContext } from './context/NavContext';

import {RiCloseLine} from 'react-icons/ri';

import Nav from './Nav';
const NavMobile = () => {
    const { isOpen, setIsOpen } = useContext(NavContext);
    return (
        <nav className={`${isOpen ? 'right-0' : '-right-full'} 
        xl:hidden fixed  top-0 2-20 bottom-0 transition-all duration-500`}
        containerstyles=' text-[0px] uppercase font-sm bg-primary  ' >
            <div
            onClick={() => setIsOpen(false)}
            className=' text-white xl:text-6xl md:text-6md sm:text-6sm lg:text-6lg  cursor-pointer'>
                <RiCloseLine className='text-6xl group flex flex-col gap-y-10 cursor-pointer xl:hidden group' />
                <Nav className='relative left-20  ' />
                </div>
        </nav>
    );
};
export default NavMobile;