import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import axios from 'axios';
import { verifyJwt } from './jwt-middleware';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/', verifyJwt, async (req, res, next) => {
    try {
      logger.info(
        `Gateway API was called to add new Transaction ${util.inspect(
          req.body
        )}`
      );
      // http request to users microservice to validate the user is valid (not registered, active and not blocked)
      // if user is valid, send the request to transaction request
      const addTransactionResponse = await axios.post(
        'localhost:3003',
        req.body
      );

      return res.send(addTransactionResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  expressApp.use('/transaction', router);
}
