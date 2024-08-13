import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { SelectChangeEvent } from "@mui/material"
import { TSelectMenu } from "./Select.types"

const SelectMenu = ({onChange, label, value, options}: TSelectMenu) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return <FormControl>
    <InputLabel>Gender</InputLabel>
    <Select
        value={value}
        label={label}
        onChange={handleChange}
    >
        {options.map(({value, name}) => <MenuItem value={value}>{name}</MenuItem>)}
    </Select>
    </FormControl>
}

export default SelectMenu