const { ethers } = require("hardhat");

(async () => {
    const contractArtifart = ethers.getContractFactory("TccToken");
    const deployed = await (await contractArtifart).deploy()

    const contractAddress = await deployed.getAddress();
    console.log(`Contract deployed on ${contractAddress} successfully!`)
})();