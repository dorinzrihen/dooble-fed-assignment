import { Button as MuiButton } from '@mui/material';
import { TButton } from './Button.types';

const Button = ({ label, onClick }: TButton) => {
  return (
    <MuiButton fullWidth onClick={onClick} variant="contained" size="large">
      {label}
    </MuiButton>
  );
};

export default Button;
