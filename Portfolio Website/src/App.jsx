/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img" />
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <div className="">
          <HeroSection />
        </div>
        <div className="">
          <Projects />
        </div>
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <Bio />
        </div>
        <div className="">
          <Skills />
        </div>
        <div className="">
          <WorkExperience />
        </div>
        <div className="">
          <Education />
        </div>
        <div className="">
          <Contact />
        </div>
        <div className="w-100">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
