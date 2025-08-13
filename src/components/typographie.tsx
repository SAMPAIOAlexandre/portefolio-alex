import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function Title({ children, as = "h1", className = "" }: TitleProps) {
  const Tag = as;

  return (
    <Tag className={`font-title text-4xl font-bold ${className}`}>
      {children}
    </Tag>
  );
}

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`font-body text-base leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
