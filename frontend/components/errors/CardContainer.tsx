import CardData from '../../interfaces/CardData';
import Card from './Card';
import styles from './CardContainer.module.css';
export interface CardContainerProps {
	responseClass: string;
	cardList: CardData[];
	filter: string;
}

const CardContainer = ({
	responseClass,
	cardList,
	filter,
}: CardContainerProps) => {
	const cards = cardList
		.map((currCard) => (
			<Card key={currCard.title} cardProp={currCard} filter={filter} />
		))
		.filter((c) => {
			return c != null;
		});
	if (cards.length < 2) return null;
	return (
		<>
			<h1>{responseClass}</h1>
			<div className={styles.cardContainer}>{cards}</div>
		</>
	);
};
export default CardContainer;
