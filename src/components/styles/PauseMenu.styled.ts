import styled from 'styled-components';

export const StyledPauseMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  color: ${({ theme }) => `${theme.colors.white}`};
  padding: ${({ theme }) => `${theme.gridPoints * 6}px`};
  h2 {
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 6}px`};
  }
  h2::after {
    content: none;
  }
  button {
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
`;
