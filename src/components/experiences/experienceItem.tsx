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

  const start = fmt(startDate);
  const end = endDate ? fmt(endDate) : "Présent";

  return (
    <article className="pb-8 pt-0.5">
      <div className="items-center justify-between gap-8 md:flex">
        <div className="flex gap-4">
          <div className="bg-card relative h-12 w-12 overflow-hidden rounded-full">
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
              <Paragraph className="text-muted-foreground text-sm">
                {poste}
              </Paragraph>
            )}
          </div>
        </div>

        <div className="text-muted-foreground ml-[64px] mt-2 whitespace-nowrap text-sm md:ml-0 md:mt-0 lg:w-48 lg:text-right">
          {start} <span aria-hidden="true">—</span> {end}
        </div>
      </div>
    </article>
  );
};
