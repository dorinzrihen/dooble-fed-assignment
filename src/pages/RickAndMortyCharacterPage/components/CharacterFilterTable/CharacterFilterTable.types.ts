import { FiltersEnum, TFilters } from "../../RickAndMortyCharacterPage.types";

export type TCharacterFilterTable = {
    onChangeFilters: (key: keyof typeof FiltersEnum, value: string) => void;
    handleClearFilters: () => void;
    filters: TFilters;
};