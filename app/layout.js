import "./globals.css";

export const metadata = {
  title: "Chinmay S. Patil - Portfolio",
  description: "CFD Engineer specializing in simulation, optimization, and visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}