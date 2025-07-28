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