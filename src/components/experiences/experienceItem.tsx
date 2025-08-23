import React from "react";
import Image from "next/image";
import { Experience } from "@/types/experiences";
import { Title, Paragraph } from "@/components/typographie";

type ExperienceItemProps = Experience;
function formatMonthYear(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("fr-FR", { month: "short", year: "numeric" })
    .format(d)
    .replace(".", "");
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  poste,
  // description, 
  image,
  startDate,
  endDate,
}) => {
  const startLabel = formatMonthYear(startDate);
  const endLabel = endDate ? formatMonthYear(endDate) : "Présent";

  return (
    <article className="grid grid-cols-[1fr_auto_11rem] items-start gap-4">
      {/* Colonne gauche : logo réduit + titres */}
      <div className="flex items-start gap-3">
        {/* Logo / visuel réduit (48–64px) */}
        <div className="relative mt-1 h-12 w-12 overflow-hidden rounded">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="48px"
            priority={image.priority}
          />
        </div>

        <div>
          <Title as="h3" className="text-base font-semibold leading-tight">
            {title}
          </Title>
          {poste && (
            <Paragraph className="mt-0.5 text-sm text-muted-foreground">
              {poste}
            </Paragraph>
          )}
          {/* 
          Si tu veux remettre une micro-ligne d’impact (1 seule phrase) :
          <Paragraph className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            Refonte UI en Next.js/Tailwind, -30% CLS, +18% conversion.
          </Paragraph> 
          */}
        </div>
      </div>

      {/* Colonne centrale : dot aligné sur le rail (le rail est sur <ol>) */}
      <div className="relative">
        {/* Le dot chevauche légèrement le rail (pl-6 sur <ol>) */}
        <span className="absolute left-[-1.625rem] top-2 block h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
      </div>

      {/* Colonne droite : dates formatées */}
      <div className="text-right text-sm text-muted-foreground">
        <time dateTime={startDate}>{startLabel}</time>
        <span aria-hidden="true"> — </span>
        {endDate ? (
          <time dateTime={endDate}>{endLabel}</time>
        ) : (
          <span>Présent</span>
        )}
        {/* Optionnel : durée en petit
        <div className="mt-1 text-xs opacity-80">1 an 2 mois</div>
        */}
      </div>
    </article>
  );
};