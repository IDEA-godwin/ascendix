

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "~/components/personals/modal";

import OCProvider from "~/providers/OCProvider";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

import { headers } from 'next/headers' // added
import WalletProvider from '~/providers/wallet-provider'

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
  const cookies = headers().get('cookie')

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <WalletProvider cookies={cookies}>
          <OCProvider>
            <ModalProvider>{ children }</ModalProvider>
          </OCProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
