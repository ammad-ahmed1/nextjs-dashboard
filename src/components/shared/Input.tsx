"use client";
import React from "react";
import { useForm } from "react-hook-form";
// import { UseFormMethods } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  register: any;
  error: any;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="my-5">
      <div className="my-2">
        <label className=" text-white text-small font-light">{label}</label>
      </div>

      <input
        className="p-5 w-350 bg-dark text-white input"
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <div className="my-1">
        <span className=" text-err text-small font-light">
          {error && error}
        </span>
      </div>
    </div>
  );
};

export default Input;
