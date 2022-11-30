import { useMovies } from "../../../store";
import classes from "./Filter.module.css";
import FilterOption from "./FilterOption";

const filters = [
  { id: "a1", title: "All" },
  { id: "b2", title: "Documentary" },
  { id: "c3", title: "Comedy" },
  { id: "d4", title: "Horror" },
  { id: "e5", title: "Crime" },
];

const Filter: React.FC = () => {
  const { filterBy } = useMovies();
  return (
    <ul className={classes["filter__genres"]}>
      {filters?.map((filter) => (
        <FilterOption key={filter.id} id={filter.id} title={filter.title} isActive={filter.title === filterBy} />
      ))}
    </ul>
  );
};

export default Filter;
