import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-16 bg-[100%] bg-no-repeat" style={{backgroundImage: "url('/header-bg.webp')"}}>
      <div className="w-full lg:w-11/12 flex flex-wrap justify-between items-center -m-4 mx-auto my-auto">
        <div className="w-full lg:w-6/12 p-4">
          <img
            src="/banner-image.webp"
            alt=""
            className="object-contain h-[700px] w-full text-center"
          />
        </div>
        <div className="w-full lg:w-6/12 p-4">
          <h1 className="text-8xl text-white font-bold leading-none sm:text-6xl md:text-6xl text-left">
          Advik IT Solutions Where Innovation Meets Functionality
          </h1>
          <p className="mt-6 mb-8 text-white text-lg sm:mb-12">
          Advik IT Solutions is a web development brand, we deliver exceptional digital experiences tailored to your unique needs.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/about-us"
              className="px-8 py-3 text-lg font-medium rounded bg-[#2321c1] text-gray-50"
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
