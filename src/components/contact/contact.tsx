import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContactLinksList } from "./contactLinkItem";
import { ContactConnectRow } from "./contactConnectCard";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <Section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <Title as="h2">Contact</Title>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-border/50 bg-card/40 rounded-2xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Contact Info</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactLinksList />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/40 rounded-2xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Let’s Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Paragraph>
              Suis‑moi ou écris‑moi sur tes plateformes préférées.
            </Paragraph>
            <ContactConnectRow />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
