import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS import
import ss from  "../../assests/Screenshot 2025-01-13 230521.png"
import ss2 from "../../assests/ss2.png";
import '@fontsource/poppins'; 
import manu from "../../assests/manu.jpg";
import '@fontsource/pacifico'


const About = () => {
  const style = {
    fontFamily: 'Poppins',
  };
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* About Me Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">Know Me</h2>
          <p className="text-lg text-gray-300 opacity-80" style={{ fontFamily: "pacifico,cursive" }}>
          More Than Just a Developer!!
          </p>
          <p className="text-xl text-gray-300 opacity-80" style={{ fontFamily: "pacifico,cursive" }}>
          Engineer by Degree, Creator by Passion
          </p>
        </div>

        {/* About Me Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex justify-center items-center">
            <div
              className="w-72 h-72 rounded-full shadow-lg border-4 border-gray-700 transform transition duration-500 ease-in-out hover:scale-105"
              data-aos="zoom-in"
            >
              {/* Profile Image */}
              <img
                src={manu}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-start text-white space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          > 
            <p className="text-xl opacity-80 leading-8"style={style}>
              Hi There  <span className=""> i'm Manasvi</span>,a dedicated BTech student from Ujjain Engineering College. With a strong foundation in front-end development, I am passionate about delivering seamless and impactful web solutions that enhance user experience
            </p>
            <p className="text-lg opacity-80 " style={style}>
            My objective is to design and develop websites and applications that seamlessly integrate functionality with a visually appealing user experience. I am committed to leveraging my expertise in HTML, CSS, JavaScript, and React to bring innovative ideas to life while prioritizing usability and design excellence.
            </p>
            <p className="text-lg opacity-80" style={style}>
            Beyond coding, I am passionate about attending tech meetups and staying current with the latest advancements in web development. This allows me to continuously expand my knowledge and stay at the forefront of industry trends
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <h3 className="text-3xl text-indigo-400 font-semibold mb-6">Areas of Expertise</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="HTML Icon"
                className="w-16 h-16"
              />
              <span className="text-lg opacity-80">HTML</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="CSS Icon"
                className="w-16 h-16"
              />
              <span className="text-lg opacity-80">CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="JavaScript Icon"
                className="w-16 h-16"
              />
              <span className="text-lg opacity-80">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/offices/40/000000/react.png"
                alt="React Icon"
                className="w-16 h-16"
              />
              <span className="text-lg opacity-80">React</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/ios/50/000000/git.png"
                alt="Git Icon"
                className="w-16 h-16"
              />
              <span className="text-lg opacity-80">Git</span>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
      {/* Certificates Section */}
<div className="mt-12" data-aos="fade-up">
  <h3 className="text-2xl font-semibold text-indigo-400">Learning Journey</h3>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
    {/* Certificate 1 */}
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105" data-aos="zoom-in">
      <img
        src={ss}  // Replace with actual certificate image or URL
        alt="Certificate 1"
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl text-indigo-400 font-semibold mt-4">MERN STACK DEVELOPMENT</h3>
      <p className="text-lg text-gray-300 mt-2">
        Completed a project-based certification in MERN stack development, where I built full-scale web applications using MongoDB, Express, React, and Node.js, incorporating modern development tools and best practices.
      </p>
      <a
        href="https://drive.google.com/file/d/1hGclKzqgzM6xoSdOogHu_IBO5jBDJYUc/view?usp=sharing" // Replace with your actual certificate link
        download
        className="mt-4 inline-block text-lg text-indigo-400 hover:underline"
      >
        Download Certificate
      </a>
    </div>

    {/* Certificate 2 */}
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105" data-aos="zoom-in">
      <img
        src={ss2} // Replace with actual certificate image or URL
        alt="Certificate 2"
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl text-indigo-400 font-semibold mt-4">HACKATHON PARTICIPATION</h3>
      <p className="text-lg text-gray-300 mt-2">
        Participated in an inter polytechnic hackathon, where my team and I developed a solution using HTML, CSS, JavaScript. Gained hands-on experience in coding and problem-solving under tight deadlines.
      </p>
      <a
        href="https://drive.google.com/file/d/18MOXrSBbkqNWSKnl_QPPOUMoe-LAmkbL/view?usp=sharing" 
        download
        className="mt-4 inline-block text-lg text-indigo-400 hover:underline"
      >
        Download Certificate
      </a>
    </div>
  </div>
</div>


        {/* Let's Connect Button */}
        <div className="mt-12 text-center">
          <a href="/contacts">
            <button
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Let's Connect
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
