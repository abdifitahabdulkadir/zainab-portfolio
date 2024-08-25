import About from "@/components/About";
import { AppBackground } from "@/components/AppBackground";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GrdientBackgroud";
import Hero from "@/components/Hero";

import { NavBar } from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-7xl overflow-x-clip  text-white px-5 py-5 bg-primary ">
      <GradientBackground>
        <AppBackground>
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contacts />
          <Footer />
        </AppBackground>
      </GradientBackground>
    </main>
  );
}
