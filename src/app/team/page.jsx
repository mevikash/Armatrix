
//motion
'use client';
import Image from 'next/image';
import { AA } from '../../../public/a.jpg'
import { Robo } from '../../../public/a.jpg'
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Hero = () => {
    return <section className='h-[80vh] bg-white  xl:h-[2100px]' id='home'>
        <div style={{ position: 'relative' }}>

        <div className='container mx-auto  h-full flex justify-center items-center xl:justify-start'>
            {/** text */}
            <div className='bg-white h-full flex flex-col justify-center items-center xl:items-start z-0 pt-12'>
                <motion.div
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    // className=' w-[500px] h-[101.37px] xl:w-[7250px] xl:h-[244.97px] text-[30px] font-black text-primary w-[100px] h-[101.37px] xl:w-[7025px] xl:h:-[2404.97px]'>
                    className=' w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] text-[100px] mix-blend-luminosity'>
                    Foundation Team
                </motion.div>
            </div>
            <section style={{ position: 'relative' }} className="h-[80vh] bg-white  xl:h-[700px] flexCenter flex-col ">
                <motion.div
                    // variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flexCenter max-container relative w-full"
                >
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            alt=''
                            width={50}
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            alt=''
                            width={50}
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            alt=''
                            width={50}
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
        </div>
        <div>

        <div className='container mx-auto  h-full flex justify-center items-center xl:justify-start'>
            {/** text */}
            <div className='bg-white h-full flex flex-col justify-center items-center xl:items-start z-0 pt-12'>
                <motion.div
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    // className=' w-[500px] h-[101.37px] xl:w-[7250px] xl:h-[244.97px] text-[30px] font-black text-primary w-[100px] h-[101.37px] xl:w-[7025px] xl:h:-[2404.97px]'>
                    className=' w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] text-[100px] mix-blend-luminosity'>
                    Advisors Team
                    <motion.div
                        variants={fadeIn('up', 1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='min-h-[60px] flex items-center mb-6 text-[26px]'>
                        <div className=' hidden xl:flex items-ceneter xl:gap-x-0'>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <section style={{ position: 'relative' }} className="h-[80vh] bg-white  xl:h-[700px] flexCenter flex-col">
                <motion.div
                    // variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flexCenter max-container relative w-full"
                >
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            width={50}
                            alt=''
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            alt=''
                            // src={AA}
                            width={50}
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            alt=''
                            width={50}
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
        </div>
        <div>

        <div className='container mx-auto  h-full flex justify-center items-center xl:justify-start'>
            {/** text */}
            <div className='bg-white h-full flex flex-col justify-center items-center xl:items-start z-0 pt-12'>
                <motion.div
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    // className=' w-[500px] h-[101.37px] xl:w-[7250px] xl:h-[244.97px] text-[30px] font-black text-primary w-[100px] h-[101.37px] xl:w-[7025px] xl:h:-[2404.97px]'>
                    className=' w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] text-[100px] mix-blend-luminosity'>
                    Investors
                    <motion.div
                        variants={fadeIn('up', 1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='min-h-[60px] flex items-center mb-6 text-[26px]'>
                        <div className=' hidden xl:flex items-ceneter xl:gap-x-0'>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <section style={{ position: 'relative' }} className="h-[80vh] bg-white  xl:h-[700px] flexCenter flex-col">
                <motion.div
                    // variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flexCenter max-container relative w-full"
                >
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            width={50}
                            alt=''
                            height={50}
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            width={50}
                            height={50}
                            alt=''
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex bg-white py-8 pl-5 pr-7 gap-20 rounded-3xl border shadow-md md:right-[40%] lg:left-20 lg:top-20">
                        {/* <Image fill src={'/assets/hero/singer.png'} /> */}
                        <Image
                            src={'/assets/hero/singer.png'}
                            // src={AA}
                            width={50}
                            height={50}
                            alt=''
                            className="h-full w-auto  rounded-3xl border shadow-md"
                        />
                        <div className="flexBetween flex-col">
                            <div className='flex w-full flex-col'>
                                <div className="flexBetween w-full">
                                    <p className="regular-16 text-gray-20">John Doe </p>
                                    <p className="bold-16 text-red-500">Founder / CEO</p>
                                </div>
                                <p className="bold-20 mt-2">Foundation Team</p>
                            </div>

                            <div className='flex w-full flex-col'>
                                <p className="regular-16 text-gray-20">Lorem ipsum dolor sit amet.</p>
                                <h4 className="bold-20 mt-2 whitespace-nowrap">Location: New York</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
        </div>
    </section>
};
export default Hero;









//hew formate 
//motion
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../../variants';

// const Hero = () => {
//     return (
//         <section className="h-[80vh] bg-white  xl:h-[1600px]  py-20">
//             <div className='container mx-auto flex flex-col justify-center items-center'>
//                 {/** Foundation Team */}
//                 <div className='bg-white flex flex-col justify-center items-center py-12'>
//                     <motion.div
//                         initial='hidden'
//                         whileInView='show'
//                         variants={fadeIn('up', 0.3)}
//                         className='text-4xl xl:text-6xl font-bold mb-8'>
//                         Foundation Team
//                     </motion.div>
//                     <div className='flex flex-wrap justify-center items-center gap-4'>
//                         {/** Individual Team Members */}
//                         {[1, 2, 3].map((index) => (
//                             <motion.div
//                                 className='flex flex-col items-center bg-white py-8 px-5 rounded-3xl border shadow-md md:mr-10 lg:mr-20 mb-8'>
//                                 <Image
//                                     src='/assets/hero/singer.png'
//                                     width={50}
//                                     height={50}
//                                     className='rounded-full border shadow-md'
//                                     alt='Team Member Image'
//                                 />
//                                 <div className='flex flex-col items-center mt-4'>
//                                     <div className='flex items-center mb-2'>
//                                         <p className='text-gray-700'>John Doe</p>
//                                         <p className='ml-2 text-red-500'>Founder / CEO</p>
//                                     </div>
//                                     <p className='font-bold'>Foundation Team</p>
//                                     <p className='text-gray-700'>Lorem ipsum dolor sit amet.</p>
//                                     <h4 className='font-bold mt-2'>Location: New York</h4>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/** Advisors Team */}
//                 <div className='bg-white flex flex-col justify-center items-center py-12'>
//                     <motion.div
//                         initial='hidden'
//                         whileInView='show'
//                         variants={fadeIn('up', 0.3)}
//                         className='text-4xl xl:text-6xl font-bold mb-8'>
//                         Advisors Team
//                     </motion.div>
//                     <div className='flex flex-wrap justify-center items-center gap-4'>
//                         {[1, 2, 3].map((index) => (
//                             <motion.div
//                                 key={index}
//                                 initial='hidden'
//                                 whileInView='show'
//                                 variants={fadeIn('up', 0.7)}
//                                 className='flex flex-col items-center bg-white py-8 px-5 rounded-3xl border shadow-md md:mr-10 lg:mr-20 mb-8'>
//                                 <Image
//                                     src='/assets/hero/singer.png'
//                                     width={50}
//                                     height={50}
//                                     className='rounded-full border shadow-md'
//                                     alt='Team Member Image'
//                                 />
//                                 <div className='flex flex-col items-center mt-4'>
//                                     <div className='flex items-center mb-2'>
//                                         <p className='text-gray-700'>John Doe</p>
//                                         <p className='ml-2 text-red-500'>Founder / CEO</p>
//                                     </div>
//                                     <p className='font-bold'>Advisors Team</p>
//                                     <p className='text-gray-700'>Lorem ipsum dolor sit amet.</p>
//                                     <h4 className='font-bold mt-2'>Location: New York</h4>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/** Investors */}
//                 <div className='bg-white flex flex-col justify-center items-center py-12'>
//                     <motion.div
//                         initial='hidden'
//                         whileInView='show'
//                         variants={fadeIn('up', 0.7)}
//                         className='text-4xl xl:text-6xl font-bold mb-8'>
//                         Investors
//                     </motion.div>
//                     <div className='flex flex-wrap justify-center items-center gap-4'>
//                         {[1, 2, 3].map((index) => (
//                             <motion.div
//                                 className='flex flex-col items-center bg-white py-8 px-5 rounded-3xl border shadow-md md:mr-10 lg:mr-20 mb-8'>
//                                 <Image
//                                     src='/assets/hero/singer.png'
//                                     width={50}
//                                     height={50}
//                                     className='rounded-full border shadow-md'
//                                     alt='Team Member Image'
//                                 />
//                                 <div className='flex flex-col items-center mt-4'>
//                                     <div className='flex items-center mb-2'>
//                                         <p className='text-gray-700'>John Doe</p>
//                                         <p className='ml-2 text-red-500'>Founder / CEO</p>
//                                     </div>
//                                     <p className='font-bold'>Investors</p>
//                                     <p className='text-gray-700'>Lorem ipsum dolor sit amet.</p>
//                                     <h4 className='font-bold mt-2'>Location: New York</h4>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
