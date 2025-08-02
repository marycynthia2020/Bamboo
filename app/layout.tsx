import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";


const inter = Inter({
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Bamboo",
  description: "Coded by Chinemerem Ugbaja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body className="w-screen min-h-screen grid grid-rows-[auto_1fr_auto] relative"
      >
        <Navbar />
        <div className="mt-36"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
