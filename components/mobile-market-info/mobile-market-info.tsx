import arbitrumIcon from "@/assets/arbitrum.svg";
import Image from "next/image";
import { FC } from "react";
import { IMobileMarketInfo } from "./mobile-market-info.types";

export const MobileMarketInfo: FC<IMobileMarketInfo> = ({
  id,
  isVerified,
  silo0Symbol,
  silo1Symbol,
}) => (
  <div className="flex flex-col gap-8">
    <h2 className="text-2xl font-semibold">
      {silo0Symbol} • {silo1Symbol} market
    </h2>
    <div className="flex gap-2.5 sm:gap-5 rounded-xl bg-foreground p-5">
      <div className="flex gap-2 text-secondary-typography">
        Network
        <Image src={arbitrumIcon} height={18} width={18} alt="arbitrum logo" />
      </div>

      <div className="flex gap-2">
        <span className="text-secondary-typography">ID</span>
        <p className="font-semibold font-mono">{id}</p>
      </div>

      <div className="flex gap-2 text-secondary-typography last:text-typography">
        <span className="text-secondary-typography">Verified</span>
        <p className="font-semibold font-mono">{isVerified ? "Yes" : "No"}</p>
      </div>
    </div>
  </div>
);
