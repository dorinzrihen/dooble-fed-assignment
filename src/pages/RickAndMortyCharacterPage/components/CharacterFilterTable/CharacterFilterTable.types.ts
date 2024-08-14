import { filtersEnum, TFilters } from "../../RickAndMortyCharacterPage.types";

export type TCharacterFilterTable = {
    onChangeFilters: (key: keyof typeof filtersEnum, value: string) => void;
    handleClearFilters: () => void;
    filters: TFilters;
};