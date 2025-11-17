import React from 'react';

const projects = [
  {
    title: 'Open-Plan Living Refresh',
    image: 'https://images.unsplash.com/photo-1720872797697-3834db6a8baa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcGVuLVBsYW4lMjBMaXZpbmclMjBSZWZyZXNofGVufDB8MHx8fDE3NjMzNDI0OTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Living Room'
  },
  {
    title: 'Warm Oak Kitchen',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    tag: 'Kitchen'
  },
  {
    title: 'Serene Ensuite',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop',
    tag: 'Bathroom'
  },
  {
    title: 'Soft Neutral Bedroom',
    image: 'https://images.unsplash.com/photo-1560185128-e173042f79dd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwTmV1dHJhbCUyMEJlZHJvb218ZW58MHwwfHx8MTc2MzM0MjQ5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Bedroom'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">Previous Projects</h2>
            <p className="mt-2 text-neutral-600">A glimpse into our recent transformations.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md border border-amber-200 bg-amber-100/60 text-amber-800 hover:bg-amber-100 px-4 py-2 text-sm">Start Your Project</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <span className="inline-flex items-center rounded-md bg-amber-100 text-amber-800 text-xs px-2 py-1">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
