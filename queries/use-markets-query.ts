import { useQuery } from "@tanstack/react-query";
import { getMarkets } from "../actions/get-markets";

export const useMarketsQuery = () =>
  useQuery({
    queryKey: ["markets"],
    queryFn: getMarkets,
  });
export { getMarkets };
