import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectMenu from '../../../../components/Select/Select';
import Button from '../../../../components/Button/Button';
import {
  GenderEnum,
  StatusEnum,
  TFilters,
} from '../../RickAndMortyCharacterTable.types';
import { ChangeEvent, useCallback, useState } from 'react';
import { capitalize, debounce } from 'lodash';
import './CharacterFilterTable.css';

type TCharacterFilterTable = {
  onChangeFilters: (key: string, value: string) => void;
  handleClearFilters: () => void;
  filters: TFilters;
};

const getSelectOptions = (arrOptions: string[]) => {
  return arrOptions.map((option) => ({
    name: capitalize(option),
    value: option,
  }));
};

const genderOptions = getSelectOptions(Object.values(GenderEnum));
const statusOptions = getSelectOptions(Object.values(StatusEnum));

const CharacterFilterTable = ({
  onChangeFilters,
  handleClearFilters,
  filters,
}: TCharacterFilterTable) => {
  const [search, setSearch] = useState<string>('');

  const handleChangeGender = (value: string) =>
    onChangeFilters('gender', value);
  const handleChangeStatus = (value: string) =>
    onChangeFilters('status', value);

  const debouncedHandleChange = useCallback(
    debounce((value: string) => {
      onChangeFilters('name', value);
    }, 1000),
    []
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedHandleChange(value);
  };

  return (
    <div className="characterFilterTable">
      <TextField
        fullWidth
        value={search}
        label="Search"
        variant="outlined"
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="headerSelectLine">
        <SelectMenu
          value={filters.gender}
          label="Gender"
          onChange={handleChangeGender}
          options={genderOptions}
        />
        <SelectMenu
          value={filters.status}
          label="Status"
          onChange={handleChangeStatus}
          options={statusOptions}
        />
        <Button label={'Clear All'} onClick={handleClearFilters} />
      </div>
    </div>
  );
};

export default CharacterFilterTable;
