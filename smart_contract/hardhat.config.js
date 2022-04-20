require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4CFOtO_3SA42c7b8tHiBwEevpA1TbdN',
      accounts: [ 'abd9f605e121b8f46430e4249f4be5d9c56388ad3e0fdd63feee64a5cfe39882' ]
    }
  }
};
