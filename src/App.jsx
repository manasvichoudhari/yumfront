import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/projects/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact";import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/pacifico'
import '@fontsource/montserrat';


 
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="bg-gradient-to-t" style={{ fontFamily: "Roboto, sans-serif",  }} >
   
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/contacts" element={<Contact/>}/>
        
        
      </Routes>
    
  <Footer/>
    </div>
  );
};

export default App;
