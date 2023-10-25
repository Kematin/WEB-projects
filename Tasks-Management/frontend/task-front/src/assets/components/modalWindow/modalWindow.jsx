import Modal from 'react-modal';

import {modalWindow} from "./modalWindow.module.css"
import Button from '../ui/Button/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

Modal.setAppElement('#root');

function ModalWindow({ handleOpen, handleClose, open, textForOpen, dataInside }){
  return (
    <div className={modalWindow}>
      <Button fnOnClick={handleOpen} value={textForOpen}></Button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style}
      >
        {dataInside}
      </Modal>
    </div>
  );
}

export default ModalWindow