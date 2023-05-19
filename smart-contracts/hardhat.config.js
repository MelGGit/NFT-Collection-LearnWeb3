require("dotenv").config({ path: ".env" });
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.HTTP_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

//0xe24AE1aD4d6B4a697e2FB1bc71226C7837FfEbea
