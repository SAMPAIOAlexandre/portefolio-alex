import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types/projects";

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  links,
  tags,
}) => {
  return (
    <article className="flex flex-col rounded-lg border p-4 shadow transition hover:shadow-lg">
      <div className="relative mb-4 aspect-[16/9]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="rounded object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      {description && (
        <p className="mb-4 text-sm text-gray-600">{description}</p>
      )}

      {tech && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex gap-2">
        {links?.demo && (
          <Link
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
          >
            Demo
          </Link>
        )}
        {links?.code && (
          <Link
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gray-800 px-3 py-1 text-sm text-white hover:bg-gray-900"
          >
            Code
          </Link>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
