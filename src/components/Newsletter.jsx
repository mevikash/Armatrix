// Ensure 'SectionHeader' component is correctly imported from its file
'use client'
import SectionHeader from './SectionHeader'; // Adjust the path if needed
import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';

const Newsletter = () => {
    return (
        <section className='bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat'
        >
            <div className="container mx-auto h-full">
                <div className='flex flex-col h-full items-center justify-center'>
                    {/* text */}
                    <SectionHeader 
                    pretitle='Stable Background' 
                    title='Title Bar' />
                    {/* <div className='relative flex items-center w-full max-w-xl'>
                        <input
                            type='text'
                            placeholder='Email address'
                            className='w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8' // Corrected typo 'clossName' to 'className'
                        />
                        <button
                            type='submit'
                            className='bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6'
                        >
                            Subscribe
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Newsletter; // Ensure the Newsletter component is correctly exported
