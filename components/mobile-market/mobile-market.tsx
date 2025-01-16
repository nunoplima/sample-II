import { FC } from "react";
import MobileMarketInfo from "../mobile-market-info";
import MobileSilo from "../mobile-silo";
import { TMobileMarket } from "./mobile-market.types";

export const MobileMarket: FC<TMobileMarket> = ({
  id,
  isVerified,
  silo0,
  silo1,
}) => (
  <div role="row" className="flex flex-col gap-2.5">
    <MobileMarketInfo
      id={id}
      silo0Symbol={silo0.symbol}
      silo1Symbol={silo1.symbol}
      isVerified={isVerified}
    />

    <div className="flex gap-2.5 md:flex-row flex-col">
      <MobileSilo {...silo0} />
      <MobileSilo {...silo1} />
    </div>
  </div>
);
