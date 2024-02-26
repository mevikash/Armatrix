// import React from "react";
//motion
'use client';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

const SectionHeader =({pretitle, title}) =>{
    return (
        <header>
            <motion.h3
            variants={fadeIn ('right', 0.4)}
            initial='hidden'
            whileinview={'show'}
            viewport={{once: false, amount: 0.3}}
            className="pretitle">{pretitle}</motion.h3>

{/*motions are left, right, up, down*/}
            <motion.h2 
            variants={fadeIn ('right', 0.4)}
            initial='hidden'
            whileinview={'show'}
            viewport={{once: false, amount: 0.3}}
            className="h2 mb-8">{title}</motion.h2>
        </header>
    );
};
export default SectionHeader;