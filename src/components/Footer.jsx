"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flexCenter ">
        <div className="padding-container max-container flex  flex-col gap-20">
  

    <div className="w-full  mx-auto p-0 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="xl:ml-10 lg:ml-10 md:ml-10 sm:ml-0 block xl:text-xl sm:text-sm text-white font-alexBrush sm:text-center">
                <Image
                        src="/3.png"
                        alt="meter"
                        width={130}
                        height={120}
                        className="lg:w-48 xl:w-48 md:w-48 sm:w-28 "
                    />
            </a>
             
            <span className="block  xl:text-xl  lg:text-lg md:text-lg sm:text-xs text-white font-alexBrush sm:text-center">© 2024 Armatrix. All Rights Reserved.</span>
            
           

            <ul className="lg:mr-16 xl:mr-16 md:mr-16 sm:mr-0 sm:ml-0  lg:w-48 xl:w-48 md:w-48 ">
            <span style={{ width: "20%", height: "50%" }} className="block lg:px-2 xl:px-2 md:px-2 sm:px-0 xl:text-xl lg:text-lg md:text-lg sm:text-xs text-white  font-alexBrush">contact@armatrix.in</span>
                {/* <li>
                    contact@armatrix.in
                
                </li> */}
            </ul>
           
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2 sm:my-2" />
  {/* <a className="block px-2 text-gray-500 sm:text-center dark:text-gray-400 font-alexBrush" href="https://github.com/mevikash">Credit: meVikash</a> */}
    </div>

          
        </div>
      </footer>
    );
};


export default Footer;

