import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import axios from 'axios';
import { AppError } from '@practica/error-handling';
import { verifyJwt } from './jwt-middleware';
import { HTTP_CODES } from './http-status-codes';

export function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/signup', async (req, res, next) => {
    try {
      logger.info(
        `Gateway API was called to add new User ${util.inspect(req.body)}`
      );
      const addUserResponse = await axios
        .post('http://0.0.0.0:3003/users/signup', req.body)
        .catch((error) => {
          throw new AppError(
            'user-creation-error',
            error.response.data,
            error.response.status,
            true
          );
        });

      return res.status(201).send(addUserResponse.data);
    } catch (error: unknown) {
      return next(error);
    }
  });

  expressApp.use('/users', router);
}
