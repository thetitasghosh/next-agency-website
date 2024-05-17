import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import "./globals.css";
import Menubutton from '@/components/ui/MenuButton'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGT-SOFTWARE",
  description: "Created by Titas Ghosh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Footer />
        <Toaster/>
        <Menubutton/>
      </body>
    </html>
  );
}
