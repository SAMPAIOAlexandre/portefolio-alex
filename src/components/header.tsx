import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";


import React from "react";

export const Header: React.FC = () => {
  return ( 
    <header>
      <Section>
<Title as="h1">Zeto.com</Title>
    
        <Paragraph>
          <p>Bienvenue sur mon portfolio ! Je suis Alexandre Sampaio, un développeur full stack passionné par la création applications web modernes et performantes.</p>
        </Paragraph>
      </Section>
    </header>
  );
};