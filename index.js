'use strict';

const startup = require('./lib/startup');

//environment config (.env file)
const dotenv = require('dotenv');
dotenv.config();

startup.init();
