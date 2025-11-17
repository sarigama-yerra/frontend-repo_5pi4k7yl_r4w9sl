import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">WarmNest Renovations</a>
          <nav className="hidden sm:flex gap-6 text-sm text-neutral-700">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#projects" className="hover:text-neutral-900">Projects</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm px-3 py-1.5">Free Quote</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-amber-50/40">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} WarmNest Renovations. All rights reserved.</p>
          <p>
            Designed with a warm, light aesthetic for modern homes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
