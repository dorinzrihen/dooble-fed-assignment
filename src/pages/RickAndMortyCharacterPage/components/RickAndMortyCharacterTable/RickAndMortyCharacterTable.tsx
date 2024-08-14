import { UseQueryResult } from '@tanstack/react-query';
import TableWithPagination from '../../../../components/TableWithPagination/TableWithPagination';
import {
  TCharacter,
  TCharacterResponse,
} from '../../RickAndMortyCharacterPage.types';
import {
  characterTableConfig,
  TableHeadersEnum,
} from './RickAndMortyCharacterTableLib';


type TRickAndMortyCharacterTable = {
  queryResponse: UseQueryResult<TCharacterResponse, Error>
  page: number
  onPageChange: (pageNumber: number) => void
}

const RickAndMortyCharacterTable = ({ queryResponse, page, onPageChange }: TRickAndMortyCharacterTable) => {
  const { data, isPending, error} = queryResponse
  console.log(queryResponse, error)

  return <TableWithPagination<TCharacter>
    count={data?.info?.pages}
    page={page}
    onPageChange={onPageChange}
    rows={data?.results}
    headers={TableHeadersEnum}
    config={characterTableConfig}
    isPending={isPending}
    error={data?.error}
  />
};

export default RickAndMortyCharacterTable;
