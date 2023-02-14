import styled from 'styled-components';

export const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
  min-height: calc(
    100vh - 35px - ${({ theme }) => `${theme.gridPoints * 3 * 2}px`}
  ); // minus header height+padding and body padding
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.gridPoints * 3}px`};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
