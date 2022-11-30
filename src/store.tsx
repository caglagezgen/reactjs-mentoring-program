import { useReducer, useEffect, createContext, useContext, useCallback, useMemo } from "react";

export interface Movie {
  id: string;
  name: string;
  genres: string[];
  year: number;
  poster: string;
}

function useMoviesSource(): {
  movies: Movie[];
  filterBy: string;
  setFilterBy: (filterBy: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
} {
  type MoviesState = {
    movies: Movie[];
    filterBy: string;
    sortBy: string;
  };

  type MoviesAction =
    | { type: "setMovies"; payload: Movie[] }
    | { type: "setFilterBy"; payload: string }
    | { type: "setSortBy"; payload: string };

  const [{ movies, filterBy, sortBy }, dispatch] = useReducer(
    (state: MoviesState, action: MoviesAction) => {
      switch (action.type) {
        case "setMovies":
          return { ...state, movies: action.payload };
        case "setFilterBy":
          return { ...state, filterBy: action.payload };
        case "setSortBy":
          return { ...state, sortBy: action.payload };
      }
    },
    {
      movies: [],
      filterBy: "",
      sortBy: "",
    }
  );

  useEffect(() => {
    fetch("/data/movies.json")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setMovies",
          payload: data,
        })
      );
  }, []);

  const setFilterBy = useCallback((filterBy: string) => {
    console.log(filterBy);
    dispatch({
      type: "setFilterBy",
      payload: filterBy,
    });
  }, []);

  const setSortBy = useCallback((sortBy: string) => {
    dispatch({
      type: "setSortBy",
      payload: sortBy,
    });
  }, []);

  const filteredMovies = useMemo(() => {
    if (!filterBy || filterBy === "All") {
      return movies;
    }
    return movies.filter((movie) =>
      movie.genres.map((genre) => genre.toLocaleLowerCase()).includes(filterBy.toLowerCase())
    );
  }, [movies, filterBy]);

  const sortedMovies = useMemo(() => {
    let movies = [...filteredMovies];
    if (sortBy === "Release Date" || !sortBy) {
      return movies.sort((a, b) => Number(a.year) - Number(b.year));
    }
    if (sortBy === "Name") {
      return movies.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [filteredMovies, sortBy]);

  return { movies: sortedMovies!, filterBy, setFilterBy, sortBy, setSortBy };
}

const MoviesContext = createContext<ReturnType<typeof useMoviesSource>>(
  {} as unknown as ReturnType<typeof useMoviesSource>
);

export function useMovies() {
  return useContext(MoviesContext);
}

export function MoviesProvider({ children }: { children: React.ReactNode }) {
  return <MoviesContext.Provider value={useMoviesSource()}>{children}</MoviesContext.Provider>;
}
