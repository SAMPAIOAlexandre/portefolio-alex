import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("m-auto max-w-3xl px-4", props.className)}>
      {props.children}
    </section>
  );
};
