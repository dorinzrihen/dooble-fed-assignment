import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CharacterFilterTable from './components/CharacterFilterTable/CharacterFilterTable';
import { useQuery } from '@tanstack/react-query';
import {
  FiltersEnum,
  TCharacterResponse,
  TFilters,
} from './RickAndMortyCharacterPage.types';
import { useState } from 'react';
import './RickAndMortyCharacterPage.css'
import RickAndMortyCharacterTable from './components/RickAndMortyCharacterTable/RickAndMortyCharacterTable';
import { filtersInitState } from './RickAndMortyCharacterPageLib';

const useRickAndMortyCharacter = (filters: TFilters, page: number) => {
  return useQuery({
    queryKey: ['character', filters, page],
    queryFn: () => {
      const params = new URLSearchParams(filters).toString();
      return fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&${params}`
      ).then((res) => res.json());
    },
    staleTime: 1000 * 60,
    select: (data: TCharacterResponse) => data.results.map(character => ({
      ...character,
      origin: character.origin.name
    }))
  });
}

const RickAndMortyCharacterPage = () => {
  const [filters, setFilters] = useState<TFilters>(filtersInitState);
  const [page, setPage] = useState<number>(1);

  const queryResponse = useRickAndMortyCharacter(filters, page);

  const onChangeFilters = (key: keyof typeof FiltersEnum, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const onPageChange = (newPageNumber: number) => {
    setPage(newPageNumber);
  };

  const handleClearFilters = () => setFilters(filtersInitState);

  return (
    <div className='rickAndMortyCharacterPage'>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                Rick and Morty Characters App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className='pageBody'>
        <CharacterFilterTable
          onChangeFilters={onChangeFilters}
          handleClearFilters={handleClearFilters}
          filters={filters}
        />
        <RickAndMortyCharacterTable queryResponse={queryResponse} page={page} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default RickAndMortyCharacterPage;
