const networkConfig = {
	31337: {
		name: "hardhat",
	},
	42: {
		name: "kovan",
	},
	4: {
		name: "rinkeby",
	},
	1: {
		name: "mainnet",
	},
	5: {
		name: "goerli",
	},
	137: {
		name: "polygon",
	},
	4002: {
		name: "ftmTestnet",
	},
	97: {
		name: "bscTestnet",
	},
	69: {
		name: "optimisticKovan",
	},
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 5;

module.exports = {
	networkConfig,
	developmentChains,
	VERIFICATION_BLOCK_CONFIRMATIONS,
};
