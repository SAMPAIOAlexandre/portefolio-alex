import Image from "next/image";
import Link from "next/link";
import { Project  } from '../../types/projects';


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
    <article className="rounded-lg border shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative aspect-[16/9] mb-4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      {tech && (
        <ul className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <li key={t} className="px-2 py-1 text-xs bg-gray-200 rounded">
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
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Demo
          </Link>
        )}
        {links?.code && (
          <Link
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Code
          </Link>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
