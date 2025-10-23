import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";
import { genre } from "@/data/genre";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { ReactNode } from "react";

// ✅ Define props type
interface SearchFilterProps {
  statusIcon: ReactNode;
  statusName: string;
}

function SearchFilter({ statusIcon, statusName }: SearchFilterProps) {
  return (
    <div className="flex flex-col space-y-4 font-serif">
      {/* === Search Bar === */}
      <div className="flex space-x-6">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* === Filter Section === */}
      <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
        {/* Home / Page Status */}
        <div className="flex items-center">
          {statusIcon}
          <h2 className="text-xl">{statusName}</h2>
        </div>

        {/* === Genre Badges === */}
        {genre.map(({ id, name, href }) => (
          <div key={id}>
            <Link href={href}>
              <Badge variant="secondary" className="text-xs">
                {name}
              </Badge>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter