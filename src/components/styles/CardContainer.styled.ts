import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  padding: ${({ theme }) => `${theme.gridPoints * 3}px`};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => `0 0 ${theme.gridPoints * 3}px 0`};
  flex-direction: column;
  justify-content: center;
  .button-container {
    height: calc(56px + ${({ theme }) => `${theme.gridPoints * 2}px`});
    flex: 0 0 auto;
    padding-bottom: ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
`;
