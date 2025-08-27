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
    <article className="pt-0.5 pb-8">
      <div className="md:flex items-center justify-between gap-8">
        <div className="flex gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-card ">
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
            <Title as="h3" className="font-semibold text-base leading-tight">
              {title}
            </Title>
            {poste && (
              <Paragraph className="text-sm text-muted-foreground">
                {poste}
              </Paragraph>
            )}
          </div>
        </div>

        <div className="text-sm text-muted-foreground whitespace-nowrap lg:text-right lg:w-48 ml-[64px] md:ml-0 mt-2 md:mt-0">
          {start}{" "}<span aria-hidden="true">—</span>{" "}{end}
        </div>
      </div>
    </article>
  );
};