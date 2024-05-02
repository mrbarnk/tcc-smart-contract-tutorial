To initialize a Hardhat project, follow these steps:

1. Install Hardhat globally by running:
   ```
   npm i -g hardhat
   ```

2. Initialize your project by running:
   ```
   npx hardhat
   ```
   Choose TypeScript when prompted, then follow the instructions.

3. Install TypeScript dependencies locally:
   ```
   npm i -D ts-node typescript
   ```

4. Install the Metamask extension for Chrome from the Chrome Web Store: [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)

5. Set up and create your wallet in Metamask. Copy the address.

6. Obtain test Ether from the Sepolia faucet: [Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)

7. Sign up for a free RPC endpoint at [Infura](https://app.infura.io/). Copy your Metamask address's private key and the Sepolia RPC endpoint from Infura.

8. Create a `.env` file and add the following lines:
   ```
   PRIVATE_KEY="YOUR_PRIVATE_KEY"
   SEPOLIA_ENDPOINT="YOUR_SEPOLIA_RPC_ENDPOINT"
   ```

9. Install the `dotenv` library:
   ```
   npm i dotenv
   ```

10. Add the following dependencies to your `package.json`:
    ```json
    "devDependencies": {
      "@nomicfoundation/hardhat-chai-matchers": "^2.0.6",
      "@nomicfoundation/hardhat-ethers": "^3.0.5",
      "@nomicfoundation/hardhat-ignition": "^0.15.1",
      "@nomicfoundation/hardhat-ignition-ethers": "^0.15.1",
      "@nomicfoundation/hardhat-network-helpers": "^1.0.10",
      "@nomicfoundation/hardhat-toolbox": "^5.0.0",
      "@nomicfoundation/hardhat-verify": "^2.0.6",
      "@nomicfoundation/ignition-core": "^0.15.1",
      "@typechain/ethers-v6": "^0.5.1",
      "@typechain/hardhat": "^9.1.0",
      "@types/mocha": "^10.0.6",
      "chai": "^4.4.1",
      "dotenv": "^16.4.5",
      "ethers": "^6.12.1",
      "hardhat": "^2.22.3",
      "hardhat-gas-reporter": "^1.0.10",
      "solidity-coverage": "^0.8.12",
      "ts-node": "^10.9.2",
      "typechain": "^8.3.2",
      "typescript": "^5.4.5"
    }
    ```

11. Run:
    ```
    npm install
    ```
   to install the dependencies.