import { useQuery } from "@tanstack/react-query";

const useRickAndMortyEpisodes = (endpoint: string | undefined) => {
    return useQuery({
        queryKey: ['episodes', endpoint],
        queryFn: async () => {
            if(endpoint) {
                const res = await fetch(endpoint);
                return await res.json();
            }

        },
        enabled: !!endpoint,
    });
}

export default useRickAndMortyEpisodes