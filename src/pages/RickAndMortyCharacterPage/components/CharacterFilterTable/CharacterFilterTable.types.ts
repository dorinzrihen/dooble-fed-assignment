import { FiltersEnum, TFilters } from '../../RickAndMortyCharacterPage.types';

export type CharacterFilterTableProps = {
  onChangeFilters: (key: keyof typeof FiltersEnum, value: string) => void;
  handleClearFilters: () => void;
  filters: TFilters;
};
