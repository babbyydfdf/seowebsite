import {
  Search,
  Map,
  Globe,
  MessageSquare,
  ShoppingCart,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Semantic Optimization",
      description:
        "Boost rankings with complete SEO strategy including technical SEO, on-page, semantic optimization, and AI-powered insights for long-term growth.",
      features: [
        "Keyword Research & Mapping",
        "Technical SEO & Core Web Vitals",
        "Semantic SEO & Entity Optimization",
        "Content Strategy & Internal Linking",
        "Schema Markup & Voice Search",
        "Local SEO",
      ],
    },
    {
      icon: Map,
      title: "Topical Map Creation",
      description:
        "Master content hierarchy with topic clusters, internal linking, and search intent mapping to build authority in your niche.",
      features: [
        "Comprehensive Topic Research",
        "Keyword & Topic Clustering",
        "Content Silo Structuring",
        "Search Intent Mapping",
        "Entity-Based SEO Planning",
        "Content Gap Analysis",
      ],
    },
    {
      icon: Globe,
      title: "CMS & Next JS Development",
      description:
        "Fast, secure, and SEO-optimized WordPress & CMS websites built to scale. Includes modern frameworks like Next.js & Vite for server-side SEO performance.",
      features: [
        "Custom WordPress Themes",
        "Speed & Security Optimization",
        "SEO-Ready CMS Setup",
        "Next.js & Vite SSR Optimization",
        "Core Web Vitals & Performance",
        "Modern UI/UX Responsive Design",
      ],
    },
    {
      icon: MessageSquare,
      title: "Answer Engine Optimization (AEO)",
      description:
        "Optimize content for featured snippets, People Also Ask, and voice search. Structured data and conversational AI prompts to dominate SERPs.",
      features: [
        "Featured Snippet Optimization",
        "PAA Targeting",
        "Conversational AI Prompting",
        "Question-Based Keyword Research",
        "FAQ Schema Integration",
        "SERP Domination Strategies",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce SEO",
      description:
        "Tailored SEO strategies for ecommerce platforms that drive sales with optimized product pages, category structures, and conversion-driven content.",
      features: [
        "Product Page Optimization",
        "Category SEO & Navigation",
        "Internal Linking Framework",
        "Content & Schema for Products",
        "Conversion-Focused Copy",
        "Competitor & Market Analysis",
      ],
    },
    {
      icon: Zap,
      title: "AI Automation",
      description:
        "Save time and scale with AI-powered automation for SEO, content, e-commerce, and business processes.",
      features: [
        "AI-Powered SEO Automation",
        "Content Generation & Structuring",
        "Chatbots & Virtual Assistants",
        "Data Processing & Analysis",
        "Social Media Scheduling",
        "Personalized Recommendations",
      ],
    },
    {
      icon: Users,
      title: "Lead Generation",
      description:
        "Convert traffic into customers with optimized funnels, CRO techniques, and personalized user journeys.",
      features: [
        "Conversion Funnels",
        "Landing Pages",
        "A/B Testing & CRO Strategy",
        "Personalized Recommendations",
        "Email Capture & Segmentation",
        "Automation Workflows",
      ],
    },
    {
      icon: TrendingUp,
      title: "CRO Optimization",
      description:
        "Maximize ROI by analyzing user behavior and optimizing conversions with data-driven strategies and testing.",
      features: [
        "Conversion Rate Optimization",
        "User Experience Enhancements",
        "Call-to-Action Optimization",
        "Heatmap & Analytics Insights",
        "Competitor Benchmarking",
        "Growth & Scaling Strategies",
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted-30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How I Help Your Business{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              {" "}
              Dominate Online
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I provide a complete digital growth framework — from semantic SEO to
            AI automation and conversion optimization. Everything you need to
            scale your online presence is right here.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card card-hover p-6 group transition-all duration-300"
            >
              <div className="icon-bg mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="card-title text-lg">{service.title}</h3>
              <p className="card-description">{service.description}</p>

              <div className="mt-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="feature-dot mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
