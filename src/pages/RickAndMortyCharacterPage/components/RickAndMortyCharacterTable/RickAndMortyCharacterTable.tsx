import TableWithPagination from '../../../../components/TableWithPagination/TableWithPagination';
import {
  Character,
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
  const [selectedRow, setSelectedRow] = useState<Character | null>(null);

  const characterTableConfig = {
    bodyCellCallback: {
      [CharacterKeys.image]: (row: Character) => (
        <CircleImage alt={row.name} src={row[CharacterKeys.image]} />
      ),
      [CharacterKeys.origin]: (row: Character) =>
        row[CharacterKeys.origin].name,
    },
    bodyRowCallback: {
      onClick: (row: Character) => setSelectedRow(row),
    },
  };

  return (
    <>
      <TableWithPagination<Character>
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
