import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-16 bg-cover bg-no-repeat pt-0" style={{backgroundImage: "url('/bg-banner.png')"}}>
      <div className="w-full lg:w-11/12 grid md:grid-cols-2 justify-between items-center -m-4 mx-auto my-auto">
        <div className="w-full p-4">
          <img
            src="/banner-image.webp"
            alt=""
            className="object-contain xl:h-[700px] w-full text-center md:h-[400px] sm:h-[400px]"
          />
        </div>
        <div className="w-full p-4">
          <h1 className="text-3xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-bold leading-none text-left">
          Advik IT Solutions Where Innovation Meets Functionality
          </h1>
          <p className="mt-6 mb-8 text-white text-lg sm:mb-12">
          Advik IT Solutions is a web development brand, we deliver exceptional digital experiences tailored to your unique needs.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/about-us"
              className="px-8 py-3 text-lg font-medium rounded bg-[#2321c1] text-gray-50 text-center"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
