import React from "react";

const Contacthero = () => {
  return (
    <section className="bg-[#314e83] w-full py-16" >
      <div className="w-full lg:w-11/12 flex flex-wrap -m-2 mx-auto">
        <div className="w-full lg:w-6/12 p-2">
          <img
            src="/business.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="w-full lg:w-6/12 p-2">
          <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl">
            Ac mattis
            <span className="dark:text-violet-600">senectus</span>
            erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-white text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-medium rounded bg-[#192fc8] text-gray-50"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-medium border rounded border-white text-white"
            >
              Malesuada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacthero;
