import Head from 'next/head';
import { Inter } from '@next/font/google';
import Card from '../components/Card';
import CardContainer, { CardContainerProps } from '../components/CardContainer';

const inter = Inter({ subsets: ['latin'] });
const errorList = [
   {
      responseClass: '100 - Informational',
      cardList: [
         { title: '100', description: 'Continue' },
         { title: '101', description: 'Switching Protocols' },
         { title: '102', description: 'Processing' },
         { title: '103', description: 'Early Hints' },
      ],
   },
   {
      responseClass: '200 - Success',
      cardList: [
         { title: '200', description: 'OK' },
         { title: '201', description: 'Created' },
         { title: '202', description: 'Accepted' },
         { title: '203', description: 'Non-Authoritative Information' },
         { title: '204', description: 'No Content' },
         { title: '205', description: 'Reset Content' },
         { title: '206', description: 'Partial Content' },
         { title: '207', description: 'Multi-Status' },
         { title: '208', description: 'Already Reported' },
         { title: '226', description: 'IM Used' },
      ],
   },
   {
      responseClass: '300 - Redirection',
      cardList: [
         { title: '300', description: 'Multiple Choices' },
         { title: '301', description: 'Moved Permanently' },
         { title: '302', description: 'Found' },
         { title: '303', description: 'See Other' },
         { title: '304', description: 'Not Modified' },
         { title: '305', description: 'Use Proxy' },
         { title: '306', description: 'Switch Proxy' },
         { title: '307', description: 'Temporary Redirect' },
         { title: '308', description: 'Permanent Redirect' },
      ],
   },
   {
      responseClass: '400 - Client Error',
      cardList: [
         { title: '400', description: 'Bad Request' },
         { title: '401', description: 'Unauthorized' },
         { title: '402', description: 'Payment Required' },
         { title: '403', description: 'Forbidden' },
         {
            title: '404',
            description: 'Not Found',
            detailedDescription:
               'The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web',
         },
         { title: '405', description: 'Method Not Allowed' },
         { title: '406', description: 'Not Acceptable' },
         { title: '407', description: 'Proxy Authentication Required' },
         { title: '408', description: 'Request Timeout' },
         { title: '409', description: 'Conflict' },
         { title: '410', description: 'Gone' },
         { title: '411', description: 'Length Required' },
         { title: '412', description: 'Precondition Failed' },
         { title: '413', description: 'Payload Too Large' },
         { title: '414', description: 'URI Too Long' },
         { title: '415', description: 'Unsupported Media Type' },
         { title: '416', description: 'Range Not Satisfiable' },
         { title: '417', description: 'Expectation Failed' },
         { title: '418', description: "I'm a teapot" },
         { title: '421', description: 'Misdirected Request' },
         { title: '422', description: 'Unprocessable Entity' },
         { title: '423', description: 'Locked' },
         { title: '424', description: 'Failed Dependency' },
         { title: '425', description: 'Too Early' },
         { title: '426', description: 'Upgrade Required' },
         { title: '428', description: 'Precondition Required' },
         { title: '429', description: 'Too Many Requests' },
         { title: '431', description: 'Request Header Fields Too Large' },
         { title: '451', description: 'Unavailable For Legal Reasons' },
      ],
   },
   {
      responseClass: '500 - Server Error',
      cardList: [
         { title: '500', description: 'Internal Server Error' },
         { title: '501', description: 'Not Implemented' },
         { title: '502', description: 'Bad Gateway' },
         { title: '503', description: 'Service Unavailable' },
         { title: '504', description: 'Gateway Timeout' },
         { title: '505', description: 'HTTP Version Not Supported' },
         { title: '506', description: 'Variant Also Negotiates' },
         { title: '507', description: 'Insufficient Storage' },
         { title: '508', description: 'Loop Detected' },
         { title: '510', description: 'Not Extended' },
         { title: '511', description: 'Network Authentication Required' },
      ],
   },
];

export default function Home() {
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
            {errorList.map((currError) => (
               <CardContainer
                  key={currError.responseClass}
                  responseClass={currError.responseClass}
                  cardList={currError.cardList}
               />
            ))}
         </main>
      </>
   );
}
