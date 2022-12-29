import { useState } from 'react';
import CardData from '../interfaces/CardData';
import styles from './Card.module.css';
export interface CardProps {
   cardProp: CardData;
   filter: string;
}

const delayText = async (text: string | undefined, setText: any) => {
   if (!text) return;
   setTimeout(() => {
      setText(text);
   }, 350);
};

const checkFilter = (filter: string, cardInfo: CardData) => {
   if (filter === '') return true;
   return (
      cardInfo.title.toLowerCase().includes(filter) ||
      cardInfo.description.toLowerCase().includes(filter) ||
      cardInfo.detailedDescription?.toLowerCase().includes(filter)
   );
};

const Card = ({ cardProp, filter }: CardProps) => {
   const [big, setBig] = useState(false);
   const [text, setText] = useState('');
   if (!checkFilter(filter, cardProp)) return null;
   return (
      <div
         className={`cardClass ${big ? styles.bigCard : null}`}
         onClick={() => {
            setBig(!big);
            big
               ? setText('')
               : delayText(cardProp.detailedDescription, setText);
         }}
      >
         <h2 className={styles.cardTitle}> {cardProp.title}</h2>
         <p> {cardProp.description}</p>
         {big && cardProp.detailedDescription ? <p>{text}</p> : null}
      </div>
   );
};
export default Card;
