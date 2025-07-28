export default function ServicesPreview() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {["Heating", "Cooling", "Plumbing"].map((service) => (
        <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition" key={service}>
          <h2 className="text-xl font-bold mb-2">{service}</h2>
          <p className="text-gray-700">Trusted {service.toLowerCase()} solutions for your home.</p>
        </div>
      ))}
    </section>
  );
}