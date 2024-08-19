import { TableWithPagination } from '../../../../components/TableWithPagination';
import { isValidCharacterResponse } from '../../RickAndMortyCharacterPage.types';
import { TableHeadersEnum } from './RickAndMortyCharacterTableLib';
import { CircleImage } from '../../../../components/CircleImage';
import { useState } from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import { RickAndMortyCharacterProps } from './RickAndMortyCharacterTable.types';
import {
  Character,
  CharacterKeys,
} from '../../../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types';
import { capitalize } from 'lodash';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const RickAndMortyCharacterTable = ({
  data,
  isPending,
  page,
  onPageChange,
}: RickAndMortyCharacterProps) => {
  const [selectedRow, setSelectedRow] = useState<Character | null>(null);
  let pages: null | number = null;
  let results: null | Character[] = null;
  const error = (data && 'error' in data && data['error']) || null;

  if (isValidCharacterResponse(data)) {
    pages = data.info.pages;
    results = data.results;
  }

  const bodyCellCallback: Partial<Record<keyof Character, (params: GridRenderCellParams<Character>) => JSX.Element | string>> = {
    [CharacterKeys.image]: (params: GridRenderCellParams<Character>) => {
      const { name, image } = params.row
      return <CircleImage alt={name} src={image} />
    },
    [CharacterKeys.origin]: (params: GridRenderCellParams<Character>) => {
      return params.formattedValue.name
    }
  }

  const characterTableConfig = {
    tableHeight: '75vh',
    bodyRowCallback: {
      onClick: (row: Character) => setSelectedRow(row),
    },
  };

  const columns = TableHeadersEnum.map(header => {
    const renderCell = header in bodyCellCallback ? bodyCellCallback[header as keyof Character] : undefined;

    return {
      field: header,
      headerName: capitalize(header),
      flex: 1,
      sortable: false,
      headerAlign: 'center',
      ...(renderCell ? { renderCell } : {})
    }
  }) as GridColDef[]

  return (
    <>
      <TableWithPagination<Character>
        pages={pages}
        page={page}
        onPageChange={onPageChange}
        rows={results}
        columns={columns}
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
