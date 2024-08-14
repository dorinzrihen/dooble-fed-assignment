export const TableHeadersEnum = {
    image: 'image',
    name: 'name',
    origin: 'origin',
    status: 'status',
    species: 'species',
    type: 'type',
}

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

type TCharacter = {
    id: number
    name: string
    status: keyof typeof TStatus
    species: string
    type: string
    gender: keyof typeof TGender
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string;
    created: string
}
  
export type TCharacterResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: TCharacter[];
}