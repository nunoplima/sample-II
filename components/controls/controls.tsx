"use client";

import arrowUpDownIcon from "@/assets/arrow-up-down.svg";
import sortIcon from "@/assets/sort.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/button";
import Checkbox from "../ui/checkbox";
import Search from "../ui/search";

export const Controls = () => {
  const [isVerified, setIsVerified] = useState(true);

  return (
    <div className="flex-col md:flex-row flex gap-5 mb-10">
      <Search />

      <Checkbox
        label="Is reviwed:"
        checked={isVerified}
        onChange={(e) => setIsVerified(e.target.checked)}
      />

      <Button>
        Sort by TVL
        <Image src={arrowUpDownIcon} width={18} height={18} alt="arrows icon" />
      </Button>

      <div className="hidden lg:flex items-center gap-1 text-secondary-typography">
        (
        <Image src={arrowUpDownIcon} width={18} height={18} alt="arrows icon" />
        for default,
        <Image src={sortIcon} width={18} height={18} alt="sort icon" />
        for descending,
        <Image
          src={sortIcon}
          className="rotate-180"
          width={18}
          height={18}
          alt="arrows icon"
        />
        for ascending)
      </div>
    </div>
  );
};
