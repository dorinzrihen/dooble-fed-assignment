import TableWithPagination from '../../../../components/TableWithPagination/TableWithPagination';
import {
  TCharacter,
  CharacterKeys,
  isValidCharacterResponse,
} from '../../RickAndMortyCharacterPage.types';
import { TableHeadersEnum } from './RickAndMortyCharacterTableLib';
import { CircleImage } from '../../../../components/CircleImage';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import { TRickAndMortyCharacterTable } from './RickAndMortyCharacterTable.types';

const RickAndMortyCharacterTable = ({
  data,
  isPending,
  page,
  onPageChange,
}: TRickAndMortyCharacterTable) => {
  let count = null;
  let results = null;
  const error = (data && 'error' in data && data['error']) || null;

  if (isValidCharacterResponse(data)) {
    count = data.info.count;
    results = data.results;
  }
  const [selectedRow, setSelectedRow] = useState<TCharacter | null>(null);

  const characterTableConfig = {
    bodyCellCallback: {
      [CharacterKeys.image]: (row: TCharacter) => (
        <CircleImage alt={row.name} src={row[CharacterKeys.image]} />
      ),
      [CharacterKeys.origin]: (row: TCharacter) =>
        row[CharacterKeys.origin].name,
    },
    bodyRowCallback: {
      onClick: (row: TCharacter) => setSelectedRow(row),
    },
  };

  return (
    <>
      <TableWithPagination<TCharacter>
        count={count}
        page={page}
        onPageChange={onPageChange}
        rows={results}
        headers={TableHeadersEnum}
        config={characterTableConfig}
        isPending={isPending}
        error={error}
      />
      {selectedRow && (
        <CharacterModal
          rowData={selectedRow}
          handleCloseModal={() => setSelectedRow(null)}
        />
      )}
    </>
  );
};

export default RickAndMortyCharacterTable;
