import { Title, Paragraph } from "../typographie";
import { Section } from "../section";

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
        <div className="flex flex-col items-center">
          <img
            src="/path/to/skill1.png"
            alt="Skill 1"
            className="h-12 w-12 mb-2"
          />
          <span>Skill 1</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/skill2.png"
            alt="Skill 2"
            className="h-12 w-12 mb-2"
          />
          <span>Skill 2</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/path/to/skill3.png"
            alt="Skill 3"
            className="h-12 w-12 mb-2"
          />
          <span>Skill 3</span>
        </div>
        </div>
</Section>
);
};

export default Skills;
