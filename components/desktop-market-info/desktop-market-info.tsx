import arbitrumIcon from "@/assets/arbitrum.svg";
import questionIcon from "@/assets/question.svg";
import { IMarket } from "@/types";
import Image from "next/image";

export const DesktopMarketInfo = ({
  id,
  isVerified,
}: Pick<IMarket, "id" | "isVerified">) => (
  <>
    <div role="cell" className="flex-[3]">
      <Image
        src={arbitrumIcon}
        style={{ height: 18, width: 18 }}
        alt="arbitrum logo"
      />
    </div>

    <div role="cell" className="flex-[3]">
      {id}
    </div>

    <div role="cell" className="flex-[3] flex gap-2.5">
      {isVerified ? "Yes" : "No"}
      <Image src={questionIcon} width={18} height={18} alt="question logo" />
    </div>
  </>
);
