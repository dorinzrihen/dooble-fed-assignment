import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectMenu from '../../../../components/Select/Select';
import Button from '../../../../components/Button/Button';
import { filtersEnum } from '../../RickAndMortyCharacterPage.types';
import { ChangeEvent, useCallback, useState } from 'react';
import { debounce } from 'lodash';
import './CharacterFilterTable.css';
import { genderOptions, statusOptions } from './CharacterFilterTableLib';
import { TCharacterFilterTable } from './CharacterFilterTable.types';


const CharacterFilterTable = ({
  onChangeFilters,
  handleClearFilters,
  filters,
}: TCharacterFilterTable) => {
  const [search, setSearch] = useState<string>('');

  const debouncedHandleChange = useCallback(
    debounce((value: string) => {
      onChangeFilters(filtersEnum.name, value);
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
          onChange={(value: string) => onChangeFilters(filtersEnum.gender, value)}
          options={genderOptions}
        />
        <SelectMenu
          value={filters.status}
          label="Status"
          onChange={(value: string) => onChangeFilters(filtersEnum.status, value)}
          options={statusOptions}
        />
        <Button label={'Clear All'} onClick={handleClearFilters} />
      </div>
    </div>
  );
};

export default CharacterFilterTable;
