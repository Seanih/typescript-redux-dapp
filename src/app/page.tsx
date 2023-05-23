'use client';

import {
	checkForEthers,
	getContractThunk,
} from './GlobalRedux/features/contract/contractSlice';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from './GlobalRedux/store';
import { useEffect } from 'react';

export default function Home() {
	const {
		isThereEthers,
		contractConnected,
		connectionError,
		signerAddress,
		smartContract,
	} = useSelector((state: RootState) => state.contract);
	const dispatch = useDispatch<AppDispatch>();

	const formattedAddress = (address: string) =>
		address.slice(0, 5) + '...' + address.slice(address.length - 4);

	useEffect(() => {
		dispatch(checkForEthers());
	});

	return (
		<main className='flex flex-col items-center justify-center p-24'>
			<h1>Main Page</h1>
			{isThereEthers && !contractConnected ? (
				<button
					className='px-4 bg-sky-700'
					type='button'
					onClick={() => dispatch(getContractThunk())}
				>
					Connect Smart Contract
				</button>
			) : null}

			{!isThereEthers && (
				<button className='px-4 bg-green-700' type='button'>
					Install Metamask
				</button>
			)}

			{contractConnected && (
				<>
					<p>Contract is connected!</p>
					<p>
						Signer address: <span>{formattedAddress(signerAddress)}</span>
					</p>
				</>
			)}
		</main>
	);
}
