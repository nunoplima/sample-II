"use server";

import { IMarket } from "@/types";

export const getMarkets = async (): Promise<IMarket[]> => {
  const res = await fetch("http://localhost:3000/api/markets");
  const data = await res.json();

  return data;
};
