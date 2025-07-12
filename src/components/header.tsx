import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import Image from "next/image";

import React from "react";

export const Header: React.FC = () => {
  return ( 
    <header>
      <div>
      <Section className="flex flex-row items-center justify-between gap-6  sm:flex-nowrap">
        {/* Partie gauche : texte */}
        <div className="max-w-xl text-left">
          <Title as="h1">Alexandre SAMPAIO</Title>
          <Paragraph>
            <p><strong>Développeur full stack</strong></p>
            <p className="mt-2">
              Passionné par la création d&apos;applications web modernes et performantes.
              J&apos;aime construire des projets utiles, bien pensés et élégants.
            </p>
          </Paragraph>
        </div>
        <div className="w-28 h-28 relative shrink-0">
          <Image
            src="/alex.jpg"
            alt="photo alex"
            fill
            className="rounded-full object-cover border-4 border-gray-300 shadow-lg"
          />
        </div>
      </Section>
      </div>
    </header>
  );
};