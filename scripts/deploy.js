// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

async function main() {
  const RaptorsNft = await hre.ethers.getContractFactory("RaptorsNft");
  const raptorsNft = await RaptorsNft.deploy();

  await raptorsNft.deployed();

  console.log("Deployed contract address: ", raptorsNft.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });