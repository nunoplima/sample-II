"use client";

import { useMarketsQuery } from "@/queries/use-markets-query";
import { FC } from "react";
import DesktopMarket from "../desktop-market";
import MobileMarket from "../mobile-market";
import Skeleton from "../ui/skeleton";

export const Markets: FC = () => {
  const { data: markets = [], isPending } = useMarketsQuery();

  if (isPending || !markets) {
    return (
      <div className="min-h-dvh">
        {/* desktop */}
        <div className="hidden lg:flex flex-col gap-2.5 ">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                {/* first row */}
                <Skeleton className="rounded-t-2xl" />
                {/* second row */}
                <Skeleton className="rounded-b-2xl" />
              </div>
            ))}
        </div>

        {/* mobile */}
        <div className="lg:hidden flex flex-col gap-14">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-8">
                  <Skeleton className="h-8 max-w-sm rounded-lg" />
                  <Skeleton className="h-16 rounded-xl" />
                </div>

                <div className="flex h-[874px] md:h-[432px] gap-2.5 md:flex-row flex-col">
                  <Skeleton className="flex-1 h-[874px] md:h-[432px] rounded-xl" />
                  <Skeleton className="flex-1 h-[874px] md:h-[432px] rounded-xl" />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-col gap-2.5 text-sm">
        {markets.map(({ id, isVerified, silo0, silo1 }) => (
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
        {markets.map(({ id, isVerified, silo0, silo1 }) => (
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
