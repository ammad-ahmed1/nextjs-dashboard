"use client";
import React from "react";
import { searchIcon as Icon } from "@/utils/appbar-items";
interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
}

const Search: React.FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <div className="bg-navy p-10 flex rounded-lg gap-10">
      <Icon />
      <input
        className="p-2 bg-dark text-white input h-[15px] bg-transparent rounded-lg items-center  max-w-[160px]"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
