import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MovieSearchResult from "../components/MovieSearchResult/MovieSearchResult";
import { movies } from "../data/movies";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <MovieSearchResult count={39} movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
