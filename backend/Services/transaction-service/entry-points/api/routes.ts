import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newTransactionUseCase from '../../domain/new-transaction-use-case';

export default function defineRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/', async (req, res, next) => {
    try {
      logger.info(
        `transaction API was called to add new Order ${util.inspect(req.body)}`
      );
      const addTransactionResponse = await newTransactionUseCase.addTransaction(
        req.body
      );
      return res.json(addTransactionResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  // get existing order by id
  router.get('/:id', async (req, res) => {
    logger.info(`Order API was called to get user by id ${req.params.id}`);
    const response = await newTransactionUseCase.getTransaction(req.params.id);

    if (!response) {
      res.status(404).end();
      return;
    }

    res.json(response);
  });

  // delete order by id
  router.delete('/:id', async (req, res) => {
    logger.info(`Order API was called to delete order ${req.params.id}`);
    await newTransactionUseCase.deleteTransaction(req.params.id);
    res.status(204).end();
  });

  expressApp.use('/transaction', router);
}
