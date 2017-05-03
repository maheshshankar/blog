/**
 * Created by vemulma on 3/22/2017.
 */
var express = require('express');
(function() {
    module.exports = function(app) {

        app.use(function(req, res, next) {
            res.setHeader('ACCESS-CONTROL-ALLOW-Origin', '*');
            res.setHeader('ACCESS-CONTROL-ALLOW-Method', 'GET,POST,PUT,DELETE');
            res.setHeader('ACCESS-CONTROL-ALLOW-Headers', 'X-Requested-With,content-type');
            next();
        })
    }
})()
