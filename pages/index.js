// pages/index.js
import Head from 'next/head';
import { CheckCircle, Phone, Wrench, Snowflake, Flame } from 'lucide-react';

export default function Home() {
return ( <div> <Head> <title>HARP Home Services</title> <meta name="description" content="Trusted Heating, Cooling & Plumbing" /> </Head>

```
  {/* Hero Section */}
  <section className="bg-green-700 text-white py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">Your Comfort is Our Mission</h1>
      <p className="text-xl mb-6">HARP Home Services offers expert heating, cooling, and plumbing solutions.</p>
      <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-green-100 transition">
        Book a Service
      </button>
    </div>
  </section>

  {/* Services Section */}
  <section className="bg-gray-100 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Flame className="text-green-600 w-10 h-10 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-green-700">Heating</h3>
          <p>Keep warm with furnace installation, repair, and maintenance.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Snowflake className="text-green-600 w-10 h-10 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-green-700">Cooling</h3>
          <p>Stay cool with AC repairs, tune-ups, and new installations.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Wrench className="text-green-600 w-10 h-10 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-green-700">Plumbing</h3>
          <p>From leaky faucets to pipe replacements — we’ve got you covered.</p>
        </div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="bg-white py-20 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-green-700 mb-4">About HARP</h2>
        <p className="text-lg leading-relaxed">
          For over 20 years, HARP Home Services has proudly served Connecticut homes with reliable heating, cooling, and plumbing services. Our licensed team brings professionalism, quality, and care to every job.
        </p>
      </div>
      <img src="/team.jpg" alt="Our Team" className="rounded-2xl shadow-md" />
    </div>
  </section>

  {/* Testimonials */}
  <section className="bg-green-50 py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">Happy Customers</h2>
      <div className="space-y-6">
        <blockquote className="italic bg-white p-6 rounded-xl shadow">“Prompt and professional — HARP restored my heat in hours!”</blockquote>
        <blockquote className="italic bg-white p-6 rounded-xl shadow">“Fast plumbing service with transparent pricing. Highly recommend!”</blockquote>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-green-700 text-white py-20 px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Need Help Today?</h2>
    <p className="text-lg mb-6">Call or book online and we’ll be on the way.</p>
    <button className="bg-white text-green-700 px-6 py-3 font-semibold rounded shadow hover:bg-green-100 transition">
      Contact Us
    </button>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 text-white py-6 text-center">
    <p>&copy; {new Date().getFullYear()} HARP Home Services. All rights reserved.</p>
  </footer>
</div>
);
}