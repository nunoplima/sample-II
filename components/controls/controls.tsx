"use client";

import arrowUpDownIcon from "@/assets/arrow-up-down.svg";
import sortIcon from "@/assets/sort.svg";
import { EQueryParamsKey, ESortDirection } from "@/enums";
import { cn, getUpdatedSearchParams } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import Button from "../ui/button";
import Checkbox from "../ui/checkbox";
import Search from "../ui/search";

export const Controls = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get(EQueryParamsKey.market) || "";
  const isVerified = searchParams.get(EQueryParamsKey.isVerified) === "true";
  const sort = {
    by: searchParams.get(EQueryParamsKey.sortBy) || "",
    direction: searchParams.get(EQueryParamsKey.sortDirection) || "",
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedSearchParams = getUpdatedSearchParams({
      key: EQueryParamsKey.market,
      value: e.target.value,
    });
    router.push(updatedSearchParams);
  };

  const handleIsVerifiedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedSearchParams = getUpdatedSearchParams({
      key: EQueryParamsKey.isVerified,
      value: e.target.checked,
    });
    router.push(updatedSearchParams);
  };

  const handlebyTvl = () => {
    const currentDirection =
      searchParams.get(EQueryParamsKey.sortDirection) || ESortDirection.default;
    const newSortDirection =
      currentDirection === ESortDirection.default
        ? ESortDirection.descending
        : currentDirection === ESortDirection.descending
        ? ESortDirection.ascending
        : ESortDirection.default;

    let updatedSearchParams: string;

    if (newSortDirection === ESortDirection.default) {
      updatedSearchParams = getUpdatedSearchParams([
        {
          key: EQueryParamsKey.sortBy,
          value: "",
        },
        {
          key: EQueryParamsKey.sortDirection,
          value: "",
        },
      ]);
    } else {
      updatedSearchParams = getUpdatedSearchParams([
        {
          key: EQueryParamsKey.sortBy,
          value: "tvl",
        },
        {
          key: EQueryParamsKey.sortDirection,
          value: newSortDirection,
        },
      ]);
    }

    router.push(updatedSearchParams);
  };

  return (
    <div className="flex-col md:flex-row flex gap-5 mb-10">
      <Search handleChange={handleSearchTermChange} value={searchTerm} />

      <Checkbox
        label="Is reviewed:"
        checked={isVerified}
        onChange={handleIsVerifiedChange}
      />

      <Button onClick={handlebyTvl}>
        Sort by TVL
        <Image
          src={
            !sort.direction || sort.direction === ESortDirection.default
              ? arrowUpDownIcon
              : sortIcon
          }
          width={18}
          height={18}
          alt="arrows icon"
          className={cn(
            sort.direction === ESortDirection.ascending && "rotate-180"
          )}
        />
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
