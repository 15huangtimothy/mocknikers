import { StyledButton } from './styles/Button.styled';

type Proptypes = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: string;
  width?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({
  handleClick,
  color = 'green',
  width = '100%',
  disabled = false,
  children,
  className,
  type = 'button',
}: Proptypes) => {
  return (
    <StyledButton
      className={className ? `${className} all-caps` : `all-caps`}
      color={color}
      width={width}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
