// https://eth-ropsten.alchemyapi.io/v2/CBinKSsut0feeehQPE8LzvlyHZby8i23

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CBinKSsut0feeehQPE8LzvlyHZby8i23',
      accounts: ['cbcf64db9c2c45114869dd11f0999f3990e690c5cc2ecd3310d5a53f9ecfd0f2'],
    },
  },

}