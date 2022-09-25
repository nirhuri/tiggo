import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import axios from 'axios';
import { verifyJwt } from './jwt-middleware';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/', async (req, res, next) => {
    try {
      logger.info(
        `Gateway API was called to add new User ${util.inspect(
          req.body
        )}`
      );
      const addUserResponse = await axios.post(
        'localhost:3002',
        req.body
      );

      return res.send(addUserResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  expressApp.use('/user', router);
}
