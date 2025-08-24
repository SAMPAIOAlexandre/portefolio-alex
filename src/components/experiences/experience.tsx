import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { ExperienceItem } from "@/components/experiences/experienceItem";
import { experiencesData } from "@/components/experiences/experiencesData";
import React from "react";

export const Experiences: React.FC = () => {
  return (
    <Section className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8 py-10 w-full max-w-7xl mx-auto">
     <div className="text-center max-w-3xl mx-auto">
   <Title as="h2">Mes Expériences</Title>
   <Paragraph className="mt-2">
     Voici un aperçu de mes expériences professionnelles. Chaque expérience a
     contribué à mon développement en tant que développeur web.
   </Paragraph>
 </div>

<ol aria-label="Timeline des expériences" className="relative w-full max-w-5xl mx-auto mt-8">
        {experiencesData.map((experience) => (
          <li key={experience.id} className="mb- last:mb-0">
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </Section>
  );
};
export default Experiences;
