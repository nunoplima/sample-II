import checkboxOff from "@/assets/checkbox-off.svg";
import checkboxOn from "@/assets/checkbox-on.svg";
import Image from "next/image";
import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<"input"> {
  label?: string;
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all">
      <input
        type="checkbox"
        className="absolute w-0 h-0 opacity-0"
        {...props}
      />
      {label && <span className="text-secondary-typography">{label}</span>}
      <div className="w-5 h-5">
        <Image
          src={props.checked ? checkboxOn : checkboxOff}
          alt="checkbox"
          width={24}
          height={24}
        />
      </div>
    </label>
  );
};
