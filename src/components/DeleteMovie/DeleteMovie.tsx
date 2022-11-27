import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./DeleteMovie.module.css";

const DeleteMovie: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        Delete
      </button>
      <Modal isVisible={isModalOpen} close={toggle} title="Delete Movie">
        <form>
          <p>Are you sure you want to delete this movie?</p>
        </form>
      </Modal>
    </>
  );
};

export default DeleteMovie;
