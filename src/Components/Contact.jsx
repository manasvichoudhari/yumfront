import React from "react";
import { RiMailFill, RiPhoneFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import 'animate.css';
import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/pacifico'
import '@fontsource/montserrat';

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown text-indigo-400"
            style={{ fontFamily: "Roboto, sans-serif",  }}
          >
            Let's Discuss Opportunities
          </h2>
          <p
            className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-1s"
            style={{fontFamily: "Montserrat, sans-serif",  }}
          >
            I look forward to connecting with professionals and exploring new ventures.
          </p>
        </div>

        {/* Avatar & Name */}
        <div className="flex flex-col items-center gap-6">
          <div className="text-[10rem] animate__animated animate__zoomIn animate__delay-2s">
            <span role="img" aria-label="developer">
              👩🏻
            </span>
          </div>
          <h3
            className="text-3xl font-bold text-indigo-400 animate__animated animate__fadeInDown animate__delay-3s"
            style={{ fontFamily: "Roboto, sans-serif", }}
          >
            Manasvi Choudhari
          </h3>
          <p
            className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-3s"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            THE WEB DEVELOPER
          </p>
        </div>

        {/* Intro Text Above Links */}
        <div className="text-center mt-8 animate__animated animate__fadeInUp animate__delay-4s">
          <p
            className="text-lg text-gray-300 mb-6"
            style={{ fontFamily: "Roboto, sans-serif",  }}
          >
            Feel free to connect with me through any of the platforms below. I'm always open to new opportunities and collaborations!
          </p>
        </div>

        {/* Social Icons with Details */}
        <div className="flex justify-center gap-8 mt-4 animate__animated animate__fadeInUp animate__delay-4s">
          {/* Email */}
          <a
            href="mailto:manasvichoudhari1910@gmail.com"
            className="flex flex-col items-center hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
          >
            <RiMailFill size={40} />
            <span className="text-sm text-gray-300">Email</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919131341101"
            className="flex flex-col items-center hover:text-green-400 transition-all duration-300 transform hover:scale-110"
          >
            <RiPhoneFill size={40} />
            <span className="text-sm text-gray-300">Phone</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/manasvichoudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
          >
            <RiGithubFill size={40} />
            <span className="text-sm text-gray-300">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/manasvi-choudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
          >
            <RiLinkedinFill size={40} />
            <span className="text-sm text-gray-300">LinkedIn</span>
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
