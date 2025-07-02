import { StyledCard } from './styles/Card.styled';

type Proptypes = {
  card: Card;
};

const Card = ({ card }: Proptypes) => {
  return (
    <StyledCard>
      <h3>{card.title}</h3>
      {card.description && <p className="description">{card.description}</p>}
      <div className="card-meta-divider"></div>
      {card.category && <p className="category" data-points={card.points}>{card.category}</p>}
      <div className="points-circle" data-points={card.points}>
        <span className="points-value">{card.points}</span>
        <span className="points-label">{card.points === 1 ? 'Point' : 'Points'}</span>
      </div>
    </StyledCard>
  );
};

export default Card;
