/**
 * Created by vemulma on 3/22/2017.
 */

const addArticleService = require('../services/addArticleService.js');
const getAllArticlesService = require('../services/getAllArticlesService.js');

exports.addArticle = function(req, res){
  addArticleService(req)
      .then(function(data){
          res.json(data);
      });
};

exports.getAllArticles = function(req, res){
    getAllArticlesService(req)
        .then(function(data){
            res.json(data);
        });
};
