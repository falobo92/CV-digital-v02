import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueMap from './components/ValueMap';
import Experience from './components/Experience';
import Education from './components/Education';
import References from './components/References';
import Footer from './components/Footer';

const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function SectionFallback({ label }: { label: string }) {
  return (
    <div className="py-16 sm:py-20 border-b-6 border-ink bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-ink text-cream px-4 py-3 border-3 sm:border-4 border-ink shadow-brutal inline-flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest">
          <span className="w-2.5 h-2.5 bg-accent-yellow animate-pulse" />
          Cargando {label}…
        </div>
      </div>
    </div>
  );
}

function App() {
  // Precarga suave: evita “saltos” al llegar a secciones por anchor muy rápido
  useEffect(() => {
    const t = window.setTimeout(() => {
      void import('./components/TechStack');
      void import('./components/Projects');
      void import('./components/Contact');
    }, 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink font-mono selection:bg-high-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ValueMap />
        <Experience />
        <Suspense fallback={<SectionFallback label="stack" />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionFallback label="proyectos" />}>
          <Projects />
        </Suspense>
        <Education />
        <References />
        <Suspense fallback={<SectionFallback label="contacto" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
