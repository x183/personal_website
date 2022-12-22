import { CardProps } from './Card';
import Card from './Card';
import styles from './CardContainer.module.css';
export interface CardContainerProps {
   responseClass: string;
   cardList: CardProps[];
}

const CardContainer = ({ responseClass, cardList }: CardContainerProps) => {
   return (
      <>
         <h1>{responseClass}</h1>
         <div className={styles.cardContainer}>
            {cardList.map((currCard) => (
               <Card
                  key={currCard.title}
                  title={currCard.title}
                  description={currCard.description}
               />
            ))}
         </div>
      </>
   );
};
export default CardContainer;
