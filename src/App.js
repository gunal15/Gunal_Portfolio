import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/about/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/experience/experience';
import { initializeAnalytics } from './analytics';

const App = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
