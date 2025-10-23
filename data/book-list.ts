// Define the type for a book item
export interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

// Explicitly type the array as Book[]
export const bookList: Book[] = [
  {
    id: 1,
    image: "/assets/books/A Room With a View.jpg",
    title: "A Room With a View",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 2,
    image: "/assets/books/Antigone.jpg",
    title: "Antigone",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 3,
    image: "/assets/books/Bleak House.jpg",
    title: "Bleak House",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 4,
    image: "/assets/books/Cooking Up a Storm.jpg",
    title: "Cooking Up a Storm",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 5,
    image: "/assets/books/Cyber Security.jpg",
    title: "Cyber Security",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 6,
    image: "/assets/books/Ethan Frome.jpg",
    title: "Ethan Frome",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 7,
    image: "/assets/books/Metamorphosis.jpg",
    title: "Metamorphosis",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 8,
    image: "/assets/books/Notre Dame De Paris.jpg",
    title: "Notre Dame De Paris",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 9,
    image: "/assets/books/Programming with Java.jpg",
    title: "Programming with Java",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 10,
    image: "/assets/books/The Art of Statistics.jpg",
    title: "The Art of Statistics",
    description: "This is a sample description for card one.",
    href: "",
  },
  {
    id: 11,
    image: "/assets/books/The Brain That Change itself.jpg",
    title: "The Brain That Change Itself",
    description: "This is a sample description for card one.",
    href: "",
  },
];
