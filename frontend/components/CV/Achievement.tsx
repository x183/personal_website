import { useState } from 'react';
import styles from './Achievement.module.css';

export interface AchievementProp {
   title: string;
   date: string;
   place: string;
   detailList: string[];
}

const delayText = async (text: string[] | undefined, setText: any) => {
   if (!text) return;
   setTimeout(() => {
      setText(text);
   }, 350);
};

const Achievement = ({ title, date, place, detailList }: AchievementProp) => {
   const [big, setBig] = useState(false);
   const [text, setText] = useState<string[]>([]);

   return (
      <div
         className={`${styles.achievementClass} ${big ? styles.bigCard : null}`}
         onClick={() => {
            setBig(!big);
            big ? setText([]) : delayText(detailList, setText);
         }}
      >
         <h2 className={styles.cardTitle}> {title}</h2>
         <p>
            {place} @ {date}
         </p>
         {big ? (
            <ul className={`indentedList`}>
               {text.map((detail) => (
                  <li key={detail}>{detail}</li>
               ))}
            </ul>
         ) : null}
      </div>
   );
};
export default Achievement;
