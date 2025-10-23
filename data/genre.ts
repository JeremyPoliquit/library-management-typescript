// ✅ Define the shape of each genre item
export interface Genre {
  id: number;
  name: string;
  href: string;
}

// ✅ Strictly typed genre list
export const genre: Genre[] = [
  {
    id: 1,
    name: "New",
    href: "",
  },
  {
    id: 2,
    name: "Fantasy",
    href: "",
  },
  {
    id: 3,
    name: "Text Book",
    href: "",
  },
  {
    id: 4,
    name: "Thrillers",
    href: "",
  },
  {
    id: 5,
    name: "Art",
    href: "",
  },
  {
    id: 6,
    name: "History",
    href: "",
  },
];
