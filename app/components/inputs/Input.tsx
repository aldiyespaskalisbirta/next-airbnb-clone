"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: InputProps) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-2 pt-4 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-75 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${
          errors[id]
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus:border-black"
        }`}
      />
      <label
        className={`absolute text-md transition duration-150 transform -translate-y-3 top-4 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:border-x-2
        peer-focus:bg-white
        peer-focus:px-2
        peer-focus:border-black
        peer-focus:scale-105 peer-focus:-translate-y-7 ${
          errors[id]
            ? "text-rose-500 peer-focus:border-rose-500"
            : "text-zinc-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
