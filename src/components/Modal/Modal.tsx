import { TModal } from "./Modal.types"
import { Modal as MuiModal } from '@mui/material'

const Modal = ({ open, onClose, children }: TModal) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}>
            {children}
        </MuiModal>
    )
}

export default Modal