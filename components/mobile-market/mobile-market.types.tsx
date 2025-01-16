import { IMarket } from "@/types";

type TMobileMarket = Pick<IMarket, "id" | "isVerified" | "silo0" | "silo1">;

export type { TMobileMarket };
