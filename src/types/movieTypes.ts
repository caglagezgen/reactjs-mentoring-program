export interface Movie {
    id: string;
    name: string;
    genres: string[];
    year: number;
    poster: string;
    runtime: number;
    description: string;
  }
  
  export type MoviesAction =
    | { type: "setMovies"; payload: Movie[] }
    | { type: "setFilterBy"; payload: string }
    | { type: "setSortBy"; payload: string };
  
  export type MoviesState = {
    movies: Movie[];
    filterBy: string;
    sortBy: string;
  };