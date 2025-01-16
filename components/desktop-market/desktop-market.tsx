import { FC } from "react";
import DesktopMarketInfo from "../desktop-market-info";
import DesktopSilo from "../desktop-silo";
import { TDesktopMarket } from "./desktop-market.type";

export const DesktopMarket: FC<TDesktopMarket> = ({
  id,
  isVerified,
  silo0,
  silo1,
}) => (
  <div className="flex flex-col gap-0.5">
    {/* first row */}
    <div
      role="row"
      className="h-12 flex items-center px-10 bg-foreground rounded-t-2xl"
    >
      <DesktopMarketInfo id={id} isVerified={isVerified} />
      <DesktopSilo {...silo0} />
    </div>

    {/* second row */}
    <div
      role="row"
      className="h-12 flex items-center px-10 bg-foreground rounded-b-2xl"
    >
      <div role="cell" className="flex-[9]" />
      <DesktopSilo {...silo1} />
    </div>
  </div>
);
