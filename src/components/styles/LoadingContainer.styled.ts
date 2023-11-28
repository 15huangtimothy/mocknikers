import styled from 'styled-components';

export const StyledLoadingContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    width: 100%;
    max-width: 50px;
    margin-bottom: 1rem;
    .pupil {
      animation: eyeroll 4s ease-in-out infinite;
    }
  }
  @keyframes eyeroll {
    0% {
      transform: translate(0, 0);
    }
    15% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(7px, 0);
    }
    40% {
      transform: translate(7px, 0);
    }
    50% {
      transform: translate(3px, -4px);
    }
    65% {
      transform: translate(3px, -4px);
    }
    75% {
      transform: translate(-7px, -3px);
    }
    90% {
      transform: translate(-7px, -3px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
