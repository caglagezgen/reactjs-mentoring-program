import React, {
  useState, FC, lazy, Suspense,
} from 'react';
import store from '@app/store/store';
import { StoreContext } from 'storeon/react';
import { IMovie } from '@shared/interfaces/movies.model';
import useStyle from '@app/components/app/app.component.styles';
import CoreModal from '@app/components/modals/coreModal/coreModal.component';
import MovieDetails from '@app/components/movieDetails/movieDetails.component';
import HeaderActiveComponent from '@app/components/app/app.component.interface';
import ErrorBoundary from '@app/components/errorBoundary/errorBoundary.component';
import { IModalContext, ModalContext } from '@shared/interfaces/coreModal.context';

const Main = lazy(() => import('@app/components/main/main.component'));
const Header = lazy(() => import('@app/components/header/header.component'));
const Footer = lazy(() => import('@app/components/footer/footer.component'));

const App: FC = () => {
  const classes = useStyle();
  const [chosenMovie, setChosenMovie] = useState(null);
  const [headerComponent, toggleHeaderComponent] = useState(HeaderActiveComponent.Header);
  const [chosenModal, setChosenModal] = useState<IModalContext>({ type: null });

  const handleMovieClick = (movie: IMovie) => {
    setChosenMovie(movie);
    toggleHeaderComponent(HeaderActiveComponent.MovieDetails);
  };

  if (chosenModal.actionType) {
    setChosenModal({ type: chosenModal.type });
    toggleHeaderComponent(HeaderActiveComponent.Header);
  }

  return (
    <div className={classes.core}>
      <ErrorBoundary>
        <StoreContext.Provider value={store}>
          <ModalContext.Provider value={{ chosenModal, setChosenModal }}>
            <Suspense fallback={<div>Loading...</div>}>
              {headerComponent === HeaderActiveComponent.Header
                ? <Header />
                : (
                  <MovieDetails
                    movie={chosenMovie}
                    onBackButtonClick={() => toggleHeaderComponent(HeaderActiveComponent.Header)}
                  />
                )}

              <Main onMovieImageClick={handleMovieClick} />
              <Footer />
              {chosenModal.type && <CoreModal />}
            </Suspense>
          </ModalContext.Provider>
        </StoreContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
