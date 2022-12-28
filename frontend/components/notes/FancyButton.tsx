import { NextResponse } from 'next/server';
import NotesData from '../../interfaces/NotesData';
import styles from './FancyButton.module.css';

export interface FancyButtonProps {
   note: NotesData;
}

const FancyButton = ({ note }: FancyButtonProps) => {
   return (
      <button
         className={styles.fancyButton}
         onClick={() => {
            return NextResponse.redirect(note.pdf);
         }}
      >
         {note.name}
      </button>
   );
};
export default FancyButton;
