'use client';
import Image from 'next/image'
const Amination = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="flexCenter max-container relative w-full">
                <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image
                        src="/hand1.jpg"
                        alt="meter"
                        width={300}
                        height={758}
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
            </div>
        </section>
    );
};

export default Amination;
