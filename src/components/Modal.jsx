import classes from './Modal.module.css';

function Modal({ onClose, children }) {
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <dialog open className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
