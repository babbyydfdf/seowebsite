// src/app/blog/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";

const categories = ["All", "SEO", "Marketing", "Python-SEO", "AI SEO"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Trending Blogs */}
      <h2 className="text-3xl font-bold mb-8 text-center mt-20">All Blogs</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-[#5DA3F9] text-white border-[#5DA3F9]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All Blogs */}
     
      <div className="grid md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
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
