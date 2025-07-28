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