import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectMenu from '../../../../components/Select/Select';
import Button from '../../../../components/Button/Button';

const genderOptions = [
    {name: 'female', value: 'female'},
    {name: 'male', value: 'male'},
    {name: 'genderless', value: 'genderless'},
    {name: 'unknown', value: 'unknown'},
]

const statusOptions = [
    {name: 'alive', value: 'alive'},
    {name: 'dead', value: 'dead'},
    {name: 'unknown', value: 'unknown'},
]

const CharacterFilterTable = ({ }) => {
    return (
        <div>
            <TextField label="Search" variant="outlined" InputProps={{endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>}}/>
            <div>
                <SelectMenu value='' label='Gender' onChange={() => {}} options={genderOptions}/>
                <SelectMenu value='' label='Status' onChange={() => {}} options={statusOptions}/>
                <Button label={'Clear All'} onClick={() => {}}/>
            </div>
        </div>
    )
}

export default CharacterFilterTable