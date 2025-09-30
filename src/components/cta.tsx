import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const CTA = () => {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Boost Your Rankings?
              </h2>

              <p className="text-lg opacity-90 mb-6">
                Let&apos;s discuss your SEO goals and create a strategy that
                delivers real results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />

                  <span className="text-sm font-medium">Email</span>
                </div>

                <p className="text-sm opacity-75">
                  thillai2408@gmail.com
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />

                  <span className="text-sm font-medium">Phone</span>
                </div>

                <p className="text-sm opacity-75">+91 63820 07540</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />

                  <span className="text-sm font-medium">Location</span>
                </div>

                <p className="text-sm opacity-75">Tamil Nadu, India</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />

                  <span className="text-sm font-medium">Response</span>
                </div>

                <p className="text-sm opacity-75">24-48 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}

          <div className="text-center lg:text-right space-y-6">
            <div className="space-y-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition">
                <Mail className="w-4 h-4 mr-2" />
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <div className="text-sm opacity-75">
                <p>Free consultation • No obligations • Quick response</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-sm opacity-60">
                © 2025 Thillai Nathan SEO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTA;
