import AddMovie from "../AddMovie/AddMovie";
import Brand from "../Logo/Logo";
import SearchMovie from "../SearchMovie/SearchMovie";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header-bg"]}>
        <div className={classes["header-bg__overlay"]}></div>
      </div>
      <div className={classes["header__nav"]}>
        <Brand />
        <AddMovie />
      </div>
      <div className={classes["header__content"]}>
        <h2 className={classes["header__title"]}>Find your movie</h2>
        <SearchMovie />
      </div>
    </div>
  );
};

export default Header;
