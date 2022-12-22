export interface CardProps {
   title: string;
   description: string;
}

const Card = ({ title, description }: CardProps) => {
   return (
      <div className="cardClass">
         <h2> {title}</h2>
      </div>
   );
};
export default Card;
