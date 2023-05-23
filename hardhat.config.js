require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env.local' });

const sepoliaURL = process.env.SEPOLIA_URL;
const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
	networks: {
		hardhat: {},
		sepolia: {
			url: sepoliaURL,
			accounts: [privateKey],
		},
	},
};
