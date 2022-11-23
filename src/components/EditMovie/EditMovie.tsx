import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./EditMovie.module.css";

const EditMovie: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        Edit Movie
      </button>
      <Modal show={modal} close={toggle} title="Edit Movie">
        This is edit movie form
      </Modal>
    </>
  );
};

export default EditMovie;