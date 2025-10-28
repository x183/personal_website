import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../../styles/Home.module.css';
import { getFromApi } from '../api/requests';
import { useState } from 'react';
import Card from '../../components/errors/Card';


type Project = {
	name:string;
	description:string;
	link:string;
}

export default function Home() {
		const [data, setData] = useState<Project[]>();
		getFromApi('sideprojects/all')
			.then((res) => {
				setData(res);
			})
			.catch(() => {
				console.log('Something went wrong accessing the backend');
			});
	return (
		<>
			<Head>
				<title>Oscar Palm - Side Projects</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1> Welcome!</h1>
				<p>Here are some of my side projects:</p>
				{data
					? data.map((currProject) => (
							<Card key={currProject.name} cardProp={{title: currProject.name, description: currProject.link, detailedDescription: currProject.description}} filter={''} />
						))
					: ''}
			</main>
		</>
	);
}
