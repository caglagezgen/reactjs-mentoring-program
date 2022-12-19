import { StoreonModule } from 'storeon';
import {
  IState, IEvents, ActionType, DEFAULT_SEARCH_STATE,
} from '@app/store/store.interface';

const initModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    store.dispatch(ActionType.getMovies, DEFAULT_SEARCH_STATE);

    return {
      movies: [],
      search: DEFAULT_SEARCH_STATE,
    };
  });
};

export default initModule;
