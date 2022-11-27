import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieSearchResult from "./components/MovieSearchResult/MovieSearchResult";
import classes from "./App.module.css";
import { MoviesProvider } from "./store";

const App: React.FC = () => {
  return (
    <MoviesProvider>
      <div className={classes.container}>
        <Header />
        <MovieSearchResult />
        <Footer />
      </div>
    </MoviesProvider>
  );
};

export default App;
