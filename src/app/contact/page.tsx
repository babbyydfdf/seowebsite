import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get in touch via email",
      value: "hello@thillainathanseo.com",
      action: "mailto:hello@thillainathanseo.com",
    },
    {
      icon: Phone,
      title: "Call Me",
      description: "Let's discuss your project",
      value: "+91 XXXXX XXXXX",
      action: "tel:+91XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in India",
      value: "Tamil Nadu, India",
      action: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Quick turnaround",
      value: "24-48 Hours",
      action: null,
    },
  ];

  const benefits = [
    "Free SEO audit with every consultation",
    "Custom strategy tailored to your business",
    "Transparent reporting and communication",
    "No long-term contracts required",
    "Proven track record of success",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="contact" className="pt-32 pb-16 text-center scroll-mt-52">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full mb-4">
            <Mail className="w-4 h-4 mr-1" /> Get In Touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Grow Your Business{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Ready to dominate your competition? Let&apos;s discuss your SEO
            goals and create a strategy that delivers real results. Just one
            message away.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <info.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{info.description}</p>
              {info.action ? (
                <a
                  href={info.action}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {info.value}
                </a>
              ) : (
                <p className="font-medium">{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your full name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company/Website
                </label>
                <input
                  id="company"
                  placeholder="Your company or website URL"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Needed
                </label>
                <input
                  id="service"
                  placeholder="SEO, Web Development, Link Building, etc."
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 transition"
              >
                <Send className="w-4 h-4 mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Free SEO Audit</h3>
              <p className="text-gray-600 mb-4">
                Every new client gets a comprehensive SEO audit worth ₹5,000
                absolutely free. I will analyze your website and provide
                actionable insights to improve your rankings.
              </p>
              <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
                Claim Your Free Audit
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-gray-600">
                I respond to all inquiries within 24-48 hours. Your project is
                important, and will give it the attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
