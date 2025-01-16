"use server";

import { API_URL } from "@/constants";
import { IMarket } from "@/types";

export const getMarkets = async (): Promise<IMarket[]> => {
  const res = await fetch(`${API_URL}/markets`);
  const data = await res.json();

  return data;
};
