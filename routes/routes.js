/**
 * Created by vemulma on 3/22/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
const articleController = require('../controllers/articleController.js');

const appRouter = express.Router();

(function() {
    module.exports = function(app) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(express.static('public'));

        appRouter.get('/', articleController.getAllArticles);
        appRouter.post('/author', articleController.addArticle);

        app.use('/article', appRouter);

    }
})()
