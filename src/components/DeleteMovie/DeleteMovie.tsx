import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./DeleteMovie.module.css";

const DeleteMovie: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        Delete Movie
      </button>
      <Modal show={modal} close={toggle} title="Delete Movie">
        This is add delete form
      </Modal>
    </>
  );
};

export default DeleteMovie;