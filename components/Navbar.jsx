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