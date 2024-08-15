import { useQuery } from '@tanstack/react-query';
import {
  TFilters,
} from '../../pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage.types';
import { CharacterResponse } from './useRickAndMortyCharacter.types';

const useRickAndMortyCharacter = (filters: TFilters, page: number) => {
  return useQuery<CharacterResponse>({
    queryKey: ['character', filters, page],
    queryFn: async () => {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&${params}`
      );
      return await res.json();
    },
  });
};

export default useRickAndMortyCharacter;
