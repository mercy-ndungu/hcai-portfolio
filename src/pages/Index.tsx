import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import SkillTag from "@/components/SkillTag";
import ProjectCard from "@/components/ProjectCard";
import BlogPreviewCard from "@/components/BlogPreviewCard";
import { ArrowDown } from "lucide-react";

const skills = [
  "Python", "Fairlearn", "SHAP", "GeoPandas", "scikit-learn",
  "HCAI", "Fairness Auditing", "African AI", "Algorithmic Accountability",
];

const projects = [
  {
    title: "Kenya Health Facility Fairness Audit",
    description: "Does geographic accessibility to health facilities in Kenya reflect population need, or historical infrastructure bias?",
    tags: ["Fairness Audit", "Kenya", "Health"],
    slug: "kenya-health-facility",
  },
  {
    title: "Education Access & Algorithmic Allocation",
    description: "Examining how automated school placement algorithms reproduce or mitigate existing inequities in access to quality education.",
    tags: ["Fairness Audit", "Education", "Explainability"],
    slug: "education-access",
  },
  {
    title: "Credit Scoring in East Africa",
    description: "Investigating fairness dimensions of alternative credit scoring models used across East African fintech platforms.",
    tags: ["Finance", "African AI", "Explainability"],
    slug: "credit-scoring",
  },
];

const blogPosts = [
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
];

const Index = () => {
  return (
    <Layout>
      <SEOHead />
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:w-[60%] text-center md:text-left">
            <h1 className="font-display text-4xl md:text-[52px] text-foreground leading-tight mb-3 animate-fade-in">
              humansinthecode<span className="text-primary">.ai</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body mb-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Building Human-Centered AI Systems in African Contexts
            </p>
            <p className="text-base text-muted-foreground font-body mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              I use data, machine learning, and fairness audits to design AI systems that reflect real-world social and economic realities.
              Experience across investment intelligence, policy-informing analytics, and multi-country data systems.
            </p>
            
             
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-body text-sm font-medium hover:opacity-90 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Case Studies <ArrowDown size={16} />
            </a>
          </div>
          <div className="md:w-[40%] flex justify-center">
            <div
              id="hero-animation"
              className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border-2 border-primary flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm font-body text-center px-4">
                Lottie animation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <hr className="border-primary/20" />
      </div>

      {/* Bio */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div
              id="profile-photo"
              className="w-[160px] h-[160px] rounded-full bg-card border-2 border-border flex items-center justify-center"
            >
              <span className="text-muted-foreground text-xs font-body">Photo</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-foreground font-body text-[17px] leading-[1.7] mb-6">
               I am a data analyst and Human-Centered AI researcher working at the intersection of machine learning, policy, and social impact. My work focuses on algorithmic fairness, explainability, and the challenges of building AI systems in African contexts.
               <br />
               My background is in translating complex, multi-source data into decisions that matter. I have built investment intelligence platforms, designed analytics systems used in policy discussions, and worked with datasets that reflect both formal and informal economic structures.
               <br />
               I am particularly interested in ensuring that AI systems do not reproduce existing inequalities, especially in emerging markets. I believe the next generation of AI systems must be built with context, accountability, and human realities at the core—not added later.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Currently Working On */}
      <section className="py-3 px-6 bg-[hsl(var(--banner))]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary blink-gold flex-shrink-0" />
            <span className="text-[13px] text-muted-foreground font-body font-semibold">Currently working on:</span>
            <span className="text-[13px] text-foreground font-body">
              Case Study One — Kenya Master Health Facility List: Investigating whether geographic access to healthcare reflects population need, infrastructure bias, or systemic inequality.
            </span>

          </div>
          <span className="hidden sm:inline text-[13px] text-muted-foreground font-body">
            Week 3 of 4
          </span>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl text-foreground mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl text-foreground mb-10">Latest Writing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPreviewCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/blog" className="text-sm text-primary hover:underline font-body">
              View all posts →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
