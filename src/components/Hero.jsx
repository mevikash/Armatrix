
//motion
'use client';
import Image from 'next/image';
import Robo from '../../assets/assets/hero/another_image.png'
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const locations = [
    'An Industrial and Defence Robotics Company',
    3000,
    'Kanpur Nagar,  Uttar Pradesh, 208016',
    3000,
]

const Hero = () => {
    return<section className='h-[80vh] bg-#201F23 xl:h-[1500px]' id='home' style={{ backgroundColor: '#201F23' }}>

        <div className='container mx-auto  h-full flex justify-center items-center xl:justify-start'>
            {/** text */}
            <div className='bg-#201F23 h-full flex flex-col justify-center items-center xl:items-start z-0 pt-12' style={{ backgroundColor: '#201F23' }}>
                <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.2}
                    resetOnLeave
                    className='relative flex items-center h-[520px] xl:h-max xl:w-[840px]'
                >
                    <MouseParallaxChild
                        globalFactorX={0.1}
                        globalFactorY={0.2}
                        className='relative'
                    >
                        <motion.div
                            initial='hidden'
                            whileinview={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className=' w-[433px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]'>

                            <Image 
                        src={'/assets/hero/11.png'} 
                        fill 
                        alt='' 
                        className='object-container'/>
                        </motion.div>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        globalFactorX={0.9}
                        globalFactorY={0.9}
                        className='absolute xl:left-6 z-30'
                    >
                        {/* <motion.div
                            variants={fadeIn('up', 2)}
                            initial='hidden'
                            whileinview={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='text-white w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] mix-blend-luminosity'>
                            
                            AAPL
                        </motion.div> */}
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        globalFactorX={0.3}
                        globalFactorY={0.6}
                        className='hidden xl:flex absolute right-0 z-20 opacity-80'
                    >
                        

                    </MouseParallaxChild>
                </MouseParallaxContainer>
                <motion.div
                    variants={fadeIn('up', 1)}
                    initial='hidden'
                    whileinview={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='min-h-[60px] flex items-center mb-6 text-[26px]'>
                    <div className='hidden xl:flex items-ceneter xl:gap-x-0'>
                        <div>{/** Typle something there like locatiojn */}</div>
                        <div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
                            <Image fill src={'/assets/hero/dot.svg'} alt='' sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px" />
                        </div>
                    </div>

                    <TypeAnimation sequence={locations} wrapper='div' speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} style={{ color: 'white' }} />
                </motion.div>
            </div>


            <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileinview={'show'}
                className='hidden xl:flex absolute right-0 top-20 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0  before:z-10'>
                <Image
                    src={Robo}
                    width={617}
                    height={893}
                    alt=''
                    quality={100}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                />

            </motion.div>
        </div>
    </section>
};
export default Hero;