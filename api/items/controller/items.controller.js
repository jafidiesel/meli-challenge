const express = require('express');
const { getAllItems, getItemById } = require('../service/items.service');

const router = express.Router();

// add route params validators
router.get('/', (req, res) => getAllItems(req, res));

router.get('/:id', (req, res) => getItemById(req, res));

module.exports = router;
