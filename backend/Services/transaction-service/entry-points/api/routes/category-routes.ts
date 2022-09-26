import util from 'util';
import express from 'express';
import { logger } from '@practica/logger';
import * as newCategoryUseCase from '../../../domain/category/new-category-use-case';

export default function categoryRoutes(expressApp: express.Application) {
  const router = express.Router();

  router.put('', async (req, res, next) => {
    try {
      logger.info(
        `transaction API was called to add new Order ${util.inspect(req.body)}`
      );
      const updateCategoryResponse = await newCategoryUseCase.updateCategory(
        req.body
      );
      return res.json(updateCategoryResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });
  router.post('', async (req, res, next) => {
    try {
      logger.info(
        `transaction API was called to add new Order ${util.inspect(req.body)}`
      );
      const addCategoryResponse = await newCategoryUseCase.addCategory(
        req.body
      );
      return res.json(addCategoryResponse);
    } catch (error) {
      next(error);
      return undefined;
    }
  });

  expressApp.use('/category', router);
}
