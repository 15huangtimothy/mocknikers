import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => `${theme.gridPoints * 3}px 0 15px`};
  height: 59px;
  h1 {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  h2 {
    text-align: center;
  }
  h2::after {
    content: none;
  }
`;
