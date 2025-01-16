import { EOracleKey } from "@/enums";
import SiloAbi from "../abis/ISilo.json";

export const defaultAddress = "0x4E513ec0f16004519Dd95C421d249adD7C59d656"; //WETH->wstETH

export const BASE_PARAMS = {
  address: defaultAddress,
  abi: SiloAbi,
};

export const ORACLES_MAP: Record<EOracleKey, string> = {
  [EOracleKey.chainlinkV3]: "Chainlink",
};
