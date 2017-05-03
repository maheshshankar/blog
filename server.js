/**
 * Created by vemulma on 1/31/2017.
 */

'use strict';

const express = require('express');
const app = express();
const port = 3000;

var db = require('./db/dbConnect.js')(app);
var config = require('./config/config.js')(app);
var routes = require('./routes/routes.js')(app);

app.listen(port, () => {
    console.log("App Started Listening at" + " " + port);
});