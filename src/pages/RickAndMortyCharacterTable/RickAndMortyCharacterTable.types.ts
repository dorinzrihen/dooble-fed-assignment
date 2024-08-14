export const TCharacterKeys = {
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
  [TCharacterKeys.id]: number;
  [TCharacterKeys.name]: string;
  [TCharacterKeys.status]: keyof typeof StatusEnum;
  [TCharacterKeys.species]: string;
  [TCharacterKeys.type]: string;
  [TCharacterKeys.gender]: keyof typeof GenderEnum;
  [TCharacterKeys.origin]: {
    name: string;
    url: string;
  };
  [TCharacterKeys.location]: {
    name: string;
    url: string;
  };
  [TCharacterKeys.image]: string;
  [TCharacterKeys.episode]: string[];
  [TCharacterKeys.url]: string;
  [TCharacterKeys.created]: string;
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
  name: string;
  gender: string;
  status: string;
};
