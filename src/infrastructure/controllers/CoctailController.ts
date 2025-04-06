import express, { NextFunction, Request, Response } from 'express';
import { CoctailService } from '../../application/services';

export const createCoctailRouter = (service: CoctailService) => {
  const router = express.Router();

  const validateNameParam = (req: Request, res: Response, next: NextFunction): void => {
    const { name } = req.params;
    
    if (!name?.trim() || name.length <= 2) {
      res.status(400).json({
        status: 'error',
        message: 'El nombre del cocktail es obligatorio'
      });
      return;
    }
  
    next();
  };

  router.get('/:name', validateNameParam, async (req, res) => {
    try {
      const name = req.params.name as string;
      const coctails = await service.getCoctails(name);
      res.json(coctails);
    } catch (err) {
      res.status(500).json({ message: 'Error al obtener cocteles' });
    }
  });

  return router;
};