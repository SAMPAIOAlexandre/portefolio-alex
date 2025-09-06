import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { ExperienceItem } from "@/components/experiences/experienceItem";
import { experiencesData } from "@/components/experiences/experiencesData";
import React from "react";

export const Experiences: React.FC = () => {
  return (
    <Section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Title as="h2">Mes Expériences</Title>
        <Paragraph className="mt-2">
          Voici un aperçu de mes expériences professionnelles. Chaque expérience
          a contribué à mon développement en tant que développeur web.
        </Paragraph>
      </div>

      <ol
        aria-label="Timeline des expériences"
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        {experiencesData.map((experience) => (
          <li
            key={experience.id}
            className="mb- flex w-full justify-center last:mb-0"
          >
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </Section>
  );
};
export default Experiences;
