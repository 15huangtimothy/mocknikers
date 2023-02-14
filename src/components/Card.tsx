import { StyledCard } from './styles/Card.styled';

type Proptypes = {
  card: Card;
};

const Card = ({ card }: Proptypes) => {
  return (
    <StyledCard>
      <h3>{card.word}</h3>
      {card.description && <p>{card.description}</p>}
    </StyledCard>
  );
};

export default Card;
