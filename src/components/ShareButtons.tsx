import { Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center gap-3 pt-6 border-t">
      <span className="text-xs text-muted-foreground font-body">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Twitter size={16} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin size={16} />
      </a>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <LinkIcon size={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
