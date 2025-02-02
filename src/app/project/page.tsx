
import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const project = [
  {
    id: 1,
    title: "Static Resume",
    image: "/resume.png",
    liveDemo: "https://static-resume-topaz.vercel.app/",
    github: "#",
    description: "A simple static resume showcasing my skills, experience, and contact details.",
  },
  {
    id: 2,
    title: "Dynamic Resume",
    image: "/dynamic.png",
    liveDemo: "https://dynamic-resume-sherable-pdf-download.vercel.app/",
    github: "#",
    description: "A dynamic resume where you can input your details and see a live preview.",
  },
  {
    id: 3,
    title: "Company Website",
    image: "/comany.png",
    liveDemo: "https://html-css-assignment-nu.vercel.app/",
    github: "#",
    description: "A corporate website built with a focus on professional design and usability.",
  },
  {
    id: 4,
    title: "AI Blog (Sanity CMS)",
    image: "/blog.png",
    liveDemo: "https://mileston3-blog-web-m44q.vercel.app/",
    github: "#",
    description: "A blog platform powered by Sanity CMS, focused on AI and technology.",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    image: "/ecommerce.png",
    liveDemo: "https://hackathon-with-sanity.vercel.app/",
    github: "#",
    description: "An e-commerce platform with product listing, shopping cart, and checkout functionality.",
  },
];

const Projects = () => {
  return (
    <section className=" bg-[#2A1A37] text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-500">
            My Projects
          </h2>
          <p className="text-gray-300 mt-3 text-lg">Here are some of the projects I have worked on.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {project.map((project) => (
            <div
              key={project.id}
              className="bg-[#3d2149] rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out  hover:shadow-2xl hover:opacity-90 hover:scale-105 group"
            >
              <div className="relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-semibold text-gray-200/60 mb-4">{project.title}</h3>
                <p className="text-gray-400/50 mb-4 text-xl">{project.description}</p>

                {/* Button Section */}
                <div className="mt-4 flex space-x-6 justify-center md:justify-start">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 flex items-center space-x-2 transition-colors text-2xl duration-300 transform hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex text-2xl items-center space-x-2 transition-colors duration-300 transform hover:scale-105"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
