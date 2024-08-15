import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { SelectMenuProps } from './Select.types';

const SelectMenu = ({ onChange, label, value, options }: SelectMenuProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {options.map(({ value, name }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
