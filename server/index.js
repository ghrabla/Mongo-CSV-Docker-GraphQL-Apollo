const express = require('express');
const cors = require('cors'); 
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/user');
const connectDB = require('./mongodb/index');
const port = process.env.PORT;

const app = express(); 

// Connect to database
connectDB();

app.use(cors());

app.use(
  '/reqserver',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
