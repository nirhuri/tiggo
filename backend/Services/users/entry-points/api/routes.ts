import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newUserUseCase from '../../domain/new-user-use-case';
import * as signinUserUseCase from '../../domain/signin-user-use-case';
import * as getUserUseCase from '../../domain/get-user-use-case';
import { HTTP_CODES } from '../../../../libraries/http/http-status-codes';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/signup', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const newUserResponse = await newUserUseCase.createNewUser(req.body);
      return res.status(HTTP_CODES.CREATED).json(newUserResponse);
    } catch (error: unknown) {
      return next(error);
    }
  });

  router.post('/signin', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const signedinUser = await signinUserUseCase.signinUser(req.body);
      return res.status(HTTP_CODES.OK).json(signedinUser);
    } catch (error) {
      return next(error);
    }
  });

  router.get('/:email', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const user = await getUserUseCase.getByEmail(req.params.email);
      return res.status(HTTP_CODES.OK).json(user);
    } catch (error) {
      return next(error);
    }
  });

  expressApp.use('/users', router);
}
