"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flexCenter ">
        <div className="padding-container max-container flex  flex-col gap-20">
  

    <div className="w-full  mx-auto p-0 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="ml-10 block xl:text-xl sm:text-sm text-white font-alexBrush sm:text-center">
                <Image
                        src="/3.png"
                        alt="meter"
                        width={130}
                        height={120}
                        className="h-full w-auto "
                    />
            </a>
            <div className="sm:flex sm:items-center sm:justify-between"> 
            <span className="block xl:text-xl lg:text-lg md:text-md sm:text-sm text-white font-alexBrush sm:text-center">© 2024 <a href="#" className="font-alexBrush hover:underline">Armatrix</a>. All Rights Reserved.</span>
            </div>
           

            <ul className="mr-10 sm:flex sm:items-center sm:justify-between">
            <span style={{ width: "100%", height: "70%" }} className="block px-2 xl:text-xl lg:text-lg md:text-md sm:text-sm text-white  font-alexBrush">contact@armatrix.in</span>
                {/* <li>
                    contact@armatrix.in
                
                </li> */}
            </ul>
           
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
  <a className="block px-2 text-gray-500 sm:text-center dark:text-gray-400 font-alexBrush" href="https://github.com/mevikash">Credit: meVikash</a>
    </div>

          
        </div>
      </footer>
    );
};


export default Footer;

