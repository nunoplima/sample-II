import { EOracleKey } from "@/enums";

export const ORACLES_MAP: Record<EOracleKey, string> = {
  [EOracleKey.chainlinkV3]: "Chainlink",
};

export const API_URL = "http://localhost:3000/api";
