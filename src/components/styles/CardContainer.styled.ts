import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  max-height: calc(
    100vh - 48px - 35px - 48px
  ); //100vh - body padding - header - container padding
  flex-direction: column;
  justify-content: center;
  .button-container {
    height: calc(56px + ${({ theme }) => `${theme.gridPoints * 2}px`});
    flex: 0 0 auto;
    padding-bottom: ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
`;
