import React from 'react';
import Image from 'next/image';
import { Experience } from '@/types/experiences';
import { Title, Paragraph } from '@/components/typographie';


interface ExperienceItem extends Experience {}


export const ExperienceItem: React.FC<ExperienceItem> = ({
  title,
  description,
  image,
  startDate,
  endDate,
}) => {
  return (
    <article className="flex flex-col rounded-lg border p-4 shadow transition hover:shadow-lg">
      <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={image.priority}
        />
      </div>

      <Title as="h3" className="mb-2 text-lg font-semibold">{title}</Title>

      {description && (
        <Paragraph className="mb-4 line-clamp-3 text-sm text-gray-600">
          {description}
        </Paragraph>
      )}

      <div className="text-xs text-gray-500">
        {startDate} - {endDate || 'Présent'}
      </div>
    </article>
  );
}
    