import express, { NextFunction, Request, Response } from 'express';
import { CoctailService } from '../../application/services';

export const createCoctailRouter = (service: CoctailService) => {
  const router = express.Router();

  const validateNameParam = (req: Request, res: Response, next: NextFunction): void => {
    const { name } = req.params;
    
    if (!name?.trim()) {
      res.status(400).json({
        status: 'error',
        message: 'El nombre del cocktail es obligatorio'
      });
      return;
    }

    if (name.length <= 2) {
      res.status(400).json({
        status: 'error',
        message: 'El nombre del cocktail debe tener al menos 3 caracteres'
      });
      return;
    }
  
    next();
  };

  /**
   * @swagger
   * /v1/coctail/{name}:
   *   get:
   *     summary: Obtener cocteles por nombre
   *     parameters:
   *       - name: name
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Lista de cocteles
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: integer
   *                   name:
   *                     type: string
   *                   category:
   *                     type: string
   *                   instructions:
   *                     type: string
   *                   image:
   *                     type: string
   *                   ingredients:
   *                     type: array
   *                     items:
   *                       type: string
   */
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