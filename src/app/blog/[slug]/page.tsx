import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#5DA3F9] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 mt-30">{blog.title}</h1>
        <p className="text-sm opacity-90">
          {blog.date} • {blog.author} • {blog.readTime}
        </p>
      </div>

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6 py-12">
        {/* Left Sidebar (TOC placeholder) */}
        <aside className="hidden lg:block col-span-2 sticky top-20 self-start text-sm text-gray-600">
        </aside>

        {/* Blog Content */}
        <article className="col-span-12 lg:col-span-8 prose prose-lg max-w-none">
          {blog.content}
        </article>

        {/* Right Sidebar (CTA button) */}
        <aside className="hidden lg:block col-span-2 sticky top-20 self-start mt-20">
          <div className="bg-[#EBF4FF] border border-[#5DA3F9] rounded-xl p-4 text-center">
            <p className="font-semibold mb-3">Want more SEO tips?</p>
            <button className="px-4 py-2 bg-[#5DA3F9] text-white rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
