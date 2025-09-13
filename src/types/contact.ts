export type ContactMethodType =
  | "email"
  | "phone"
  | "linkedin"
  | "github"
  | "website"
  | "x"
  | "other";

export interface Contact {
  id: string;
  type: ContactMethodType;
  iconName?: string;
  value: string;
  label: string;
}
