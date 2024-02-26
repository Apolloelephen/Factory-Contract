import { ethers } from "hardhat";

async function main() {
  const ownerAddress = "0x676506a80Ea0F6Fe1ee2Ed75EDaF479c4bee4984";
  const carModel = "Toyota";

  const CarFactory = "0x676506a80Ea0F6Fe1ee2Ed75EDaF479c4bee4984";
  const carsFactory = await ethers.getContractAt(
    "ICars",
    CarFactory
  );

  const createWalletTx = await carsFactory.create(
    ownerAddress,
    carModel
  );
  await createWalletTx.wait();

  const pollClones = await carsFactory.getCar(1);

  console.log(pollClones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});