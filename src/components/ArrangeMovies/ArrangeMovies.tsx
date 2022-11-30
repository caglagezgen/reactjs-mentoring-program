import classes from "./Arrange.module.css";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";

const ArrangeMovies: React.FC = () => {
  return (
    <nav className={classes.arrange}>
      <Filter />
      <Sort />
    </nav>
  );
};

export default ArrangeMovies;
