export const StatusEnum = {
  alive: 'alive',
  dead: 'dead',
  unknown: 'unknown',
} as const;

export const GenderEnum = {
  female: 'female',
  male: 'male',
  genderless: 'genderless',
  unknown: 'unknown',
} as const;

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

export type Character = {
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

export type CharacterValidResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export type CharacterResponse =
  | CharacterValidResponse
  | { error: string }
  | undefined;
