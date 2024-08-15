import { useQuery } from '@tanstack/react-query';
import { Episode } from './useRickAndMortyEpisode.types';

const useRickAndMortyEpisode = (endpoint: string | undefined) => {
  return useQuery<Episode>({
    queryKey: ['episodes', endpoint],
    queryFn: async () => {
      if (endpoint) {
        const res = await fetch(endpoint);
        return await res.json();
      }
    },
    enabled: !!endpoint,
  });
};

export default useRickAndMortyEpisode;
