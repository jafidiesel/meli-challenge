const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const logger = (req, res, next) => {
  console.log(res.statusCode, req.method, req.url);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
