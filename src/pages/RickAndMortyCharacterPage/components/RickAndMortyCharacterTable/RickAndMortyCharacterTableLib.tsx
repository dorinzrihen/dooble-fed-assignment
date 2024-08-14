import { capitalize } from 'lodash';
import { filtersEnum, TCharacter, TCharacterKeys } from '../../RickAndMortyCharacterPage.types';
import CircleImage from '../../../../components/CircleImage/CircleImage';

const capitalizeFirstLetter = (value: string) => capitalize(value);

export const TableHeadersEnum: Array<keyof TCharacter> = [
  TCharacterKeys.image,
  TCharacterKeys.name,
  TCharacterKeys.origin,
  TCharacterKeys.status,
  TCharacterKeys.species,
  TCharacterKeys.type,
];

export const characterTableConfig = {
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
  // bodyRowCallback: {
  //   onClick: (row: TCharacter) => 
  // }
};