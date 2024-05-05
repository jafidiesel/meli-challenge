const express = require('express');
const { getAllItems, getItemById } = require('../service/items.service');
const {
  getAllItemsSchema,
  getItemByIdSchema,
} = require('../schema/items.schema');
const validator = require('../middleware/validator.middleware');
const logger = require('../helpers/logger');

const router = express.Router();

router.get(
  '/',
  (req, res, next) => validator(getAllItemsSchema, 'query', req, res, next),
  async (req, res, next) => {
    try {
      const response = await getAllItems(
        req.query.q,
        req.query.limit,
        req.query.offset
      );
      res.status(200).json(response);
    } catch (error) {
      res.error = error;
      res.status(error.status ? error.status : 400).json(error);
    } finally {
      logger(res.statusCode, req.method, req.url, res.error);
      next();
    }
  }
);

router.get(
  '/:id',
  (req, res, next) => validator(getItemByIdSchema, 'params', req, res, next),
  async (req, res, next) => {
    try {
      const response = await getItemById(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res.error = error;
      res.status(error.status ? error.status : 400).json(error);
    } finally {
      logger(res.statusCode, req.method, req.url, res.error);
      next();
    }
  }
);

module.exports = router;
