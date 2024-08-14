import { TModal } from "./Modal.types"

const Modal = ({open, onClose, children}: TModal) => {
return (
    <Modal
        open={open}
        onClose={onClose}>
        {children}
    </Modal>
)
}