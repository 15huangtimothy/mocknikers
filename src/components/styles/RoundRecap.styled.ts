import styled from 'styled-components';

export const StyledRoundRecap = styled.div`
  color: ${({ theme }) => theme.colors.white};
  &.score--awards-page {
    padding-bottom: ${({ theme }) => `${theme.gridPoints * 8}px`};
  }
  .score__container {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: ${({ theme }) => `${theme.gridPoints * 4}px`};
  }
  .score__team:not(:nth-last-child(2)),
  .score__score:not(:nth-last-child(1)) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding-bottom: ${({ theme }) => `${theme.gridPoints * 1}px`};
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 1}px`};
  }
`;
