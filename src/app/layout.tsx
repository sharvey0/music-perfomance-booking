import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Music Site",
  description: "Booking and performance details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
        <div className="site-root">

          <Header />

          <main className="h-200">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
