import Link from "next/link";
import { Book } from "lucide-react";
import { discovery, help, openLibrary, type FooterLink } from "@/data/footer";

function Footer() {
  // You can optionally type the arrays if TS doesn't infer them automatically
  const openLinks: FooterLink[] = openLibrary;
  const discoverLinks: FooterLink[] = discovery;
  const helpLinks: FooterLink[] = help;

  return (
    <footer className="p-4 mx-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 font-serif text-center md:text-left">
      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-2">
          <Book size={40} />
          <h1 className="text-3xl">Bookey</h1>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/icons/twitter.png"
            className="w-5 h-5"
            alt="Twitter"
          />
          <img
            src="/assets/icons/instagram.png"
            className="w-5 h-5"
            alt="Instagram"
          />
          <img
            src="/assets/icons/youtube.png"
            className="w-5 h-5"
            alt="YouTube"
          />
          <img
            src="/assets/icons/linkedin.png"
            className="w-5 h-5"
            alt="LinkedIn"
          />
        </div>
      </div>

      {/* Open Library */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Open Library</h3>
        <ul className="flex flex-col gap-2 list-inside">
          {openLinks.map(({ id, name, href }) => (
            <li key={id}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Discover */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Discover</h3>
        <ul className="flex flex-col gap-2 list-inside">
          {discoverLinks.map(({ id, name, href }) => (
            <li key={id}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Help */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Help</h3>
        <ul className="flex flex-col gap-2 list-inside">
          {helpLinks.map(({ id, name, href }) => (
            <li key={id}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer