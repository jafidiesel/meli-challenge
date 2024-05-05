const express = require('express');
require('dotenv').config();
const itemsController = require('./items/controller/items.controller');

const app = express();
const port = process.env.PORT;

app.use( '/api/items', itemsController);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
