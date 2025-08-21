import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { ExperienceItem } from "@/components/experiences/experienceItem";
import { experiencesData } from "@/components/experiences/experiencesData";
import React from "react";

export const Experiences: React.FC = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-6 p-6">
      <Title as="h2">Mes Expériences</Title>
      <Paragraph>
        Voici un aperçu de mes expériences professionnelles . Chaque expérience
        a contribué à mon développement en tant que développeur web.
      </Paragraph>
      <Section>
        <ol aria-label="Timeline des expériences">
          {experiencesData.map((experience) => (
            <li key={experience.id}>
              <ExperienceItem {...experience} />
            </li>
          ))}
        </ol>
      </Section>
    </Section>
  );
};
export default Experiences;
