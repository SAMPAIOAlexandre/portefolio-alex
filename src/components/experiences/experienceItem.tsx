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
      <div className="flex items-start gap-3">
        <div className="bg-card relative mt-1 h-12 w-12 rounded p-1">
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
            <Paragraph className="text-muted-foreground mt-0.5 text-sm">
              {poste}
            </Paragraph>
          )}
        </div>
      </div>
      <div className="text-muted-foreground text-right text-sm">
        <time dateTime={startDate}>{startLabel}</time>
        <span aria-hidden="true"> — </span>
        {endDate ? (
          <time dateTime={endDate}>{endLabel}</time>
        ) : (
          <span>Présent</span>
        )}
      </div>
    </article>
  );
};
