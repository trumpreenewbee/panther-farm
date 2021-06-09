require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solidity: {
    version: "0.6.12",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: { 
        mnemonic: "cart sauce slab victory rotate upset question festival artefact trim crucial embark",
        initialIndex: 1,
        count: 1

      }
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: {
        mnemonic: "cart sauce slab victory rotate upset question festival artefact trim crucial embark",
        initialIndex: 1,
        count: 1
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
