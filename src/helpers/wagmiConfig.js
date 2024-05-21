import { defaultWagmiConfig } from "@web3modal/wagmi/vue";
import { arbitrum, mainnet } from "@wagmi/core/chains";
export const chains = [mainnet, arbitrum];
export const projectId = "d4076d74c85fcd767042e941cf1e2e84";
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "Web3Modal Vue Example",
    description: "Web3Modal Vue Example",
    url: "",
    icons: [],
    verifyUrl: "",
  },
});
