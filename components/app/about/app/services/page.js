import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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