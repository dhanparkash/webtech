"use client";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Whychooseus = () => {
  return (
    <div className="xl:w-10/12 md:w-12/12 sm:w-full mx-auto py-10 px-10">
      <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal text-center">
        About Us 
      </h2> 
      <section className="xl:py-10 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-between items-center xl:gap-12 gap-10 grid lg:grid-cols-2 md:grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:order-1 sm:order-2">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-2xl font-bold font-manrope lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and
                      perseverance. Together, we have overcome challenges,
                      celebrated victories, and created a narrative of progress
                      and success.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full h-full grid md:grid-cols-2 gap-8">
                    <div className="w-full h-full p-3.5 rounded-xl border border-indigo-700 hover:border-gray-400 transition-all duration-400 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex hover:bg-indigo-700 group">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 group-hover:text-white">
                        8+ Years
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed group-hover:text-white">
                        Influencing Digital Landscapes Together
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-indigo-700 hover:border-gray-400 transition-all duration-400 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex hover:bg-indigo-700 group">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 group-hover:text-white">
                        125+ Projects
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed group-hover:text-white">
                        Excellence Achieved Through Success
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-indigo-700 hover:border-gray-400 transition-all duration-400 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex hover:bg-indigo-700 group">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 group-hover:text-white">
                        26+ Awards
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed group-hover:text-white">
                        Our Dedication to Innovation Wins Understanding
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-indigo-700 hover:border-gray-400 transition-all duration-400 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex hover:bg-indigo-700 group-hover:text-white group">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9 group-hover:text-white">
                        99% Happy Clients
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed group-hover:text-white">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-end justify-center items-start flex m-2 media-img">
              <div className="w-full sm:w-[564px] sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="xl:mt-5 xl:ml-5 lg:w-full md:w-[564px] xl:h-full sm:h-full rounded-3xl object-cover media-img"
                  src="/about-us.png"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whychooseus;
