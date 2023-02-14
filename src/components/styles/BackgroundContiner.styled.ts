import styled, { DefaultTheme } from 'styled-components';

export const StyledBackgroundContiner = styled.div`
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  min-height: fill-available;
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  width: 100vw;
  position: relative;
  padding: ${({ theme }) => `0 ${theme.gridPoints * 3}px`};
  background: ${({
    background,
    theme,
  }: {
    background: string;
    theme: DefaultTheme;
  }) => theme.colors[`${background}1`]};

  &.background--titlePage {
    padding: ${({ theme }) => `0 ${theme.gridPoints * 6}px`};
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
