import classes from "./Modal.module.css";
import ReactDom from "react-dom";

interface ModalProps {
  isVisible: boolean;
  close: () => any;
  title: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, close, title, children }) => {
  return ReactDom.createPortal(
    <>
      {isVisible ? (
        <div onClick={close} className={classes.modalContainer}>
          <div onClick={(e) => e.stopPropagation()} className={classes.modalBody}>
            <div className={classes.modalHeader}>
              <div className={classes.modalTitle}>{title}</div>
              <button onClick={close} className={classes.modalClose}>
                &times;
              </button>
            </div>
            <div className={classes.modalContent}>{children}</div>

            <div className={classes.modalFooter}>
              <button onClick={close} className={classes.modalCancel}>
                Cancel
              </button>
              <button className={classes.modalSubmit}>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
