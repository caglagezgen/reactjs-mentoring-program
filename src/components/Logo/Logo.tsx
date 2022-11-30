import classes from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <button className={classes.logo}>
      <span className={classes["logo--left"]}>netflix</span>
      <span className={classes["logo--right"]}>roulette</span>
    </button>
  );
};

export default Logo;
