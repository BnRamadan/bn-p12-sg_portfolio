import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <ScrollToTopButton />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
