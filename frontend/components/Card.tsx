import { useState } from 'react';
import CardData from '../interfaces/CardData';
import styles from './Card.module.css';
export interface CardProps {
   cardProp: CardData;
}

const delayText = async (text: string | undefined, setText: any) => {
   if (!text) return;
   setTimeout(() => {
      setText(text);
   }, 350);
};

const Card = ({ cardProp }: CardProps) => {
   const [big, setBig] = useState(false);
   const [text, setText] = useState('');
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
