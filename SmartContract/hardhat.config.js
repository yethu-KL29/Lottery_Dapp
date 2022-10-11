require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
const { P_KEY,URL } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.9",
  defaultNetwork:"mumbai",
  networks: {
   
    
    // Sensitive contents are hidden
    mumbai: {
      //url from alchemy paste here 
      url: URL,
      //private key from Metamask paste here
      chainId :80001,
      accounts:[`0x${P_KEY}`],
    }
  },
};