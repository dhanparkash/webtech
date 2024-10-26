import React from 'react'

const Aboutushero = () => {
  return (
<section className="w-full bg-cover bg-no-repeat py-[50px] relative" style={{backgroundImage: "url('/slider-processing.webp')"}}>
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
      <div className="w-full lg:w-11/12 grid md:grid-cols-2 justify-between items-center -m-4 mx-auto my-auto relative z-10">
      
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
          <a href="/contact-us" class="relative px-6 py-3 font-bold text-white text-center rounded-lg group">
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative">Get in Touch</span>
</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutushero