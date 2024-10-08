import { Typography } from '@mui/material';
import useRickAndMortyEpisode from '../../../../hooks/useRickAndMortyEpisode/useRickAndMortyEpisode';
import { CharacterModalProps } from './CharacterModal.types';
import { Modal } from '../../../../components/Modal';
import './CharacterModal.css';

const CharacterModal = ({ rowData, handleCloseModal }: CharacterModalProps) => {
  const { data: firstEpisode } = useRickAndMortyEpisode(rowData.episode.at(0));
  const { data: lastEpisode } = useRickAndMortyEpisode(rowData.episode.at(-1));

  return (
    <Modal open={Boolean(rowData)} onClose={handleCloseModal}>
      <div className="characterModalContainer">
        <img src={rowData.image} alt={`${rowData.name}`} />
        <div className="content">
          <Typography variant="h5">{rowData.name}</Typography>
          {firstEpisode && lastEpisode ? (
            <>
              <Typography variant="body1">
                First Appearance: {firstEpisode.episode}
              </Typography>
              <Typography variant="body1">
                Last Appearance: {lastEpisode.episode}
              </Typography>
            </>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default CharacterModal;
