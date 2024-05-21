import { defaultWagmiConfig } from "@web3modal/wagmi/vue";
import { arbitrum, bsc, mainnet, sepolia } from "@wagmi/core/chains";
export const chains = [bsc];
export const projectId = process.env.VUE_APP_PROJECT_ID;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "TCC Website",
    description: "TCC Website",
    url: "",
    icons: [],
    verifyUrl: "",
  },
});

