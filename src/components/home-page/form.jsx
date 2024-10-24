"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
const Form = () => {
    const schemaValidation = z.object({
        firstname: z.string().min(2, "name must be at least 2 characters long"),
        email: z.string().email().min(2, "Email must be at least 2 characters long"),
        message: z.string().min(25,"chataccter should be 25 minimum")
  });  
    const {
        register,
        handleSubmit,
        formState: { errors }, } = useForm({  mode: "onSubmit", resolver: zodResolver(schemaValidation) });  
        const onSubmit = (data) => console.log(data)    

  return (
    <section className="py-10 bg-cover" style={{ backgroundImage: "url('/map-contact.png')" }}>
	<div className="grid max-w-6xl grid-cols-1 px-6  py-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
        <h2 className="text-white text-4xl text-left">Get In Touch</h2>
			<p className="pt-2 pb-4 text-white">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 fill-white">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span className='text-white'>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 fill-white">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span className='text-white'>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 fill-white">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span className='text-white'>contact@business.com</span>
				</p>
			</div>
		</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" >
		
			<label className="block">
				<span className="mb-1 text-white">Full name</span>
				<input  placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-2" {...register("firstname")} />
                {errors.firstname && <p>{errors.firstname.message}</p>}
			</label>
			<label className="block">
				<span className="mb-1 text-white">Email address</span>
				<input placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-2" {...register("email")}/>
                {errors.email && <p>{errors.email.message}</p>}
			</label>
			<label className="block">
				<span className="mb-1 text-white">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" {...register("message")}></textarea>
                {errors.message && <p>{errors.message.message}</p>}
			</label>
			<button class="relative px-6 py-3 font-bold text-white rounded-lg group input" type="submit" >
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative text-center">Submit</span>
</button>			
		</form>
	</div>
</section>
  )
}

export default Form