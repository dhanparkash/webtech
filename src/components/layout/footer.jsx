import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap lg:px-12 py-10 px-10 bg-[#0d2753] text-white ">
      <div className="w-full text-center">
        <a href="/" className="flex items-center max-auto justify-center">
          <Image src="/white-logo.webp" width={150} height={60} alt="logo" />
        </a>
        <p className="text-white py-4">
            Innovating tomorrow&apos;s technology today, we empower businesses with
            cutting-edge IT solutions.
          </p>
          <p className="text-white py-2 text-[14px]">
          Copyright 2024. All Rights Reserved. Advik It Soltions.
          </p>         
          
      </div>
    </div>
  );
};

export default Footer;
