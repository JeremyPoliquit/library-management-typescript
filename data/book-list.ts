// Define the type for a book item
export interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
  href: string;
}

// Explicitly type the array as Book[]
export const bookList: Book[] = [
  {
    id: 1,
    image: "/assets/books/A Room With a View.jpg",
    title: "A Room With a View",
    description:
      "The book is a romantic and social satire set between Italy and England. It follows Lucy Honeychurch, a young upper-middle-class woman traveling in Florence, who encounters people and feelings that challenge the rigid expectations of Edwardian society. Torn between passion and propriety, Lucy must choose between a safe, socially approved fiancé and a more genuine, emotionally honest love that awakens her sense of self. The novel critiques social conventions, class snobbery, and the tension between freedom and repression, all while using light humor and vivid descriptions of travel and culture",
    slug: "a-room-wtih-a-view",
    href: "",
  },
  {
    id: 2,
    image: "/assets/books/Antigone.jpg",
    title: "Antigone",
    description:
      "The book is a Greek tragedy written by Sophocles. It tells the story of Antigone, a young woman who defies King Creon’s order by burying her brother Polynices, whom Creon declared a traitor. Antigone believes that moral and divine laws are more important than human laws, while Creon insists on the authority of the state. The conflict leads to a tragic chain of events, ending in death and regret. The play explores themes like civil disobedience, loyalty to family vs. loyalty to the law, pride, and the consequences of absolute power.",
    slug: "antigone",
    href: "",
  },
  {
    id: 3,
    image: "/assets/books/Bleak House.jpg",
    title: "Bleak House",
    description:
      "The book is a novel by Charles Dickens that exposes the corruption, delay, and moral decay caused by England’s long, tangled legal system—especially the Court of Chancery. The story revolves around the endless lawsuit between Jarndyce and Jarndyce, which ruins lives as it drags on for generations. Told through alternating narratives—one by a mysterious third-person observer and the other by the kind and steady Esther Summerson—the book mixes mystery, satire, romance, and social critique. It also introduces one of literature’s first detective-style plots while exploring themes of justice, class inequality, charity, and personal responsibility.",
    slug: "bleak-house",
    href: "",
  },
  {
    id: 4,
    image: "/assets/books/Cooking Up a Storm.jpg",
    title: "Cooking Up a Storm",
    description: "The book is an erotic contemporary romance about Abby Coates, a restaurant owner in Cape Cod whose business is failing, and Storm Dupre, a gifted and seductive chef she hires to save it. Storm introduces an aphrodisiac-themed menu and awakens Abby’s buried desires, but he secretly plans to take over the restaurant for himself. The book focuses on sensuality, power, and sexual awakening more than deep romance plot, with heavy erotic content characteristic of the Black Lace imprint.",
    slug: "cooking-up-storm",
    href: "",
  },
  {
    id: 5,
    image: "/assets/books/Cyber Security.jpg",
    title: "Cyber Security",
    description: "The book is a comprehensive guide that introduces the principles, threats, and protective measures used to secure digital systems and information. It explains how cyber attacks such as malware, phishing, ransomware, and network intrusions work, and teaches readers how to defend against them using tools like encryption, firewalls, intrusion detection, and secure coding practices. The book also covers ethical hacking, digital forensics, risk management, and modern security policies, making it useful for beginners, students, and professionals who want a solid foundation in protecting data and IT infrastructure.",
    slug: "cyber-security",
    href: "",
  },
  {
    id: 6,
    image: "/assets/books/Ethan Frome.jpg",
    title: "Ethan Frome",
    description: "The book is a short novel by Edith Wharton set in a bleak, wintry New England town. It tells the tragic story of Ethan, a quiet and duty-bound farmer trapped in an unhappy marriage with his sickly and controlling wife Zeena. When Zeena’s young cousin Mattie comes to live with them, Ethan experiences warmth, hope, and forbidden love for the first time. The story explores repressed desire, isolation, moral duty, and the harsh consequences of choices. Its tone is somber and realistic, and the ending is known for being especially bleak and haunting.",
    slug: "ethan-frome",
    href: "",
  },
  {
    id: 7,
    image: "/assets/books/Metamorphosis.jpg",
    title: "Metamorphosis",
    description: "The book is a novella by Franz Kafka about a man named Gregor Samsa who wakes up one day to find himself transformed into a giant insect. The story explores how his family reacts to his change, gradually isolating and rejecting him as he becomes a burden. The book deals with themes of alienation, identity, guilt, family responsibility, and the dehumanizing effects of modern life. Despite the surreal premise, it reflects realistic emotional and social struggles faced by people who feel different or unwanted.",
    slug: "metamorphosis",
    href: "",
  },
  {
    id: 8,
    image: "/assets/books/Notre Dame De Paris.jpg",
    title: "Notre Dame De Paris",
    description: "The book is a historical novel by Victor Hugo, first published in 1831. Set in 15th-century Paris, it centers around the Notre-Dame Cathedral and follows intertwined lives of key characters: Quasimodo, the deformed bell ringer; Esmeralda, a beautiful Romani dancer; Claude Frollo, the conflicted archdeacon; and Phoebus, a charming soldier. The book explores themes of social injustice, obsession, unrequited love, fate, and the clash between beauty and monstrosity. Beyond the characters, the novel also served as Hugo’s plea to preserve Gothic architecture, which influenced the restoration of many French cathedrals, including Notre-Dame itself.",
    slug: "notre-dame-de-paris",
    href: "",
  },
  {
    id: 9,
    image: "/assets/books/Programming with Java.jpg",
    title: "Programming with Java",
    description: "The book is a foundational textbook that introduces students and beginners to the core concepts of Java language and object-oriented programming. It typically covers topics such as data types, control structures, classes and objects, inheritance, interfaces, exception handling, multithreading, file handling, and GUI development. The book is structured to build knowledge step-by-step with practical code examples, exercises, and real-world applications, making it useful for academic courses and self-study. It emphasizes writing clean, reusable, and efficient Java code while preparing readers for more advanced software development topics.",
    slug: "programmig-with-java",
    href: "",
  },
  {
    id: 10,
    image: "/assets/books/The Art of Statistics.jpg",
    title: "The Art of Statistics",
    description: "The book  is a beginner-friendly book that explains how statistics helps us make sense of real-world data. Instead of focusing on formulas, the author uses clear examples—from medical trials to crime data—to show how to ask the right questions, avoid misleading conclusions, and interpret numbers responsibly. It teaches readers how to think statistically: judging uncertainty, spotting bias, and reaching evidence-based decisions in everyday life.",
    slug: "the-art-of-statistics",
    href: "",
  },
  {
    id: 11,
    image: "/assets/books/The Brain That Change itself.jpg",
    title: "The Brain That Change Itself",
    description: "The book is a popular-science book that explains neuroplasticity — the discovery that the brain can rewire and reshape itself through experience, training, and recovery, even in adulthood. Through real stories of people who overcame brain injuries, learning disorders, sensory loss, or age-related decline, the book shows how targeted exercises and therapies can help the brain create new neural pathways. It also discusses the “dark side” of plasticity, showing that bad habits and negative patterns can also become wired in. Overall, the book presents a hopeful, evidence-based view that the brain is more adaptable, dynamic, and capable of change than once believed.",
    slug: "the-brain-change-itself",
    href: "",
  },
  {
    id: 12,
    image: "/assets/books/The Camp of the Saints.jpg",
    title: "The Camp of the Saints",
    description: "The book is a French dystopian novel by Jean Raspail. It depicts a future scenario in which a massive wave of migrants from the Global South travels by ship to Europe, triggering political and social collapse as Western governments fail to respond. The story is told from the perspective of Europeans who view migration as an existential threat to Western civilization. The book is highly controversial because it portrays immigrants and non-Western cultures in a negative, dehumanizing way and has been cited by far-right groups to justify anti-immigration views. Critics argue that it promotes racism and xenophobia, while supporters claim it is a warning about cultural displacement. In short: it is a politically charged, divisive novel framed as a cautionary tale about mass immigration and Western decline.",
    slug: "the-camp-of-the-saints",
    href: "",
  },
  {
    id: 13,
    image: "/assets/books/The Crystal Shard.jpg",
    title: "The Crystal Shard",
    description: "The book is a fantasy novel by R.A. Salvatore and the first book in The Icewind Dale Trilogy. It introduces the dark elf ranger Drizzt Do’Urden, along with companions Wulfgar and Bruenor, in the frozen region of Icewind Dale. The story centers on the rise of Akar Kessel, a weak wizard who gains control of a powerful, sentient artifact called the Crystal Shard (Crenshinibon). With its magic, he attempts to dominate the dale, forcing Drizzt and his allies to stand against him. The book is known for its fast-paced battles, character-driven storytelling, and for launching one of the most popular characters in Dungeons & Dragons literature.",
    slug: "the-crystal-shard",
    href: "",
  },
  {
    id: 14,
    image: "/assets/books/The Nicomachean Ethics.jpg",
    title: "The Nicomachean Ethics",
    description: "The book is Aristotle’s major work on moral philosophy. In it, he explores what it means to live a good and fulfilling life. He argues that the highest human goal is eudaimonia — often translated as “happiness” or “flourishing” — achieved not through pleasure or wealth, but by practicing virtue with reason and good habits. Aristotle explains that virtues are developed through action and balance — for example, courage is the balance between recklessness and cowardice. The book also discusses friendship, justice, and the role of rational thinking in ethical decisions. Overall, the work provides a structured, practical guide to living a morally good and meaningful life.",
    slug: "the-nicomachean-ethics",
    href: "",
  },
  {
    id: 15,
    image: "/assets/books/The Plot Against America.jpg",
    title: "The Pilot Against America",
    description: "The book is an alternate-history novel that imagines what might have happened if aviation hero Charles Lindbergh — a real figure who admired Hitler and opposed U.S. entry into WWII — had defeated Franklin D. Roosevelt in the 1940 presidential election. After Lindbergh becomes president, he signs peace deals with Nazi Germany and begins quietly implementing policies that marginalize and intimidate American Jews. The story is told through the eyes of a young Jewish boy (a fictionalized version of Roth himself) whose family in Newark, New Jersey, watches the country tilt toward fascism and antisemitism. The book explores how political shifts at the top can rapidly reshape ordinary lives, turning democracy into something unrecognizable without outright war or revolution.",
    slug: "the-plot-against-america",
    href: "",
  },
  {
    id: 16,
    image: "/assets/books/The Prince.jpg",
    title: "The Prince",
    description: "The book is a political treatise that explains how rulers can gain, maintain, and consolidate power. Unlike idealistic philosophies of his time, Machiavelli wrote in a realistic and sometimes ruthless tone, arguing that effective leaders must be willing to act immorally when necessary. He emphasizes practicality over ethics, advising rulers to be feared rather than loved if they can’t be both, to manipulate appearances, and to adapt to changing circumstances. The book is considered one of the foundations of modern political science.",
    slug: "the-prince",
    href: "",
  },
  {
    id: 17,
    image: "/assets/books/The Scarlet Pimpernel.jpg",
    title: "The Scarlet Pimpernel",
    description: "The book is a historical adventure novel set during the French Revolution’s Reign of Terror. It follows an anonymous English hero known only by the symbol of a small red flower — the Scarlet Pimpernel — who daringly rescues French aristocrats from execution and smuggles them to safety in England. While French agents desperately hunt him down, even his own wife, Marguerite, becomes entangled in trying to uncover his identity. The story blends mystery, romance, and espionage, and is considered one of the earliest “masked hero” tales — a precursor to characters like Zorro and Batman.",
    slug: "the-scarlet-pimpernel",
    href: "",
  },
  {
    id: 18,
    image: "/assets/books/The Souls of Black Folk.jpg",
    title: "The Souls of Black Folk",
    description: "The book  by W.E.B. Du Bois (1903) is a landmark work that explores the lives, struggles, and identity of African Americans after slavery. Du Bois introduces concepts like “double consciousness” and “the veil” to describe the challenges of living in a racist society. He critiques social inequality and argues for full civil rights, education, and dignity for Black people.",
    slug: "the-souls-of-black-folk",
    href: "",
  },
  {
    id: 19,
    image: "/assets/books/Treasure Island.jpg",
    title: "Treasure Island",
    description: "The book is an adventure novel by Robert Louis Stevenson about a young boy named Jim Hawkins who discovers a pirate’s treasure map and joins a sea voyage to find the buried gold. The journey turns dangerous when the ship’s crew includes secret pirates led by the cunning Long John Silver. The story is known for its themes of greed, betrayal, bravery, and moral choices, and it helped shape the classic image of pirates in popular culture — maps with “X”, peg legs, parrots, and buried treasure.",
    slug: "treasure-island",
    href: "",
  },
  {
    id: 20,
    image: "/assets/books/White Fang.jpg",
    title: "White Fang",
    description: "The book is an adventure novel set in the harsh Yukon wilderness during the Klondike Gold Rush. It follows the life of White Fang, a wolf-dog born in the wild who eventually comes into contact with humans. The story explores his struggle for survival, his brutal experiences with cruel owners, and his gradual transformation as he learns trust and kindness from a compassionate master. The book highlights themes of nature vs. nurture, survival, cruelty, and redemption.",
    slug: "white-fang",
    href: "",
  },
  {
    id: 21,
    image: "/assets/books/Whose Body.jpg",
    title: "Whose Body",
    description: "The book is all about the first detective novel by Dorothy L. Sayers featuring aristocratic sleuth Lord Peter Wimsey. The story opens with a mysterious body found naked in a bathtub, wearing only a pair of pince-nez (eyeglasses with no arms). Wimsey investigates how the corpse got there, who it is, and why it was placed in such a strange way. The novel blends classic puzzle-style mystery with wit, social observation, and early psychological insight, setting the tone for Sayers’ later, more complex works in the Lord Peter Wimsey series.",
    slug: "whose-body",
    href: "",
  },
];
