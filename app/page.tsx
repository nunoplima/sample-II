import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getMarkets } from "../actions/get-markets";
import Controls from "../components/controls";
import Markets from "../components/markets";
import getQueryClient from "../lib/get-query-client";

export default async function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["markets"],
    queryFn: getMarkets,
  });

  return (
    <>
      <Controls />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Markets />
      </HydrationBoundary>
    </>
  );
}
