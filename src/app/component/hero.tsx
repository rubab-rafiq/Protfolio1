
"use client";

import React, { useEffect } from "react";
import profilepic from "../../../public/profile.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative  bg-[#2A1A37] text-white min-h-screen flex items-center py-20 sm:py-0 px-6">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-44 h-44 bg-gradient-to-r from-pink-400 to-teal-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Profile Image (Left Side) */}
        <div
          className="relative w-64 h-64 lg:w-96 lg:h-96 transform transition-transform duration-500 ease-in-out group"
          data-aos="fade-up"
        >
          <Image
            src={profilepic}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-teal-500 shadow-xl group-hover:scale-110 transition-all duration-300"
          />
          {/* Glowing Ring Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-400 animate-spin-slow"></div>
        </div>

        {/* Right Section: Text */}
        <div className="text-center lg:text-left max-w-2xl space-y-6" data-aos="fade-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
            Hello, I'm <span className="text-white">Rubab Rafiq</span>
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
            Passionate about <span className="font-semibold">AI</span>, futuristic <span className="font-semibold">UI/UX designs</span>, and building seamless user experiences. Turning <span className="font-semibold">imagination into reality</span> with the latest web technologies. 🚀
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-center lg:justify-start">
            <a
              href="https://static-resume-topaz.vercel.app"
              target="_blank"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-800 rounded-lg shadow-lg hover:opacity-80 transform hover:scale-105 transition-all duration-300"
            >
              Get My CV
            </a>
            <a
              href="https://www.linkedin.com/in/rubab-m-rafiq-8696a2330/"
              target="_blank"
              className="px-8 py-3 text-lg font-semibold border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
