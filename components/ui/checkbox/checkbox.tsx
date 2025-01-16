import checkboxOff from "@/assets/checkbox-off.svg";
import checkboxOn from "@/assets/checkbox-on.svg";
import Image from "next/image";
import { FC } from "react";
import { ICheckbox } from "./checkbox.types";

export const Checkbox: FC<ICheckbox> = ({ label, ...props }) => (
  <label className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all group">
    <input
      type="checkbox"
      className="absolute w-0 h-0 opacity-0 focus:outline-none focus-visible:ring-0"
      {...props}
    />
    {label && <span className="text-secondary-typography">{label}</span>}
    <div className="w-5 h-5 rounded-sm group-focus-within:ring-2 group-focus-within:ring-[#1a73e8] group-focus-within:ring-offset-2">
      <Image
        src={props.checked ? checkboxOn : checkboxOff}
        alt="checkbox"
        width={24}
        height={24}
      />
    </div>
  </label>
);
