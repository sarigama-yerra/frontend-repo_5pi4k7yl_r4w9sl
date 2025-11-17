import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message'),
    };

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      setStatus({ type: 'success', message: 'Thanks! We will be in touch shortly.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">Let’s Talk About Your Space</h2>
          <p className="mt-3 text-neutral-600">Tell us a little about your project and we’ll get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Name</label>
              <input name="name" required className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-1">Phone (optional)</label>
            <input name="phone" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 mb-1">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell us about your renovation goals, timeline and budget..."></textarea>
          </div>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 transition-colors disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
