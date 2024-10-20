import React from "react";
import { GrTrophy } from "react-icons/gr";
import { FaCube } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { RiCustomerServiceFill } from "react-icons/ri";
const Whychooseus = () => {
  return (
    <div className="py-10" style={{backgroundImage: "url('/header-bg-4.jpg')"}}>
      <h2 className="text-white text-4xl font-bold font-manrope leading-normal text-center">
        Why Choose Us
      </h2>
      <div className="w-full lg:w-8/12 ustify-center m-auto lg:px-12 grid grid-cols-2 gap-5 py-6">
        <div className="h-full p-4 rounded-lg shadow-md ring-2 group hover:bg-white">
          <div>
          <GrTrophy size={30} className="group-hover:text-black text-white" />
            <h2 className="mb-1 text-xl font-semibold text-white py-3 group-hover:text-black">Expertise:</h2>
            <p className="text-sm text-white group-hover:text-black">
              With years of collective experience, we bring unparalleled
              expertise to every project. From crafting responsive designs to
              implementing robust backend solutions, our developers are adept at
              turning ideas into reality.
            </p>
          </div>
        </div>
        <div className="h-full p-4 rounded-lg shadow-md ring-2 group hover:bg-white">
          <div>
          <FaCube size={30} className="group-hover:text-black text-white" />
            <h2 className="mb-1 text-xl font-semibold text-white py-3 group-hover:text-black">Creativity:</h2>
            <p className="text-sm text-white group-hover:text-black">
              We believe in pushing boundaries and thinking outside the box to
              deliver unique and engaging web experiences. Whether it&apos;s
              designing a sleek user interface or developing interactive
              features, our creative solutions set your brand apart.
            </p>
          </div>
        </div>
        <div className="h-full p-4 rounded-lg shadow-md ring-2 group hover:bg-white">
          <div>
          <GoShieldCheck size={30} className="group-hover:text-black text-white"/>
            <h2 className="mb-1 text-xl font-semibold text-white py-3 group-hover:text-black">Reliability:</h2>
            <p className="text-sm text-white group-hover:text-black">
              We pride ourselves on delivering projects on time and within
              budget, without compromising quality. With a proven track record
              of successful implementations, you can rely on us to exceed your
              expectations, every time.
            </p>
          </div>
        </div>
        <div className="h-full p-4 rounded-lg shadow-md ring-2 group hover:bg-white">
          <div>
          <RiCustomerServiceFill size={30} className="group-hover:text-black text-white"/>
            <h2 className="mb-1 text-xl font-semibold text-white py-3 group-hover:text-black">Support:</h2>
            <p className="text-sm text-white group-hover:text-black">
              Our commitment doesn&apos;t end at deployment. We provide ongoing
              support and maintenance to ensure your website remains secure,
              updated, and optimized. Our responsive support team is always just
              a call or click away, ready to assist you whenever you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
