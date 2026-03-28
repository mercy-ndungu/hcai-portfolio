import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "Research Collaboration", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead title="Contact" description="Get in touch with Mercy Kirigo for research collaborations, speaking invitations, and consulting." url="https://humansinthecode.ai/contact" />
      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="font-display text-4xl text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground font-body mb-10">
          I am open to research collaborations, speaking invitations, and consulting engagements focused on AI fairness and African AI contexts.
        </p>

        {submitted ? (
          <div className="bg-card rounded-lg border p-8 text-center">
            <h2 className="font-display text-2xl text-foreground mb-2">Thank you!</h2>
            <p className="text-muted-foreground font-body">I'll get back to you as soon as I can.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-body text-foreground mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border rounded px-4 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-body text-foreground mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border rounded px-4 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-body text-foreground mb-1.5">Subject</label>
              <select
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-card border rounded px-4 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option>Research Collaboration</option>
                <option>Speaking Invitation</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-body text-foreground mb-1.5">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border rounded px-4 py-2.5 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="flex gap-4 mt-12 pt-8 border-t">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
