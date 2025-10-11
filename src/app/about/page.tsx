import Image from "next/image";

export const metadata = {
  title: "About - Thillai Natha",
  description:
    "Check about Me Thillai Nathan, an SEO Engineer & Digital Marketing Expert helping businesses grow online through technical SEO and strategy.",
};

const About = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* 1. Hero About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/thillainathan.png"
              alt="Thillai Nathan"
              width={320} // ✅ set width to match lg:w-[320px]
              height={400} // ✅ approximate height (adjust if you know exact ratio)
              className="rounded-2xl shadow-lg w-72 sm:w-80 lg:w-[320px] mt-6 lg:mt-12 object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 mb-4">
              👨‍💻 About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                SEO & Digital Marketing 
              </span>{" "}
              <span>Professional from India</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Hi! I&apos;m Thillai Nathan, and I Have been obsessed with SEO for
              over 3 years now. What started as curiosity became my passion, and now
              it&apos;s my mission to help businesses dominate their online
              space.
            </p>
          </div>
        </div>
      </section>

      {/* 2. My Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">My Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed space-y-6">
            Hi, I&apos;m Thillai Nathan thanks for taking the time to read my
            journey. I begin my career in SEO directly. and then learned lot as
            a web developer, where I inevitably ended up solving problems which
            impacted how websites ranked on search engines. That curiosity drove
            me further into technical SEO audits — reviewing site speed,
            structure, and performance. I continued to branch out into on-page
            and off-page SEO, learning how it all fit together.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            During my experience with a B2B company, I was given an opportunity
            to delve into international SEO. It made me realize that SEO is not
            universal cultures, search patterns, and even the way Google
            interprets can vary from nation to nation.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Apart from work, I am also a gym lover enthusiast, and I approach
            SEO in a similar way regular effort and experimentation equal
            results. My interest led me to delve into Python, machine learning,
            and even Google&apos;s search patents, just to figure out how search
            actually works. I also read quite a bit of marketing books, which
            provided me with a wider perspective of strategy beyond ranking.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            My first client project was a WordPress + PHP site, and that taught
            me how technical and content decisions influence visibility.
            Subsequently, I had a German eCommerce client where I handled SEO
            for their CMS platform. With the wave of SaaS gaining momentum, I
            transitioned into working with Next.js websites, where SEO is much
            more advanced and technical.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Now, I bring all of those learnings from technical SEO and coding
            to semantic optimization and content strategy together to produce
            long-term results. And this blog is where I Will chronicle my
            journey, experimentation, and thinking on SEO and the future of
            search.
          </p>
        </div>
      </section>

      {/* 3. What I've Achieved */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            What I Have Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-blue-600">300%+ Growth</p>
              <p className="mt-2 text-gray-600">
                Average organic traffic increase for my clients
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-blue-600">5+ Clients</p>
              <p className="mt-2 text-gray-600">
                Successful projects across various industries
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-blue-600">95% Success</p>
              <p className="mt-2 text-gray-600">
                Client satisfaction and goal achievement
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-blue-600">SEO Expert</p>
              <p className="mt-2 text-gray-600">
                3+ years of proven SEO expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. My Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">My Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Advanced SEO Strategy",
              "Technical SEO Audits",
              "Keyword Research & Analysis",
              "Content Optimization",
              "Link Building Campaigns",
              "WordPress Development",
              "Next.js SEO Implementation",
              "Conversion Rate Optimization",
              "Google Analytics & GSC",
              "Local SEO",
              "E-commerce SEO",
              "International SEO",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl shadow-md border border-gray-100 bg-white text-gray-800 font-medium hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Work with the Best SEO Guy in India?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your goals and create a custom SEO strategy that
          delivers real results. No fluff, no false promises – just proven
          strategies that work.
        </p>
        <button className="bg-sky-500 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-md transition">
          Let&apos;s Talk Business
        </button>
      </section>
    </main>
  );
};

export default About;
