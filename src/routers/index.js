import { Router } from 'express';
import createError from 'http-errors'

import { home } from './home';
import { about } from './about';
import { form } from './form';


export const routers = () => {
  const router = Router();
  // const app = express();
  router.use('/', home());
  router.use('/about', about());
  router.use('/form', form());

  // 404
  router.use((req, res, next) => {
    next(createError(404));
  });
  // error handler
  router.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });

  return router;
}
