import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Check } from "lucide-react";

export default function EducationExperience() {
  const timelineData = [
    {
      type: "certification",
      title: "Web Development Certification",
      institution: "Corvit Networks",
      period: "2026",
      details: [
        "Mastered advanced frontend concepts including ES6+ syntax, asynchronous programming, state management, and modern component lifecycle models.",
        "Engineered end-to-end user-centric single-page applications with real-time reactive UI elements.",
        "Designed and structured relational and non-relational database models utilizing MongoDB and efficient API design patterns.",
      ],
      icon: <Award className="w-6 h-6 text-emerald-400" />,
    },
    {
      type: "degree",
      title: "Bachelor of Business and Information Technology (BBIT)",
      institution: "Virtual University",
      period: "2026",
      details: [
        "Bridged the gap between enterprise business administration and robust computer science fundamentals.",
        "Acquired deep theoretical and practical knowledge in database management, software engineering principles, system analysis, and design.",
        "Studied project management, agile product delivery, and human-computer interaction paradigms.",
      ],
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-zinc-950 border-t border-zinc-900 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_90%,#064e3b/10,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
            <BookOpen size={14} />
            <span>Academic &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            A synergistic blend of business intelligence and deep technical
            engineering that drives high-quality, product-oriented software
            development.
          </p>
        </div>

        <div className="relative border-l-2 border-zinc-900 pl-6 sm:pl-10 space-y-16 max-w-4xl mx-auto">
          {timelineData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.15,
              }}
              className="relative"
            >
              <div className="absolute -left-[45px] sm:-left-[61px] top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-950 border-2 border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/10 z-10">
                {item.icon}
              </div>

              <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400 mt-1">
                      {item.institution}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/60 text-zinc-300 text-xs font-mono font-bold self-start sm:self-center">
                    <Calendar size={12} className="text-emerald-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                    >
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center">
                        <Check size={10} className="text-emerald-400" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
