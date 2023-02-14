import styled from 'styled-components';

export const StyledSettings = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.gridPoints * 3}px`};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => `${theme.gridPoints * 3}px`};
  label {
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 2}px`};
    span {
      font-size: 0.625rem;
    }
  }
  .heading {
    text-align: center;
  }
  .settings__group {
    display: flex;
    flex-direction: column;
  }
  .settings__group:not(:last-of-type)::after {
    content: '';
    height: 2px;
    margin: ${({ theme }) => `${theme.gridPoints * 3}px auto`};
    display: block;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.gray} 10%,
      ${({ theme }) => theme.colors.white} 0%
    );
    background-position: bottom;
    background-size: 8px 2px;
    background-repeat: repeat-x;
    width: ${({ theme }) => `${theme.gridPoints * 12}px`};
  }
  .settings__group:last-of-type {
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 6}px`};
  }
  input,
  textarea {
    width: 100%;
    height: 40px;
    &:focus-visible {
      border: 1px solid ${({ theme }) => theme.colors.blue1};
    }
  }
  input[type='checkbox'] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.white};
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    display: grid;
    place-content: center;
    cursor: pointer;
  }
  input[type='checkbox']::before {
    content: '';
    width: 18px;
    height: 18px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 18px 18px ${({ theme }) => theme.colors.blue2};
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue1};
  }
  .input__container--split {
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    gap: ${({ theme }) => `${theme.gridPoints * 2}px`};
    label {
      flex: 1 1 auto;
      margin: 0;
    }
    input {
      flex: 0 0 auto;
      margin: 0;
    }
    input[type='checkbox'] {
      margin: 0 28px;
    }
  }
  .input--narrow {
    max-width: ${({ theme }) => `${theme.gridPoints * 10}px`};
    text-align: center;
    margin: 0 auto;
  }
  .button-container {
    display: flex;
    gap: ${({ theme }) => `${theme.gridPoints * 2}px`};
  }
  textarea {
    min-height: 200px;
    max-width: 100%;
    margin: 0 auto;
  }
  .tabber {
    width: 100%;
    position: relative;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 3}px`};
    border-radius: 20px;
    height: 40px;

    label {
      text-align: center;
      width: 50%;
      user-select: none;
      padding: ${({ theme }) => `${theme.gridPoints * 1}px`};
      cursor: pointer;
      margin: 0;
      z-index: 2;
      transition: color 500ms ease;
      &.label--checked {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    input[type='radio'] {
      display: none;

      // static
      &#cardType__generate ~ .blob {
        transform-origin: right center;
      }

      &#cardType__written ~ .blob {
        transform-origin: left center;
      }

      // animated
      &#cardType__generate:checked {
        ~ .slider {
          animation-name: stretchyRev;
          border-radius: 20px 0 0 20px;
        }
      }

      &#cardType__written:checked {
        ~ .slider {
          animation-name: stretchy;
          border-radius: 0 20px 20px 0;
        }
      }
    }

    .slider {
      background-color: ${({ theme }) => theme.colors.blue2};
      border-radius: 20px;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      position: absolute;
      animation-duration: 0.5s;
      animation-direction: forwards;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      transition: transform 150ms ease, border-radius 500ms ease;
    }
  }

  @keyframes stretchy {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes stretchyRev {
    0% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
