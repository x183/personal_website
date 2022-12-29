import NotesData from '../../interfaces/NotesData';
import FancyButton from './FancyButton';
import styles from './NotesCategory.module.css';

export interface NotesCategoryProps {
   categoryName: string;
   notes: NotesData[];
}

const NotesCategory = ({ categoryName, notes }: NotesCategoryProps) => {
   return (
      <>
         <h2>{categoryName}</h2>
         <div className={styles.notesCategory}>
            {notes.map((note) => (
               <FancyButton
                  key={note.name}
                  note={note}
                  folderName={categoryName.toLowerCase()}
               />
            ))}
         </div>
      </>
   );
};

export default NotesCategory;
