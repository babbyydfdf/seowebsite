import {
  Calendar,
  Target,
  TrendingUp,
  Search,
  BarChart3,
  Zap,
  ArrowRight,
} from "lucide-react";

const Strategy = () => {
  const strategySteps = [
    {
      month: "Month 1-2",
      icon: Target,
      title: "Foundation & Audit",
      description:
        "Complete technical SEO audit, keyword research, and competitor analysis to build a solid foundation.",
      deliverables: [
        "Technical SEO fixes",
        "Keyword strategy",
        "Content audit",
        "Competitor analysis",
      ],
    },
    {
      month: "Month 2-3",
      icon: Search,
      title: "On-Page Optimization",
      description:
        "Optimize all existing pages, improve content quality, and implement proper schema markup.",
      deliverables: [
        "Page optimization",
        "Content enhancement",
        "Schema markup",
        "Internal linking",
      ],
    },
    {
      month: "Month 3-4",
      icon: TrendingUp,
      title: "Content Strategy",
      description:
        "Create high-quality, SEO-optimized content that targets your main keywords and attracts your audience.",
      deliverables: [
        "Content calendar",
        "Blog posts",
        "Landing pages",
        "Resource pages",
      ],
    },
    {
      month: "Month 4-5",
      icon: Zap,
      title: "Link Building Campaign",
      description:
        "Execute strategic link building through guest posting, digital PR, and relationship building.",
      deliverables: [
        "Quality backlinks",
        "Guest posts",
        "Digital PR",
        "Brand mentions",
      ],
    },
    {
      month: "Month 5-6",
      icon: BarChart3,
      title: "Performance Optimization",
      description:
        "Improve site speed, Core Web Vitals, and user experience to boost rankings further.",
      deliverables: [
        "Speed optimization",
        "UX improvements",
        "Mobile optimization",
        "Core Web Vitals",
      ],
    },
    {
      month: "Month 6+",
      icon: Calendar,
      title: "Scale & Dominate",
      description:
        "Scale successful strategies, expand to new keywords, and maintain market dominance.",
      deliverables: [
        "Growth scaling",
        "New markets",
        "Advanced tactics",
        "Ongoing optimization",
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            My Proven{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              6-Month SEO Strategy
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This is exactly how I help businesses achieve 300%+ organic growth.
            Each phase builds on the previous one for maximum impact.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {strategySteps.map((step, index) => (
            <div
              key={index}
              className="card card-hover p-6 group transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-bg group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="badge badge-outline text-xs font-medium">
                  {step.month}
                </span>
              </div>

              <h3 className="card-title text-xl">{step.title}</h3>
              <p className="card-description">{step.description}</p>

              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {step.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
