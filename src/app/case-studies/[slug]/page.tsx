// src/app/case-studies/[slug]/page.tsx
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/casestudies";

interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((c) => c.slug === params.slug);

  if (!study) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold pt-32 mb-6 text-[#5DA3F9]">
        {study.title}
      </h1>
      <p className="text-gray-600 mb-8">{study.description}</p>
      <div
        className="prose prose-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: study.content.trim() }}
      />
      <div className="prose prose-lg">
        <p>
          🚀 Detailed content for <strong>{study.title}</strong> goes here. You
          can expand this with screenshots, growth stats, charts, etc.
        </p>
      </div>
    </div>
  );
}
