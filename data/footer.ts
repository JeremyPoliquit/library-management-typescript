// Define a reusable type for your links
export type FooterLink = {
  id: number;
  name: string;
  href: string;
};

// Explicitly type each array
export const openLibrary: FooterLink[] = [
  { id: 1, name: "Vision", href: "" },
  { id: 2, name: "Volunteer", href: "" },
  { id: 3, name: "Blog", href: "" },
  { id: 4, name: "Terms of Service", href: "" },
  { id: 5, name: "Donate", href: "" },
];

export const discovery: FooterLink[] = [
  { id: 1, name: "Home", href: "/home" },
  { id: 2, name: "Books", href: "" },
  { id: 3, name: "Authors", href: "" },
  { id: 4, name: "Subjects", href: "" },
  { id: 5, name: "Collections", href: "" },
];

export const help: FooterLink[] = [
  { id: 1, name: "Collections", href: "/favorite" },
  { id: 2, name: "Contact Us", href: "" },
  { id: 3, name: "Suggesting Edits", href: "" },
  { id: 4, name: "Add a Book", href: "" },
  { id: 5, name: "Release Notes", href: "" },
];
