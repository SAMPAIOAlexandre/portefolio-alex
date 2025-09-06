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

      <div className="w-full space-y-8">
        {skillsData.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <span className={`grid grid-cols-3 gap-0.5 ${category.color}`}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-current"
                  />
                ))}
              </span>
              <h3
                className={`text-sm font-extrabold uppercase tracking-wider ${category.color ?? "text-muted-foreground"}`}
              >
                {category.title}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.id}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold opacity-90 transition hover:opacity-100"
                >
                  <img
                    src={skill.image.src}
                    alt=""
                    className="h-5 w-5 object-contain"
                    aria-hidden="true"
                  />
                  <span>{skill.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
