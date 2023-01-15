import { StoreonModule } from 'storeon';
import { IState, IEvents, ActionType } from '@app/store/store.interface';
import {
  addMovie,
  deleteMovie,
  editMovie,
  getMovieDetails,
  getMovies,
  removeChosenMovie,
  resetState,
  saveMovie,
} from '@app/store/modules/movies.events';

const moviesModule: StoreonModule<IState, IEvents> = (store) => {
  store.on(ActionType.addMovie, addMovie(store));
  store.on(ActionType.deleteMovie, deleteMovie(store));
  store.on(ActionType.editMovie, editMovie(store));
  store.on(ActionType.getMovies, getMovies(store));
  store.on(ActionType.getMovieDetails, getMovieDetails(store));
  store.on(ActionType.removeChosenMovie, removeChosenMovie);
  store.on(ActionType.resetState, resetState);
  store.on(ActionType.saveMovie, saveMovie);
};

export default moviesModule;
