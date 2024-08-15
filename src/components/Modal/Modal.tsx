import { ModalProps } from './Modal.types';
import { Box, Modal as MuiModal } from '@mui/material';

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box>{children}</Box>
    </MuiModal>
  );
};

export default Modal;
