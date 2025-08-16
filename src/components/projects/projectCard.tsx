"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../../types/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  links,
  tags,
}) => {
  const [open, setOpen] = React.useState(false);
  const primaryTech = tech?.slice(0, 3) ?? [];
  const remainingTech = tech && tech.length > 3 ? tech.slice(3) : [];

  return (
    <article className="flex flex-col rounded-lg border p-4 shadow transition hover:shadow-lg">
      <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={image.priority}
        />
      </div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      {description && (
        <p className="mb-4 line-clamp-3 text-sm text-gray-600">{description}</p>
      )}

      {tech && tech.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {primaryTech.map((t) => (
            <li
              key={t}
              className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {t}
            </li>
          ))}
          {remainingTech.length > 0 && (
            <li className="bg-muted text-muted-foreground rounded px-2 py-1 text-xs">
              +{remainingTech.length}
            </li>
          )}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2">
        {links?.demo && (
          <Link
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label={`Voir la démo de ${title}`}
          >
            Demo
          </Link>
        )}
        {links?.code && (
          <Link
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gray-800 px-3 py-1 text-sm text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label={`Voir le code de ${title}`}
          >
            Code
          </Link>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="ml-auto rounded border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-haspopup="dialog"
              aria-label={`Voir plus de détails sur ${title}`}
            >
              Voir plus
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description && (
                <DialogDescription className="text-muted-foreground mt-1 space-y-2 text-sm leading-relaxed">
                  {description.split("\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </DialogDescription>
              )}
            </DialogHeader>

            <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={false}
              />
            </div>

            {tech && tech.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(links?.demo || links?.code) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {links?.demo && (
                  <Link
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    Ouvrir la démo
                  </Link>
                )}
                {links?.code && (
                  <Link
                    href={links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-gray-800 px-3 py-1.5 text-sm text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    Voir le code
                  </Link>
                )}
              </div>
            )}

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
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
};
