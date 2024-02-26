'use client';
import Image from "next/image";

//icons
import {RiMapPin2Fill} from 'react-icons/ri';
import {RiPhoneFill} from 'react-icons/ri';
import eventsx from '../../../assets/assets/hero/s1.jpg'

//motion

import {motion} from 'framer-motion';
import { fadeIn } from '../../../variants';


const EventBox = ({ events }) => {
    // console.log(events);
    return (
        <motion.div legacybehavior 
        variants={fadeIn ('up', 0.4)}
        initial='hidden'
        whileinview={'show'}
        viewport={{once: false, amount: 0.3}}
        className='bg-black/5 rounded-[10px] p-4 xl:p-12 relative'>
            <div className='flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4'>
                {/* image */}
                <div className='hidden xl:flex w-[400px]'>
                    <Image src={eventsx}
                        width={358}
                        height={489}
                        priority
                        quality={100}
                        alt=''
                    />
                </div>
                {/* event list */}
                <div className='flex-1 bg-black/5 rounded-[10px] h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-tertiary scrollbar-track-white/10 xl:pr-6'>
                    {/** event item */}
                    {events.map((event) => {
                        // console.log(event);
                        return (
                            <div 
                                key={event.id}
                                className="flex flex-col xl:flex-ow items-centerjustify-between gay-y-4 text-center xl:text-left my-4 xl:my-0 boarder-b boarder-white/10 pb-10 xl:py-3 last-of-type:"
                            >
                                <div>
                                    {/*day and months */}
                                    <div className='flex flex-col justify-center items-center lending-tight mb-4 xl:mb-0'>
                                        <div>{event?.id}</div>
                                        <div className="text-[25px] font-black text-primary">{event?.name}</div>
                                        <div className="text-[15px] font-extrabold text-primary">{event?.position}</div>
                                        <div className="text-[20px] font-extrabold">{event?.date?.day}</div>
                                        <div className="text-[15px] font-extrabold text-primary">{event?.date?.month}</div>
                                        {/* <div>${events.location.city}</div> */}
                                    </div>
                                    {/** locations */}
                                    <div className='flex flex-col justify-center items-center lending-tight mb-4 xl:mb-0'>
                                        <div className="flex item-center gap-x-1">
                                            <div >
                                                <RiMapPin2Fill />
                                            </div>
                                            {/* <div></div> */}
                                        </div>
                                        <div>{event?.location?.city}, {event?.location?.State}, {event?.location?.country}</div>
                                                <RiPhoneFill />
                                        <div>{event?.phone}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default EventBox;