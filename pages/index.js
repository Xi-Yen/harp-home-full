// app/layout.js
export const metadata = {
  title: "Harp Home Services | Reliable Heating, Cooling & Plumbing",
  description: "Top-rated home services for heating, cooling, plumbing, and more. Serving your neighborhood with trusted professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}

// app/page.js (Home)
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

// app/about/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          We are a passionate company focused on delivering quality home services. Our team of experts brings reliable and timely solutions to your doorstep.
        </p>
      </div>
      <Footer />
    </div>
  );
}

// app/services/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Heating", "Cooling", "Plumbing", "Electrical", "Maintenance"].map((service) => (
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition" key={service}>
            <h2 className="text-xl font-semibold mb-2">{service}</h2>
            <p className="text-gray-600">Detailed description about {service.toLowerCase()} services.</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// app/contact/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Your message" rows="5" className="w-full p-3 border rounded-xl"></textarea>
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Harp Home
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-green-600">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-center p-6 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Harp Home Services. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}

// (favicon.ico should be placed in public/favicon.ico)