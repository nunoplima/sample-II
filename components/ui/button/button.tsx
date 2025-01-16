import { ComponentProps } from "react";

export const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className="w-fit flex gap-2.5 py-2 px-4 border border-secondary-foreground rounded-full text-secondary-typography cursor-pointer hover:opacity-80 transition-all"
      {...props}
    >
      {children}
    </button>
  );
};
