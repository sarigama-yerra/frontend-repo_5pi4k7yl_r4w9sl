import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amelia Ross',
    role: 'Kitchen Remodel • Hawthorne',
    quote:
      'They transformed our cramped kitchen into a warm, open space we love. The attention to detail and communication were outstanding.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Noah Patel',
    role: 'Full Home Refresh • Kew',
    quote:
      'Professional, on-time, and beautiful craftsmanship. The soft neutral palette made our home feel calm and elevated.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Ensuite Upgrade • Brighton',
    quote:
      'Our bathroom now feels like a boutique spa. The team guided us through finishes and delivered beyond expectations.',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 font-display">What Clients Say</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Kind words from recent projects. We pride ourselves on clear communication and thoughtful design.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <Quote className="absolute -top-3 -left-3 h-7 w-7 text-amber-500/70" />
              <p className="text-neutral-800 leading-relaxed">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
