const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors')

const itemsController = require('./items/controller/items.controller');
const genericErrorHandler = require('./items/helpers/errorHandler');

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors());

app.use( '/api/items', itemsController);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(genericErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
