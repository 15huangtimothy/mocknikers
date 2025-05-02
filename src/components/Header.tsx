import { StyledHeader } from './styles/Header.styled';

type Proptypes = {
  title: string;
  children?: React.ReactNode;
};

const Header = ({ title, children }: Proptypes) => {
  return (
    <StyledHeader>
      {children}
      <h1>Mocknikers</h1>
      <h2 className="all-caps">{title}</h2>
    </StyledHeader>
  );
};

export default Header;
