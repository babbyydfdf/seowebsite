// src/app/blog/page.tsx
import Link from "next/link";
export const metadata = {
  title: "SEO, Digital Marketing & Tech Insights – Blog",
  description: "Read practical tips, case studies, and insights on SEO, digital marketing, and web development to grow your online presence.",
};
export default function BlogPage() {
  // Manually list your blogs here
  const blogs = [
    {
      slug: "journey-from-basics-seo-to-semanitcs",
      title: "My Journey in SEO: From Basics to Semantic SEO",
      description: "Learn how SEO evolves from basic strategies to advanced semantic techniques for better search visibility and results.",
    },
    {
      slug: "seo-tools-for-beginners",
      title: "Top SEO Tools for Beginners in 2025",
      description: "Most useful SEO tools for beginners to improve website ranking, keyword research, and content optimization.",
    },
    {
      slug: "future-of-seo",
      title: "Future of SEO in 2025: AI, NLP, and Answer Engines",
      description: "Understand the upcoming SEO trends, search engine updates, and strategies to stay ahead in website optimization.",
    },
      {
      slug: "ai-is-changing-content-seo",
      title: "How AI is Changing Content SEO",
      description: "Explore ways content strategies are evolving to improve search visibility, engagement, and online growth effectively.",
    },
    {
      slug: "python-seo-automation",
      title: "How Python Can Automate Your SEO Tasks in 2025",
      description: "Learn how Python can streamline SEO tasks like data collection, on-page audits, backlink analysis, and keyword research, helping you work smarter in 2025.",
    },
  
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center mt-20">All Blogs</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="inline-block text-[#5DA3F9] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
