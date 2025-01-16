import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const toUSD = (value: string, decimals: number = 18, price: string) => {
  if (Number(value) === 0) return "$0";

  const usd =
    (Number(value) / Math.pow(10, decimals)) * (Number(price) / 1e9) * 1e3;
  const formatted =
    usd >= 1e6
      ? (usd / 1e6).toLocaleString("en-US", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + "m"
      : usd >= 1e3
      ? (usd / 1e3).toLocaleString("en-US", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + "k"
      : usd.toLocaleString("en-US", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        });

  return `$${formatted}`;
};

export const toPercentage = ({
  value,
  decimals,
  toFixed = 0,
}: {
  value: string;
  decimals: number;
  toFixed?: number;
}) => {
  const percentage = (Number(value) / Math.pow(10, decimals)) * 100;
  return `${percentage.toFixed(toFixed)}%`;
};
