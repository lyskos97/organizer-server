const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

require('dotenv').config();
require('./db');

const schema = require('./schema');

const app = express();
const port = process.env.PORT || 4000;

app.use(
  '/',
  cors(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log('App on port', port, '...');
});
