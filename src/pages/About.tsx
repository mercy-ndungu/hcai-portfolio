import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import SkillTag from "@/components/SkillTag";
import { Download } from "lucide-react";

const skills = [
  "Python", "Fairlearn", "SHAP", "GeoPandas", "scikit-learn",
  "HCAI", "Fairness Auditing", "African AI", "Data Feminism", "Algorithmic Accountability",
];

const timeline = [
  { year: "2024 – Present", role: "HCAI Researcher & Data Scientist", org: "Independent" },
  { year: "2022 – 2024", role: "Data Scientist", org: "Research Institute for AI Ethics" },
  { year: "2020 – 2022", role: "MSc Data Science", org: "University Placeholder" },
  { year: "2016 – 2020", role: "BSc Computer Science", org: "University Placeholder" },
];

const beliefs = [
  "AI systems should be designed with, not just for, the communities they affect.",
  "Fairness is not a checkbox — it is a continuous, context-dependent practice.",
  "The most important data is often the data that was never collected.",
];

const About = () => {
  return (
    <Layout>
      <SEOHead title="About" description="About Mercy Kirigo — HCAI researcher and data scientist working on algorithmic fairness in African contexts." url="https://humansinthecode.ai/about" />
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Profile */}
        <div className="flex flex-col items-center mb-12">
          <div
            id="about-photo"
            className="w-[240px] h-[240px] rounded-full bg-card border-2 border-border flex items-center justify-center mb-6"
          >
            <span className="text-muted-foreground text-xs font-body">Photo</span>
          </div>
          <h1 className="font-display text-4xl text-foreground mb-2">About Me</h1>
        </div>

        {/* Bio */}
        <div className="space-y-4 mb-12">
          <p className="text-foreground font-body leading-relaxed">
            I am a data scientist and HCAI researcher working at the intersection of machine learning and social impact. My work focuses on algorithmic fairness, explainability, and the specific challenges of building AI systems in African contexts. I believe that the humans in the data deserve to be seen.
          </p>
          <p className="text-foreground font-body leading-relaxed">
            My research combines technical rigour with a deep commitment to understanding the social contexts in which AI systems operate. I draw on frameworks from data feminism, postcolonial studies, and participatory design to ensure that my work centres the communities most affected by algorithmic decision-making.
          </p>
          <p className="text-foreground font-body leading-relaxed">
            When I'm not auditing algorithms or writing code, I'm probably reading about the history of infrastructure in East Africa, or trying to convince someone that SHAP values are not the whole story.
          </p>
        </div>

        {/* Skills */}
        <h2 className="font-display text-2xl text-foreground mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          {skills.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>

        {/* Timeline */}
        <h2 className="font-display text-2xl text-foreground mb-6">Education & Experience</h2>
        <div className="space-y-4 mb-12">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-4">
              <span className="text-sm text-muted-foreground font-body w-36 flex-shrink-0">{item.year}</span>
              <div>
                <p className="text-foreground font-body text-sm font-medium">{item.role}</p>
                <p className="text-muted-foreground font-body text-sm">{item.org}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-body text-sm font-medium hover:opacity-90 transition-opacity mb-12"
        >
          <Download size={16} /> Download CV
        </a>

        {/* Beliefs */}
        <h2 className="font-display text-2xl text-foreground mb-4">What I Believe About AI</h2>
        <ul className="space-y-3 mb-8">
          {beliefs.map((belief, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-foreground font-body leading-relaxed">{belief}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;
