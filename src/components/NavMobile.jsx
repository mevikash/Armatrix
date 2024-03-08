import React, { useContext } from 'react';
import { NavContext } from './context/NavContext';

import {RiCloseLine} from 'react-icons/ri';

import Nav from './Nav';
const NavMobile = () => {
    const { isOpen, setIsOpen } = useContext(NavContext);
    return (
        <nav className={`${isOpen ? 'right-0' : '-right-full'} 
        xl:hidden fixed  top-0 3-25 bottom-0 transition-all duration-500`}
         >
            <div
            onClick={() => setIsOpen(false)}
            className=' text-white xl:text-1xl md:text-1md sm:text-1sm lg:text-1lg  cursor-pointer'>
                {/* <RiCloseLine className='text-6xl group flex flex-col gap-y-10 cursor-pointer xl:hidden group' /> */}
                <RiCloseLine className='text-6xl group flex flex-col gap-y-10 cursor-pointer xl:hidden group p-10' />
                <Nav />
                </div>
        </nav>
    );
};
export default NavMobile;