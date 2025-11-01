import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const CTA = () => {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </div>
                <a
                  href="mailto:thillai213@gmail.com"
                  className="text-sm opacity-75 hover:underline"
                >
                  thillai213@gmail.com
                </a>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Phone</span>
                </div>
                <a
                  href="tel:+916382007540"
                  className="text-sm opacity-75 hover:underline"
                >
                  +91 63820 07540
                </a>
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

            <div className="pt-8 border-t border-gray-700 space-y-4">
              <p className="text-sm opacity-60">
                © 2025 Thillai Nathan SEO. All rights reserved.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-end gap-5 text-gray-400">
                {/* Butterfly for Bluesky */}
                <a
                  href="https://bsky.app/profile/thillaiseo.bsky.social"
                  target="_blank"
                  aria-label="Bluesky"
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full transition duration-300 hover:bg-[#5DA3F920]" // transparent blue hover
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-400 group-hover:text-[#5DA3F9] transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M12 6c-1.5-3.5-5.5-4.5-7.5-1.5-2 3 1 7 3 8-2 1-4 5-1.5 6.5s5.5-1 6-3.5c.5 2.5 3.5 5 6 3.5S19 13 17 12c2-.5 5-5 3-8-2-3-6-2-8 2z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/seothillai/"
                  target="_blank"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 hover:bg-[#5DA3F920] hover:text-[#5DA3F9]"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="http://www.linkedin.com/in/thillai-nathan-/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 hover:bg-[#5DA3F920] hover:text-[#5DA3F9]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://x.com/thillaiseo"
                  target="_blank"
                  aria-label="X (Twitter)"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 hover:bg-[#5DA3F920] hover:text-[#5DA3F9]"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTA;
