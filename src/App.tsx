import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TechCarousel from './components/TechCarousel';
import Technologies from './components/Technologies';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <TechCarousel />
          <Technologies />
          <Clients />
          <Projects />
          <Team />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App