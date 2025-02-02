// "use client";
// import React from "react";

// const About = () => {
//   return (
//     <>
//       <div className="relative bg-gray-900 text-white py-20 px-6 lg:px-20">
//         <div className="container mx-auto flex flex-col items-center justify-center space-y-10">
          
//           {/* Text Section */}
//           <div
//             data-aos="fade-up"
//             data-aos-easing="linear"
//             data-aos-duration="1500"
//             className="w-full lg:w-1/2 text-center space-y-6"
//           >
//             <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
//               About Me
//             </h2>
//             <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
//   As a dedicated Frontend Developer, I thrive on crafting intuitive and engaging user experiences.  
//   My expertise in <strong>Next.js, TypeScript, and Tailwind CSS</strong> enables me to build high-performance, scalable, and visually stunning web applications that seamlessly merge design with functionality.
// </p>
// <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
//   Beyond development, I am deeply passionate about cutting-edge technologies like <strong>Artificial Intelligence, Cloud Computing, and Automation</strong>.  
//   My goal is to leverage these innovations to drive efficiency, enhance digital solutions, and create impactful experiences that redefine the future of technology.
// </p>


//             <div className="mt-8">
//               <a
//                 href=""
//                 className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
"use client";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative  bg-[#2A1A37] text-white py-20 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-10">
          
          {/* Text Section */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-full lg:w-1/2 text-center space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              About Me
            </h2>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
              As a dedicated Frontend Developer, I thrive on crafting intuitive and engaging user experiences.  
              My expertise in <strong>Next.js, TypeScript, and Tailwind CSS</strong> enables me to build high-performance, scalable, and visually stunning web applications that seamlessly merge design with functionality.
            </p>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
              Beyond development, I am deeply passionate about cutting-edge technologies like <strong>Artificial Intelligence, Cloud Computing, and Automation</strong>.  
              My goal is to leverage these innovations to drive efficiency, enhance digital solutions, and create impactful experiences that redefine the future of technology.
            </p>

            <div className="mt-8">
              <a
                href=""
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-purple-500 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
