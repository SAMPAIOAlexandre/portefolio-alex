import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContactLinksList } from "./contactLinkItem";
import {ContactConnectRow} from "./contactConnectCard";
import React from "react";


export const Contact: React.FC = () => {
  return (
    <Section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Title as="h2">Contact</Title>
        <Paragraph className="mt-2">
          N’hésitez pas à me contacter via les moyens suivants :
        </Paragraph>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <ContactLinksList />
      </div>
    </Section>
  );
};

export default Contact;