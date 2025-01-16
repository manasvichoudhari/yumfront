import React from "react";
import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/pacifico'
import '@fontsource/montserrat';

import { RiGithubLine, RiLinkedinBoxLine, RiInstagramLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-700 bg-blend-darken text-white py-8 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif",  }}>Let's Connect</h2>
          <p className="text-lg mb-4">I'm always open to discussing new opportunities, collaborations, and ideas.</p>

          <div className="flex justify-center gap-6 mb-6">
            {/* Social Media Icons */}
            <a href="https://github.com/manasvichoudhari" target="_blank" rel="noopener noreferrer">
              <RiGithubLine size={30} className="hover:text-indigo-400 transition duration-300" />
            </a>
            <a href="www.linkedin.com/in/manasvi-choudhari" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxLine size={30} className="hover:text-indigo-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <RiInstagramLine size={30} className="hover:text-indigo-400 transition duration-300" />
            </a>
            <a href="https://wa.me/+919131341101" target="_blank" rel="noopener noreferrer">
              <RiWhatsappLine size={30} className="hover:text-indigo-400 transition duration-300" />
            </a>
            <a href="mailto:manasvichoudhari1910@gmail.com" target="_blank" rel="noopener noreferrer">
              <RiMailLine size={30} className="hover:text-indigo-400 transition duration-300" />
            </a>
          </div>

          <p className="text-sm opacity-80">© {new Date().getFullYear()} manasvi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
