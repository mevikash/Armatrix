// "use client"
// import { motion } from "framer-motion";
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { TfiLocationPin } from "react-icons/tfi";
// import { TfiEmail } from "react-icons/tfi";

// const Contacts = () => {
//     const formRef = useRef();
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     // const text = "Reach Out to Us";

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { target } = e;
//         const { name, value } = target;

//         setForm({
//             ...form,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);

//         emailjs
//             .send(

//                 'service_1f6cnhg',
//                 'template_6xjyous',

//                 {
//                     from_name: form.name,
//                     to_name: "Armatrix",
//                     from_email: form.email,
//                     to_email: "contact@armatric.in",
//                     message: form.message,
//                 },
//                 'zQGDRmMqTHv1LC81c'
//             )
//             .then(
//                 () => {
//                     setLoading(false);
//                     alert("Thank you for reaching out. We will get back to you as soon as possible.");

//                     setForm({
//                         name: "",
//                         email: "",
//                         message: "",
//                     });
//                 },
//                 (error) => {
//                     setLoading(false);
//                     console.error(error);

//                     alert("Ahh, something went wrong. Please try again.");
//                 }
//             );
//     };


//     return (


//         <section  style={{ width: "100%", height: "100%" }} className=" bg-white xl:h-[1200px] lg:h-[1200px] sm:h-[1200px] md:h-[1200px]">

//             <div style={{ backgroundColor: '#201F23', height: '200px' }}>
//                 {/* Content goes here */}
//             </div>

//             <div className='flex text-black flex-wrap justify-center items-center gap-0 py-12'>
//                 <motion.div
//                     initial='hidden'
//                     className='  xl:text-6xl lg:text-4xl md:text-3xl  sm:text-2xl shadow rounded-xl font-bold mb-0'>
//                     Reach Out to Us
//                 </motion.div>
//             </div>
//             <div style={{ position: 'relative' }}>

//                 <div className='container mx-auto flex flex-col justify-center items-center'>
//                     {/** Foundation Team */}
//                     <div className='text-black flex flex-col justify-center items-center py-30'>

//                         <div className="flex item-center justify-center  bg-#201F23 items-center py-10">
//                             <div className="w-1/2 justify-center mx-4">
//                                 <div className="flex items-center">
//                                     <TfiLocationPin className="xl:text-6xl lg:text-6xl md:text-4xl sm:text-6xl mr-2" /> {/* Adjust the icon size */}
//                                     <p style={{ width: "100%", height: "70%" }} className="xl:text-xl lg:text-lg md:text-base sm:text-sm">112/216, Swaroop Nagar, Kanpur, Uttar Pradesh - 208016, India</p>
//                                 </div>
//                                 <hr  style={{ marginRight: '40px' }} className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


//                                 <div className="flex items-center">
//                                     <TfiEmail className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl mr-2" /> {/* Adjust the icon size */}
//                                     <p style={{ width: "100%", height: "70%" }} className="xl:text-xl lg:text-lg md:text-base sm:text-sm">contact@armatrix.in</p>
//                                 </div>
//                             </div>



//                             <div className=" w-1/2 text-center  text-xl xl:text-2xl  mb-8 flex flex-col lg:flex-row gap-80">
//                                 <form
//                                     ref={formRef}
//                                     onSubmit={handleSubmit}
//                                     className='mt-12 flex flex-col gap-8'
//                                 >
//                                     <label className='flex flex-col'>
//                                         <span style={{ width: "90%", height: "100%" }} className='text-black font-medium mb-4'>Name</span>
//                                         <input
//                                             type='text'
//                                             name='name'
//                                             value={form.name}
//                                             onChange={handleChange}
//                                             placeholder=""
//                                             style={{ width: "90%", height: "70%" }}
//                                             className='bg-tertiary xl:py-4 xl:px-48 sm:py-2 sm:px-24 lg:px-32 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
//                                         />
//                                     </label>
//                                     <label className='flex flex-col'>
//                                         <span style={{ width: "90%", height: "100%" }} className='text-black font-medium mb-4'> Email</span>
//                                         <input
//                                             type='email'
//                                             name='email'
//                                             value={form.email}
//                                             onChange={handleChange}
//                                             style={{ width: "90%", height: "70%" }}
//                                             placeholder=""
//                                             className='bg-tertiary xl:py-4 xl:px-48 sm:py-2 sm:px-24 lg:px-32 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
//                                         />
//                                     </label>
//                                     <label className='flex flex-col'>
//                                         <span style={{ width: "90%" }} className='text-black font-medium mb-4'>Your Message</span>
//                                         <textarea
//                                             rows={7}
//                                             name='message'
//                                             value={form.message}
//                                             onChange={handleChange}
//                                             style={{ width: "90%", height: "70%" }}
//                                             placeholder=''
//                                             className='bg-tertiary xl:py-4 xl:px-8 sm:py-2 sm:px-24 lg:px-3 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
//                                         />
//                                     </label>


//                                     <button
//                                         type='submit'
//                                         className='bg-tertiary xl:py-4 xl:px-8 sm:py-2 sm:px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary'
//                                     >
//                                         {loading ? "Sending..." : "Send"}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default Contacts;



"use client"
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";

const Contacts = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // const text = "Reach Out to Us";

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(

                'service_1f6cnhg',
                'template_6xjyous',

                {
                    from_name: form.name,
                    to_name: "Armatrix",
                    from_email: form.email,
                    to_email: "contact@armatric.in",
                    message: form.message,
                },
                'zQGDRmMqTHv1LC81c'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you for reaching out. We will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };


    return (


        <section  style={{ width: "100%", height: "100%" }} className=" bg-white xl:h-[1200px] lg:h-[1200px] sm:h-[1200px] md:h-[1200px]">

            <div style={{ backgroundColor: '#201F23', height: '200px' }}>
                {/* Content goes here */}
            </div>

            <div className='flex text-black flex-wrap justify-center items-center gap-0 py-12'>
                <motion.div
                    initial='hidden'
                    className='  xl:text-6xl lg:text-4xl md:text-3xl  sm:text-2xl shadow rounded-xl font-bold mb-0'>
                    Reach Out to Us
                </motion.div>
            </div>
            <div style={{ position: 'relative' }}>

                <div className='container mx-auto flex flex-col justify-center items-center'>
                    {/** Foundation Team */}
                    <div className='text-black flex flex-col justify-center items-center py-30'>

                        <div className="flex item-center justify-center  bg-#201F23 items-center py-10">
                            <div className="w-1/2 justify-center mx-4">
                                <div className="flex items-center">
                                    <TfiLocationPin className="xl:text-6xl lg:text-6xl md:text-4xl sm:text-6xl mr-2" /> {/* Adjust the icon size */}
                                    <p style={{ width: "100%", height: "70%" }} className="xl:text-xl lg:text-lg md:text-base sm:text-sm">112/216, Swaroop Nagar, Kanpur, Uttar Pradesh - 208016, India</p>
                                </div>
                                <hr  style={{ marginRight: '40px' }} className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


                                <div className="flex items-center">
                                    <TfiEmail className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl mr-2" /> {/* Adjust the icon size */}
                                    <p style={{ width: "100%", height: "70%" }} className="xl:text-xl lg:text-lg md:text-base sm:text-sm">contact@armatrix.in</p>
                                </div>
                            </div>



                            <div className=" w-1/2 text-center  text-xl xl:text-2xl  mb-8 flex flex-col lg:flex-row gap-80">
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className='mt-0 flex flex-col gap-8'
                                >
                                    <label className='flex flex-col'>
                                        <span style={{ width: "90%", height: "100%" }} className='text-black font-medium mb-4'>Name</span>
                                        <input
                                            type='text'
                                            name='name'
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder=""
                                            style={{ width: "90%", height: "70%" }}
                                            className={`bg-tertiary w-full sm:w-96 md:w-80
                                            sm:px-20 lg:w-96 xl:w-96 sm:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium`}
                                            // className='bg-tertiary xl:py-4 xl:px-48 sm:py-2 sm:px-24 lg:px-32 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
                                        />
                                    </label>
                                    <label className='flex flex-col'>
                                        <span style={{ width: "90%", height: "100%" }} className='text-black font-medium mb-4'> Email</span>
                                        <input
                                            type='email'
                                            name='email'
                                            value={form.email}
                                            onChange={handleChange}
                                            style={{ width: "90%", height: "70%" }}
                                            placeholder=""
                                            className={`bg-tertiary w-full sm:w-100 md:w-80
                                            sm:px-20 lg:w-96 xl:w-96 sm:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium`}
                                            // className='bg-tertiary xl:py-4 xl:px-48 sm:py-2 sm:px-24 lg:px-32 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
                                        />
                                    </label>
                                    <label className='flex flex-col'>
                                        <span style={{ width: "90%" }} className='text-black font-medium mb-4'>Your Message</span>
                                        <textarea
                                            rows={7}
                                            name='message'
                                            value={form.message}
                                            onChange={handleChange}
                                            style={{ width: "90%", height: "70%" }}
                                            placeholder=''
                                            className='bg-tertiary xl:py-4 xl:px-8 sm:py-2 sm:px-20 lg:px-3 lg:py-2 md:px-16 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-100 border-none font-medium'
                                        />
                                    </label>


                                    <button
                                        type='submit'
                                        className='bg-tertiary xl:py-4 xl:px-8 sm:py-2 sm:px-3 lg:px-4 lg:py-2 md:px-4 md:py-2 placeholder:text-secondary text-white rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary'
                                    >
                                        {loading ? "Sending..." : "Send"}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contacts;



