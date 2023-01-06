import KoaRouter from 'koa-router';
import MovieService from '../services/movies.service';

const router = new KoaRouter();

router.get('/movies', (ctx) => {
  ctx.body = { movies: MovieService.getMovies(ctx.query) };
});

router.get('/movie/:id', (ctx) => {
  try {
    const movie = MovieService.getMovieById(Number(ctx.params.id));

    if (movie) {
      ctx.body = movie;
      ctx.status = 200;
    } else {
      throw new Error('no movie found.');
    }
  } catch (e) {
    ctx.throw(400, e.message);
  }
});

router.delete('/movies/delete/:id', (ctx) => {
  try {
    MovieService.deleteMovie(Number(ctx.params.id));
    ctx.status = 200;
  } catch (e) {
    ctx.throw(400, e.message);
  }
});

router.post('/movies/add', (ctx) => {
  try {
    ctx.body = MovieService.addMovie(ctx.request.body.movie);
    ctx.status = 200;
  } catch (e) {
    ctx.throw(400, e.message);
  }
});

router.put('/movies/edit', (ctx) => {
  try {
    MovieService.editMovie(ctx.request.body.movie);
    ctx.status = 200;
  } catch (e) {
    ctx.throw(400, e.message);
  }
});

export default router;
