export const metadata = {
  title: "Harp Home Services | Reliable Heating, Cooling & Plumbing",
  description: "Top-rated home services for heating, cooling, plumbing, and more.",
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