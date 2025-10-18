import Head from 'next/head';
import NotesCategory from '../components/notes/NotesCategory';
import { useState } from 'react';
import { getFromApi } from './api/requests';

type NoteCat = {
	categoryName: string;
	courses: {
		name: string;
		pdf: string;
		image: string;
	}[];
};

export default function Home() {
	const [notes, setNotes] = useState<NoteCat[]>();
	getFromApi('sideprojects/notes/all')
		.then((res) => setNotes(res))
		.catch(() =>
			console.log('Something went wrong fetching the notes from the backend')
		);
	return (
		<>
			<Head>
				<title>Lecture notes</title>
				<meta
					name="description"
					content="Lookup table for notes from lectures"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{notes
					? notes.map((category) => (
							<NotesCategory
								key={category.categoryName}
								categoryName={category.categoryName}
								notes={category.courses}
							/>
						))
					: ''}
			</main>
		</>
	);
}
