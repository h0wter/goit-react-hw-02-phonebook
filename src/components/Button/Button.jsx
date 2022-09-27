import { PropTypes } from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return onClick ? (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type="submit">{children}</StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
