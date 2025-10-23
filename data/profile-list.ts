import { Home, Bookmark, Star, Trash2, Archive } from "lucide-react";

export interface SidebarItem {
  id: number;
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

export const sidebarItems: SidebarItem[] = [
  { id: 1, name: "Home", icon: Home, href: "/home" },
  { id: 2, name: "Bookmark", icon: Bookmark, href: "" },
  { id: 3, name: "Favorite", icon: Star, href: "/favorite" },
  { id: 4, name: "Delete", icon: Trash2, href: "" },
  { id: 5, name: "Archive", icon: Archive, href: "" },
];

export const mobileItems: SidebarItem[] = [
  { id: 1, icon: Bookmark, name: "Save", href: "" },
  { id: 2, icon: Archive, name: "Archive", href: "" },
  { id: 3, icon: Trash2, name: "Delete", href: "" },
];
