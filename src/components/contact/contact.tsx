import { Title, Paragraph } from "@/components/typographie";
import { Section } from "@/components/section";
import { contactMethods } from "@/components/contact/contactsData";
import React from "react";



export const Contact: React.FC = () => {
  return (
    <Section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Title as="h2">Contactez Moi</Title>
        <Paragraph className="mt-2">
          N'hésitez pas à me contacter via les moyens suivants :
        </Paragraph>
      </div>
      
      <ul className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
        {contactMethods.map((contact) => (
          <li key={contact.id} className="w-full">
            <a
              href={contact.href}
              aria-label={contact.ariaLabel}
              className="block w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-center text-lg font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.type}: {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default Contact;