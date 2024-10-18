import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap lg:px-12 py-6 bg-black text-white">
      <div className="w-full sm:w-3/12 md:w-3/12">
      <a href="" className="flex items-center">
                <Image src="/webtechlogo.png"  width={150} height={60} alt="logo"/>
            </a>
      </div>
      <div className="w-full sm:w-3/12 md:w-3/12">
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Blogs</li>
        <li>Featured In</li>
      </ul>
      </div>
      <div className="w-full sm:w-3/12 md:w-3/12">
      <ul>
        <li>Services</li>
        <li>FAQs</li>
        <li>Logs</li>
      </ul>
      </div>
      <div className="w-full sm:w-3/12 md:w-3/12">
      <ul>
        <li>Get in Touch</li>
        <li>Layout</li>
        <li>Webtech In</li>
        <li>Watch Now</li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;