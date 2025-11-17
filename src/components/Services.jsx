import React from 'react';
import { Hammer, Paintbrush, ShowerHead, Ruler } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Kitchen Renovations',
    desc: 'Custom cabinetry, stone benchtops, lighting and modern layouts tailored to your lifestyle.'
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Upgrades',
    desc: 'Spa-like bathrooms with premium fixtures, tiling and clever storage solutions.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Finishes',
    desc: 'Warm neutral palettes, timber textures and paintwork that brighten and calm.'
  },
  {
    icon: Ruler,
    title: 'Full Home Makeovers',
    desc: 'From planning to delivery, we manage complete transformations end-to-end.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">Services</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Crafted for comfort and longevity. We blend design sensibility with quality craftsmanship.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
