import { Mail, Phone, Github, Linkedin, Globe, Link as LinkIcon } from "lucide-react";
import type { Contact as ContactMethod } from "@/types/contact";
import { contactMethods } from "@/components/contact/contactsData";



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


function getDisplayValue(m: ContactMethod): string {
  if (m.type === "email" || m.type === "phone") return m.value;
  try {
    const url = new URL(m.value);
    return `${url.hostname.replace(/^www\./, "")}${url.pathname.replace(/\/$/, "")}`;
  } catch {
    return m.value;
  }
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const badgeByType: Record<
  ContactMethod["type"],
  { wrapper: string; icon: React.ElementType }
> = {
  email:    { wrapper: "bg-emerald-500/15 text-emerald-400", icon: Mail },
  phone:    { wrapper: "bg-teal-500/15 text-teal-400",       icon: Phone },
  github:   { wrapper: "bg-fuchsia-500/15 text-fuchsia-400", icon: Github },
  linkedin: { wrapper: "bg-sky-500/15 text-sky-400",         icon: Linkedin },
  website:  { wrapper: "bg-indigo-500/15 text-indigo-400",   icon: Globe },
  x:        { wrapper: "bg-neutral-500/15 text-neutral-400", icon: LinkIcon },
  other:    { wrapper: "bg-zinc-500/15 text-zinc-400",       icon: LinkIcon },
};


type Props = { method: ContactMethod };

export const ContactLinkItem: React.FC<Props> = ({ method }) => {
  const href = getHref(method);
  const display = getDisplayValue(method);
  const meta = badgeByType[method.type] ?? badgeByType.other;
  const Icon = meta.icon;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "grid grid-cols-[auto_1fr] items-start gap-3 rounded-lg px-3 py-3 transition-colors",
          "hover:bg-accent/30 focus:bg-accent/30 outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
        aria-label={`${method.label} – ${display}`}
      >
        <span
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md",
            meta.wrapper
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>

        <span className="min-w-0">
          <span className="block font-semibold leading-5">{method.label}</span>
          <span className="block truncate text-sm text-muted-foreground">
            {display}
          </span>
        </span>
      </a>
    </li>
  );
};

/* ---------- (optionnel) Liste complète prête à l’emploi ---------- */

export const ContactLinksList: React.FC = () => (
  <ul className="space-y-1">
    {contactMethods.map((m) => (
      <ContactLinkItem key={m.id} method={m} />
    ))}
  </ul>
);
