'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { contractABI } from '../../../../../abi/abi';

declare global {
	interface Window {
		ethereum: any;
	}
}

const contractAddress = '0x032C3529D23A2dee065CCcDbc93656425530D557';

const initialState = {
	isThereEthers: false,
	contractConnected: false,
	connectionError: false,
	signerAddress: '',
	smartContract: {},
};

export const getContractThunk = createAsyncThunk(
	'address/getAddressThunk',
	async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		await provider.send('eth_requestAccounts', []);

		const signer = provider.getSigner();
		const walletAddress = await signer.getAddress();

		return { signer, walletAddress };
	}
);

export const contractSlice = createSlice({
	name: 'contract',
	initialState,
	reducers: {
		checkForEthers: state => {
			if (window.ethereum) {
				state.isThereEthers = true;
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getContractThunk.fulfilled, (state, action) => {
				const signer = action.payload?.signer;

				const smartContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);

				state.contractConnected = true;
				state.connectionError = false;
				state.smartContract = smartContract;
				state.signerAddress = action.payload.walletAddress;
			})
			.addCase(getContractThunk.rejected, state => {
				state.connectionError = true;
			});
	},
});

export const { checkForEthers } = contractSlice.actions;
export default contractSlice.reducer;
