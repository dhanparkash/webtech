"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname ()
  console.log(path)
  return (
    <header>
    <nav className="bg-white border-gray-200  lg:px-12 py-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
            <Link href="/" className="flex items-center">
                <Image src="/webtechlogo.png"  width={150} height={60} alt="logo"/>
            </Link>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <a href="#" className="text-white bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/' ? "bg-black text-white" : "text-black"}`} aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us"  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/about-us' ? "bg-black text-white" : "text-black"}`}>About Us</Link>
                    </li>
                    <li>
                        <Link href="#"  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/features' ? "bg-black text-white" : "text-black"}`}>Features</Link>
                    </li>
                    <li>
                        <Link href="#" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/team' ? "bg-black text-white" : "text-black"}`}>Team</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/contact-us' ? "bg-black text-white" : "text-black"}`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
