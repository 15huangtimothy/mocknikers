import { useState } from 'react';
import styled, { css } from 'styled-components';

// Shared styles for point-based coloring
const pointBasedColor = css`
  &[data-points='1'] { color: ${({ theme }) => theme.colors.green1}; }
  &[data-points='2'] { color: ${({ theme }) => theme.colors.blue1}; }
  &[data-points='3'] { color: ${({ theme }) => theme.colors.purple1}; }
  &[data-points='4'] { color: ${({ theme }) => theme.colors.red1}; }
`;

const pointBasedBackground = css`
  &[data-points='1'] { background-color: ${({ theme }) => theme.colors.green1}; }
  &[data-points='2'] { background-color: ${({ theme }) => theme.colors.blue1}; }
  &[data-points='3'] { background-color: ${({ theme }) => theme.colors.purple1}; }
  &[data-points='4'] { background-color: ${({ theme }) => theme.colors.red1}; }
`;

const ExpandButton = styled.button<{ isExpanded: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    width: 30px;
    height: 30px;
    transition: transform 0.2s ease-in-out;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CardContent = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: ${props => props.isExpanded ? 'column' : 'row'};
  align-items: ${props => props.isExpanded ? 'flex-start' : 'center'};
  justify-content: ${props => props.isExpanded ? 'flex-start' : 'space-between'};
  width: 100%;
  height: 100%;
`;

const StyledDraftCard = styled.div<{ isSelected: boolean; isExpanded: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1rem;
  height: ${props => props.isExpanded ? 'auto' : '100px'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: ${props => props.isSelected ? '2px solid #007bff' : '2px solid transparent'};
  width: 100%;
  max-width: 100%;
  align-self: flex-start; // Prevent grid from stretching card

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .title-section {
    flex: 1;
    padding-right: .5rem;
    width: 100%;
    h3 {
      font-size: 1rem;
      margin: 0;
      text-align: left;
    }
  }

  .description {
    display: ${props => props.isExpanded ? 'block' : 'none'};
    margin: 1rem 0;
    font-size: 0.9rem;
    text-align: left;
    padding: 0;
    width: 100%;
  }

  .meta-section {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isExpanded ? 'flex-start' : 'center'};
    min-width: ${props => props.isExpanded ? '100%' : '60px'};
    margin-top: ${props => props.isExpanded ? '1rem' : '0'};
    margin-right: ${props => props.isExpanded ? '0' : '2rem'};
  }

  .category {
    display: ${props => props.isExpanded ? 'block' : 'none'};
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
    ${pointBasedColor}
  }

  .points-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${pointBasedBackground}
    align-self: ${props => props.isExpanded ? 'flex-start' : 'center'};
  }

  .points-value {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1;
  }

  @media (max-width: 768px) {
    height: ${props => props.isExpanded ? 'auto' : '80px'};
    padding: 0.75rem;

    .title-section h3 {
      font-size: 0.9rem;
    }

    .points-circle {
      width: 32px;
      height: 32px;
    }

    .points-value {
      font-size: 1rem;
    }
  }
`;

interface DraftCardProps {
  card: Card;
  isSelected: boolean;
  onClick: () => void;
  disabled: boolean;
}

const DraftCard = ({ card, isSelected, onClick, disabled }: DraftCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;

    // If we clicked the expand button, don't select the card
    if ((e.target as HTMLElement).closest('.expand-button')) {
      return;
    }

    onClick();
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card selection
    if (!disabled) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    } else if (e.key === 'Escape' && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <StyledDraftCard
      isSelected={isSelected}
      isExpanded={isExpanded}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-expanded={isExpanded}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.7 : 1 }}
    >
      <ExpandButton
        className="expand-button"
        onClick={handleExpandClick}
        disabled={disabled}
        isExpanded={isExpanded}
        aria-label={isExpanded ? "Collapse card" : "Expand card"}
      >
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ExpandButton>
      <CardContent isExpanded={isExpanded}>
        <div className="title-section">
          <h3>{card.title}</h3>
        </div>
        <p className="description">{card.description}</p>
        <div className="meta-section">
          {card.category && <p className="category" data-points={card.points}>{card.category}</p>}
          <div className="points-circle" data-points={card.points}>
            <span className="points-value">{card.points}</span>
          </div>
        </div>
      </CardContent>
    </StyledDraftCard>
  );
};

export default DraftCard;