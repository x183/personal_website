import Head from 'next/head';
import { Inter } from '@next/font/google';
import Card from '../components/Card';
import CardContainer, { CardContainerProps } from '../components/CardContainer';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import errorList from '../data/errors.json';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   const [filter, setFilter] = useState('');
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
            {errorList.map((currError) => (
               <CardContainer
                  key={currError.responseClass}
                  responseClass={currError.responseClass}
                  cardList={currError.cardList}
                  filter={filter}
               />
            ))}
         </main>
      </>
   );
}
