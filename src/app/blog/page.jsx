import Link from 'next/link';

export const metadata = {
  title: 'Blog — Thillainathan',
  description: 'Thoughts, ideas, and writing by Thillainathan.',
};

// Add your posts here — or fetch from MDX / CMS later
const posts = [
  {
    slug: 'what-is-seo',
    title: 'What is SEO?',
    date: 'May 2025',
    excerpt: 'A beginner-friendly breakdown of search engine optimisation and why it matters.',
  },
  // Add more posts here
];

export default function BlogPage() {
  return (
    <>
      <h2>Blog</h2>
      <br />
      <p>Random thoughts, learnings, and things I find interesting.</p>
      <br />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '32px' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <h3 style={{ marginBottom: '4px' }}>{post.title}</h3>
            </Link>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '6px' }}>{post.date}</p>
            <p style={{ marginBottom: 0 }}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
