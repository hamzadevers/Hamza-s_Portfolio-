import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, CheckCircle2, RefreshCw } from "lucide-react";

export default function Projects() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Optimize React 19 rendering", completed: true },
    { id: 2, text: "Submit portfolio to software house", completed: false },
    { id: 3, text: "Build next-gen web app", completed: false },
  ]);

  const billNames = ["Hamza", "Recruiter", "Alex", "Sarah"];
  const [payer, setPayer] = useState("");
  const [isChoosing, setIsChoosing] = useState(false);

  const [counterValue, setCounterValue] = useState(5);

  const [mood, setMood] = useState("dark");

  const projectsList = [
    {
      title: "Task Mate",
      url: "https://task-mate-fexk9s3gx-hamzadevers-projects.vercel.app/",
      techs: ["React 19", "Tailwind CSS", "State Management"],
      description:
        "A highly responsive task management system supporting drag-and-drop lists, categories, and offline persistence.",
      demoType: "task",
    },
    {
      title: "Who Pays the Bill?",
      url: "https://who-pays-bill-nfsahosmj-hamzadevers-projects.vercel.app/",
      techs: ["JavaScript", "CSS3", "Randomizer Algorithm"],
      description:
        "A fun web app that takes a list of friends and randomly selects who gets the bill, featuring sleek animations.",
      demoType: "bill",
    },
    {
      title: "Interactive Counter",
      url: "https://hamzadevers.github.io/counter-button/",
      techs: ["HTML5", "CSS3", "DOM Events"],
      description:
        "A highly polished, physics-based clicker utility showcasing smooth transitions and micro-interactions.",
      demoType: "counter",
    },
    {
      title: "Modes Toggle",
      url: "https://hamzadevers.github.io/toogle-mood-/",
      techs: ["JavaScript (ES6)", "CSS Variables", "Themes"],
      description:
        "A fluid mood-switching interface demonstrating native theme injection, fluid transitions, and component lifecycle.",
      demoType: "mood",
    },
  ];

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const pickPayer = () => {
    setIsChoosing(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomName =
        billNames[Math.floor(Math.random() * billNames.length)];
      setPayer(randomName);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsChoosing(false);
      }
    }, 120);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 border-t border-zinc-900 relative"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
            <Briefcase size={14} />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Selected Live Projects
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Each card below contains a{" "}
            <span className="text-emerald-400 font-semibold">
              live, functional interactive preview
            </span>{" "}
            of the application directly built in! Test them out and click the
            external links to view the full deployed projects.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsList.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 hover:border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-zinc-800/40 hover:bg-emerald-500 hover:text-zinc-950 rounded-xl text-emerald-400 transition-all duration-200 inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    Live Link
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-900/80">
                <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-widest font-bold block mb-3">
                  Interactive Preview
                </span>

                {project.demoType === "task" && (
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          task.completed
                            ? "bg-emerald-950/20 border-emerald-500/20 text-zinc-500"
                            : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          className={
                            task.completed
                              ? "text-emerald-500"
                              : "text-zinc-600"
                          }
                        />
                        <span
                          className={`text-xs font-medium ${task.completed ? "line-through" : ""}`}
                        >
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {project.demoType === "bill" && (
                  <div className="flex flex-col items-center justify-center py-2">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {billNames.map((name) => (
                        <span
                          key={name}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            payer === name
                              ? "bg-emerald-500 text-zinc-950 border-emerald-400 scale-105"
                              : "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                          }`}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={pickPayer}
                      disabled={isChoosing}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-xl transition-all"
                    >
                      <RefreshCw
                        size={13}
                        className={isChoosing ? "animate-spin" : ""}
                      />
                      {payer ? `Payer selected: ${payer}` : "Who Pays?"}
                    </button>
                  </div>
                )}

                {project.demoType === "counter" && (
                  <div className="flex items-center justify-between px-6 py-2 bg-zinc-900/40 rounded-xl">
                    <button
                      onClick={() =>
                        setCounterValue(Math.max(0, counterValue - 1))
                      }
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold font-mono transition-colors"
                    >
                      -
                    </button>
                    <div className="text-center">
                      <span className="text-2xl font-mono font-bold text-emerald-400">
                        {counterValue}
                      </span>
                      <span className="text-[10px] text-zinc-500 block font-mono">
                        Count Value
                      </span>
                    </div>
                    <button
                      onClick={() => setCounterValue(counterValue + 1)}
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold font-mono transition-colors"
                    >
                      +
                    </button>
                  </div>
                )}

                {project.demoType === "mood" && (
                  <div
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-center justify-between gap-4 ${
                      mood === "dark"
                        ? "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                        : "bg-zinc-100 border-zinc-200 text-zinc-900"
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider">
                        {mood === "dark" ? "Midnight Mode" : "Sky Light Mode"}
                      </p>
                      <p className="text-[10px] opacity-70">
                        Testing component theme variables
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setMood(mood === "dark" ? "light" : "dark")
                      }
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        mood === "dark"
                          ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
                          : "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      }`}
                    >
                      Toggle Mood
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
