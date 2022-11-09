import classes from "./Filter.module.css";

const Filter: React.FC = () => {
  return <nav className={classes.filter}>
    <ul className={classes["filter__genres"]}>
      <li><button className={`${classes["filter__genre"]} ${classes["filter__genre--active"]}`}>All</button></li>
      <li><button className={classes["filter__genre"]}>Documentary</button></li>
      <li><button className={classes["filter__genre"]}>Comedy</button></li>
      <li><button className={classes["filter__genre"]}>Horror</button></li>
      <li><button className={classes["filter__genre"]}>Crime</button></li>
    </ul>
    <div className={classes["filter__sort"]}>
      <span className={classes["filter__sort-tag"]}>SORT BY</span>
      <button className={classes["filter__sort-btn"]}>Release Date</button>
    </div>
  </nav>
};

export default Filter;
