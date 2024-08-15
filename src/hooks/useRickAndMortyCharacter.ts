import { useQuery } from "@tanstack/react-query";
import { TFilters } from "../pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage.types";

const useRickAndMortyCharacter = (filters: TFilters, page: number) => {
    return useQuery({
        queryKey: ['character', filters, page],
        queryFn: async () => {
            const params = new URLSearchParams(filters).toString();
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${page}&${params}`
            );
            return await res.json();
        },
        staleTime: 1000 * 60,
    });
}

export default useRickAndMortyCharacter