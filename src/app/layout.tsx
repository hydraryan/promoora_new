import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Promoora — Turning Offline Businesses Online",
  description:
    "We build high-converting websites that elevate your digital presence. Premium web development for coaching institutes, gyms, clinics, and local brands.",
  keywords: [
    "web development",
    "website design",
    "digital presence",
    "business website",
    "landing pages",
    "Promoora",
  ],
  openGraph: {
    title: "Promoora — Turning Offline Businesses Online",
    description:
      "We build high-converting websites that elevate your digital presence.",
    type: "website",
    siteName: "Promoora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promoora — Turning Offline Businesses Online",
    description:
      "We build high-converting websites that elevate your digital presence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
