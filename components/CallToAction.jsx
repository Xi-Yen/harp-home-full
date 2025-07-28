export default function CallToAction() {
  return (
    <section className="bg-green-100 text-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-4">Ready to book your service?</h2>
      <p className="mb-6 text-gray-700">Contact us now to schedule fast, reliable home service.</p>
      <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
        Get in Touch
      </a>
    </section>
  );
}