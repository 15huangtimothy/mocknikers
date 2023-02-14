import styled from 'styled-components';

export const StyledFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
  flex: 0 0 auto;
  .face {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 100px;
    transform: scale(0.5);
  }
  .eyes {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  }
  .eye {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .pupil {
    background: ${({ color, theme }) => theme.colors[`${color}2`]};
    width: 20px;
    height: 20px;
    border-radius: 9999px;
  }
  .mouth {
    width: 100%;
    height: 16px;
    background: ${({ color, theme }) => theme.colors[`${color}2`]};
    border-radius: 9999px;
  }
  .mouth-cover {
    display: none;
  }
  &.face--round-1 {
    .mouth {
      animation: mouth-r1 1.25s infinite;
    }
  }
  &.face--round-2 {
    .eye {
      animation: eyes-r2 10s infinite;
    }
    .pupil {
      animation: pupils-r2 10s infinite;
    }
    .mouth {
      animation: mouth-r2 10s infinite;
    }
  }
  &.face--round-3 {
    .mouth {
      height: unset;
      background: unset;
      border-radius: unset;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
    }
    .mouth-cover {
      width: 35px;
      height: 35px;
      border-radius: 9999px;
      background: ${({ color, theme }) => theme.colors[`${color}2`]};
    }
    .mouth::before,
    .mouth::after {
      content: '';
      display: block;
      position: absolute;
      z-index: -2;
      width: 100%;
      height: 13px;
      top: 11px;
      background: ${({ theme }) => theme.colors.black};
    }
    .mouth::before {
      transform: rotate(-15deg);
    }
    .mouth::after {
      transform: rotate(15deg);
    }
    .mouth-cover {
      display: block;
    }
    .eye {
      animation: eye-r3 6s infinite;
    }
    .pupil {
      animation: pupils-r3 6s infinite;
    }
  }
  //"Round 4" is the awards screen
  &.face--round-4 {
    margin-bottom: ${({ theme }) => `${theme.gridPoints * 4}px`};
    .mouth {
      height: 50px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .eye {
      animation: eyes-r4 4s infinite linear;
    }
    .eye::after {
      content: '★';
      display: block;
      position: absolute;
      font-size: 15px;
      animation: stars-r4 4s infinite linear;
      position: absolute;
      color: ${({ color, theme }) => theme.colors[`${color}2`]};
    }
    .eye::before {
      content: '★';
      display: block;
      position: absolute;
      font-size: 40px;
      animation: stars-r4 4s infinite linear;
      position: absolute;
    }
  }

  @keyframes mouth-r1 {
    0% {
      height: 16px;
      width: 100%;
    }
    10% {
      height: 40px;
      width: 80%;
    }
    40% {
      height: 26px;
      width: 85%;
    }
    50% {
      height: 40px;
      width: 70%;
    }
    70% {
      height: 40px;
      width: 70%;
    }
  }
  @keyframes pupils-r2 {
    0% {
      transform: translate(0, 0);
    }
    12% {
      transform: translate(0, 0);
    }
    13% {
      transform: translate(-8px, 0);
    }
    28% {
      transform: translate(-8px, 0);
    }
    30% {
      transform: translate(8px, 3px);
    }
    42% {
      transform: translate(8px, 3px);
    }
    43% {
      transform: translate(8px, -1px);
    }
    58% {
      transform: translate(8px, -1px);
    }
    59% {
      transform: translateX(0);
    }
  }
  @keyframes eyes-r2 {
    0%,
    76% {
      transform: scaleY(100%);
    }
    77% {
      transform: scaleY(5%);
    }
    79% {
      transform: scaleY(100%);
    }
  }
  @keyframes mouth-r2 {
    0% {
      height: 16px;
      width: 100%;
    }
    1% {
      height: 40px;
      width: 80%;
    }
    3% {
      height: 26px;
      width: 85%;
    }
    4% {
      height: 40px;
      width: 70%;
    }
    6% {
      height: 40px;
      width: 70%;
    }
    9% {
      height: 16px;
      width: 100%;
    }
  }
  @keyframes face-r3 {
    81%,
    95% {
      transform: scale(50%) translate3d(-1px, 0, 0);
    }

    83%,
    93% {
      transform: scale(50%) translate3d(2px, 0, 0);
    }

    85%,
    88%,
    91% {
      transform: scale(50%) translate3d(-4px, 0, 0);
    }

    87%,
    89% {
      transform: scale(50%) translate3d(4px, 0, 0);
    }
  }
  @keyframes pupils-r3 {
    0% {
      transform: translate(0, 0);
    }
    1% {
      transform: translate(-8px, 0);
    }
    36% {
      transform: translate(-8px, 0);
    }
    37% {
      transform: translate(8px, -1px);
    }
    54% {
      transform: translate(8px, -1px);
    }
    55% {
      transform: translateX(0);
    }
  }
  @keyframes eye-r3 {
    0% {
      height: 40px;
      border-radius: 9999px;
      margin: 0;
    }
    2%,
    54% {
      height: 12px;
      border-radius: 8px;
      margin: 14px 0;
    }
    56%,
    75% {
      height: 40px;
      border-radius: 9999px;
      margin: 0;
    }
  }
  @keyframes eyes-r4 {
    0%,
    10% {
      height: 40px;
      margin: 0;
    }
    12%,
    60% {
      margin: 20px 0;
      height: 0;
    }
    62% {
      margin: 0;
      height: 40px;
    }
  }
  @keyframes stars-r4 {
    0% {
      transform: rotate(0) scale(0);
    }
    10% {
      transform: rotate(36deg) scale(0);
    }
    12% {
      transform: rotate(43.2deg) scale(100%);
    }
    18% {
      transform: rotate(64.8deg) scale(100%);
    }
    22% {
      transform: rotate(79.2deg) scale(180%);
    }
    32% {
      transform: rotate(115.2deg) scale(100%);
    }
    38% {
      transform: rotate(136.8deg) scale(100%);
    }
    42% {
      transform: rotate(151.2deg) scale(180%);
    }
    52% {
      transform: rotate(187.2deg) scale(100%);
    }
    60% {
      transform: rotate(216deg) scale(100%);
    }
    62% {
      transform: rotate(223.2deg) scale(0);
    }
    100% {
      transform: rotate(360deg) scale(0);
    }
  }
`;
