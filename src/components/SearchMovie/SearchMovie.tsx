import classes from "./SearchMovie.module.css";

const SearchMovie: React.FC = () => {
  return <form >
    <div className={classes["search-form"]}>
      <input type="text" placeholder="What do want to watch?" className={classes["search-form__input"]} />
      <button type="submit" className={classes["search-form__submit"]}>Search</button>
    </div>
  </form>
}

export default SearchMovie;