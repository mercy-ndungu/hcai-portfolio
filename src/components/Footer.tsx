import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-foreground">
            humansinthecode<span className="text-primary">.ai</span>
          </span>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {["Home", "Research", "Blog", "About", "Contact"].map((label) => (
              <Link
                key={label}
                to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-body"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            <a href="https://github.com/mercy-ndungu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/kirigo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={16} />
            </a>
            <a href="https://www.threads.com/@kirigo_ndungu" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs italic text-primary font-body">
          Building AI that sees the humans in the data.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
