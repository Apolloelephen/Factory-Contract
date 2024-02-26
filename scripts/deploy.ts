import { ethers } from "hardhat";

async function main() {
  const carFactory = await ethers.deployContract("CarFactory");

  await carFactory.waitForDeployment();

  console.log(`car Factory contract deployed to ${carFactory.target}`
   
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
