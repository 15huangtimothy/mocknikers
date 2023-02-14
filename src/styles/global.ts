import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /*RESETS*/
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  img, picture {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }
  html {
    font-size: 16px;
  }
  body {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font};
  }

  /*TYPEOGRAPHY*/
  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin:  ${({ theme }) =>
      `${theme.gridPoints * 3}px 0 ${theme.gridPoints * 2}px 0`};
  }
  h2, h3, .heading {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 1.25;
    text-align: center;
  }
  h2 {
    margin-bottom:  ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
  h2 + h3 {
    margin-top:  ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
  h2::after {
    content: '';
    height: 2px;
    margin: ${({ theme }) => `${theme.gridPoints * 2}px auto 0`};
    display: block;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 10%,
      ${({ theme }) => theme.colors.green1} 0%
    );
    background-position: bottom;
    background-size: 8px 2px;
    background-repeat: repeat-x;
    width: ${({ theme }) => `${theme.gridPoints * 12}px`};
  }
  h3 {
    margin-bottom:  ${({ theme }) => `${theme.gridPoints * 4}px`};
  }
  .all-caps {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.36;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  p {
    text-align: center;
    /* margin-bottom:  ${({ theme }) => `${theme.gridPoints * 4}px`}; */
  }

  /*FORMS*/
  input, textarea {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    font-size: 0.875rem;
    padding: ${({ theme }) =>
      `${1 * theme.gridPoints}px ${1.25 * theme.gridPoints}px`};
    margin-bottom: ${({ theme }) => `${1.5 * theme.gridPoints}px`};
    &:focus-visible {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.green1};
    }
  }
  button {
    background: ${({ theme }) => theme.colors.green1};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    height: ${({ theme }) => `${theme.gridPoints * 5}px`};
    border-radius: ${({ theme }) => `${theme.gridPoints * 2.5}px`};
    padding: ${({ theme }) =>
      `${theme.gridPoints}px ${theme.gridPoints * 3}px`};
    cursor: pointer;
  }
  button:disabled {
    cursor: default;
  }
`;

export default GlobalStyles;
