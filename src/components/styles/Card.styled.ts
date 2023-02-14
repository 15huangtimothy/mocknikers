import styled from 'styled-components';

export const StyledCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  position: relative;

  //Hiding scrollbar:
  -ms-overflow-style: none; //IE
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    display: none; //Webkit
  }

  &::after {
    content: '';
    position: sticky;
    bottom: 0;
    width: 100%;
    align-self: flex-start;
    padding: 40px 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fffffe 75%);
  }
`;
