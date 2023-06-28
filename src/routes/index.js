'use strict';

'use strict';

const authRoute = require('../auth/routes');
const userRoute = require('../users/routes');
const acl = require('../lib/middleware/acl');

module.exports.configure = (app) => {

  //Routes for home page
  app.get('/', (req, res) => {
    res.send('Welcome to NodeJS');
  });

  // Signup route
  app.use('/v1/account', authRoute);

  app.use('/v1/users', acl.token.validate, userRoute);

  // catch 404 and forward to error handler
  // note this is after all good routes and is not an error handler
  // to get a 404, it has to fall through to this route - no error involved
  app.use(function (req, res, next) {
    var err = new Error('You seems to be lost');
    err.status = 404;
    next(err);
  });
};
