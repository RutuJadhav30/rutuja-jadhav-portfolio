import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  console.log('App component rendered');
  
  return (
    <div className="min-h-screen bg-black bg-animated-gradient">
      {/* Background overlay with subtle gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"></div>

      {/* Subtle floating orbs for background effect */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-gray-800/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
