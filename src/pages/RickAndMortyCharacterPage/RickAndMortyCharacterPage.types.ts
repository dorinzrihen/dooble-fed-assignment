import {
  CharacterResponse,
  CharacterValidResponse,
} from '../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types';

export const FiltersEnum = {
  name: 'name',
  gender: 'gender',
  status: 'status',
} as const;

export type TFilters = {
  [FiltersEnum.name]: string;
  [FiltersEnum.gender]: string;
  [FiltersEnum.status]: string;
};

export const isValidCharacterResponse = (
  response: CharacterResponse
): response is CharacterValidResponse => {
  return Boolean(response && 'info' in response && 'results' in response);
};
