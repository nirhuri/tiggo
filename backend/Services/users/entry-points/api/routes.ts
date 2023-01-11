import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newUserUseCase from '../../domain/new-user-use-case';
import * as signinUserUseCase from '../../domain/signin-user-use-case';
import * as getUserUseCase from '../../domain/get-user-use-case';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      return res.status(200);
    } catch (e) {
      return next(e);
    }
  });

  router.post('/signup', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const newUserResponse = await newUserUseCase.createNewUser(req.body);
      return res.status(201).json(newUserResponse);
    } catch (error: any) {
      logger.error(`signup error: ${error.message}`);
      return next(error);
    }
  });

  router.post('/signin', async (req, res, next) => {
    try {
      logger.info(
        `User API was called to add new user ${util.inspect(req.body)}`
      );
      const signedinUser = await signinUserUseCase.signinUser(req.body);
      return res.status(200).json(signedinUser);
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
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  });

  expressApp.use('/users', router);
}
