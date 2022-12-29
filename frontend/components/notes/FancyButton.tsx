import Link from 'next/link';
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
         {note.name}
      </Link>
   );
};
export default FancyButton;
