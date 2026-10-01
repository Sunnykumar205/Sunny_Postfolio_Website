import React, { useEffect } from 'react';
// import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from "./components/CustomCursor";
import SplashCursor from "./components/SplashCursor"
// import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    document.title = "Sunny · Portfolio";
  }, []);

  return (
    <>
    <SplashCursor />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;