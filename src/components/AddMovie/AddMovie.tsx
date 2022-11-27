import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./AddMovie.module.css";

const AddMovie: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        + Add Movie
      </button>
      <Modal isVisible={isModalOpen} close={toggle} title="Add Movie">
        <form>
          <p>
            <label htmlFor="movieTitle">Title</label>
            <input type="text" name="movieTitle" id="movieTitle" />
          </p>
          <p>
            <label htmlFor="movieYear">Release Date</label>
            <input type="date" name="movieYear" id="movieYear" />
          </p>
          <p>
            <label htmlFor="movieUrl">Movie Url</label>
            <input type="url" name="movieUrl" id="movieUrl" />
          </p>
          <p>
            <label htmlFor="movieRating">Rating</label>
            <input type="number" step="0.1" min="0" max="10" name="movieRating" id="movieRating" />
          </p>
          <p>
            <label htmlFor="movieGenre">Genre</label>
            <select name="movieGenre" id="movieGenre">
              <option value="" disabled selected hidden>
                Select Genre
              </option>
              <option value="Crime">Crime</option>
              <option value="Crime">Documentary</option>
              <option value="Crime">Horror</option>
            </select>
          </p>
          <p>
            <label htmlFor="movieRuntime">Runtime</label>
            <input type="number" name="movieRuntime" id="movieRuntime" />
          </p>
          <p>
            <label htmlFor="movieOverview">Overview</label>
            <textarea name="movieOverview" id="movieOverview" rows={4}></textarea>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default AddMovie;
