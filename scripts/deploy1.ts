import hre from 'hardhat'

(async () => {
    const account = (await hre.ethers.getSigners())[0]

    const contract = await hre.ethers.deployContract("TCC", account);

    const deployed = await contract.waitForDeployment();

    const contractAddress =  deployed.target;


    console.log('TCC deployed successfully! on address', deployed.target)

    console.log(await contract.getBalance(account))
    // const contract = await hre.ethers.getContractAt("Lock", lock.address)

    // const contractAddress = await contract.getAddress()

    console.log({ deployed })
})();