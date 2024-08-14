import { TCharacter, CharacterKeys } from '../../RickAndMortyCharacterPage.types';

export const TableHeadersEnum: Array<keyof TCharacter> = [
  CharacterKeys.image,
  CharacterKeys.name,
  CharacterKeys.origin,
  CharacterKeys.status,
  CharacterKeys.species,
  CharacterKeys.type,
];
