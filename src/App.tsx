import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import SpotlightCursor from "./components/SpotlightCursor";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // force darkmode (for now)
  document.documentElement.classList.add("dark");

  return (
    <>
      <div className="animated-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 w-full antialiased bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <SpotlightCursor />
        <main className="min-h-screen bg-linear-to-br from-background/50 to-background">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}