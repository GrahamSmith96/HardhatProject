require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/c80e74e81de64813826a06700d4f8455",
      accounts: ['f3ffd81467dbd8fe517213d2b81c6b4b80b897de6880c8d68dfbe261a57b23ec']
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
  paths: {
    artifacts: "./app/artifacts",
  }
};