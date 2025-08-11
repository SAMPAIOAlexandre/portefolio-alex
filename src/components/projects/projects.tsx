import {Title, Paragraph} from "@/components/typographie";
import {Section} from "@/components/section";
import Image from "next/image";



import React from "react";

export const Projects: React.FC = () => {
  return ( 
    <Section className="flex flex-col items-center justify-center gap-6">
      <Title as="h2">Mes Projets</Title>
      <Paragraph>
        Voici quelques-uns de mes projets récents. Chacun d&apos;eux reflète ma passion pour le développement web et mon engagement à créer des solutions innovantes.
      </Paragraph>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Projet 1</h3>
          <p>Une brève description du projet.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Projet 2</h3>
          <p>Une brève description du projet.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">Projet 3</h3>
          <p>Une brève description du projet.</p>
        </div>
      </div>
    </Section>
  )
}
export default Projects;