import { ReactComponent as LoadingImage } from '../images/loading.svg';
import { StyledBackgroundContiner } from './styles/BackgroundContiner.styled';
import { StyledLoadingContainer } from './styles/LoadingContainer.styled';

const Loading = () => {
  return (
    <StyledBackgroundContiner className="background--centeredContent" background="blue">
      <StyledLoadingContainer>
        <LoadingImage />
        <p className="all-caps">Loading</p>
      </StyledLoadingContainer>
    </StyledBackgroundContiner>
  );
};

export default Loading;
