import { Router } from 'express';
import moment from 'moment';

export const home = () => {
  const router = Router();
  router.get('/', (req, res) => {
    const data = {
      data: moment().format('L'),
      totalLivros: 0
    };

    res.render('home', data);
  })

  return router;
}
