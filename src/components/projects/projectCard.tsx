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
import { Button } from "../ui/button";

type ProjectCardProps = Project;

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
    <article
      className="group flex flex-col rounded-lg border p-4 shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg "
      aria-labelledby={`${title}-heading`}
    >
      <div className="relative mb-4 h-60 overflow-hidden rounded bg-muted">
        <div className="grid h-full w-full place-items-center">
          <div className="relative h-[80%] w-[85%] transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={image.priority}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded transition-shadow duration-200 group-hover:shadow-md" />
      </div>

      <h3 id={`${title}-heading`} className="mb-2 text-lg font-semibold">
        {title}
      </h3>

      {description && (
        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {tech && tech.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {primaryTech.map((t) => (
            <li
              key={t}
              className="rounded-2xl border bg-secondary/60 px-2.5 py-1 text-xs text-secondary-foreground/90"
            >
              {t}
            </li>
          ))}
          {remainingTech.length > 0 && (
            <li className="rounded-2xl border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              +{remainingTech.length}
            </li>
          )}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2">
        {links?.demo && (
          <Button asChild size="sm">
            <Link
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open demo for ${title}`}
            >
              Demo
            </Link>
          </Button>
        )}

        {links?.code && (
          <Button asChild size="sm" variant="secondary">
            <Link
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
            >
              Code
            </Link>
          </Button>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="outline"
              aria-haspopup="dialog"
              aria-label={`View more details about ${title}`}
              className="ml-auto"
            >
              Details
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description && (
                <DialogDescription className="mt-1 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {description.split("\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </DialogDescription>
              )}
            </DialogHeader>

            <div className="relative mt-2 h-72 overflow-hidden rounded bg-muted">
              <div className="grid h-full w-full place-items-center">
                <div className="relative h-[82%] w-[88%]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {tech && tech.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-2xl border bg-secondary/60 px-2.5 py-1 text-xs text-secondary-foreground/90"
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
                  <Button asChild size="sm">
                    <Link href={links.demo} target="_blank" rel="noopener noreferrer">
                      Open demo
                    </Link>
                  </Button>
                )}
                {links?.code && (
                  <Button asChild size="sm" variant="secondary">
                    <Link href={links.code} target="_blank" rel="noopener noreferrer">
                      View code
                    </Link>
                  </Button>
                )}
              </div>
            )}

            {tags && tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl border bg-accent/70 px-2.5 py-0.5 text-xs text-accent-foreground"
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
