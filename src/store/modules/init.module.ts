import { StoreonModule } from 'storeon';
import {
  IState, IEvents, ActionType, DEFAULT_SEARCH_STATE,
} from '@app/store/store.interface';

const initModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-useless-escape
    const [match, text] = window.location.pathname.match('search\/(.*)$') || [];
    const search = text
      ? { ...DEFAULT_SEARCH_STATE, text }
      : DEFAULT_SEARCH_STATE;

    if (text) {
      store.dispatch(ActionType.getMovies, search);
    }
    return {
      movies: [],
      search,
    };
  });
};

export default initModule;
