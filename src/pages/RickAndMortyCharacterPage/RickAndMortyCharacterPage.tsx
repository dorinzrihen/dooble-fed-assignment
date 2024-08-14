import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CharacterFilterTable from './components/CharacterFilterTable/CharacterFilterTable';
import { useQuery } from '@tanstack/react-query';
import {
  filtersEnum,
  TCharacterResponse,
  TFilters,
} from './RickAndMortyCharacterPage.types';
import { useState } from 'react';
import './RickAndMortyCharacterPage.css'
import RickAndMortyCharacterTable from './components/RickAndMortyCharacterTable/RickAndMortyCharacterTable';

export const filtersInitState = {
  [filtersEnum.name]: '',
  [filtersEnum.gender]: '',
  [filtersEnum.status]: '',
};

const RickAndMortyCharacterPage = ({ }) => {
  const [filters, setFilters] = useState<TFilters>(filtersInitState);
  const [page, setPage] = useState<number>(1);

  const queryResponse= useQuery<TCharacterResponse>({
    queryKey: ['character', filters, page],
    queryFn: () => {
      const params = new URLSearchParams(filters).toString();
      console.log(params);
      return fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&${params}`
      ).then((res) => res.json());
    },
  });

  const onChangeFilters = (key: keyof typeof filtersEnum, value: string) => {
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
