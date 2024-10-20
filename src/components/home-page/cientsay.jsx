"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Clientsay = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-11/12 mx-auto pt-20 pb-20">
      <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal text-center">
        What Our Client Say
      </h2>
      <Slider {...settings}>
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="/sunny-thakur.png"
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
            The team was extremely responsive and helpful throughout the project.
            </blockquote>
            <div className="text-center dark:text-gray-600">
              <p className="font-bold">Sunny Thakur</p>
              <p>CFO Codersminds</p>
            </div>
          </div>
        </div>
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="/shrilanka.png"
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
            “They delivered the project on time, and everything works smoothly.”
            </blockquote>
            <div className="text-center dark:text-gray-600">
              <p className="font-bold">Leroy Jenkins</p>
              <p>IT Professional, Sri lanka </p>
            </div>
          </div>
        </div>
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="/mhdamir.webp"
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
            “The design is user-friendly, and we’ve seen an increase in user engagement since the new site launched.”
            </blockquote>
            <div className="text-center dark:text-gray-600">
              <p className="font-bold">Mohd. Asraf</p>
              <p>CEO of Webhelp</p>
            </div>
          </div>
        </div>
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="/tanuj.png"
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
            “Their expertise in web development helped us solve some complex problems.”
            </blockquote>
            <div className="text-center dark:text-gray-600">
              <p className="font-bold">Tanuj  Rajpura</p>
              <p>CEO Ideation Excellence</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Clientsay;
