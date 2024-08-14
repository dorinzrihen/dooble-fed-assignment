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

export const TStatus = {
    Alive: 'Alive',
    Dead: 'Dead',
    unknown: 'unknown'
} as const

export const TGender = {
    Female: 'Female',
    Male: 'Male',
    Genderless: 'Genderless',
    unknown: 'unknown'
} as const

export type TCharacter = {
    [TCharacterKeys.id]: number;
    [TCharacterKeys.name]: string;
    [TCharacterKeys.status]: keyof typeof TStatus;
    [TCharacterKeys.species]: string;
    [TCharacterKeys.type]: string;
    [TCharacterKeys.gender]: keyof typeof TGender;
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
}