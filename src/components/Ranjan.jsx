'use client';
import Image from 'next/image'
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
const Ranjan = () => {
    return (
        <section className="h-[80vh] bg-white  xl:h-[700px] flexCenter flex-col" style={{ backgroundImage: "url('/b1.jpg')" }}>
            <motion.div 
            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileinview={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flexCenter max-container relative w-full">
                <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:left-[30%] lg:top-20">
                    <Image
                        src="/a.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                    <div className="flexBetween flex-col">
                        <div className='flex w-full flex-col'>
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Yo it's me </p>
                                <p className="bold-16 text-red-500">Ranjan</p>
                            </div>
                            <p className="bold-20 mt-2">Bitch</p>
                        </div>

                        <div className='flex w-full flex-col'>
                            <p className="regular-16 text-gray-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates tenetur animi, adipisci ipsam dicta aliquid iste cum reiciendis officia harum quis facere, odit eaque ratione accusamus, vel beatae saepe!</p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Ranjan;
