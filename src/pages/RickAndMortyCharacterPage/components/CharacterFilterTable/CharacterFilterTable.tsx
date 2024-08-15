import { Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SelectMenu } from '../../../../components/Select';
import { Button } from '../../../../components/Button';
import { FiltersEnum } from '../../RickAndMortyCharacterPage.types';
import { ChangeEvent, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { genderOptions, statusOptions } from './CharacterFilterTableLib';
import { CharacterFilterTableProps } from './CharacterFilterTable.types';

const CharacterFilterTable = ({
  onChangeFilters,
  handleClearFilters,
  filters,
}: CharacterFilterTableProps) => {
  const [search, setSearch] = useState<string>('');

  const debouncedHandleChange = useRef(
    debounce((value: string) => {
      onChangeFilters(FiltersEnum.name, value);
    }, 1000)
  ).current;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={search}
            label="Search"
            variant="outlined"
            onChange={onInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <SelectMenu
            value={filters.gender}
            label="Gender"
            onChange={(value: string) =>
              onChangeFilters(FiltersEnum.gender, value)
            }
            options={genderOptions}
          />
        </Grid>
        <Grid item xs={5}>
          <SelectMenu
            value={filters.status}
            label="Status"
            onChange={(value: string) =>
              onChangeFilters(FiltersEnum.status, value)
            }
            options={statusOptions}
          />
        </Grid>
        <Grid item xs={2}>
          <Button label={'Clear All'} onClick={onClickClearAll} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CharacterFilterTable;
