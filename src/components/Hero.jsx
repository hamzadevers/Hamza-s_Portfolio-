import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse-slow [animation-delay:4s]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="animate-spin [animation-duration:8s]" />
            <span>Open to Opportunities &amp; Internships</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-zinc-200">Hi, I'm </span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-teal-500 bg-clip-text text-transparent">
              Hamza Imran
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-emerald-400 font-semibold mb-8 flex items-center justify-center gap-2"
          >
            <Code2 size={24} className="text-emerald-400" />
            Junior Frontend Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-zinc-400 text-base sm:text-lg md:text-xl mb-12 leading-relaxed"
          >
            Passionate about crafting pixel-perfect, highly responsive interfaces. I specialize in building user-centric, modern web applications leveraging the speed and performance of <span className="text-emerald-400 font-semibold">React 19</span> and modern design methodologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-zinc-950 font-bold hover:shadow-lg hover:shadow-emerald-500/20 transition-all text-sm tracking-wide"
            >
              Explore Projects
              <ArrowDown size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-semibold transition-all"
            >
              <Terminal size={16} className="text-emerald-400" />
              Contact Developer
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.a
          href="#skills"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 rounded-full border border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors inline-block"
        >
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
