import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      <div className="relative h-full max-w-6xl mx-auto px-6 flex items-end pb-10">
        <div className="backdrop-blur-[1px]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 leading-tight">
            Elevate Your Home with Thoughtful Renovations
          </h1>
          <p className="mt-4 text-neutral-600 text-base md:text-lg max-w-2xl">
            Contemporary, warm and timeless transformations—from kitchens and bathrooms to full home makeovers.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 transition-colors">
              Get a Free Quote
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-5 py-2.5 transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
