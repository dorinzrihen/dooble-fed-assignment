import { Character } from '../../RickAndMortyCharacterPage.types';

export type CharacterModalProps = {
  rowData: Character;
  handleCloseModal: () => void;
};
