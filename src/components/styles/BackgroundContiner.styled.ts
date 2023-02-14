import styled, { DefaultTheme } from 'styled-components';

export const StyledBackgroundContiner = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding: ${({ theme }) => `${theme.gridPoints * 3}px`};
  background: ${({
    background,
    theme,
  }: {
    background: string;
    theme: DefaultTheme;
  }) => theme.colors[`${background}1`]};

  &.background--titlePage {
    padding: ${({ theme }) =>
      `${theme.gridPoints * 6}px ${theme.gridPoints * 6}px 150px`};
  }
  &.background--homePage {
    align-items: center;
  }
  h2::after {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 10%,
      ${({ background, theme }) => theme.colors[`${background}1`]} 0%
    );
  }
`;
