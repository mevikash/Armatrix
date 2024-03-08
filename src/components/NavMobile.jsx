import React, { useContext } from 'react';
import { NavContext } from './context/NavContext';

import { RiCloseLine } from 'react-icons/ri';

import Nav from './Nav';
const NavMobile = () => {
    const { isOpen, setIsOpen } = useContext(NavContext);
    return (
        <nav className={`${isOpen ? 'right-0' : '-right-full'} xl:hidden fixed top-0 left-0 bottom-0 transition-all duration-500`}>
            <div onClick={() => setIsOpen(false)} className='text-white cursor-pointer' style={{ fontSize: isOpen ? '0.1rem' : '0.075rem' }}>
                <Nav />
            </div>
        </nav>



    );
};
export default NavMobile;