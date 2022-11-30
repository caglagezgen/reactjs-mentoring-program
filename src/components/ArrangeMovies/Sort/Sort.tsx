import { useMovies } from "../../../store";
import classes from "./Sort.module.css";

const sortingCriterias = ["Release Date", "Name"];

const Sort: React.FC = () => {
  const { setSortBy } = useMovies();
  return (
    <div className={classes["filter__sort"]}>
      <label htmlFor="sortBy" className={classes["filter__sort-tag"]}>
        SORT BY
      </label>
      <select onChange={(e) => setSortBy(e.target.value)} defaultValue="Release Date" name="sortBy" id="sortBy">
        {sortingCriterias.map((criteria) => (
          <option key={criteria} value={criteria}>
            {criteria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
