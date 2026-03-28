import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import SkillTag from "@/components/SkillTag";

const filters = ["All", "Fairness Audit", "Explainability", "African AI", "Health", "Education", "Finance"];

const caseStudies = [
  {
    title: "Kenya Health Facility Fairness Audit",
    dataset: "Kenya Master Health Facility List",
    description: "Does geographic accessibility to health facilities in Kenya reflect population need, or historical infrastructure bias?",
    tags: ["Fairness Audit", "Kenya", "Health"],
    slug: "kenya-health-facility",
  },
  {
    title: "Education Access & Algorithmic Allocation",
    dataset: "National School Placement Dataset",
    description: "Examining how automated school placement algorithms reproduce or mitigate existing inequities in access to quality education.",
    tags: ["Fairness Audit", "Education", "Explainability"],
    slug: "education-access",
  },
  {
    title: "Credit Scoring in East Africa",
    dataset: "Alternative Credit Scoring Models Dataset",
    description: "Investigating fairness dimensions of alternative credit scoring models used across East African fintech platforms.",
    tags: ["Finance", "African AI", "Explainability"],
    slug: "credit-scoring",
  },
  {
    title: "Maternal Health Risk Prediction",
    dataset: "UCI Maternal Health Risk Dataset",
    description: "Building an explainable model for maternal health risk prediction with fairness constraints across demographic groups.",
    tags: ["Health", "Explainability", "Fairness Audit"],
    slug: "maternal-health",
  },
  {
    title: "Land Use Classification in Lagos",
    dataset: "Satellite Imagery & Census Data",
    description: "Using geospatial AI to classify land use patterns in Lagos, with a focus on informal settlement detection and fairness.",
    tags: ["African AI", "Explainability"],
    slug: "lagos-land-use",
  },
];

const languageBadgeColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
};

const githubRepos = [
  { name: "fairness-audit-toolkit", description: "A Python toolkit for conducting fairness audits on tabular datasets with geographic features.", language: "Python", stars: 42 },
  { name: "shap-explainer-notebook", description: "Interactive Jupyter notebooks demonstrating SHAP value interpretation for social impact models.", language: "Jupyter Notebook", stars: 28 },
  { name: "hcai-callout-component", description: "React component library for HCAI-style callout boxes in research blogs and case studies.", language: "JavaScript", stars: 15 },
];

const Research = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.tags.includes(activeFilter));

  return (
    <Layout>
      <SEOHead title="Research" description="Case studies and fairness audits in AI — health, education, and African AI contexts." url="https://humansinthecode.ai/research" />
      <div className="container mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-foreground mb-4">Research</h1>
        <p className="text-muted-foreground font-body mb-10 max-w-2xl">
          Case studies exploring algorithmic fairness, explainability, and the human dimensions of AI in African contexts.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-sm rounded-full font-body transition-colors ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((cs) => (
            <div key={cs.slug} className="bg-card rounded-lg border p-6 card-hover-glow">
              <h3 className="font-display text-lg text-foreground mb-1">{cs.title}</h3>
              <p className="text-xs text-muted-foreground font-body mb-3">Dataset: {cs.dataset}</p>
              <p className="text-sm text-muted-foreground font-body mb-4">{cs.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cs.tags.map((tag) => (
                  <SkillTag key={tag} label={tag} />
                ))}
              </div>
              <Link to={`/research/${cs.slug}`} className="text-sm text-primary hover:underline font-body">
                Read full case study →
              </Link>
            </div>
          ))}
        </div>

        {/* Open Source Work */}
        <h2 className="font-display text-3xl text-foreground mb-6">Open Source Work</h2>
        <p className="text-sm text-muted-foreground font-body mb-8">
          Pinned repositories from GitHub. Replace <code className="text-primary font-mono text-xs">YOUR_GITHUB_USERNAME</code> with your username to auto-fetch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/YOUR_GITHUB_USERNAME/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg border p-6 card-hover-glow block"
            >
              <h3 className="font-mono text-sm text-primary mb-2">{repo.name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{repo.description}</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: languageBadgeColors[repo.language] || "#888" }}
                  />
                  {repo.language}
                </span>
                <span className="text-xs text-muted-foreground font-body">★ {repo.stars}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Research;
