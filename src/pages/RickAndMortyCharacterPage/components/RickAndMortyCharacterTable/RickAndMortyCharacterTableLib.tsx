import { Character, CharacterKeys } from "../../../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types";


export const TableHeadersEnum: Array<keyof Character> = [
  CharacterKeys.image,
  CharacterKeys.name,
  CharacterKeys.origin,
  CharacterKeys.status,
  CharacterKeys.species,
  CharacterKeys.type,
];
