import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <div id="topo" className="header-spacer" />
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Projects />
        <Stack />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
