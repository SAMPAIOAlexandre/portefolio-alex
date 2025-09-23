import React from "react";
import Image from "next/image";
import { Experience } from "@/types/experiences";
import { Title, Paragraph } from "@/components/typographie";

type ExperienceItemProps = Experience;

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  poste,
  image,
  startDate,
  endDate,
}) => {
  const fmt = (iso: string) =>
    new Date(iso.length === 7 ? `${iso}-01` : iso)
      .toLocaleDateString("fr-FR", { month: "short", year: "numeric" })
      .replace(".", "");

  const normalizeDateTime = (iso: string) =>
    iso.length === 7 ? `${iso}` : iso;

  const startLabel = fmt(startDate);
  const endLabel = endDate ? fmt(endDate) : "Présent";

  return (
    <article className="pb-2 pt-0.5">
      <div className="grid gap-x-6 gap-y-2 md:items-center md:[grid-template-columns:auto_1fr_auto]">
        <div className="flex items-start">
          <div className="bg-muted/40 relative size-12 overflow-hidden rounded-full p-1 md:size-14">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="56px"
              priority={image.priority}
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <Title as="h3" className="text-base font-semibold leading-tight">
            {title}
          </Title>
          {poste && (
            <Paragraph className="text-muted-foreground line-clamp-2 text-sm">
              {poste}
            </Paragraph>
          )}
        </div>

        <div className="text-muted-foreground min-w-[9rem] whitespace-nowrap text-right text-sm tabular-nums md:col-auto">
          <time dateTime={normalizeDateTime(startDate)}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          {endDate ? (
            <time dateTime={normalizeDateTime(endDate)}>{endLabel}</time>
          ) : (
            <span>Présent</span>
          )}
        </div>
      </div>
    </article>
  );
};
