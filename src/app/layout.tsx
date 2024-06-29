import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/section/Header";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGT-SOFTWARE",
  description: "Created by Titas Ghosh",
  metadataBase: new URL("https://next-agency-website-five.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
