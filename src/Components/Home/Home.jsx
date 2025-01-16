import React from "react";
import Buttons from "./Buttons";
import AnimatedText from "./AnimatedText";
import Animated2 from "./Animated2";
import { motion } from "framer-motion";import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/pacifico'
import '@fontsource/montserrat';
import avatar from "../../assests/img.jpg";




const Home = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-blend-lighten dark:bg-gray-900 h-screen">
      <div className="container py-16 px-6 md:px-16 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-10">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 lg:max-w-lg text-center lg:text-left">
            {/* Avatar and Name */}
            <motion.div
  className="flex justify-center lg:justify-start items-center gap-4 mb-6"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 rounded-full flex items-center justify-center overflow-hidden shadow-xl lg:block hidden">
    <img
      src={avatar}
      alt="Avatar"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
  <h1 className="text-2xl flex gap-2 lg:gap-4 md:gap-2 md:text-3xl lg:text-4xl text-white leading-tight" style={{ fontFamily: "pacifico, cursive" }}>
    <AnimatedText text="I" />
    <AnimatedText text="M" />
    <AnimatedText text="MANASVI" />
  </h1>
</motion.div>



            {/* Profession and Emoji */}
            <motion.p
              className=" flex gap-2 md:gap-4 lg:gap-5 text-[12px] md:text-sm lg:text-xl text-gray-200 mb-6 leading-tight  "style={{ fontFamily: "pacifico, cursive" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Animated2 text=" A " />
              <Animated2 text="PASSIONATE " />
              <Animated2 text=" WEB " />
              <Animated2 text=" DEVELOPER" />
            </motion.p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start">
              <Buttons />
            </div>
          </div>

          {/* Right Section - Emoji */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] text-indigo-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span role="img" aria-label="developer">
                👨‍💻
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
