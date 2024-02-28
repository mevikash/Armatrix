
'use client'
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { fadeIn } from '../../variants';

const Newsletter = () => {
    return (
        <section className='bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex text-black flex-wrap justify-center items-center gap-0 py-20'>
                    <SectionHeader text="Products" />
                    <motion.div
                        initial='hidden'
                        whileInView='show'
                        className='text-xl items-center xl:text-8xl sm:text-8xl shadow rounded-xl font-bold mb-0'>
                        Products
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-8">
                        
                        
                        <div>
                            <Carousel showThumbs={false}>

                                <div>
                                    <Image
                                        src="/p.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                        // className="h-full w-auto"
                                    />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <Image
                                        src="/v1.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                        // className="h-full w-auto"
                                    />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                            <div className="card bg-white p-4 rounded-lg shadow-md">
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="regular-16 text-gray-20">Yo it's me</p>
                                        <p className="bold-16 text-red-500">Ranjan 1</p>
                                    </div>
                                    <p className="bold-20 mb-2">Bitch</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="regular-16 text-gray-20 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates tenetur animi, adipisci ipsam dicta aliquid iste cum reiciendis officia harum quis facere, odit eaque ratione accusamus, vel beatae saepe!</p>
                                    <h4 className="bold-20 whitespace-nowrap">Wonorejo Pasuruan</h4>
                                </div>
                            </div>

                        </div>
                        <div>

                            <Carousel showThumbs={false}>

                                <div>
                                    <Image
                                        src="/p.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                        // className=" w-auto"
                                    />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <Image
                                        src="/v1.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                        // className=" w-auto"
                                    />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                            <div className="card bg-white p-4 rounded-lg shadow-md">
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="regular-16 text-gray-20">Yo it's me</p>
                                        <p className="bold-16 text-red-500">Ranjan 1</p>
                                    </div>
                                    <p className="bold-20 mb-2">Bitches</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="regular-16 text-gray-20 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates tenetur animi, adipisci ipsam dicta aliquid iste cum reiciendis officia harum quis facere, odit eaque ratione accusamus, vel beatae saepe!</p>
                                    <h4 className="bold-20 whitespace-nowrap">Wonorejo Pasuruan</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Newsletter;
