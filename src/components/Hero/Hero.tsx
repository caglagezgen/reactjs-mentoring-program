import AddMovie from "../AddMovie/AddMovie";
import Brand from "../Brand/Brand";
import SearchMovie from "../SearchMovie/SearchMovie";
import classes from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-bg"]}>
        <div className={classes["hero-bg__overlay"]}></div>
      </div>
      <div className={classes["hero__nav"]}>
        {}
        <Brand />
        <AddMovie />
      </div>
      <div className={classes["hero__content"]}>
        <h2 className={classes["hero__title"]}>Find your movie</h2>
        <SearchMovie />
      </div>
    </div>
  );
};

export default Hero;
