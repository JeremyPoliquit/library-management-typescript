"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ChevronRight } from "lucide-react";
import { mobileItems, sidebarItems, SidebarItem } from "@/data/profile-list";
import SidebarReading from "./SidebarReading";

// ✅ Component definition
const SidebarProfile: React.FC = () => {
  return (
    <aside className="flex justify-around lg:flex-col items-center mx-4 gap-6 font-serif space-y-4">
      {/* === Profile Section === */}
      <div className="flex flex-col items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <h1 className="text-xl font-semibold">Justin</h1>
        <h3 className="text-sm text-gray-500">@Tadaiki</h3>
      </div>

      {/* === Mobile Section === */}
      <div className="flex flex-col space-y-2 lg:hidden">
        <SidebarReading
          mode="Currently Reading"
          title="The Brain That Changes Itself"
        />

        <div className="flex items-center space-x-4">
          {mobileItems.map(({ id, icon: Icon, name, href }: SidebarItem) => (
            <Link
              href={href}
              key={id}
              className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* === Desktop Menu Section === */}
      <ul className="hidden lg:block w-full">
        {sidebarItems.map(({ id, name, icon: Icon, href }: SidebarItem) => (
          <li
            key={id}
            className="flex items-center justify-between hover:bg-gray-100 rounded-md px-3 py-2 transition"
          >
            <Link
              href={href}
              className="flex items-center gap-3 hover:text-gray-800 transition-colors"
            >
              <Icon size={20} />
              <span>{name}</span>
            </Link>
            <ChevronRight size={18} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarProfile;
