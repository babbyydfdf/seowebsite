// src/app/case-studies/page.tsx

export const metadata = {
  title: "SEO & Marketing Case Studies",
  description: "Explore real-world SEO and digital marketing case studies, showcasing strategies, results, and best practices for growing online.",
};

import Link from "next/link";
import Image from "next/image"; // ✅ correct import
import { caseStudies } from "@/data/casestudies";

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-20">
      <h2 className="text-4xl font-bold mb-16 text-center bg-text-gradient bg-clip-text text-transparent">
        Case Studies
      </h2>

      <div className="space-y-16">
        {caseStudies.map((study) => (
          <div
            key={study.slug}
            className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition"
          >
            {/* Left side: Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{study.description}</p>

              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-block bg-[#5DA3F9] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#478de0] transition"
              >
                View Full Case Study →
              </Link>
            </div>

            {/* Right side: Actual Image */}
            <div className="flex-1">
              <Image
                src="/b2b-success-result.png" // ✅ your image path (place in /public/images)
                alt="Case Study - Blockchain Company"
                width={600}
                height={300}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

