import { Modal, Typography } from '@mui/material';
import useRickAndMortyEpisode from '../../../../hooks/useRickAndMortyEpisode';
import { CharacterModalProps } from './CharacterModal.types';

const CharacterModal = ({ rowData, handleCloseModal }: CharacterModalProps) => {
  const { data: firstEpisode, isPending: isPendingFirstEpisode } =
    useRickAndMortyEpisode(rowData.episode.at(0));
  const { data: lastEpisode, isPending: isPendingLastEpisode } =
    useRickAndMortyEpisode(rowData.episode.at(-1));

  return (
    <Modal open={Boolean(rowData)} onClose={handleCloseModal}>
      <div
        style={{ width: '300px', height: '400px', backgroundColor: 'white' }}
      >
        <img
          style={{ width: '100%' }}
          src={rowData.image}
          alt={`${rowData.name}`}
        />
        <Typography variant="h4">{rowData.name}</Typography>
        {!isPendingFirstEpisode && !isPendingLastEpisode ? (
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
    </Modal>
  );
};

export default CharacterModal;
