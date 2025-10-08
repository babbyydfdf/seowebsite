import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Navigation from "@/components/navigation";
import CTA from "@/components/cta";
// import Footer from "@/components/footer"; // optional

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thillai Nathan – SEO Engineer & AI Search Expert",
  description:
    "Thillai Nathan is an SEO Engineer and AI Search Expert focused on technical SEO, semantic content, and building visibility across global search engines.",
  alternates: {
    canonical: "https://www.thillainanthan.com/",
  },
  openGraph: {
    title: "Thillai Nathan – SEO Engineer & AI Search Expert",
    description:
      "Thillai Nathan is an SEO Engineer and AI Search Expert focused on technical SEO, semantic content, and building visibility across global search engines.",
    url: "https://www.thillainanthan.com/",
    siteName: "Thillai Nathan SEO",
    images: [
      {
        url: "https://www.thillainanthan.com/path-to-your-image.png",
        width: 1024,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thillai213",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Navigation />

        <main>{children}</main>

        <CTA />

        {/* JSON-LD Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.thillainanthan.com/#person",
              name: "Thillai Nathan",
              url: "https://www.thillainanthan.com/",
              image: "https://www.thillainanthan.com/path-to-your-image.png",
              jobTitle: "SEO Engineer & AI Search Expert",
              description: metadata.description,
              sameAs: [
                "https://www.instagram.com/seothillai/",
                "https://x.com/thillai213/",
                "http://www.linkedin.com/in/thillai-nathan-/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
