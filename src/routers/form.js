import { Router } from 'express';

export const form = () => {
  const router = Router();

  router.get('/', (req, res) => {
    res.render('form');
  })
  
  router.post('/', (req, res) => {
    const form = req.params;
  })

  return router;
}
