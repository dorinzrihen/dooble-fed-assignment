import { TableWithPagination } from '../../../../components/TableWithPagination';
import { isValidCharacterResponse } from '../../RickAndMortyCharacterPage.types';
import { TableHeadersEnum } from './RickAndMortyCharacterTableLib';
import { CircleImage } from '../../../../components/CircleImage';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import { TRickAndMortyCharacterTable } from './RickAndMortyCharacterTable.types';
import {
  Character,
  CharacterKeys,
} from '../../../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types';

const RickAndMortyCharacterTable = ({
  data,
  isPending,
  page,
  onPageChange,
}: TRickAndMortyCharacterTable) => {
  const [selectedRow, setSelectedRow] = useState<Character | null>(null);
  let pages: null | number = null;
  let results: null | Character[] = null;
  const error = (data && 'error' in data && data['error']) || null;

  if (isValidCharacterResponse(data)) {
    pages = data.info.pages;
    results = data.results;
  }

  const characterTableConfig = {
    tableHeight: '75vh',
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
        pages={pages}
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
