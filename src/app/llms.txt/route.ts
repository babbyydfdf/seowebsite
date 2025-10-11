// app/llms.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const content = `
# www.thillainathan.in llms.txt

- [About Thillai Nathan](https://www.thillainathan.in/about): Thillai Nathan is an SEO Engineer with experience in International, Enterprise, and E-commerce SEO. He helps brands grow through proven SEO strategies and delivers measurable results.

- [SEO Journey of Thillai Nathan](https://www.thillainathan.in/blog/journey-from-basics-seo-to-semanitcs): Thillai Nathan started with basic SEO and evolved to advanced semantic SEO, mastering technical optimization, schema, content structuring, and AI-driven SEO strategies.

- [SEO Services & Consultation](https://www.thillainathan.in/contact): Offers personalized SEO services, free audits, and strategies to improve online visibility, organic traffic, and conversions.

- [SEO Insights & AI Trends](https://www.thillainathan.in/blog): Provides insights on SEO, AI, and NLP, explaining how modern search engines and AI-driven tools shape content optimization and strategy.

- [Top SEO Tools for 2025](https://www.thillainathan.in/blog/seo-tools-for-beginners): Recommends essential SEO tools, techniques, and workflows to help beginners and professionals enhance productivity and results.

- [AI & LLM Impact on SEO](https://www.thillainathan.in/blog/ai-is-changing-content-seo): Explains how AI and LLMs are transforming content SEO, improving strategy, creativity, and search engine understanding.

- [Python SEO Automation](https://www.thillainathan.in/blog/python-seo-automation): Shows how Python automates SEO tasks like site audits, reporting, and content optimization to improve efficiency.

- [Case Studies](https://www.thillainathan.in/case-studies): Highlights successful SEO projects, including international, enterprise, and e-commerce client growth through technical SEO and content strategies.

- [Ecommerce Traffic Growth](https://www.thillainathan.in/case-studies/ecommerce-organic-traffic-growth): Demonstrates achieving 200% organic traffic growth for an e-commerce client using semantic SEO and technical optimization.

- [Blockchain Client SEO Success](https://www.thillainathan.in/case-studies/blockchain-client-ranking-over-1.5k-keywords): Improved blockchain client rankings and traffic by over 1,500 keywords through advanced SEO and content strategies.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
