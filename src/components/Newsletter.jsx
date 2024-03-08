
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
                        className='text-xl items-center xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl shadow rounded-xl font-alexBrush font-bold mb-0'>
                        Products
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-8">


                        <div>
                            <Carousel showThumbs={false}>
                                <div style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                    <Image
                                        src="/p.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                    />
                                    <p className="legend" style={{ maxWidth: '500px', maxHeight: '700px' }}>Legend 2</p>
                                </div>
                                <div style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                    <Image
                                        src="/v1.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                    />
                                    <p className="legend" style={{ maxWidth: '500px', maxHeight: '700px' }}>Legend 3</p>
                                </div>
                            </Carousel>

                            <div className="card bg-white p-4 rounded-lg shadow-md" style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p style={{ fontSize: '1rem' }} className="regular text-gray-700">Yo it's me</p>
                                        <p style={{ fontSize: '1rem' }} className="bold text-red-500">Ranjan 1</p>
                                    </div>
                                    <p style={{ fontSize: '1.25rem' }} className="bold mb-2">Bitch</p>
                                </div>
                                <div className="flex flex-col">
                                    <p style={{ fontSize: '1rem' }} className="regular text-gray-700 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates tenetur animi, adipisci ipsam dicta aliquid iste cum reiciendis officia harum quis facere, odit eaque ratione accusamus, vel beatae saepe!</p>
                                </div>
                            </div>


                        </div>
                        <div>
                            <Carousel showThumbs={false}>
                                <div style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                    <Image
                                        src="/p.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                    />
                                    <p className="legend" style={{ maxWidth: '500px', maxHeight: '700px' }}>Legend 2</p>
                                </div>
                                <div style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                    <Image
                                        src="/v1.jpg"
                                        alt="meter"
                                        width={150}
                                        height={250}
                                    />
                                    <p className="legend" style={{ maxWidth: '500px', maxHeight: '700px' }}>Legend 3</p>
                                </div>
                            </Carousel>

                            <div className="card bg-white p-4 rounded-lg shadow-md" style={{ maxWidth: '550px', maxHeight: '700px' }}>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p style={{ fontSize: '1rem' }} className="regular text-gray-700">Yo it's me</p>
                                        <p style={{ fontSize: '1rem' }} className="bold text-red-500">Ranjan 1</p>
                                    </div>
                                    <p style={{ fontSize: '1.25rem' }} className="bold mb-2">Bitch</p>
                                </div>
                                <div className="flex flex-col">
                                    <p style={{ fontSize: '1rem' }} className="regular text-gray-700 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates tenetur animi, adipisci ipsam dicta aliquid iste cum reiciendis officia harum quis facere, odit eaque ratione accusamus, vel beatae saepe!</p>
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
