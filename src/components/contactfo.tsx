import { Send, CheckCircle, Target } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-200 rounded mb-4">
              <Send className="w-3 h-3 mr-1" />
              Get Started
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let&apos;s Discuss Your{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                SEO Goals
              </span>
            </h2>

            <p className="text-gray-600 mb-8">
              Ready to dominate your competition? Fill out this form and
              I&apos;ll send you a free SEO audit within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    placeholder="Your full name"
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium">
                  Website URL *
                </label>

                <input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium">
                  Your SEO Goals
                </label>

                <textarea
                  id="goals"
                  placeholder="Tell me about your business goals, target keywords, current challenges..."
                  rows={4}
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                <Send className="w-4 h-4 mr-2" />
                Get My Free SEO Audit
              </button>

              <p className="text-sm text-gray-500 text-center">
                No spam, no sales calls. Just pure SEO insights delivered to
                your inbox.
              </p>
            </form>
          </div>

          {/* Benefits */}

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You&apos;ll Get:</h3>

              <div className="space-y-4">
                {[
                  "Complete SEO audit of your website",

                  "Keyword opportunity analysis",

                  "Technical SEO issues identification",

                  "Competitor analysis report",

                  "Custom 6-month growth strategy",

                  "Free 30-minute consultation call",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border rounded-2xl bg-blue-50 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-600" />

                <h4 className="font-semibold">Success Guarantee</h4>
              </div>

              <p className="text-gray-600 text-sm">
                Guaranteed SEO growth — I will keep working with you until your
                business achieves success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">24hrs</div>

                <p className="text-sm text-gray-500">Response Time</p>
              </div>

              <div>
                <div className="text-2xl font-bold text-blue-600">₹0</div>

                <p className="text-sm text-gray-500">Audit Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
