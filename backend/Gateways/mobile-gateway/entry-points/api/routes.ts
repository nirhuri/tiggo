import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('', async (req, res, next) => {
    try {
      logger.info(
        `Gateway API was called to add new Transaction ${util.inspect(req.body)}`
      );
      return res.json();
    } catch (error) {
      next(error);
      return undefined;
    }
  });
}
