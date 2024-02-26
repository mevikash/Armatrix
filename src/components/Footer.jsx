"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flexCenter ">
        <div className="padding-container max-container flex  flex-col gap-20">
  

    <div className="w-full  mx-auto p-0 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image
                        src="/3.png"
                        alt="meter"
                        width={130}
                        height={120}
                        className="h-full w-auto px-10"
                    />
            </a>
        <span className="block text-xl xl:text-1xl text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">Armatrix</a>. All Rights Reserved.</span>
            <ul className="flex text-xl xl:text-1xl flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 px-10">
                <li>
                    contact@armatrix.in
                
                </li>
            </ul>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
  <a className="block text-sm text-gray-500 sm:text-center dark:text-gray-400" href="https://github.com/mevikash">meVikash</a>
    </div>

          
        </div>
      </footer>
    );
};


export default Footer;

