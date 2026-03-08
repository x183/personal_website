import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/general/Header';
import { useState } from 'react';
import { Project } from './projects';
import { getFromApi } from './api/requests';
import CardContainer from '../components/errors/CardContainer';
import Achievement from '../components/CV/Achievement';
import Card from '../components/errors/Card';

const inter = Inter({ subsets: ['latin'] });

type Education = {
   title: string;
   school: string;
   time: string;
   courses: string[];
};
type Job = {
   role: string;
   company: string;
   time: string;
   description: string[];
};
type CV = {
   education: Education[];
   jobs: Job[];
   projects: Project[];
};

export default function Home() {
   const [data, setData] = useState<CV>();
   getFromApi('cv/all')
      .then((res) => {
         setData(res);
      })
      .catch(() => {
         console.log('Something went wrong accessing the backend');
      });
   return (
      <>
         <Head>
            <title>Oscar Palm</title>
            <meta name="description" content="Created by Oscar Palm" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={styles.main}>
            <h1> Welcome!</h1>
            <h2>Education</h2>
            {data?.education.map((degree) => (
               <Achievement
                  title={degree.title}
                  date={degree.time}
                  place={degree.school}
                  detailList={degree.courses}
                  key={degree.title}
               />
            ))}
            <h2>Jobs</h2>
            {data?.jobs.map((job, a) => (
               <Achievement
                  title={job.role}
                  date={job.time}
                  place={job.company}
                  detailList={job.description}
                  key={a}
               />
            ))}
            <h2>Projects and side projects</h2>
            {data?.projects.map((currProject) => (
               <Card
                  key={currProject.name}
                  cardProp={{
                     title: currProject.name,
                     description: '',
                     detailedDescription: (
                        <>
                           {currProject.link} <br /> {currProject.description}
                        </>
                     ),
                  }}
                  filter={''}
               />
            ))}
         </main>
      </>
   );
}
