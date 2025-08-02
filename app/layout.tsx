import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

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
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]"
      >
        <nav>This is nav bar</nav>
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}
