import {
  Character,
  CharacterKeys,
} from '../../RickAndMortyCharacterPage.types';

export const TableHeadersEnum: Array<keyof Character> = [
  CharacterKeys.image,
  CharacterKeys.name,
  CharacterKeys.origin,
  CharacterKeys.status,
  CharacterKeys.species,
  CharacterKeys.type,
];
