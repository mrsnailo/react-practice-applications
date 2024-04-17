import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClickBackdrop}
      className={`${styles.backdrop} fixed top-0 left-0 w-full h-screen z-20`}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClickBackdrop={props.closeCart} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
