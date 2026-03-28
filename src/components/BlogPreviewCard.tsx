import { Link } from "react-router-dom";

interface BlogPreviewCardProps {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  slug: string;
  category?: string;
}

const categoryColors: Record<string, string> = {
  "Case Studies": "bg-primary/20 text-primary",
  "HCAI Concepts": "bg-info/20 text-info",
  "Data Stories": "bg-success/20 text-success",
  "Reflections": "bg-muted text-muted-foreground",
};

const BlogPreviewCard = ({ title, date, readingTime, excerpt, slug, category }: BlogPreviewCardProps) => (
  <article className="bg-card rounded-lg border p-6 card-hover-glow">
    <div className="flex items-center gap-3 mb-3">
      <time className="text-xs text-muted-foreground font-body">{date}</time>
      <span className="text-xs text-muted-foreground font-body">·</span>
      <span className="text-xs text-muted-foreground font-body">{readingTime}</span>
      {category && (
        <span className={`text-xs px-2 py-0.5 rounded-full font-body ${categoryColors[category] || categoryColors["Reflections"]}`}>
          {category}
        </span>
      )}
    </div>
    <h3 className="font-display text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">{excerpt}</p>
    <Link to={`/blog/${slug}`} className="text-sm text-primary hover:underline font-body">
      Read more →
    </Link>
  </article>
);

export default BlogPreviewCard;
