// pages/index.js
import Head from 'next/head';

export default function Home() {
return ( <div> <Head> <title>HARP Home Services</title> <meta name="description" content="Trusted Home Services" /> </Head>

```
  {/* Hero Section */}
  <section className="bg-green-700 text-white py-20 px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Trust HARP Home Services</h1>
    <p className="text-xl">Your comfort is our mission.</p>
    <button className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded shadow hover:bg-green-100 transition">
      Book a Service
    </button>
  </section>

  {/* About Section */}
  <section className="bg-white text-gray-800 py-20 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
      <p className="text-lg leading-relaxed">
        HARP Home Services has provided reliable heating, cooling, and plumbing services to homes and businesses for over 20 years. Our team is licensed, insured, and committed to your comfort.
      </p>
    </div>
  </section>

  {/* Services Section */}
  <section className="bg-gray-100 text-gray-900 py-20 px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-green-700">Heating</h3>
          <p>Furnace installation, repair, and maintenance to keep you warm all winter.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-green-700">Cooling</h3>
          <p>AC system repairs, tune-ups, and new installations for year-round comfort.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-green-700">Plumbing</h3>
          <p>Fast, affordable plumbing solutions from leaks to replacements.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="bg-green-50 text-gray-800 py-20 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">What Our Customers Say</h2>
      <div className="space-y-6">
        <blockquote className="italic">“HARP saved the day! Fast and friendly service when my AC went out.”</blockquote>
        <blockquote className="italic">“They fixed my plumbing issue within hours — excellent communication.”</blockquote>
      </div>
    </div>
  </section>

  {/* Contact / CTA Section */}
  <section className="bg-green-700 text-white py-20 px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Need Help Today?</h2>
    <p className="text-lg mb-6">Call or book online to schedule a visit.</p>
    <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded shadow hover:bg-green-100 transition">
      Contact Us
    </button>
  </section>

  <footer className="bg-gray-800 text-white py-6 text-center">
    <p>&copy; {new Date().getFullYear()} HARP Home Services. All rights reserved.</p>
  </footer>
</div>
);
}