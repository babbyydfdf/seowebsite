import { TrendingUp, Users, Clock, Award } from "lucide-react";

const Results = () => {
  const results = [
    {
      metric: "300%+",

      description: "Average Organic Traffic Increase",

      icon: TrendingUp,

      color: "text-success",
    },

    {
      metric: "50+",

      description: "Successful Projects Completed",

      icon: Award,

      color: "text-primary",
    },

    {
      metric: "95%",

      description: "Client Satisfaction Rate",

      icon: Users,

      color: "text-accent",
    },

    {
      metric: "6 Months +",

      description: "Average Time to See Results Based upon Niche & Industry",

      icon: Clock,

      color: "text-primary",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",

      company: "E-commerce Store Owner",

      text: "Thillai transformed our online presence. Our organic traffic increased by 400% in just 8 months!",

      growth: "+400% Traffic",
    },

    {
      name: "Priya Sharma",

      company: "Local Business Owner",

      text: "Amazing SEO work! We now rank #1 for our main keywords and get consistent leads every day.",

      growth: "#1 Rankings",
    },

    {
      name: "Tech Startup CEO",

      company: "SaaS Company",

      text: "His Next.js SEO expertise helped us achieve 250% more organic signups. Highly recommended!",

      growth: "+250% Signups",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Brands Trust Me to{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Grow Their Business
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take my word for it. Here are the real results I
            Have delivered for businesses across India and beyond.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div key={index} className="card text-center p-6">
              <div className="pb-2">
                <result.icon
                  className={`w-8 h-8 mx-auto mb-2 ${result.color}`}
                />

                <h3 className="card-title text-2xl lg:text-3xl font-bold">
                  {result.metric}
                </h3>
              </div>

              <p className="card-description">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="space-y-4">
                <span className="badge badge-outline text-success border-success/20 bg-success/10">
                  {testimonial.growth}
                </span>

                <p className="text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
