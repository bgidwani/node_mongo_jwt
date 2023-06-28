'use strict';

const init = async () => {
  //environment config (.env file)
  const dotenv = require('dotenv');
  dotenv.config();

  const express = require('express');
  const server = require('./server');
  const db = require('./db');

  // defining the Express app
  const app = express();
  server.init(app);

  db.init();
}

init();