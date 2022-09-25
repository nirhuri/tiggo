import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newOrderUseCase from '../../domain/new-user-use-case';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.get('/validate', async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
      return undefined;
    }
  })

  router.post('/signup', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      // create new user here
      return res.json();
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  router.get('/signin', async (req, res, next) => {
    try {
      // signin user heres
    } catch (error) {
      next(error);
      return undefined;
    }
  })

  expressApp.use('/user', router);
}
