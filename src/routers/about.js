import { Router } from 'express';

export const about = () => {
  const router = Router();
  router.get('/', (req, res) => {
    res.render('about');
  })

  return router;
}
