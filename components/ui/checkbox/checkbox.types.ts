import { ComponentProps } from "react";

interface ICheckbox extends ComponentProps<"input"> {
  label?: string;
}

export type { ICheckbox };
