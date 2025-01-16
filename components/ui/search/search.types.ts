import { ChangeEvent } from "react";

interface ISearch {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { ISearch };
