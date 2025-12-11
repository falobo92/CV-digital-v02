import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueMap from './components/ValueMap';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Inicializar Supabase al arrancar la aplicación
import './utils/supabaseClient';

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-mono selection:bg-high-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ValueMap />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
