'use client'
import { NavContext } from '../components/context/NavContext';
import React, {useContext} from 'react';

const MenuBtn= () => {
    const {setIsOpen } = useContext (NavContext);
    return (
        
        <div onClick={() => setIsOpen(true)} className='group flex flex-col gap-y-2 cursor-pointer md:hidden lg:hidden xl:hidden group'>
            <div className='w-8 h-[2px] bg-white transition-all'></div>
            <div className='w-6 group-hover:w-10 h-[2px] bg-white transition-all'></div>
            <div className='w-4 h-[2px] bg-white transition-all'></div>
        </div>
    );
};
export default MenuBtn;