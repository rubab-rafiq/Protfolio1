"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get active page path
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
    {name: "Projects", href: "/project"}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#21132e] backdrop-blur-lg shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`transition duration-300 ${
                  pathname === href ? "text-yellow-400" : "hover:text-gray-300"
                }`}
                onClick={() => {
                  if (name === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 bg-[#21102f]/90 text-white flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`hover:text-gray-400 ${
              pathname === href ? "text-yellow-400" : ""
            }`}
            onClick={() => {
              setIsOpen(false); // Close menu on click
              if (name === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
