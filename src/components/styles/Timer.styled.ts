import styled from 'styled-components';

export const StyledTimer = styled.div`
  .base-timer {
    position: relative;
    height: 56px;
    width: 56px;
    margin: ${({ theme }) =>
      `${theme.gridPoints}px auto ${theme.gridPoints * 2}px`};
  }

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: ${({ theme }) => theme.colors.gray};
  }
  .base-timer__label {
    position: absolute;
    width: 56px;
    height: 56px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    stroke: ${({ color, theme }) => theme.colors[`${color}1`]};
  }
  .base-timer__svg {
    transform: scaleX(-1);
  }
`;
