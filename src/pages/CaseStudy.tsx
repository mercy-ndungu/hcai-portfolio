import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SkillTag from "@/components/SkillTag";
import ShareButtons from "@/components/ShareButtons";

const caseStudyContent: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  readingTime: string;
  sections: { id: string; title: string; content: string }[];
}> = {
  "kenya-health-facility": {
    title: "Kenya Health Facility Fairness Audit",
    subtitle: "Does geographic accessibility to health facilities in Kenya reflect population need, or historical infrastructure bias?",
    date: "March 2026",
    tags: ["Fairness Audit", "Kenya", "Health"],
    readingTime: "15 min read",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: "Kenya's Master Health Facility List (KMHFL) is the authoritative register of all health facilities in the country. This case study examines whether the geographic distribution of these facilities equitably serves the population, or whether it reflects patterns of historical infrastructure investment that systematically underserve certain communities.",
      },
      {
        id: "methodology",
        title: "Methodology",
        content: "We combined the KMHFL dataset with population density data from WorldPop and administrative boundary shapefiles. Using GeoPandas and spatial analysis techniques, we calculated facility-to-population ratios at the county and sub-county level. Fairness was assessed using demographic parity and geographic accessibility metrics.",
      },
      {
        id: "findings",
        title: "Key Findings",
        content: "Our analysis revealed significant disparities in health facility accessibility between urban and rural counties. Northern counties — historically underserved by colonial-era infrastructure investments — showed facility-to-population ratios up to 4x lower than their central and western counterparts.",
      },
      {
        id: "hcai-lens",
        title: "HCAI Lens",
        content: "The humans in this data are Kenyans who must travel, sometimes for hours, to reach their nearest health facility. Algorithmic fairness here is not abstract — it translates directly to maternal mortality rates, vaccination coverage, and emergency response times. Any model built on this data must account for these lived realities.",
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: "This audit demonstrates that geographic fairness analysis is essential for any AI system making decisions about health resource allocation in Kenya. We recommend that policymakers integrate fairness constraints into facility placement algorithms and prioritise historically underserved regions.",
      },
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudyContent[slug || ""];

  if (!study) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Case study not found</h1>
          <Link to="/research" className="text-primary hover:underline font-body">← Back to Research</Link>
        </div>
      </Layout>
    );
  }

  return (
      <Layout>
        <SEOHead title={study.title} description={study.subtitle} url={`https://humansinthecode.ai/research/${slug}`} />
      {/* Header */}
      <div className="container mx-auto px-6 pt-16 pb-8 border-b">
        <Link to="/research" className="text-sm text-muted-foreground hover:text-primary font-body mb-4 inline-block">
          ← Back to Research
        </Link>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">{study.title}</h1>
        <p className="text-lg text-muted-foreground font-body mb-4">{study.subtitle}</p>
        <div className="flex flex-wrap items-center gap-3">
          <time className="text-sm text-muted-foreground font-body">{study.date}</time>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground font-body">{study.readingTime}</span>
          {study.tags.map((tag) => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <nav className="sticky top-24">
            <h4 className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-4">Contents</h4>
            <ul className="space-y-2">
              {study.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-muted-foreground hover:text-primary font-body transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Body */}
        <article className="flex-1 max-w-3xl">
          {study.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">{s.title}</h2>
              {s.id === "hcai-lens" ? (
                <div className="callout-hcai">
                  <p className="text-xs font-body font-semibold text-destructive uppercase tracking-wider mb-2">HCAI Lens:</p>
                  <p className="text-sm text-foreground font-body leading-relaxed">{s.content}</p>
                </div>
              ) : s.id === "findings" ? (
                <div className="callout-technical">
                  <p className="text-xs font-body font-semibold text-success uppercase tracking-wider mb-2">Technical Result:</p>
                  <p className="text-sm text-foreground font-body leading-relaxed">{s.content}</p>
                </div>
              ) : s.id === "methodology" ? (
                <div className="callout-plain">
                  <p className="text-xs font-body font-semibold text-info uppercase tracking-wider mb-2">Plain English:</p>
                  <p className="text-sm text-foreground font-body leading-relaxed">{s.content}</p>
                </div>
              ) : (
                <p className="text-foreground font-body leading-relaxed">{s.content}</p>
              )}
            </section>
          ))}
          <ShareButtons url={`https://humansinthecode.ai/research/${slug}`} title={study.title} />
        </article>
      </div>
    </Layout>
  );
};

export default CaseStudy;
