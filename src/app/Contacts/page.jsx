"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const Contacts = () => {
    const [success, setSuccess]= useState(true)
    const [error, setError]= useState(true)

    const text = "Say hello";

    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                className="bg-white py-12 px-12 rounded-3xl "
                initial={{ y: "-120vh" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col lg:flex-row gap-80">
                    <div className="flex items-center justify-center text-6xl font-semibold text-gray-800">
                        <motion.div>
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.1
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                    <form className="flex flex-col gap-6 items-center">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border-b-2 border-b-black outline-none resize-none input-field"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border-b-2 border-b-black outline-none resize-none input-field"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className=" bg-transparent border-b-2 border-b-black outline-none resize-none input-field"
                        />
                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="input-field"
                        />
                        <button className="bg-purple-200 rounded font-semibold text-gray-600 px-6 py-2">Send</button>
                        {success && <span className="text-green-600 font-semibold">We have recieved you mail Thanks</span>}
                        {error && <span className="text-red-600 font-semibold">Something went wrong</span>}
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contacts;
