import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Skills() {
  const skillsList = [
    {
      name: "React 19",
      description:
        "Building modern, high-performance interfaces using hook paradigms, concurrent rendering, and context API.",
      level: 90,
      color: "from-emerald-400 to-teal-500",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="2" />
          <path
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
            className="opacity-20"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(30 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(90 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(150 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript (ES6+)",
      description:
        "Asynchronous workflows, functional programming, DOM API manipulation, and deep understanding of closures.",
      level: 88,
      color: "from-yellow-400 to-amber-500",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3h18v18H3V3zm12.525 10.15c-.45-.255-.9-.51-1.35-.765-.3-.15-.45-.3-.45-.6s.15-.45.45-.45c.3 0 .45.15.6.3.15.15.3.15.45 0l.9-.75c.15-.15.15-.3 0-.45-.45-.6-.9-.9-1.65-.9-.9 0-1.5.6-1.5 1.5s.45 1.2 1.2 1.65l1.05.6c.45.225.6.45.6.75s-.3.6-.75.6c-.45 0-.75-.3-.9-.6-.15-.15-.3-.15-.45 0l-.9.75c-.15.15-.15.3 0 .45.45.6 1.05.9 1.95.9.9 0 1.65-.6 1.65-1.5s-.3-1.2-1.05-1.65zm-5.7-1.365c.3 0 .45-.15.45-.45V9.45c0-.3-.15-.45-.45-.45h-.9c-.3 0-.45.15-.45.45v1.2c0 .3.15.45.45.45h.9z" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      description:
        "Semantic structures, SEO best practices, accessibility standards (WCAG), and responsive multimedia elements.",
      level: 95,
      color: "from-orange-400 to-red-500",
      icon: (
        <svg
          className="w-8 h-8 text-orange-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
          <path d="M12 6H8v4h4v4l-4-1.5" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      description:
        "Tailwind CSS, Flexbox, CSS Grid layouts, variable-based theming, custom transitions, and cross-browser support.",
      level: 92,
      color: "from-teal-400 to-emerald-500",
      icon: (
        <svg
          className="w-8 h-8 text-teal-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
          <path d="M8 8h8l-1 5H8v3l4 1.5" />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      description:
        "Fast utility classes, robust responsive systems, and standard components for rapid UI structuring.",
      level: 85,
      color: "from-purple-500 to-violet-600",
      icon: (
        <svg
          className="w-8 h-8 text-purple-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 7h4a2.5 2.5 0 0 1 0 5H9V7z" />
          <path d="M9 12h5a2.5 2.5 0 0 1 0 5H9v-5z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      description:
        "NoSQL document management, complex schemas, aggregation pipelines, and high availability data integration.",
      level: 78,
      color: "from-emerald-500 to-green-600",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2s-4 4-4 8 4 12 4 12 4-8 4-12-4-8-4-8z" />
          <path d="M12 2v20" />
        </svg>
      ),
    },
    {
      name: "AI-Assisted Development",
      description:
        "Leveraging AI tools and copilots to generate code, diagnose bugs, produce tests, and speed up feature implementation.",
      level: 86,
      color: "from-indigo-500 to-blue-600",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.9 4.9l2.8 2.8" />
          <path d="M16.3 16.3l2.8 2.8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      name: "Prompt Engineering",
      description:
        "Crafting effective prompts and iterative queries to get precise outputs from language models for debugging and feature design.",
      level: 82,
      color: "from-fuchsia-500 to-pink-500",
      icon: (
        <svg
          className="w-8 h-8 text-fuchsia-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 12h8" />
          <path d="M8 16h6" />
        </svg>
      ),
    },
    {
      name: "Command Line & Debugging",
      description:
        "Using the command prompt, terminal tooling, and CLI debuggers to reproduce issues, run builds, tail logs, and apply fixes efficiently.",
      level: 89,
      color: "from-sky-400 to-cyan-500",
      icon: (
        <svg
          className="w-8 h-8 text-sky-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12h16" />
          <path d="M10 8l-4 4 4 4" />
        </svg>
      ),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: idx * 0.1,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
            <Cpu size={14} />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Core Technical Skills
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            A comprehensive foundation in frontend methodologies and modern
            database management for building end-to-end user-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={skill.name}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:bg-emerald-950/30 group-hover:text-emerald-400 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-mono text-emerald-400 font-bold group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              <div className="w-full bg-zinc-800/40 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
