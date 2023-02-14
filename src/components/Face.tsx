import { StyledFace } from './styles/Face.styled';
type Proptypes = {
  round: number;
  color: string;
};
const Face = ({ round, color }: Proptypes) => {
  return (
    <StyledFace color={color} className={`face--round-${round}`}>
      <div className="face">
        <div className="eyes">
          <div className="eye left-eye">
            <div className="pupil left-pupil"></div>
          </div>
          <div className="eye right-eye">
            <div className="pupil right-pupil"></div>
          </div>
        </div>
        <div className="mouth">
          <div className="mouth-cover"></div>
        </div>
      </div>
    </StyledFace>
  );
};

export default Face;
