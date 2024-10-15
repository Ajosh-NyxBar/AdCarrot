import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectShowcase from "./components/ProjectShowcase";
function App() {
  return (
    <div className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiase">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
    </div>
  );
}

export default App;
