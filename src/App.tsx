import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleSystem from './components/ParticleSystem';
import ScrollProgress from './components/ScrollProgress';
import FloatingActionButton from './components/FloatingActionButton';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <ParticleSystem darkMode={false} />
          <ScrollProgress />
          <FloatingActionButton />
          
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
        </>
      )}
    </div>
  );
}

export default App;