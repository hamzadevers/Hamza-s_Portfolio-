import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, Copy, ArrowUp } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hamzadev024@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+92 311 4446899");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Error:", data.message);
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Make sure the backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="py-24 bg-zinc-950 border-t border-zinc-900 relative"
    >
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,#064e3b/15,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-6">
              <Mail size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-6">
              Let's build something exceptional together
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Seeking opportunities at dynamic software houses. Let's discuss
              internships, junior frontend roles, or engineering collaboration.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl max-w-md">
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/10 rounded-lg text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block font-mono">
                    LOCATION
                  </span>
                  <span className="text-zinc-200 font-semibold text-sm">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl max-w-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/10 rounded-lg text-emerald-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block font-mono">
                      EMAIL ADDRESS
                    </span>
                    <span className="text-zinc-200 font-semibold text-sm select-all">
                      hamzadev024@gmail.com
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-zinc-800/40 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl max-w-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/10 rounded-lg text-emerald-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block font-mono">
                      PHONE NUMBER
                    </span>
                    <span className="text-zinc-200 font-semibold text-sm select-all">
                      +92 311 4446899
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 bg-zinc-800/40 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {phoneCopied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/hamzadevers"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-850 rounded-xl text-zinc-300 hover:text-emerald-400 text-xs font-semibold transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/hamza-imran024"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-850 rounded-xl text-zinc-300 hover:text-emerald-400 text-xs font-semibold transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800 p-6 sm:p-10 rounded-3xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/40 text-zinc-100 rounded-xl px-4 py-3.5 outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/40 text-zinc-100 rounded-xl px-4 py-3.5 outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project or software house needs..."
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/40 text-zinc-100 rounded-xl px-4 py-3.5 outline-none text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-zinc-950 font-bold hover:shadow-lg hover:shadow-emerald-500/10 transition-all text-sm tracking-wide disabled:opacity-55"
              >
                {isSubmitting
                  ? "Processing..."
                  : submitted
                    ? "Message Sent Successfully!"
                    : "Send Message"}
                {!isSubmitting && !submitted && <Send size={15} />}
                {submitted && <Check size={15} />}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-500 font-mono">
            &copy; 2026 Hamza Imran. Built with React 19 &amp; Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-zinc-900 hover:bg-zinc-850 rounded-xl text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs font-mono"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
