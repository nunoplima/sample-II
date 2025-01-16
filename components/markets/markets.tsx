"use client";

import { EQueryParamsKey } from "@/enums";
import useDebouncedValue from "@/hooks/use-debounced-value";
import { useMarketsQuery } from "@/queries/use-markets-query";
import { IMarket } from "@/types";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import DesktopMarket from "../desktop-market";
import MarketsSkeletons from "../markets-skeletons";
import MobileMarket from "../mobile-market";

export const Markets: FC = () => {
  const searchParams = useSearchParams();

  const { data: markets, isPending } = useMarketsQuery();

  const searchTerm = searchParams.get(EQueryParamsKey.market) || "";
  const isVerifiedParam =
    searchParams.get(EQueryParamsKey.isVerified) === "true";
  const sortDirection =
    searchParams.get(EQueryParamsKey.sortDirection) === "descending" ? -1 : 1;

  const debouncedSearchTerm = useDebouncedValue(searchTerm);
  const debouncedIsVerifiedParam = useDebouncedValue(isVerifiedParam);
  const debouncedSortDirection = useDebouncedValue(sortDirection);

  if (isPending || !markets) {
    return <MarketsSkeletons />;
  }

  const filteredMarkets = markets.filter(
    (market) =>
      (market.silo0.symbol
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase()) ||
        market.silo1.symbol
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())) &&
      (!debouncedIsVerifiedParam || market.isVerified)
  );

  const filteredAndSortedMarkets = filteredMarkets.sort(
    (a: IMarket, b: IMarket) =>
      (Number(a.silo0.tvl) + Number(a.silo1.tvl)) * debouncedSortDirection -
      (Number(b.silo0.tvl) + Number(b.silo1.tvl)) * debouncedSortDirection
  );

  if (filteredAndSortedMarkets.length === 0) {
    return <p className="text-sm">Oops, no markets matching your search...</p>;
  }

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-col gap-2.5 text-sm">
        {filteredAndSortedMarkets.map(({ id, isVerified, silo0, silo1 }) => (
          <DesktopMarket
            key={id}
            id={id}
            isVerified={isVerified}
            silo0={silo0}
            silo1={silo1}
          />
        ))}
      </div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-14">
        {filteredAndSortedMarkets.map(({ id, isVerified, silo0, silo1 }) => (
          <MobileMarket
            key={id}
            id={id}
            isVerified={isVerified}
            silo0={silo0}
            silo1={silo1}
          />
        ))}
      </div>
    </>
  );
};
