import { capitalize } from 'lodash';
import { TCharacter, TCharacterKeys } from '../../RickAndMortyCharacterPage.types';

export const capitalizeFirstLetter = (value: string) => capitalize(value);

export const TableHeadersEnum: Array<keyof TCharacter> = [
  TCharacterKeys.image,
  TCharacterKeys.name,
  TCharacterKeys.origin,
  TCharacterKeys.status,
  TCharacterKeys.species,
  TCharacterKeys.type,
];
