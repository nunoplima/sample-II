import searchIcon from "@/assets/search.svg";
import Image from "next/image";

export const Search = () => (
  <div className="relative hover:opacity-80 transition-all">
    <Image
      src={searchIcon}
      alt="search"
      width={24}
      height={24}
      className="absolute left-4 top-1/2 -translate-y-1/2"
    />
    <input
      type="text"
      placeholder="Search for a market"
      className="py-2 pl-12 pr-6 rounded-full bg-background border border-secondary-foreground text-typography placeholder:text-secondary-typography focus:outline-none"
    />
  </div>
);
