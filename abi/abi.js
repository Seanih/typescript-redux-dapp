export const contractABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: '_first',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_phrase',
				type: 'string',
			},
		],
		name: 'addPhraseToArray',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'phraseArray',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'showAllPhrases',
		outputs: [
			{
				internalType: 'string[]',
				name: '',
				type: 'string[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];
