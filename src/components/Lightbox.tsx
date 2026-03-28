import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, caption, onClose }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[10000] bg-background/95 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>
      <div className="max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" loading="lazy" />
        {caption && (
          <p className="mt-4 text-sm italic text-muted-foreground font-body text-center">{caption}</p>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
