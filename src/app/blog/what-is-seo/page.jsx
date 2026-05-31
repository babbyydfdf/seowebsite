import Link from 'next/link';

export const metadata = {
  title: 'What is SEO? — Thillainathan',
  description: 'A beginner-friendly breakdown of search engine optimisation.',
};

export default function WhatIsSEOPage() {
  return (
    <>
      <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px' }}>
        <Link href="/blog" style={{ color: 'var(--muted)' }}>← Blog</Link>
      </p>

      <h2>What is SEO?</h2>
      <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px', marginBottom: '32px' }}>May 2025</p>

      <p>
        SEO stands for Search Engine Optimisation. It's the practice of improving a website so
        it appears higher in search engine results pages (SERPs) like Google.
      </p>

      <p>
        Add the rest of your content here. Every blog post uses this same layout — just duplicate
        this file and update the content.
      </p>
    </>
  );
}
