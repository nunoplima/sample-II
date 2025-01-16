import circleIcon from "@/assets/circle.svg";
import questionIcon from "@/assets/question.svg";
import { ORACLES_MAP } from "@/constants/const";
import { toPercentage, toUSD } from "@/lib/utils";
import { ISilo } from "@/types";
import Image from "next/image";

export const DesktopSilo = ({
  logos,
  symbol,
  collateralBaseApr,
  debtBaseApr,
  liquidity,
  tvl,
  decimals,
  priceUsd,
  maxLtv,
  lt,
  oracle,
}: ISilo) => (
  <>
    <div role="cell" className="flex-[6]">
      <div className="w-fit flex gap-1 bg-secondary-foreground p-1.5 rounded-full">
        {logos.coinMarketCap?.small && (
          <Image
            src={logos.coinMarketCap.small}
            width={18}
            height={18}
            alt="silo0 logo"
          />
        )}
        {symbol}
      </div>
    </div>

    <div role="cell" className="flex-[6] font-semibold font-mono">
      {toPercentage({
        value: collateralBaseApr,
        decimals: 18,
        toFixed: 1,
      })}
    </div>

    <div role="cell" className="flex-[6] font-semibold font-mono">
      {toPercentage({
        value: debtBaseApr,
        decimals: 18,
        toFixed: 1,
      })}
      %
    </div>

    <div role="cell" className="flex-[4] font-mono">
      {toUSD(liquidity, decimals, priceUsd)}
    </div>

    <div role="cell" className="flex-[4] font-mono">
      {toUSD(tvl, decimals, priceUsd)}
    </div>

    <div role="cell" className="flex-[4] font-mono">
      {toPercentage({
        value: maxLtv,
        decimals: decimals,
      })}
      /{toPercentage({ value: lt, decimals: decimals })}
    </div>

    <div role="cell" className="flex-[5] flex items-center gap-2.5">
      {ORACLES_MAP[oracle.oracleKey] ? (
        <div className="flex gap-2.5 items-center">
          <Image
            src={circleIcon}
            style={{ height: 10, width: 10 }}
            alt="circle logo"
          />
          {ORACLES_MAP[oracle.oracleKey]}
        </div>
      ) : (
        "--"
      )}
      <Image src={questionIcon} width={18} height={18} alt="question logo" />
    </div>
  </>
);
