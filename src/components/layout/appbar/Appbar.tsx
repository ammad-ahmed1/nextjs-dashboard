"use client";
import React from "react";
import { navIcons } from "@/utils/appbar-items";
import { usePathname } from "next/navigation";
import Search from "@/components/shared/Search";

const AppBar: React.FC = () => {
  const pathName = usePathname();
  console.log(pathName, ".........pathname");

  function formatString(pathName: string): string {
    const withoutSlashes = pathName.replace(/\//g, "");
    const capitalized =
      withoutSlashes.charAt(0).toUpperCase() +
      withoutSlashes.slice(1).toLowerCase();
    return capitalized;
  }

  return (
    <div className="flex justify-between m-20 p-20 bg-blue rounded-lg items-center">
      <div>
        <p className="text-gray text-base font-bold">
          {formatString(pathName)}
        </p>
      </div>
      <div className="flex justify-normal items-center">
        <Search name={"search"} type={"text"} placeholder={"Search..."} />
        {navIcons.map((Icon, index) => (
          <div key={index} className=" mx-5">
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
