import Image from "next/image";

// src/components/SeoSuccess.tsx
export default function SeoSuccess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Proven{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            SEO Success
          </span>{" "}
          for My Clients
        </h2>

        {/* Box 1 */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 mb-12 flex flex-col items-center text-center hover:shadow-3xl transition">
          <Image
            src="/thillai-seo-success.png" // replace with your ranking graph image
            alt="SEO Rankings Growth"
            width={800} // ✅ add width
            height={400} // ✅ match your h-[400px]
            className="rounded-lg mb-6 w-full h-[400px] object-contain"
          />
          <h3 className="text-2xl font-semibold mb-3">Real SEO Results</h3>
          <p className="text-lg text-gray-600 max-w-3xl">
            Increased organic traffic by{" "}
            <span className="font-bold text-[#5DA3F9]">250%</span>, helping
            brand to focus on US Based Blockchain Market rank higher and attract
            qualified leads.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-3xl transition">
          <Image
            src="/optimized-ai-searche-enginees.png" // replace with your traffic growth image
            alt="SEO Traffic Growth"
            width={800} // ✅ add width
            height={400} // ✅ match your h-[400px]
            className="rounded-lg mb-6 w-full h-[400px] object-contain"
          />
          <h3 className="text-2xl font-semibold mb-3">Sustainable Growth</h3>
          <p className="text-lg text-gray-600 max-w-3xl">
            Creating a Complete{" "}
            <span className="font-bold text-[#5DA3F9]">Topical Map</span> for
            Software Developmment Business to Achieve AI Ranking Seach in
            ChatGPT. I have work on Bing Especially for AI Ranking Strategy. By
            giving Right Signals to Google.
          </p>
        </div>
      </div>
    </section>
  );
}
