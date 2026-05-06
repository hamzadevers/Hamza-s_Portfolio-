import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <EducationExperience />
        <Contact />
      </main>
    </div>
  );
}
