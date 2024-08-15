import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CharacterFilterTable from './components/CharacterFilterTable/CharacterFilterTable';
import { FiltersEnum, TFilters } from './RickAndMortyCharacterPage.types';
import { useState } from 'react';
import './RickAndMortyCharacterPage.css';
import RickAndMortyCharacterTable from './components/RickAndMortyCharacterTable/RickAndMortyCharacterTable';
import { filtersInitState } from './RickAndMortyCharacterPageLib';
import useRickAndMortyCharacter from '../../hooks/useRickAndMortyCharacter';

const RickAndMortyCharacterPage = () => {
  const [filters, setFilters] = useState<TFilters>(filtersInitState);
  const [page, setPage] = useState<number>(1);

  const { data, isPending } = useRickAndMortyCharacter(filters, page);

  const onChangeFilters = (key: keyof typeof FiltersEnum, value: string) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  const onPageChange = (newPageNumber: number) => {
    setPage(newPageNumber);
  }

  const handleClearFilters = () => {
    setFilters(filtersInitState);
    setPage(1);
  }

  return (
    <div className="rickAndMortyCharacterPage">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Rick and Morty Characters App</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="pageBody">
        <CharacterFilterTable
          onChangeFilters={onChangeFilters}
          handleClearFilters={handleClearFilters}
          filters={filters}
        />
        <RickAndMortyCharacterTable
          data={data}
          isPending={isPending}
          page={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default RickAndMortyCharacterPage;
