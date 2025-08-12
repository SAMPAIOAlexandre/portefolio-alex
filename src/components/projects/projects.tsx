// src/components/Projects/Projects.tsx
import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/projects/projectCard";
import { projectsData } from "@/components/projects/projectsData";

import React from "react";

export const Projects: React.FC = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-6 p-6">
      <Title as="h2">Mes Projets</Title>
      <Paragraph>
        Voici quelques-uns de mes projets récents. Chacun d&apos;eux reflète ma passion
        pour le développement web et mon engagement à créer des solutions innovantes.
      </Paragraph>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
