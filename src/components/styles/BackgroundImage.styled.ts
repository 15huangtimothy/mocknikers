import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  padding-top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.beige};

  svg {
    position: relative;
    top: 0;
    left: 0;
    height: 150vh;
    animation: slide 80s ease-in-out infinite;
  }

  /* 
  calc(-1.77 * 150vh + 100vw) represents the right most bound
  calc(-150vh + 100vh) represents the bottom most bound
  */
  @keyframes slide {
    0% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(calc(-1.77 * 150vh + 100vw), calc(-150vh + 100vh));
    }
    50% {
      transform: translate(
        calc(0.25 * (-1.77 * 150vh + 100vw)),
        calc(0.9 * (-150vh + 100vh))
      );
    }
    70% {
      transform: translate(calc((-1.77 * 150vh + 100vw)), 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
