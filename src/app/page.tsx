import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Articles from "../components/Article";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-20 md:pt-24">
        <div id="hero" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
          <Hero />
          <SectionDivider />
        </div>
        <div id="skills" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
          <Skills />
          <SectionDivider />
        </div>
        <div id="projects" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
          <Projects />
          <SectionDivider />
        </div>
        <div id="articles" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
          <Articles />
          <SectionDivider />
        </div>
        <div id="contact" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
          <Contact />
          <SectionDivider />
        </div>
      </main>
      <Footer />
    </>
  );
}
