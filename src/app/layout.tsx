// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Example font
import "./globals.css";
// import Header2 from "@/components/Header2";
// import Footer from '@/components/Footer'

// Load fonts (replace Inter with your actual font)
const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] }) // Example

export const metadata: Metadata = {
  title: "Poopity Scoop",
  description: "The Desert's cleanest pooper cleaners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font classes here if needed */}
      <body className={`${inter.className} bg-white text-dark`}>
        {/* <Header2 /> */}
        <main>{children}</main> {/* Page content goes here */}
        {/* <Footer />  */}
      </body>
    </html>
  );
}
