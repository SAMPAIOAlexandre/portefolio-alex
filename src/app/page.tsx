// import Image from "next/image";
import { Header } from "@/components/header";
import { Projects } from "@/components/Projects/projects";
import { Experiences } from "@/components/experiences/experience";
import { Skills } from "@/components/skills/skills";
import { Contact } from "@/components/contact/contact";


export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Projects />
        <Experiences />
        <Skills />
      </main>

      <footer >
         <Contact />
      </footer>
    </>
  );
}
