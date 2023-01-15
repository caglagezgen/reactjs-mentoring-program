import { createStoreon, StoreonDispatch } from 'storeon';

import modules from '@app/store/modules';
import { addMovie } from '@app/store/modules/movies.events';
import { Genres, IMovie } from '@shared/interfaces/movies.model';
import { ActionType, API_URL, DEFAULT_STORE_STATE } from '@app/store/store.interface';

const mockMovie: IMovie = {
  title: 'mock title',
  genre: [Genres.Action],
  releaseDate: '2020-10-10',
  imagePath: '/',
  url: '/',
  id: 123,
  duration: 123,
  rating: 123,
  description: 'description',
};
const globalFetch = global.fetch;
const globalAlert = global.alert;
const globalConsoleError = global.console.error;
const mockFetchSuccessful = () => Promise.resolve({
  ok: true,
  json: async () => (mockMovie),
  text: async () => 'text',
});
const mockFetchFailed = () => Promise.resolve({
  ok: false,
  json: async () => ('error'),
  text: async () => 'error',
});

beforeAll(() => {
  global.alert = jest.fn();
  global.console.error = jest.fn();
});

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(mockFetchSuccessful);
});

afterAll(() => {
  global.fetch = globalFetch;
  global.alert = globalAlert;
  global.console.error = globalConsoleError;
});

describe('reducer', () => {
  it('should init a store with default state', () => {
    const store = createStoreon(modules);

    expect(store.get()).toEqual(DEFAULT_STORE_STATE);
  });

  it('fetch should return mock movie', async () => {
    const request = await fetch('url');
    const response = await request.json();

    expect(response).toBe(mockMovie);
  });

  it('should send a movie to the server when receives the "Add movie" action', () => {
    const store = createStoreon(modules);
    const requestInit: RequestInit = {
      method: 'POST',
      body: JSON.stringify({ movie: mockMovie }),
      headers: { 'content-type': 'application/json' },
    };

    store.dispatch(ActionType.addMovie, mockMovie);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(`${API_URL}/movies/add`, requestInit);
  });

  it('should delete a movie from the server when receives the "Delete movie" action', () => {
    const store = createStoreon(modules);
    const requestInit: RequestInit = {
      method: 'DELETE',
    };
    const id = '123';

    store.dispatch(ActionType.deleteMovie, id);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(`${API_URL}/movies/delete/${id}`, requestInit);
  });

  it('new movie should appear in the store after handling the addMovie action', async () => {
    const store = createStoreon(modules);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, max-len
    const mockDispatch = jest.fn().mockImplementation(store.dispatch) as unknown as StoreonDispatch<any>;
    const addMovieMock = addMovie(store);

    store.dispatch = mockDispatch;
    store.on(ActionType.addMovie, addMovieMock);

    await addMovieMock(DEFAULT_STORE_STATE, mockMovie);

    expect(mockDispatch).toBeCalledWith(ActionType.saveMovie, { movies: [mockMovie] });
    expect(store.get()).toEqual({ ...DEFAULT_STORE_STATE, movies: [mockMovie] });
  });

  it('should handle unsuccessful response', async () => {
    const store = createStoreon(modules);
    const addMovieMock = addMovie(store);

    store.on(ActionType.addMovie, addMovieMock);
    global.fetch = jest.fn().mockImplementation(mockFetchFailed);

    await addMovieMock(DEFAULT_STORE_STATE, mockMovie);

    expect(store.get()).toEqual(DEFAULT_STORE_STATE);
  });
});
