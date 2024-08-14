

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import OCProvider from "~/providers/OCProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascendix",
  description: "Generated by create next app",
};

const opts = {}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050814] dark`}>
        <OCProvider>{ children }</OCProvider>
      </body>
    </html>
  );
}
