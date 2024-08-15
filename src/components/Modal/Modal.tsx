import { TModal } from "./Modal.types"
import { Box, Modal as MuiModal } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Modal = ({ open, onClose, children }: TModal) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}>
                <Box sx={style}>
                    {children}
                </Box>
        </MuiModal>
    )
}

export default Modal