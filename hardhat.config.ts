import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv/config');

const { INFURA_RPC, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: INFURA_RPC,
      accounts: [`${PRIVATE_KEY}`]
    }
  }

};

export default config;
