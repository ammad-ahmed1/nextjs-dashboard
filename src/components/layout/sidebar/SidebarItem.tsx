"use client";
"use strict";
import React from "react";
import { signOut } from "next-auth/react";
import { IconType } from "react-icons";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  title: string;
  path: string;
  icon: IconType;
};
const SidebarItem: React.FC<Props> = ({ title, path, icon: Icon }) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleClick = (path: string) => {
    if (path === "/auth/login") {
      signOut();
    }
    router.push(path);
  };
  return (
    <div
      className={`text-white text-lg font-normal my-5 mx-0 gap-10 p-4 flex items-center ${
        pathName === path ? "bg-navy" : "bg-transparent"
      } hover:bg-navy rounded-lg cursor-pointer`}
      onClick={() => handleClick(path)}
    >
      <Icon />
      {title}
    </div>
  );
};

export default SidebarItem;
