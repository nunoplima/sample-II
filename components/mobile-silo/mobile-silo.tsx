import circleIcon from "@/assets/circle.svg";
import questionIcon from "@/assets/question.svg";
import { ORACLES_MAP } from "@/constants/const";
import { toPercentage, toUSD } from "@/lib/utils";
import { ISilo } from "@/types";
import Image from "next/image";

export const MobileSilo = ({
  logos,
  symbol,
  name,
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
  <div className="flex-1 flex flex-col gap-5 rounded-xl bg-foreground p-5">
    <div className="flex items-center gap-2.5">
      {logos.coinMarketCap?.small && (
        <Image
          src={logos.coinMarketCap.small}
          width={18}
          height={18}
          alt="silo0 logo"
        />
      )}
      <p className="font-semibold">{symbol}</p>
      <p className="text-xs text-secondary-typography opacity-60">{name}</p>
    </div>

    {/* bottom card */}
    <div className="flex flex-col gap-5">
      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-2.5 text-xs text-secondary-typography">
          Deposit APR
          <Image
            src={questionIcon}
            width={18}
            height={18}
            alt="question logo"
          />
        </div>

        <p className="font-semibold font-mono text-2xl">
          {toPercentage({
            value: collateralBaseApr,
            decimals: 18,
            toFixed: 1,
          })}
        </p>
      </div>

      {/* divider */}
      <div className="w-full border border-t-foreground opacity-10" />

      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-2.5 text-xs text-secondary-typography">
          Borrow APR
          <Image
            src={questionIcon}
            width={18}
            height={18}
            alt="question logo"
          />
        </div>

        <p className="font-semibold font-mono text-2xl">
          {toPercentage({
            value: debtBaseApr,
            decimals: 18,
            toFixed: 1,
          })}
        </p>
      </div>

      {/* divider */}
      <div className="w-full border border-t-foreground opacity-10" />

      <div className="flex place-content-between items-center text-secondary-typography">
        Available to borrow
        <p className="font-semibold font-mono text-typography">
          {toUSD(liquidity, decimals, priceUsd)}
        </p>
      </div>

      <div className="flex place-content-between items-center text-secondary-typography">
        {symbol} TVL
        <p className="font-semibold font-mono text-typography">
          {toUSD(tvl, decimals, priceUsd)}
        </p>
      </div>

      <div className="flex place-content-between items-center text-secondary-typography">
        Max LTV
        <p className="font-semibold font-mono text-typography">
          {toPercentage({
            value: maxLtv,
            decimals: 18,
            toFixed: 1,
          })}
        </p>
      </div>

      <div className="flex place-content-between items-center text-secondary-typography">
        Liquidation threshhold
        <p className="font-semibold font-mono text-typography">
          {toPercentage({
            value: lt,
            decimals: 18,
            toFixed: 1,
          })}
        </p>
      </div>

      <div className="flex place-content-between items-center text-secondary-typography">
        Oracle
        <div className="flex items-center gap-2.5 font-semibold text-typography">
          {ORACLES_MAP[oracle.oracleKey] ? (
            <>
              <Image
                src={circleIcon}
                style={{ height: 10, width: 10 }}
                alt="circle logo"
              />
              {ORACLES_MAP[oracle.oracleKey]}
            </>
          ) : (
            "--"
          )}
        </div>
      </div>
    </div>
  </div>
);
