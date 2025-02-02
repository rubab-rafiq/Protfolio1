"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A1A37]  text-gray-300 py-12 px-6 shadow-lg shadow-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Branding / Tagline */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white tracking-wide">Creating Digital Experiences</h2>
          <p className="text-gray-400 mt-1 text-sm">Designed & Developed by Rubab</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition duration-300">Home</a>
          <a href="#" className="hover:text-white transition duration-300">About</a>
          <a href="#" className="hover:text-white transition duration-300">Skills</a>
          <a href="#" className="hover:text-white transition duration-300">Projects</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-xl transition duration-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl transition duration-300">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 text-xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 text-xl transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Built with ❤️ by Rubab</p>
      </div>
    </footer>
  );
};

export default Footer;
