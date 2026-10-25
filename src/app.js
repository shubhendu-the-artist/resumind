const express = require('express');
const app = express();
/*require all routes*/
const authRouter = require('./routes/auth.routes.js');


/*use all the routes*/
app.use(express.json());  // allow parsing of JSON request bodies
app.use('/api/auth', authRouter);


module.exports = app;