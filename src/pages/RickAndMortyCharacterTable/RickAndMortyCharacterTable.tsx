import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CharacterFilterTable from './components/CharacterFilterTable/CharacterFilterTable';
import { useQuery } from '@tanstack/react-query';
import TableWithPagination from '../../components/TableWithPagination/TableWithPagination';
import {
  TCharacter,
  TCharacterResponse,
  TFilters,
} from './RickAndMortyCharacterTable.types';
import {
  characterTableConfig,
  TableHeadersEnum,
} from './RickAndMortyCharacterTableLib';
import { useState } from 'react';

const filtersInitState = {
  name: '',
  gender: '',
  status: '',
};

const RickAndMortyCharacterTable = ({}) => {
  const [filters, setFilters] = useState<TFilters>(filtersInitState);
  const [page, setPage] = useState<number>(1);

  const { isPending, error, data } = useQuery<TCharacterResponse>({
    queryKey: ['repoData', filters, page],
    queryFn: () => {
      const params = new URLSearchParams(filters).toString();
      console.log(params);
      return fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&${params}`
      ).then((res) => res.json());
    },
  });

  const onChangeFilters = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const onPageChange = (newPageNumber: number) => {
    setPage(newPageNumber);
  };

  const handleClearFilters = () => setFilters(filtersInitState);

  if (!isPending && !data) {
    return <div>No data</div>;
  }

  return (
    <div>
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
      {isPending ? (
        <div>spinner</div>
      ) : (
        <>
          <CharacterFilterTable
            onChangeFilters={onChangeFilters}
            handleClearFilters={handleClearFilters}
            filters={filters}
          />
          <TableWithPagination<TCharacter>
            count={data?.info.pages}
            page={page}
            onPageChange={onPageChange}
            rows={data.results}
            headers={TableHeadersEnum}
            config={characterTableConfig}
          />
        </>
      )}
    </div>
  );
};

export default RickAndMortyCharacterTable;
