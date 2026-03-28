import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ShareButtons from "@/components/ShareButtons";

const blogContent: Record<string, {
  title: string;
  date: string;
  category: string;
  readingTime: string;
  content: string;
}> = {
  "fair-colonial-data": {
    title: "What Does 'Fair' Mean When the Data Is Colonial?",
    date: "March 2026",
    category: "HCAI Concepts",
    readingTime: "8 min read",
    content: `Fairness metrics in machine learning — demographic parity, equalized odds, calibration — all assume some baseline of equal representation or equal treatment. They ask: given the data we have, is the model treating different groups equitably?

But what if the data itself was never equitable to begin with?

In many African contexts, the datasets we work with carry the fingerprints of colonial-era decisions. Health facility locations were determined by colonial administrations that prioritised settler communities. Census data reflects boundaries drawn for administrative convenience, not cultural or demographic reality. Educational infrastructure followed patterns of missionary activity rather than population need.

When we run a fairness audit on a model trained on this data, what baseline are we measuring against? The "ground truth" in the dataset is not some objective reality — it is a historical artifact that encodes the very inequities we claim to be detecting.

This is not an argument against fairness metrics. They are essential tools. But they must be wielded with an understanding of the data's provenance and the power structures that shaped it. A model can be "fair" by every metric and still perpetuate historical injustice if the metrics themselves are calibrated against an unjust baseline.

The path forward requires what I call "provenance-aware fairness" — an approach that interrogates not just the model's outputs, but the historical and political context of its training data. It asks: who collected this data, and why? Whose interests did the collection serve? Whose lived experiences are missing?

These are not comfortable questions. But they are necessary ones if we want AI systems that genuinely serve the humans in the data.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug || ""];

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline font-body">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
      <Layout>
        <SEOHead title={post.title} description={post.content.slice(0, 155)} url={`https://humansinthecode.ai/blog/${slug}`} />
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary font-body mb-6 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-3">
            <time className="text-sm text-muted-foreground font-body">{post.date}</time>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground font-body">{post.readingTime}</span>
            <span className="text-xs px-2 py-0.5 rounded-full font-body bg-info/20 text-info">{post.category}</span>
          </div>
        </header>
        <div className="prose-custom">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-foreground font-body leading-relaxed mb-6">{paragraph}</p>
          ))}
        </div>
        <ShareButtons url={`https://humansinthecode.ai/blog/${slug}`} title={post.title} />
      </article>
    </Layout>
  );
};

export default BlogPost;
