import CardData from '../interfaces/CardData';
import Card from './Card';
import styles from './CardContainer.module.css';
export interface CardContainerProps {
   responseClass: string;
   cardList: CardData[];
}

const CardContainer = ({ responseClass, cardList }: CardContainerProps) => {
   return (
      <>
         <h1>{responseClass}</h1>
         <div className={styles.cardContainer}>
            {cardList.map((currCard) => (
               <Card key={currCard.title} cardProp={currCard} />
            ))}
         </div>
      </>
   );
};
export default CardContainer;
