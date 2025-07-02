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

export const StyledCard = styled.div`
  /* flex: 1 1 auto;
  display: flex; */
  overflow-y: scroll;
  overflow-x: hidden;
  /* flex-direction: column; */
  position: relative;
  min-height: 40vh;

  //Hiding scrollbar:
  -ms-overflow-style: none; //IE
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    display: none; //Webkit
  }

  &::after {
    content: '';
    display: block;
    position: sticky;
    bottom: 0;
    width: 100%;
    align-self: flex-start;
    padding: 10px 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fffffe 75%);
  }

  .description {
    padding: 0 1rem;
    word-wrap: break-word;

    @media (min-width: 768px) {
      padding: 0 15%;
    }

    @media (min-width: 1200px) {
      padding: 0 25%;
    }
  }

  .card-meta-divider {
    width: 30rem;
    margin: 60px auto 40px auto;
    border: none;
    border-top: 2px dotted ${({ theme }) => theme.colors.gray};
  }

  .category {
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    ${pointBasedColor}
  }

  .points-circle {
    position: relative;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.2;
    ${pointBasedBackground}
  }

  .points-value {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .points-label {
    font-size: 0.8rem;
  }
`;