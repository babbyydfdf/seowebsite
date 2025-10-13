import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'


import "./globals.css";
import Navigation from "@/components/navigation";
import CTA from "@/components/cta";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thillai Nathan – SEO Engineer & AI Search Expert",
  description:
    "Thillai Nathan is an SEO Engineer and AI Search Expert focused on technical SEO, semantic content, and building visibility across global search engines.",
  icons: {
  icon: "https://www.thillainathan.in/favicon.ico",
},
openGraph: {
    title: "Thillai Nathan – SEO Engineer & AI Search Expert",
    description:
      "Thillai Nathan is an SEO Engineer and AI Search Expert focused on technical SEO, semantic content, and building visibility across global search engines.",
    url: "https://www.thillainanthan.in/",
    siteName: "Thillai Nathan SEO",
    images: [
      {
        url: "https://www.thillainanthan.in/path-to-your-image.png",
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
    other: {
    "google-site-verification": "_Mdvm1Iyi5gZxTNXi9HcrQXtTqiMKDfgk1tglNexo6M",
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
      <head>
        {/* ✅ Global WebPage + FAQ JSON-LD Schema */}
        <Script
          id="webpage-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.thillainathan.in/",
              "name": "Thillai Nathan – SEO Engineer & AI Search Expert",
              "description":
                "Thillai Nathan is a solo SEO Engineer from India focused on global SEO, technical audits, and AI-powered search strategies.",
              "inLanguage": "en",
              "author": {
                "@type": "Person",
                "name": "Thillai Nathan",
                "url": "https://www.thillainathan.in/",
                "jobTitle": "SEO Engineer",
                "image": "https://www.thillainathan.in/thillainathan.png",
                "sameAs": [
                  "https://www.facebook.com/thillaiseo",
                  "https://www.instagram.com/seothillai/",
                  "https://x.com/thillai213/",
                  "http://www.linkedin.com/in/thillai-nathan-/",
                  "https://bsky.app/profile/thillaiseo.bsky.social"
                ]
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is Thillai Nathan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Thillai Nathan is a solo SEO Engineer from India helping global clients grow with technical SEO, content strategy, and AI-based search optimization."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What services does Thillai Nathan offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Thillai offers Semantic SEO, Topical Map Creation, CMS & Javascript Website Developmment, Answer Engine Optimization, Ecommerce SEO, AI Automation, technical optimization, content SEO, AI search strategy, and consulting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Thillai Nathan work globally?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Thillai works with clients from the US, UK, Europe, and Asia for international SEO and traffic growth."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to contact Thillai Nathan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use the contact form on the website or email thillai"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <GoogleTagManager gtmId="GTM-KC67DPMC"/>
        <CTA />
      </body>
    </html>
  );
}











