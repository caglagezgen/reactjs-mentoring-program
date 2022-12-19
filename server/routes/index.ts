import KoaRouter from 'koa-router';
import nestedRouter from './routes';

const router = new KoaRouter().use(nestedRouter.routes(), nestedRouter.allowedMethods());

export default router;
