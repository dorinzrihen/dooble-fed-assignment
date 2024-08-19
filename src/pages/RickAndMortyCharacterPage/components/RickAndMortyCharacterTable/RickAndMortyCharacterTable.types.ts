import { CharacterResponse } from '../../../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types';

export type RickAndMortyCharacterProps = {
  data: CharacterResponse;
  isPending: boolean;
  page: number;
  onPageChange: (pageNumber: number) => void;
};
