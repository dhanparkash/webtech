import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap lg:px-12 py-10 px-10 bg-[#0d2753] text-white">
      <div className="w-full sm:w-3/12 md:w-3/12">
        <a href="" className="flex items-center">
          <Image src="/white-logo.webp" width={150} height={60} alt="logo" />
        </a>
        <p className="text-white py-4">
            Innovating tomorrow&apos;s technology today, we empower businesses with
            cutting-edge IT solutions.
          </p>
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
