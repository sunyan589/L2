const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SignatureNFT = await ethers.getContractFactory("SignatureNFT");
  const signatureNFT = await SignatureNFT.deploy(arg1, arg2, arg3); // 替换为实际参数

  console.log("SignatureNFT deployed to:", signatureNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });