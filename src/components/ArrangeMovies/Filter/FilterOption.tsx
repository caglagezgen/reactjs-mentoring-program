import { useMovies } from "../../../store";
import classes from "./FilterOption.module.css";

interface FilterOptionProps {
  id: string;
  title: string;
  isActive: boolean;
}

const FilterOption: React.FC<FilterOptionProps> = ({ id, title, isActive = false }) => {
  const { setFilterBy } = useMovies();
  return (
    <li>
      <button
        onClick={() => setFilterBy(title)}
        className={`${classes["filter__genre"]} ${isActive ? classes["filter__genre--active"] : ""}`}
      >
        {title}
      </button>
    </li>
  );
};

export default FilterOption;
