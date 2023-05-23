const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Reinforce', function () {
	async function deployContractFixture() {
		const reinforce = await ethers.getContractFactory('Reinforce');
		const contract = await reinforce.deploy('first phrase');
		await contract.deployed();

		return { contract };
	}

	describe('Success', () => {
		describe('Deployment', () => {
			it('deploys contract and adds phrase to array', async () => {
				const { contract } = await loadFixture(deployContractFixture);

				expect(await contract.phraseArray(0)).to.equal('first phrase');
			});

			it('adds user text to array', async () => {
				const { contract } = await loadFixture(deployContractFixture);

				await contract.addPhraseToArray('second phrase');

				expect(await contract.phraseArray(1)).to.equal('second phrase');
			});
		});
	});

	describe('Failure', () => {
		it('rejects missing addPhraseToArray argument', async () => {
			const { contract } = await loadFixture(deployContractFixture);

			await expect(contract.addPhraseToArray('')).to.be.revertedWith(
				'must enter a random word or phrase'
			);
		});
	});
});
