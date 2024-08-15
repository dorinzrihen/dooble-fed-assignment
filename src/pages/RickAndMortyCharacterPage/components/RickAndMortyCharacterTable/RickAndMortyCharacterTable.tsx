import { UseQueryResult } from '@tanstack/react-query';
import TableWithPagination from '../../../../components/TableWithPagination/TableWithPagination';
import {
  TCharacter,
  CharacterKeys,
  TCharacterResponse,
} from '../../RickAndMortyCharacterPage.types';
import {
  TableHeadersEnum,
} from './RickAndMortyCharacterTableLib';
import { CircleImage } from '../../../../components/CircleImage';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';


type TRickAndMortyCharacterTable = {
  queryResponse: UseQueryResult<TCharacterResponse, Error>
  page: number
  onPageChange: (pageNumber: number) => void
}

const RickAndMortyCharacterTable = ({ queryResponse, page, onPageChange }: TRickAndMortyCharacterTable) => {
  const [selectedRow, setSelectedRow] = useState<TCharacter | null>(null)
  const { data, isPending } = queryResponse

  const characterTableConfig = {
    bodyCellCallback: {
      [CharacterKeys.image]: (row: TCharacter) => <CircleImage alt={row.name} src={row[CharacterKeys.image]} />,
      [CharacterKeys.origin]: (row: TCharacter) =>
        row[CharacterKeys.origin].name,
    },
    bodyRowCallback: {
      onClick: (row: TCharacter) => setSelectedRow(row)
    }
  };

  const handleCloseModal = () => setSelectedRow(null)

  return <>
    <TableWithPagination<TCharacter>
      count={data?.info?.pages}
      page={page}
      onPageChange={onPageChange}
      rows={data?.results}
      headers={TableHeadersEnum}
      config={characterTableConfig}
      isPending={isPending}
      error={data?.error}
    />
    {selectedRow && <CharacterModal rowData={selectedRow} handleCloseModal={handleCloseModal} />}
  </>
};

export default RickAndMortyCharacterTable;
