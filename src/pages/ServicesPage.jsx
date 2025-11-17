import React from 'react';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight font-serif text-xl">qualityreno786</Link>
          <nav className="hidden sm:flex gap-6 text-sm text-neutral-700">
            <Link to="/services" className="hover:text-neutral-900">Services</Link>
            <Link to="/projects" className="hover:text-neutral-900">Projects</Link>
            <Link to="/about" className="hover:text-neutral-900">About</Link>
          </nav>
          <a href="/#contact" className="hidden sm:inline-flex rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm px-3 py-1.5">Free Quote</a>
        </div>
      </header>

      <section className="bg-amber-50/40">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900">Our Services</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">From kitchens and bathrooms to full-home transformations, we tailor every detail to your lifestyle and budget.</p>
        </div>
      </section>

      <Services />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="rounded-xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">Ready to transform your space?</h3>
              <p className="text-neutral-600">Tell us about your project and get a free, no-obligation quote.</p>
            </div>
            <a href="/#contact" className="inline-flex rounded-md bg-amber-600 hover:bg-amber-700 text-white px-4 py-2">Get a Free Quote</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-amber-50/40">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} qualityreno786. All rights reserved.</p>
          <p>Designed with a warm, light aesthetic for modern homes.</p>
        </div>
      </footer>
    </div>
  );
}
