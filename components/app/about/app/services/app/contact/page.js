import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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