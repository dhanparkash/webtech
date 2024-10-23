import React from 'react'

const Aboutushero = () => {
  return (
<section className="w-full bg-cover bg-no-repeat py-[50px]" style={{backgroundImage: "url('/slider-processing.webp')"}}>
<div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
      <div className="w-full lg:w-11/12 grid md:grid-cols-2 justify-between items-center -m-4 mx-auto my-auto">
        <div className="w-full p-10 animate-pulse">
          <img
            src="/hero.png"
            alt=""
            className="object-contain xl:h-[400px] w-full text-center md:h-[400px] sm:h-[400px]"
          />
        </div>
        <div className="w-full p-4">
          <h1 className="text-3xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-bold leading-none text-left">
          Who We Are
          </h1>
          <p className="mt-6 mb-8 text-white text-lg sm:mb-12">
          We specializes in providing technology-based services, solutions. Our companies offer a wide range of services, including web development, web designing, system integration, network infrastructure, and cloud computing.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-left sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/contact-us"
              className="px-8 py-3 text-lg font-medium rounded bg-[#8842f4] text-gray-50 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutushero