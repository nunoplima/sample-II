import { EOracleKey } from "@/enums";

interface ICoinMarketCap {
  small: string;
  large: string;
}

interface ISilo {
  tokenAddress: string;
  symbol: string; // silo ticker
  name: string; // silo name
  logos: {
    coinMarketCap: ICoinMarketCap | null; // silo logo
  };
  decimals: number;
  priceUsd: string;
  maxLtv: string; // max ltv
  lt: string; // liquidation threshold
  oracle: {
    address: string;
    oracleKey: EOracleKey;
  };
  collateralBaseApr: string; // deposit apr
  debtBaseApr: string; // borrow apr
  liquidity: string; // available to borrow
  tvl: string; // tvl
}

interface IMarket {
  network: string;
  id: string;
  isVerified: boolean;
  configAddress: string;
  silo0: ISilo;
  silo1: ISilo;
}

export type { IMarket, ISilo };
