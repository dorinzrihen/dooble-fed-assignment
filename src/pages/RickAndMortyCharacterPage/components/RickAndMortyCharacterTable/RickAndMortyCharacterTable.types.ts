import { CharacterResponse } from '../../RickAndMortyCharacterPage.types';

export type TRickAndMortyCharacterTable = {
  data: CharacterResponse;
  isPending: boolean;
  page: number;
  onPageChange: (pageNumber: number) => void;
};
