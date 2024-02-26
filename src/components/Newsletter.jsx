
'use client'
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import Image from 'next/image'
import { fadeIn } from '../../variants';

const Newsletter = () => {
    return (
        <section className='bg-newsletter bg-fixed h-[1400px] bg-cover w-full bg-center bg-no-repeat'
        >
            <div className='flex text-black flex-wrap justify-center items-center gap-0 py-60'>
                <motion.div
                    initial='hidden'
                    whileInView='show'
                    className='text-xl xl:text-8xl shadow rounded-xl font-bold mb-0'>
                    Products
                </motion.div>
            </div>
            <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flexCenter max-container relative w-full">
                <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:left-[60%] md:right-[2%] lg:top-30">
                <Carousel showThumbs={false}>
                        <div>
                        <Image
                        src="/a.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                        <Image
                        src="/p.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                        <Image
                        src="/v1.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                    <div className="flexBetween flex-col">
                        <div className='flex w-full flex-col'>
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Yo it's me </p>
                                <p className="bold-16 text-red-500">Ranjan 1</p>
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
            <motion.div
                variants={fadeIn('right', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flexCenter max-container relative w-full">
                <div className="absolute flex bg-white py-8 pl-5 pr-5 gap-20 rounded-3xl border shadow-md md:right-[60%] md:left-[2%] lg:top-30">
                <Carousel showThumbs={false}>
                        <div>
                        <Image
                        src="/a.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                        <Image
                        src="/p.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                        <Image
                        src="/v1.jpg"
                        alt="meter"
                        width={250}
                        height={450}
                        className="h-full w-auto"
                    />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                    <div className="flexBetween flex-col">
                        <div className='flex w-full flex-col'>
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Yo it's me </p>
                                <p className="bold-16 text-red-500">Ranjan 2 </p>
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

export default Newsletter;

