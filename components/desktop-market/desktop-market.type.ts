import { IMarket } from "@/app/types";

type TDesktopMarket = Pick<IMarket, "id" | "isVerified" | "silo0" | "silo1">;

export type { TDesktopMarket };
