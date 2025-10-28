import Head from 'next/head';
import { Inter } from '@next/font/google';
import Card from '../components/errors/Card';
import CardContainer, {
	CardContainerProps,
} from '../components/errors/CardContainer';
import SearchBar from '../components/errors/SearchBar';
import { useState } from 'react';
import { getFromApi } from './api/requests';
//import errorList from '../data/errors.json';

type ResCode = {
	responseClass: string;
	cardList: {
		title: string;
		description: string;
		detailedDescription: string;
	}[];
};

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
	const [filter, setFilter] = useState('');
	const [data, setData] = useState<ResCode[]>();
	getFromApi('sideprojects/error/all')
		.then((res) => {
			setData(res);
		})
		.catch(() => {
			console.log('Something went wrong accessing the backend');
		});
	return (
		<>
			<Head>
				<title>Error Messages</title>
				<meta
					name="description"
					content="Lookup table for different kinds of error messages"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<SearchBar filter={filter} setFilter={setFilter} />
				{data
					? data.map((currError) => (
							<CardContainer
								key={currError.responseClass}
								responseClass={currError.responseClass}
								cardList={currError.cardList}
								filter={filter}
							/>
						))
					: ''}
			</main>
		</>
	);
}
