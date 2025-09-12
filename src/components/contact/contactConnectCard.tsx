import * as React from "react";
import { contactMethods } from "@/components/contact/contactsData";
import type { Contact as ContactMethod } from "@/types/contact";
import { Mail, Phone, Github, Linkedin, Globe, Link as LinkIcon } from "lucide-react";

function getHref(m: ContactMethod): string {
  switch (m.type) {
    case "email":
      return `mailto:${m.value}`;
    case "phone":
      return `tel:${m.value}`;
    default:
      return m.value;
  }
}

function getIconByType(type: ContactMethod["type"]) {
  switch (type) {
    case "email":
      return Mail;
    case "phone":
      return Phone;
    case "github":
      return Github;
    case "linkedin":
      return Linkedin;
    case "website":
      return Globe;
    case "x":
    case "other":
    default:
      return LinkIcon;
  }
}

const iconTint: Record<ContactMethod["type"], string> = {
  email: "text-emerald-400",
  phone: "text-teal-400",
  github: "text-fuchsia-400",
  linkedin: "text-sky-400",
  website: "text-indigo-400",
  x: "text-neutral-400",
  other: "text-zinc-400",
};

export const ContactConnectRow: React.FC = () => {
 const social = contactMethods.filter((m) =>
  ["email", "phone", "linkedin", "github", "website", "x"].includes(m.type)
);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {social.map((m) => {
        const Icon = getIconByType(m.type);
        const href = getHref(m);
        const tint = iconTint[m.type] ?? iconTint.other;

        return (
          <a
            key={m.id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvrir ${m.label}`}
            title={m.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 transition-colors hover:bg-accent/40 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Icon className={`h-5 w-5 ${tint}`} />
            <span className="sr-only">{m.label}</span>
          </a>
        );
      })}
    </div>
  );
};
