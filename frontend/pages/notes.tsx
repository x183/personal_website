import Head from 'next/head';
import NotesCategory from '../components/notes/NotesCategory';
import notes from '../data/notes.json';

export default function Home() {
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
            {notes.map((category) => (
               <NotesCategory
                  key={category.categoryName}
                  categoryName={category.categoryName}
                  notes={category.courses}
               />
            ))}
         </main>
      </>
   );
}
