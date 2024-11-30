"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(16, "Message must be at least 16 characters"),
});

export default function ContactMe() {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      const res = await submitContactForm(data);
      console.log('form res',res);
      if (res.success) {
        setSuccessMessage("Message Sent Successfully");
        reset(defaultValues);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to true
    }
  }

  // console.log('err ', errors)

  return (
    <section
      className="py-10 bg-cover"
      style={{ backgroundImage: "url('/map-contact.png')" }}
    >
      <div className="grid max-w-6xl grid-cols-1 px-6 py-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h2 className="text-white text-4xl text-left">Get In Touch</h2>
          <p className="pt-2 pb-4 text-white">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-4">
            {/* Contact Details */}
            <p className="flex items-center">
              {/* SVG and Address */}
              <span className="text-white flex items-center gap-2">
                <FiMapPin /> Plot No. 2244, Mohali Tower, Punjab, 160071
              </span>
            </p>
            <p className="flex items-center">
              {/* SVG and Phone */}
              <span className="text-white flex items-center gap-2">
                <FaPhoneAlt /> 123456789
              </span>
            </p>
            <p className="flex items-center">
              {/* SVG and Email */}
              <span className="text-white flex items-center gap-2">
                <MdOutlineMail /> info@advikitsolutions.com
              </span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6"
        >
          <div className="">
            <label className="block border-inherit">
              <span className="mb-1 text-white">Full name</span>
              <input
                placeholder="Enter Name"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-700 py-1">{errors.name.message}</p>
              )}
            </label>
            {/* <ErrorMessage error={errors.name} /> */}
          </div>
          <div className="">
            <label className="block border-0">
              <span className="mb-1 text-white">Email address</span>
              <input
                placeholder="Enter Email Address"
                type="text"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-700 py-1">{errors.email.message}</p>
              )}
            </label>
            {/* <ErrorMessage error={errors.email} /> */}
          </div>
          <div className="sm:col-span-2">
            <label className="block border-0">
              <span className="mb-1 text-white">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 dark:bg-gray-100 p-2"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="text-red-700 py-1">{errors.message.message}</p>
              )}
            </label>
            {/* <ErrorMessage error={errors.message} /> */}
          </div>
          <button
            className="relative px-6 py-3 font-bold text-white text-center rounded-lg group input"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="loader">Loading...</span> // Loader text or spinner
            ) : (
              <span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative text-center">Submit</span>
              </span>
            )}
          </button>
          {successMessage && (
            <p className="text-green-500 mt-4 text-center">{successMessage}</p>
          )}{" "}
          {/* Success message */}
        </form>
      </div>
    </section>
  );
}
