import classes from "./Brand.module.css";

const Brand: React.FC = () => {
  return (
    <button className={classes.brand}>
      <span className={classes["brand--left"]}>netflix</span>
      <span className={classes["brand--right"]}>roulette</span>
    </button>
  );
};

export default Brand;
