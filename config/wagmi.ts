import { arbitrum } from 'viem/chains';
import { createConfig, injected, http } from 'wagmi';


export const config = createConfig({
  chains: [arbitrum],
  connectors: [
    injected(),
  ],
  transports: {
    [arbitrum.id]: http()
  },
})