'use client'; import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Hero = () => {

    return (
        <section className=" bg-white  xl:h-[1400px] lg:h-[2000px] sm:h-[2900px] md:h-[2500px]">
            <div style={{ backgroundColor: '#201F23', height: '200px' }}>
                {/* Content goes here */}
            </div>


            <div
                initial='hidden'
                className='text-xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl  font-alexBrush py-20 font-bold mb-0'
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                Team
            </div>
            <div className='text-black flex flex-col justify-center items-center' >

                <div className='flex flex-wrap justify-center  gap-10 ' >

                    <motion.div
                        className='flex flex-col items-center bg-white py-8 px-5 rounded-3xl border shadow-md  mb-8'>
                        <Image
                            src='/assets/hero/v.jpeg'
                            width={200}
                            height={200}
                            className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex justify-center w-full'>
                            </div>
                            <p className='text-gray-700 text-[40px]'>   Vishrant Dave    </p>
                            <p className='ml-2 text-gray-700 text-[20px]'>Co-Founder & CEO</p>
                           
                            <p className='text-gray-700 mt-4 flex flex items-center'>
                                <a href='https://www.linkedin.com/in/vishrant-dave/' className='mr-5'>
                                    <Image
                                        src='/assets/hero/link.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                                <a href='https://www.instagram.com/vishrant_the_way/'>
                                    <Image
                                        src='/assets/hero/inst.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-center bg-white py-8 px-10 rounded-3xl border shadow-md mb-8'>
                        <Image
                            src='/assets/hero/a.jpeg'
                            width={200}
                            height={200}
                            className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center mb-2'>
                                <p className='text-gray-700 text-[40px]'>   Ayush Ranjan  </p>

                            </div>
                            <p className='ml-2 text-gray-700'>Co-Founder & CTO</p>
                            <p className='text-gray-700 mt-4 flex flex items-center'>
                                <a href='https://www.linkedin.com/in/ayranjan/' className='mr-4'>
                                    <Image
                                        src='/assets/hero/link.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                                <a href='https://www.instagram.com/books_n_drugs/'>
                                    <Image
                                        src='/assets/hero/inst.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-center bg-white py-8 px-5 rounded-3xl border shadow-md md:mr-10 lg:mr-0 mb-8'>
                        <Image
                            src='/assets/hero/p.jpeg'
                            width={200}
                            height={200}
                            className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center mb-2'>
                                <p className='text-gray-700 text-[40px]'> Prateesh Awasthi</p>

                            </div>
                            <p className='ml-2 text-gray-700'>Co-Founder & Head R&D</p>
                            <p className='text-gray-700 mt-4 flex flex items-center'>
                                <a href='https://www.linkedin.com/in/prateesh-awasthi-4a5215109/' className='mr-4'>
                                    <Image
                                        src='/assets/hero/link.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                                <a href='https://www.instagram.com/a.prateesh/'>
                                    <Image
                                        src='/assets/hero/inst.png'
                                        width={30}
                                        height={30}
                                        className='border shadow-md'
                                        alt='Team Member Image'
                                    />
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div
                initial='hidden'
                className='text-xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl  font-alexBrush py-20 font-bold mb-0'
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                Collaborators
            </div>
            
            <div className='text-black flex flex-col justify-center items-center py-0'>
                
                <div className='flex flex-wrap justify-center items-center gap-0'>
                    {/* Include collaborator images */}
                    <motion.div
                        className=' rounded-3xl  sm:mr-5 md:mr-10 lg:mr-20 mb-8'>
                        <Image
                            src='/assets/hero/l1.png'
                            width={200}
                            height={200}
                            // className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                    </motion.div>
                    <motion.div
                        className=' rounded-3xl sm:mr-5 md:mr-10 lg:mr-20 mb-8'>
                        <Image
                            src='/assets/hero/l2.svg'
                            width={200}
                            height={200}
                            // className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                    </motion.div>
                    <motion.div
                        className=' rounded-3xl sm:mr-5 md:mr-10 lg:mr-20 mb-8'>
                        <Image
                            src='/assets/hero/l3.png'
                            width={200}
                            height={200}
                            // className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                    </motion.div>
                    <motion.div
                        className='  rounded-3xl sm:mr-5 md:mr-10 lg:mr-0 mb-8'>
                        <Image
                            src='/assets/hero/l4.png'
                            width={200}
                            height={200}
                            // className='rounded-full border shadow-md'
                            alt='Team Member Image'
                        />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
