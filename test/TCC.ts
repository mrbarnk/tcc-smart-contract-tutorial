import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { getContractFactory } from "@nomicfoundation/hardhat-ethers/types";

describe("Lock", async function () {
  let account = (await hre.ethers.getSigners())[0];
  const contract = await hre.ethers.deployContract("TCC", account)

  console.log(await contract.getAddress())
  // const factory = await getContractFactory("TCC", account)
  // factory.interface.deploy()
  
  describe("Deployment", async function () {
    
    it('show address', async function () {

      console.log(await contract.getAddress())
    })
  });
});
