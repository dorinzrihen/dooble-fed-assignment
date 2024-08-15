export const CharacterKeys = {
  id: 'id',
  name: 'name',
  status: 'status',
  species: 'species',
  type: 'type',
  gender: 'gender',
  origin: 'origin',
  location: 'location',
  image: 'image',
  episode: 'episode',
  url: 'url',
  created: 'created',
} as const;

export const FiltersEnum = {
  name: 'name',
  gender: 'gender',
  status: 'status'
} as const

export const StatusEnum = {
  Alive: 'Alive',
  Dead: 'Dead',
  unknown: 'unknown',
} as const;

export const GenderEnum = {
  Female: 'Female',
  Male: 'Male',
  Genderless: 'Genderless',
  unknown: 'unknown',
} as const;

export type TCharacter = {
  [CharacterKeys.id]: number;
  [CharacterKeys.name]: string;
  [CharacterKeys.status]: keyof typeof StatusEnum;
  [CharacterKeys.species]: string;
  [CharacterKeys.type]: string;
  [CharacterKeys.gender]: keyof typeof GenderEnum;
  [CharacterKeys.origin]: {
    name: string;
    url: string;
  };
  [CharacterKeys.location]: {
    name: string;
    url: string;
  };
  [CharacterKeys.image]: string;
  [CharacterKeys.episode]: string[];
  [CharacterKeys.url]: string;
  [CharacterKeys.created]: string;
};

export type TCharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: TCharacter[];
};

export type TFilters = {
  [FiltersEnum.name]: string;
  [FiltersEnum.gender]: string;
  [FiltersEnum.status]: string;
};

