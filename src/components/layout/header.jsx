"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the drawer
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#111d5c]">
        <nav className="lg:px-12 md:px-10 p-6 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/white-logo.webp"
                width={150}
                height={60}
                alt="logo"
              />
            </Link>

            <div>
              <button className="block lg:hidden" onClick={toggleMenu}>
                {menuOpen ? <IoClose size={25} color="#fff" /> : <IoMenuSharp size={25} color="#fff" />}
              </button>
              <div
                className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${menuOpen ? 'block' : 'hidden'}`}
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <Link
                      href="/"
                      onClick={handleMenuItemClick} // Close the drawer on click
                      className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                        path === "/" ? "bg-[#8842f4] text-white" : "text-white"
                      }`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      onClick={handleMenuItemClick}
                      className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                        path === "/about-us" ? "bg-[#8842f4] text-white" : "text-white"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={handleMenuItemClick}
                      className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                        path === "/services" ? "bg-[#8842f4] text-white" : "text-white"
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      onClick={handleMenuItemClick}
                      className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                        path === "/team" ? "bg-[#8842f4] text-white" : "text-white"
                      }`}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      onClick={handleMenuItemClick}
                      className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                        path === "/contact-us" ? "bg-[#8842f4] text-white" : "text-white"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div
          id="drawer-navigation"
          className={`bg-white fixed top-20 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <div className="py-4 overflow-y-auto">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-">
              <li>
                <Link
                  href="/"
                  onClick={handleMenuItemClick}
                  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                    path === "/" ? "bg-[#8842f4] text-white" : "text-black"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={handleMenuItemClick}
                  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                    path === "/about-us" ? "bg-[#8842f4] text-white" : "text-black"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={handleMenuItemClick}
                  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                    path === "/services" ? "bg-[#8842f4] text-white" : "text-black"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  onClick={handleMenuItemClick}
                  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                    path === "/team" ? "bg-[#8842f4] text-white" : "text-black"
                  }`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={handleMenuItemClick}
                  className={`block py-2 pr-4 pl-3 rounded lg:text-primary-700 dark:text-white ${
                    path === "/contact-us" ? "bg-[#8842f4] text-white" : "text-black"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
