import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './Button.types';

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <MuiButton fullWidth onClick={onClick} variant="contained" size="large">
      {label}
    </MuiButton>
  );
};

export default Button;
