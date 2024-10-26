"use client";
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_1hsz8d8";
const TEMPLATE_ID = "template_848ja2v";
const PUBLIC_KEY = "zCJ5YT7K4MM6zfx_W";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(16, "Message must be at least 16 characters"),
});

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
  });
  const [successMessage, setSuccessMessage] = useState("");
  const onSubmit = (data) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#myForm", PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
		setSuccessMessage('Message Sent Successfully');
        reset(); // Reset the form fields after sending the email
      })
      .catch((error) => {
        console.log(error.text);
        alert('Something went wrong!');
      });
  };

  return (
    <section className="py-10 bg-cover" style={{ backgroundImage: "url('/map-contact.png')" }}>
      <div className="grid max-w-6xl grid-cols-1 px-6 py-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h2 className="text-white text-4xl text-left">Get In Touch</h2>
          <p className="pt-2 pb-4 text-white">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            {/* Contact Details */}
            <p className="flex items-center">
              {/* SVG and Address */}
              <span className='text-white'>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              {/* SVG and Phone */}
              <span className='text-white'>123456789</span>
            </p>
            <p className="flex items-center">
              {/* SVG and Email */}
              <span className='text-white'>contact@business.com</span>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" id="myForm">
          <label className="block">
            <span className="mb-1 text-white">Full name</span>
            <input placeholder="Enter Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2" {...register("name")} />
            {errors.name && <p className='text-red-700 py-1'>{errors.name.message}</p>}
          </label>
          <label className="block">
            <span className="mb-1 text-white">Email address</span>
            <input placeholder="Enter Email Address" type="email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2" {...register("email")} />
            {errors.email && <p className='text-red-700 py-1'>{errors.email.message}</p>}
          </label>
          <label className="block">
            <span className="mb-1 text-white">Message</span>
            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2" {...register("message")}></textarea>
            {errors.message && <p className='text-red-700 py-1'>{errors.message.message}</p>}
          </label>
		  <button class="relative px-6 py-3 font-bold text-white text-center rounded-lg group input" type="submit" >
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative text-center">Submit</span>
</button>	
{successMessage && <p className='text-green-500 mt-4 text-center'>{successMessage}</p>} {/* Success message */}	
        </form>

      </div>
    </section>
  );
};

export default Form;
