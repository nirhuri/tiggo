import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newUserUseCase from '../../domain/new-user-use-case';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/signup', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const newUserResponse = await newUserUseCase.createNewUser(req.body);
      return res.json(newUserResponse);
    } catch (error: unknown) {
      next(error);
      return undefined;
    }
  });

  router.get('/signin', async (req, res, next) => {
    try {
      // signin user heres
      return undefined;
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  expressApp.use('/users', router);
}
