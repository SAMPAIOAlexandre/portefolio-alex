import { Title, Paragraph } from "../typographie";
import { Section } from "../section";
import { skillsData } from "@/components/skills/skillsData";

import React from "react";

export const Skills: React.FC = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-6 p-6">
      <Title as="h2">Mes Compétences</Title>
      <Paragraph>
        Voici un aperçu de mes compétences techniques. Je maîtrise une variété
        d&apos;outils et de technologies qui me permettent de créer des
        applications web performantes et modernes.
      </Paragraph>

<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  {skillsData.map((skill) => (
    <div
      key={skill.id}
      className="inline-flex flex-col items-center gap-2 rounded-xl border bg-muted/40 px-3 py-2 text-sm"
    >
      <img
        src={skill.image.src}
        alt={skill.image.alt}
        className="h-10 w-10"
      />
      <span>{skill.title}</span>
    </div>
  ))}
</div>
</Section>
);
};

export default Skills;
