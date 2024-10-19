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
                <Image src="/black-logo.webp"  width={150} height={60} alt="logo"/>
            </Link>
            
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/' ? "bg-indigo-700 text-white" : "text-indigo-700"}`} aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us"  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/about-us' ? "bg-indigo-700 text-white" : "text-indigo-700"}`}>About Us</Link>
                    </li>
                    <li>
                        <Link href="/features"  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/features' ? "bg-indigo-700 text-white" : "text-indigo-700"}`}>Features</Link>
                    </li>
                    <li>
                        <Link href="/team" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/team' ? "bg-indigo-700 text-white" : "text-indigo-700"}`}>Team</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${path === '/contact-us' ? "bg-indigo-700 text-white" : "text-indigo-700"}`}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
