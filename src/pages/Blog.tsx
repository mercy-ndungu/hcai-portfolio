import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import BlogPreviewCard from "@/components/BlogPreviewCard";

const posts = [
  {
    title: "What Does 'Fair' Mean When the Data Is Colonial?",
    date: "March 2026",
    readingTime: "8 min read",
    excerpt: "Fairness metrics assume a baseline of equal representation. But what happens when the training data itself was shaped by colonial infrastructure decisions?",
    slug: "fair-colonial-data",
    category: "HCAI Concepts",
  },
  {
    title: "A Field Guide to SHAP Values",
    date: "February 2026",
    readingTime: "12 min read",
    excerpt: "SHAP values are everywhere in explainable AI literature. Here's how to actually read them, and what they can't tell you.",
    slug: "shap-field-guide",
    category: "Data Stories",
  },
  {
    title: "Reflections from AI for Social Good Nairobi",
    date: "January 2026",
    readingTime: "5 min read",
    excerpt: "Notes and takeaways from presenting our Kenya health facility audit at the AI for Social Good conference in Nairobi.",
    slug: "ai-social-good-nairobi",
    category: "Reflections",
  },
  {
    title: "The Myth of Neutral Data",
    date: "December 2025",
    readingTime: "6 min read",
    excerpt: "Every dataset carries the fingerprints of the people who collected it. Understanding this is the first step toward building fairer AI systems.",
    slug: "myth-neutral-data",
    category: "HCAI Concepts",
  },
  {
    title: "Fairlearn in Practice: A Tutorial",
    date: "November 2025",
    readingTime: "10 min read",
    excerpt: "A hands-on walkthrough of using Microsoft's Fairlearn library to assess and mitigate bias in a classification model.",
    slug: "fairlearn-tutorial",
    category: "Case Studies",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead title="Blog" description="Writing about human-centred AI, algorithmic fairness, and building technology that sees people." url="https://humansinthecode.ai/blog" />
      <div className="container mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-foreground mb-4">Blog</h1>
        <p className="text-muted-foreground font-body mb-10 max-w-2xl">
          Writing about human-centred AI, algorithmic fairness, and what it means to build technology that sees people.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPreviewCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
