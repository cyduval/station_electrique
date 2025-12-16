import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoFlow DELTA 2 - Station d'Énergie Portable",
  description: "Découvrez la station d'énergie portable EcoFlow DELTA 2. Guide complet, comparatifs, cas d'usage et avis.",
  keywords: "station énergie portable, générateur électrique portable, EcoFlow Delta 2, batterie solaire portable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
