import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
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
          <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900">About Us</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">We create calm, timeless spaces with a focus on craftsmanship and communication.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Our Story</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">Founded in Melbourne, qualityreno786 brings together designers, builders, and project managers who believe great renovations are a partnership. We listen first, then guide you through finishes, timelines, and budgets with clarity.</p>
            <p className="mt-3 text-neutral-700 leading-relaxed">From boutique bathrooms to full-home transformations, our goal is to deliver spaces that feel warm, functional, and enduring.</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-neutral-200">
            <img src="https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwYXQlMjB3b3JrfGVufDB8MHx8fDE3NjMzNDMwNTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team at work" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-amber-50/40">
        <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-3xl font-semibold text-amber-700">10+ yrs</p>
            <p className="text-sm text-neutral-600">Industry Experience</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-3xl font-semibold text-amber-700">120+</p>
            <p className="text-sm text-neutral-600">Projects Delivered</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-3xl font-semibold text-amber-700">5★</p>
            <p className="text-sm text-neutral-600">Client Satisfaction</p>
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
