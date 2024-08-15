import { Character } from "../../../../hooks/useRickAndMortyCharacter/useRickAndMortyCharacter.types";

export type CharacterModalProps = {
  rowData: Character;
  handleCloseModal: () => void;
};
