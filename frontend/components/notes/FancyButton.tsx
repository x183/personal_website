import Link from 'next/link';
import Image from 'next/image';
import { NextResponse } from 'next/server';
import NotesData from '../../interfaces/NotesData';
import styles from './FancyButton.module.css';

export interface FancyButtonProps {
   note: NotesData;
   folderName: string;
}

const FancyButton = ({ note, folderName }: FancyButtonProps) => {
   return (
      <Link
         href={`/notes/${folderName}/${note.pdf}`}
         className={styles.fancyButton}
      >
         <p>{note.name}</p>
         <br />
         <Image
            src={`/images/${note.image}`}
            width={100}
            height={100}
            alt={'missing image'}
         />
      </Link>
   );
};
export default FancyButton;
