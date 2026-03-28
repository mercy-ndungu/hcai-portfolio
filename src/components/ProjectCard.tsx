import { Link } from "react-router-dom";
import SkillTag from "./SkillTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

const ProjectCard = ({ title, description, tags, slug }: ProjectCardProps) => (
  <div className="bg-card rounded-[10px] border border-border p-6 card-hover-glow shadow-sm">
    <h3 className="font-display text-[17px] text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <SkillTag key={tag} label={tag} />
      ))}
    </div>
    <Link
      to={`/research/${slug}`}
      className="text-[13px] text-primary hover:underline font-body transition-colors duration-200"
    >
      Read case study →
    </Link>
  </div>
);

export default ProjectCard;
