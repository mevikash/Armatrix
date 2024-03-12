'use client'
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { fadeIn } from '../../variants';

const Newsletter = () => {
    return (
        <section style={{ width: "100%", height: "100%" }} className='bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex text-black flex-wrap justify-center items-center gap-0 py-20'>
                    <SectionHeader text="Products" />
                    <motion.div
                        initial='hidden'
                        whileInView='show'
                        className='text-xl items-center xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl shadow rounded-xl font-alexBrush font-bold mb-0'>
                        PRODUCTS
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-8">


                        <div>
                            <Carousel showThumbs={false}>
                                <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                    <Image
                                        src="/Render1.png"
                                        alt="meter"
                                        width={1080}
                                        height={1080}
                                    />
                                    <p className="legend" style={{ maxWidth: '650px', maxHeight: '700px' }}>Image</p>
                                </div>
                                <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                    <video
                                        src="/videosource.mp4"
                                        alt="meter"
                                        width={650}
                                        height={450}
                                        autoPlay
                                        loop
                                        controls={false} // Disable default browser controls
                                    />


                                    <p className="legend" style={{ maxWidth: '650px', maxHeight: '700px' }}>Video</p>
                                </div>
                            </Carousel>

                            <div className="card bg-white p-4 rounded-lg shadow-md" style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p style={{ fontSize: '1rem' }} className="regular text-gray-700">FlexFuel V1
                                        </p>
                                        <p style={{ fontSize: '1rem' }} className="bold text-red-500">Current TRL: 4
                                        </p>
                                    </div>
                                    <p style={{ width: "100%", height: "100%", fontSize: '1rem' }} className="bold mb-2">FlexFuel represents the next generation of hyper-redundant robotic arms tailored specifically for seamless and efficient refueling operations. Equipped with advanced AI algorithms, FlexFuel operates autonomously relieving manpower to do other important tasks.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p style={{ width: "100%", height: "100%", fontSize: '1rem' }} className="regular text-gray-700 mb-2">

                                        Key Target: Aviation Industry (Defence and Commercial) <br />

                                        Other Applications: Snake-like arm can be further developed for use in nuclear reactor inspections, maintainence in oil and gas industries, navigating complex environments, etc.
                                    </p>
                                </div>
                            </div>


                        </div>
                        <div>
                            <Carousel showThumbs={false}>
                                <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                    <Image
                                        src="/Render2.png"
                                        alt="meter"
                                        width={1080}
                                        height={1080}
                                    />
                                    <p className="legend" style={{ maxWidth: '650px', maxHeight: '700px' }}>Image</p>
                                </div>
                                <div style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                    <video
                                        src="/videosource.mp4"
                                        alt="meter"
                                        width={650}
                                        height={450}
                                        autoPlay
                                        loop
                                        controls={false} // Disable default browser controls
                                    />

                                    <p className="legend" style={{ maxWidth: '650px', maxHeight: '700px' }}>Video</p>
                                </div>
                            </Carousel>

                            <div className="card bg-white p-4 rounded-lg shadow-md" style={{ maxWidth: '650px', maxHeight: '700px' }}>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <p style={{ fontSize: '1rem' }} className="regular text-gray-700">Jerry
                                        </p>
                                        <p style={{ fontSize: '1rem' }} className="bold text-red-500">Current TRL: 5
                                        </p>
                                    </div>
                                    <p style={{ width: "100%", height: "100%", fontSize: '1rem' }} className="bold mb-2">Jerry is an autonomous ground vehicle developed to carry upto 100 kg payload. Enabled with 4-wheel holonomic drive system, it is capable of navigating an obstacle filled environment using it’s vision based perception module. It can detect obstacles, self-localize, navigate, and strategically plan it’s path.


                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p style={{ width: "100%", height: "100%", fontSize: '1rem' }} className="regular text-gray-700 mb-2">

                                        Key Usage: Mobile unit to FlexFuel<br />

                                        Other Applications: Warehouse management, ASRS systems, Autonomous defence mobile units, etc.
                                    </p>
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