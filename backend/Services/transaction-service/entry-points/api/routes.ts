import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newTransactionUseCase from '../../domain/transaction/new-transaction-use-case';
import transactionRoutes from './routes/transaction-routes';
import categoryRoutes from './routes/category-routes';

export default function defineRoutes(expressApp: express.Application) {
  transactionRoutes(expressApp);
  categoryRoutes(expressApp);
}
