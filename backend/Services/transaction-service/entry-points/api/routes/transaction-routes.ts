import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newTransactionUseCase from '../../../domain/transaction/new-transaction-use-case';

export default function transactionRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.post('/cash', async (req, res, next) => {
    try {
      logger.info(
        `transaction API was called to add new Order ${util.inspect(req.body)}`
      );
      const addTransactionResponse =
        await newTransactionUseCase.addCashTransaction(req.body);
      return res.json(addTransactionResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  expressApp.use('/transaction', router);
}
