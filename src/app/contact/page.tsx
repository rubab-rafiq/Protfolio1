


"use client";
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#2A1A37] text-white py-16 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-lg lg:text-xl mt-4">
          Have a project idea or want to collaborate? Feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto mt-10 bg-zinc-800 p-8 rounded-lg shadow-lg border-2 border-gray-700">
        <form className="space-y-6">
          <div className="flex items-center bg-gray-600 rounded-lg p-3">
            <FaUser className="text-blue-400 text-xl mr-3" />
            <input
              type="text"
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-300"
              placeholder="Your Name"
            />
          </div>

          <div className="flex items-center bg-gray-600 rounded-lg p-3">
            <FaEnvelope className="text-blue-400 text-xl mr-3" />
            <input
              type="email"
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-300"
              placeholder="Your Email"
            />
          </div>

          <div className="flex items-center bg-gray-600 rounded-lg p-3">
            <FaPhone className="text-blue-400 text-xl mr-3" />
            <input
              type="text"
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-300"
              placeholder="Your Phone"
            />
          </div>

          <div className="bg-gray-600 rounded-lg p-3">
            <textarea
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-300"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-400 text-black font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex justify-center space-x-8">
        <a
          href="#"
          className="text-blue-400 text-4xl hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-white text-4xl hover:text-gray-300 transform hover:scale-125 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-blue-600 text-4xl hover:text-blue-700 transform hover:scale-125 transition-all duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-blue-400 text-4xl hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
