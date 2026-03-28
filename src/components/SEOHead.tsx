import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaults = {
  title: "Mercy Kirigo | humansinthecode.ai",
  description: "Human-Centered AI research from an African perspective. Fairness audits, explainability, and algorithmic accountability.",
  image: "https://humansinthecode.ai/og-image.png",
  url: "https://humansinthecode.ai/",
};

const SEOHead = ({ title, description, image, url }: SEOHeadProps) => {
  const t = title ? `${title} | humansinthecode.ai` : defaults.title;
  const d = description || defaults.description;
  const img = image || defaults.image;
  const u = url || defaults.url;

  useEffect(() => {
    document.title = t;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", d);
    setMeta("property", "og:title", t);
    setMeta("property", "og:description", d);
    setMeta("property", "og:image", img);
    setMeta("property", "og:url", u);
    setMeta("name", "twitter:title", t);
    setMeta("name", "twitter:description", d);
    setMeta("name", "twitter:image", img);
    setMeta("name", "twitter:url", u);
  }, [t, d, img, u]);

  return null;
};

export default SEOHead;
