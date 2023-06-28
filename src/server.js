'use strict';

const bodyParser = require('body-parser');
const routes = require('./routes');

const init = (app) => {
    // create application/json parser
    var jsonParser = bodyParser.json();

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.use(jsonParser);
    app.use(urlencodedParser);

    const port = process.env.SERVER_PORT || 8080;

    // routes
    routes.configure(app);

    // listen for incoming requests
    app.listen(port, () => {
        console.log('Server is up and listening on port', port);
    });
};

module.exports = { init };
