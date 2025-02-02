// "use client";
// import React from "react";
// import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, color: "from-orange-500 to-red-500" },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, color: "from-blue-500 to-indigo-500" },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, color: "from-blue-400 to-blue-600" },
//   { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" />, color: "from-gray-700 to-gray-900" },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, color: "from-teal-400 to-teal-600" },
//   { name: "Figma", icon: <SiFigma className="text-pink-500" />, color: "from-pink-500 to-purple-500" },
//   { name: "Java", icon: <FaJava className="text-red-500" />, color: "from-red-500 to-yellow-500" },
// ];

// const Skills = () => {
//   return (
//     <section className="bg-gray-900 text-white py-16 px-6 lg:px-20">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
//           My Skills
//         </h2>
//         <p className="text-gray-300 text-lg lg:text-xl mt-4">
//           Technologies I work with to build professional and scalable web applications.
//         </p>
//       </div>

//       {/* Skills Grid */}
//       <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-r ${skill.color} p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300`}
//           >
//             <div className="text-5xl mb-3">{skill.icon}</div>
//             <h3 className="text-lg font-semibold">{skill.name}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, color: "from-purple-500 to-pink-500" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, color: "from-indigo-500 to-purple-500" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, color: "from-indigo-400 to-indigo-600" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" />, color: "from-gray-600 to-gray-900" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, color: "from-teal-500 to-teal-700" },
  { name: "Figma", icon: <SiFigma className="text-pink-500" />, color: "from-pink-600 to-purple-700" },
  { name: "Java", icon: <FaJava className="text-red-900 " />, color: "from-red-600 to-yellow-600" },
];

const Skills = () => {
  return (
    <section className=" bg-[#2A1A37] text-white py-16 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
       
         <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              My Skills
            </h2>
        <p className="text-gray-300 text-lg lg:text-xl mt-4">
          Technologies I work with to build professional and scalable web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${skill.color} p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300`}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
