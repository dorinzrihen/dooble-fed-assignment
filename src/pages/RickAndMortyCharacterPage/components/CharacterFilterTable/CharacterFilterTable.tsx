import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SelectMenu } from '../../../../components/Select';
import Button from '../../../../components/Button/Button';
import { FiltersEnum } from '../../RickAndMortyCharacterPage.types';
import { ChangeEvent, useRef, useState } from 'react';
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

  const debouncedHandleChange = useRef(
    debounce((value: string) => {
      onChangeFilters(FiltersEnum.name, value);
    }, 1000)
  ).current;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedHandleChange(value);
  };

  const onClickClearAll = () => {
    setSearch('');
    handleClearFilters();
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
          onChange={(value: string) =>
            onChangeFilters(FiltersEnum.gender, value)
          }
          options={genderOptions}
        />
        <SelectMenu
          value={filters.status}
          label="Status"
          onChange={(value: string) =>
            onChangeFilters(FiltersEnum.status, value)
          }
          options={statusOptions}
        />
        <Button label={'Clear All'} onClick={onClickClearAll} />
      </div>
    </div>
  );
};

export default CharacterFilterTable;
