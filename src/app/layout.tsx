import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/navigation";

import CTA from "@/components/cta";

// import Footer from "@/components/footer"; // (only if you have a separate Footer)

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thillai Nathan | SEO Expert",

  description: "Helping brands grow with proven SEO strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />

        <main>{children}</main>

        <CTA />

        {/* <Footer />  // If you use a dedicated Footer, put it here and remove any footer from CTA */}
      </body>
    </html>
  );
}
