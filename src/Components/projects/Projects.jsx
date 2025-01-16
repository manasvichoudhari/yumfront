import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import loura from "../../assests/loura.png";
import calc from "../../assests/calculator.png";
import ama from "../../assests/amazon.png";
import net from "../../assests/netflix2.png";



 const projects = [
  {
    title: "Netflix clone",
    description: "Built a Netflix clone app that allows users to browse, search, and watch movies and TV shows. Implemented features such as user authentication with Firebase, dynamic content rendering, and a custom video player",
    technologies: ["HTML", "CSS"],
    image: net, 
    demoLink: "https://fascinating-muffin-7513dc.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/netflixmanasvi",
  },
  {
    title: "Amazon Clone",
    description: "Designed and developed an Amazon-inspired e-commerce platform with an emphasis on intuitive user experience. Integrated features like dynamic product display, real-time search, and a responsive mobile-first design.",
    technologies: ["HTML", "CSS", ],
    image: ama, 
    demoLink: "https://demo.com",
    githubLink: "https://github.com/manasvichoudhari/amazonclone",
  },
  {
    title: "Loura Portfolio",
    description: "Created a personal portfolio website to display my web development projects. The site showcases my skills in HTML, TalwindCSS, and JavaScript, featuring responsive design and modern web practices.",
    technologies: ["HTML", "Tailwind CSS"],
    image: loura, 
    demoLink: "https://manulora-clone.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/Loura-clone",
  },
  {
    title: "Calculator",
    description: "This is a simple yet functional Calculator app built using HTML, CSS, and JavaScript. The project demonstrates my ability to create interactive, user-friendly applications with basic front-end technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: calc,
    demoLink: "https://manu-calculator.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/calculator",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
    });
  }, []);

  return (
    <section
    id="projects"
    className="py-20 bg-gradient-to-r from-slate-800 via-slate-700 to-gray-900"
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-white mb-4">My Projects</h2>
        <p className="text-lg text-gray-300 opacity-80">
          Here are some of the projects I've worked on
        </p>
      </div>
  
      {/* Grid layout with responsive design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-500 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex items-center mt-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-600 text-white rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.githubLink}
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.demoLink}
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={24} />
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
