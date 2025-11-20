import { type CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default Card;
