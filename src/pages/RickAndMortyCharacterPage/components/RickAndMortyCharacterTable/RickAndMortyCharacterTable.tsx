import { UseQueryResult } from '@tanstack/react-query';
import TableWithPagination from '../../../../components/TableWithPagination/TableWithPagination';
import {
  TCharacter,
  TCharacterKeys,
  TCharacterResponse,
} from '../../RickAndMortyCharacterPage.types';
import {
  capitalizeFirstLetter,
  TableHeadersEnum,
} from './RickAndMortyCharacterTableLib';
import { CircleImage } from '../../../../components/CircleImage';
import { useState } from 'react';
import { Modal } from '../../../../components/Modal';


type TRickAndMortyCharacterTable = {
  queryResponse: UseQueryResult<TCharacterResponse, Error>
  page: number
  onPageChange: (pageNumber: number) => void
}

const RickAndMortyCharacterTable = ({ queryResponse, page, onPageChange }: TRickAndMortyCharacterTable) => {
  const [selectedRow, setSelectedRow] = useState<TCharacter | null>(null)
  const { data, isPending} = queryResponse

  const characterTableConfig = {
    headerCellCallback: {
      [TCharacterKeys.image]: capitalizeFirstLetter,
      [TCharacterKeys.name]: capitalizeFirstLetter,
      [TCharacterKeys.origin]: capitalizeFirstLetter,
      [TCharacterKeys.status]: capitalizeFirstLetter,
      [TCharacterKeys.species]: capitalizeFirstLetter,
      [TCharacterKeys.type]: capitalizeFirstLetter,
    },
    bodyCellCallback: {
      [TCharacterKeys.image]: (row: TCharacter) => <CircleImage alt={row.name} src={row[TCharacterKeys.image]} />,
      [TCharacterKeys.origin]: (row: TCharacter) =>
        row[TCharacterKeys.origin].name,
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
    <Modal open={Boolean(selectedRow)} onClose={handleCloseModal}>
        <div>dorin</div>
    </Modal>
  </> 
};

export default RickAndMortyCharacterTable;
