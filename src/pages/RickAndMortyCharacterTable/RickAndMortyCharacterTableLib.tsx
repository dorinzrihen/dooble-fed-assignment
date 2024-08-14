import { capitalize } from "lodash"
import { TCharacter, TCharacterKeys } from "./RickAndMortyCharacterTable.types"

const capitalizeFirstLetter = (value: string) => capitalize(value)

export const TableHeadersEnum: Array<keyof TCharacter> = [
  TCharacterKeys.image,
  TCharacterKeys.name,
  TCharacterKeys.origin,
  TCharacterKeys.status,
  TCharacterKeys.species,
  TCharacterKeys.type,
]

export const characterTableConfig = {
    headerCallback: {
      [TCharacterKeys.image]: capitalizeFirstLetter,
      [TCharacterKeys.name]: capitalizeFirstLetter,
      [TCharacterKeys.origin]: capitalizeFirstLetter,
      [TCharacterKeys.status]: capitalizeFirstLetter,
      [TCharacterKeys.species]: capitalizeFirstLetter,
      [TCharacterKeys.type]: capitalizeFirstLetter,
    },
    bodyCallback: {
      [TCharacterKeys.image]: (row: TCharacter) => <img alt={row.name} src={row[TCharacterKeys.image]}/>,
      [TCharacterKeys.origin]: (row: TCharacter) => row[TCharacterKeys.origin].name,
    }
  }